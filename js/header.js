$(function(){
  $('.link').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top)
    }, 1000);
    return false;
  });
});
