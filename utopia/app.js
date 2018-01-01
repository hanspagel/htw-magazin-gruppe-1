





// $(document).ready(function() {
//
// $(".button").click(function() {
//
//   $(".article-interactive").toggleClass("spacedonut")
//
// })
//
// })

//
$(document).ready(function() {

  $(window).scroll(function() {
    var scroll = getCurrentScroll();

    if ( (2000 >= scroll) && (scroll >= 1000) ) {
      $('#profilepic').attr('src', 'images/lenin_b.png');
    }
    else if ( (1000 >= scroll) && (scroll >= 800) ) {
      $('#profilepic').attr('src', 'images/hiero_g.png');
    }
    else if ( (800 >= scroll) && (scroll >= 550) ) {
      $('#profilepic').attr('src', 'images/jlennon_y.png');
    }
    else if ( (550 >= scroll) && (scroll >= 250) ) {
      $('#profilepic').attr('src', 'images/henry8_o.png');
    }
    else if ( scroll <= 250 ) {
      $('#profilepic').attr('src', 'images/tmore_l.png');
    }
  });

function getCurrentScroll() {
  return window.pageYOffset ||
  document.documentElement.scrollTop;
  }
});
