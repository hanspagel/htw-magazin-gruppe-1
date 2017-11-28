

$(function(){
$(window).scroll(function() {
  var scroll = getCurrentScroll();


    if ( scroll >= 4400 ) {
      $('.box-voll').addClass('box-voll-audio');
      $('.box-outline').addClass('box-voll-voll-burger');
    }
    else if ( scroll >= 3800 ) {
      $('.box-voll').addClass('box-voll-person');
    }
    else if ( scroll >= 3200 ) {
      $('.box-voll').addClass('box-voll-kopf');
    }
    else if ( scroll >= 2500 ) {
      $('.box-voll').addClass('box-voll-ballon');
    }
    else if ( scroll >= 1700 ) {
      $('.box-voll').addClass('box-voll-zange');
    }
    else if ( scroll >= 1000 ) {
      $('.box-voll').addClass('box-voll-start');
    }
    else if ( scroll >= 500 ) {
      $('.box-voll').addClass('box-voll-burger');
    }
    /*else ( scroll >=  500 ) {
      $('.box-voll').removeClass('box-voll-burger');
    }*/


});
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }
});
