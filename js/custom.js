$(document).ready(function () {


  $('.portfolio-box').hover(
     function () {
       $(this).find('img').stop().fadeTo('slow', 0.4);
       $(this).find('.caption').fadeIn(500);
     },
     function () {
       $(this).find('img').stop().fadeTo('slow', 1.0);
       $(this).find('.caption').fadeOut(250);
     });

});
