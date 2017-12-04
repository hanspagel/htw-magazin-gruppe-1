

$(function(){
$(window).scroll(function() {
  var scroll = getCurrentScroll();

    // console.log(scroll);
    if ( (10000 >= scroll) && (scroll >= 4400) ) {
      changeClass('audio');
    }
    else if ( (4400 >= scroll) && (scroll >= 3800) ) {
      changeClass('person');
    }
    else if ( (3800 >= scroll) && (scroll >= 3200) ) {
      changeClass('kopf');
    }
    else if ( (3200 >= scroll) && (scroll >= 2500) ) {
      changeClass('ballon');
    }
    else if ( (2500 >= scroll) && (scroll >= 1700) ) {
      changeClass('zange');
    }
    else if ( (1700 >= scroll) && (scroll >= 1000) ) {
      changeClass('start');
    }
    else if ( (1000 >= scroll) && (scroll >= 500) ) {
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
}
