
$(document).ready(function() {

  $(window).scroll(function() {
    var scroll = getCurrentScroll();

    if ( (3700 >= scroll) && (scroll >= 3200) ) {
      $('#right').attr('src', 'images/bunteburg21.png');
    }
    else if ( (3200 >= scroll) && (scroll >= 2700) ) {
      $('#right').attr('src', 'images/gruenrotenadel21.png');
    }
    else if ( (2700 >= scroll) && (scroll >= 2200) ) {
      $('#right').attr('src', 'images/halbkreisschloss21.png');
    }
    else if ( (2200 >= scroll) && (scroll >= 1700) ) {
      $('#right').attr('src', 'images/blauequalle21.png');
    }
    else if ( (1700 >= scroll) && (scroll >= 1200) ) {
      $('#right').attr('src', 'images/gelbesschiff21.png');
    }
    else if ( (1200 >= scroll) && (scroll >= 700) ) {
      $('#right').attr('src', 'images/fantasydreamcastle21.png');
    }
    else if ( (700 >= scroll) && (scroll >= 200) ) {
      $('#right').attr('src', 'images/buntezwillinge21.png');
    }
    else if ( scroll <= 200 ) {
      $('#right').attr('src', 'images/rosaschloss21.png');
    }
  });

  $(window).scroll(function() {
    var scroll = getCurrentScroll();

    if ( (3800 >= scroll) && (scroll >= 3450) ) {
      $('#left').attr('src', 'images/schlossausfelsen21.png');
    }
    else if ( (3450 >= scroll) && (scroll >= 2950) ) {
      $('#left').attr('src', 'images/gruenebergburg21.png');
    }
    else if ( (2950 >= scroll) && (scroll >= 2450) ) {
      $('#left').attr('src', 'images/regenbogentempel21.png');
    }
    else if ( (2450 >= scroll) && (scroll >= 1950) ) {
      $('#left').attr('src', 'images/lilafelsentempel21.png');
    }
    else if ( (1950 >= scroll) && (scroll >= 1450) ) {
      $('#left').attr('src', 'images/freiheitsturmgruen21.png');
    }
    else if ( (1450 >= scroll) && (scroll >= 950) ) {
      $('#left').attr('src', 'images/blauemoschee21.png');
    }
    else if ( (950 >= scroll) && (scroll >= 450) ) {
      $('#left').attr('src', 'images/lilaqualle21.png');
    }
    else if ( scroll <= 450 ) {
      $('#left').attr('src', 'images/gruenerturm21.png');
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset ||
    document.documentElement.scrollTop;
    }
  });
