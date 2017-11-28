

$(function(){
$(window).scroll(function() {
  var scroll = getCurrentScroll();


    if ( scroll >= 4400 ) {
      $('.box-voll').addClass('box-voll-audio');
      $('.box-outline').addClass('box-outline-audio');
    }
    else if ( scroll >= 3800 ) {
      $('.box-voll').addClass('box-voll-person');
      $('.box-outline').addClass('box-outline-start');
    }
    else if ( scroll >= 3200 ) {
      $('.box-voll').addClass('box-voll-kopf');
      $('.box-outline').addClass('box-outline-kopf');
    }
    else if ( scroll >= 2500 ) {
      $('.box-voll').addClass('box-voll-ballon');
      $('.box-outline').addClass('box-outline-ballon');
    }
    else if ( scroll >= 1700 ) {
      $('.box-voll').addClass('box-voll-zange');
      $('.box-outline').addClass('box-outline-zange');
    }
    else if ( scroll >= 1000 ) {
      $('.box-voll').addClass('box-voll-start');
      $('.box-outline').addClass('box-outline-start');
    }
    else if ( scroll >= 500 ) {
      $('.box-voll').addClass('box-voll-burger');
      $('.box-outline').addClass('box-outline-burger');
    }
    /*else ( scroll >=  500 ) {
      $('.box-voll').removeClass('box-voll-burger');
    }*/


});
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }
});
