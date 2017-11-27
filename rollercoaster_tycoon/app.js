

$(function(){
$(window).scroll(function() {
  var scroll = getCurrentScroll();


    if ( scroll >= 1000 ) {
      $('.box-voll').addClass('box-voll-voll-burger');
      $('.box-outline').addClass('box-voll-voll-burger');
    }
    else if ( scroll >= 500 ) {
      $('.box-voll').addClass('box-voll-burger');
    }
    else {
      $('.box-voll').removeClass('box-voll-burger');
    }


});
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }
});
