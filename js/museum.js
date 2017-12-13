$(document).ready(function() {
/*
  hsize = $(window).height();
  $('.gallery ul li a img').css("height", hsize + "px");
*/
  $('.gallery ul li a').click(function() {
      var itemID = $(this).attr('href'); /* id=item02に接続するためのID */
      $('.gallery ul').addClass('item_open');
      $(itemID).addClass('item_open'); /* id=item02の中身を開く 同時に閉じるボタンも加える*/
      return false;
  });
  $('.close').click(function() {
      $('.port, .gallery ul').removeClass('item_open');
      return false;
  });

  $(".gallery ul li a").click(function() {
      $('html, body').animate({
          scrollTop: parseInt($("#top").offset().top)
      }, 400);
  });


});
/*
$(window).resize(function() {
  hsize = $(window).height();
  $('.gallery ul li a img').css("height", hsize + "px");
});
*/
