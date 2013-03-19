(function($) {

  $(document).ready(function() {
    if (!window.location.origin) window.location.origin = window.location.protocol + "//" + window.location.host;
    $('a.zikavo-vote').click(function(e) {
      e.preventDefault();
      var nid = $(this).attr('data-nid');
      var $this = $(this);
      var vid = jQuery.cookie('zikavo_voted');
      if(vid) {
        vid = '/' + vid;
      } else {
        vid = false;
      }
      $.ajax({
        url: window.location.origin + "/system/voting/" + nid,
        success: function(data){
           if (data !== false) {
//            alert(vid);
             var voteValue = $('span.zikavo-vote-' + nid).html();
             $('span.zikavo-vote-' + nid).html(data.value);
//             if (data.vid) {
//               jQuery.cookie('zikavo_voted', data.vid);
//             }
             if ($this.hasClass('zik_not_voted')) {
               $this.removeClass('zik_not_voted');
               $this.addClass('zik_voted');
             }
             else {
               $this.removeClass('zik_voted');
               $this.addClass('zik_not_voted');
             }
           } else {
             alert('Something is wrong here...');
           }
        }
      });
    });
  });
})(jQuery);