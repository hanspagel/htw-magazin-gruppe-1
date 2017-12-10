

$(function(){
$(window).scroll(function() {
  var scroll = getCurrentScroll();

    // console.log(scroll);
    if ( (10000 >= scroll) && (scroll >= 4200) ) {
      changeClass('audio');
    }
    else if ( (4200 >= scroll) && (scroll >= 3600) ) {
      changeClass('person');
    }
    else if ( (3600 >= scroll) && (scroll >= 3000) ) {
      changeClass('kopf');
    }
    else if ( (3000 >= scroll) && (scroll >= 2500) ) {
      changeClass('ballon');
    }
    else if ( (2500 >= scroll) && (scroll >= 2000) ) {
      changeClass('zange');
    }
    else if ( (2000 >= scroll) && (scroll >= 1100) ) {
      changeClass('start');
    }
    else if ( (1100 >= scroll) && (scroll >= 500) ) {
      changeClass('burger');

    }
    else if ( scroll <=  500 ) {
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
