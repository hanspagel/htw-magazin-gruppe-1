





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

    if ( (2000 >= scroll) && (scroll >= 860) ) {
      $('#profilepic').attr('src', 'images/nothing.png');
      document.getElementById("name").innerHTML = "";
      $('#noframe').attr('src', 'images/nothing.png');
    }
    else if ( (860 >= scroll) && (scroll >= 720) ) {
      $('#profilepic').attr('src', 'images/lenin_b.png');
      document.getElementById("name").innerHTML = "Wladimir Iljitsch Lenin";
      $('#noframe').attr('src', 'images/rahmen.png');
    }
    else if ( (720 >= scroll) && (scroll >= 570) ) {
      $('#profilepic').attr('src', 'images/hiero_g.png');
      document.getElementById("name").innerHTML = "Hieronymus Bosch";
      $('#noframe').attr('src', 'images/rahmen.png');
    }
    else if ( (570 >= scroll) && (scroll >= 450) ) {
      $('#profilepic').attr('src', 'images/jlennon_y.png');
      document.getElementById("name").innerHTML = "John Lennon";
      $('#noframe').attr('src', 'images/rahmen.png');
    }
    else if ( (450 >= scroll) && (scroll >= 200) ) {
      $('#profilepic').attr('src', 'images/henry8_o.png');
      document.getElementById("name").innerHTML = "Henry VIII.";
      $('#noframe').attr('src', 'images/rahmen.png');
    }
    else if ( scroll <= 200 ) {
      $('#profilepic').attr('src', 'images/tmore_l.png');
      document.getElementById("name").innerHTML = "Thomas More";
      $('#noframe').attr('src', 'images/rahmen.png');
    }
  });

function getCurrentScroll() {
  return window.pageYOffset ||
  document.documentElement.scrollTop;
  }
});
