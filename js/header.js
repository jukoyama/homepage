/* welcomeをページ読み込みにフェードインする */
$(function() {

  // 一旦hide()で隠してフェードインさせる
  $('h2').hide().fadeIn(2000);

  //hobbyのアコーディオン

  $('.ttl').hover(function()  {
    $(this).children('.hobby-menu').stop().slideToggle();
  });


});
