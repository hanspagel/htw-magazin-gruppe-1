

$(function(){
$(window).scroll(function() {
  var scroll = getCurrentScroll();

    // console.log(scroll);
    if ( (10000 >= scroll) && (scroll >= 6000) ) {
      changeClass('audio');
    }
    else if ( (6000 >= scroll) && (scroll >= 5000) ) {
      changeClass('person');
    }
    else if ( (5000 >= scroll) && (scroll >= 4000) ) {
      changeClass('kopf');
    }
    else if ( (4000 >= scroll) && (scroll >= 3500) ) {
      changeClass('ballon');
    }
    else if ( (3500 >= scroll) && (scroll >= 2800) ) {
      changeClass('zange');
    }
    else if ( (2800 >= scroll) && (scroll >= 1900) ) {
      changeClass('start');
    }
    else if ( (1900 >= scroll) && (scroll >= 700) ) {
      changeClass('burger');

    }
    else if ( scroll <=  700 ) {
      changeClass('zuckerwatte');
    }


});
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }
});

function changeClass(classargs) {
  $('.box-voll').removeClass().addClass('box-voll box-voll-' + classargs);
  $('.box-outline').removeClass().addClass('box-outline box-outline-' + classargs);
  $('.logo-schrift').removeClass().addClass('logo-schrift logo-schrift-' + classargs);
}
