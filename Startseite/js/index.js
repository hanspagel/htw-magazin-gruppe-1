var scrollJump = 303;
var cards = document.getElementsByClassName("card");

window.onload = function() {

  // random bg-colors for cards:
  for (var i = 0; i < cards.length; i++) {
    randomHue = Math.floor(Math.random() * 361);
    cards[i].style.backgroundColor = "hsl("+ randomHue +",70%,60%)";
  }


  var windowc = document.getElementsByTagName("main")[0];
  var windowWidth = window.innerWidth;
  var stack = document.getElementsByClassName('card-stack')[0];
  // add 5 because inline-block sucks and i'm too lazy to deal with flexbox
  var cardWidth = document.getElementsByClassName("card")[0].offsetWidth + 5;
  var stackWidth = cardWidth * 15;

  // update position of square 1 ands when scroll event fires.
  windowc.addEventListener('scroll', function() {
    var scrollLeft = windowc.pageXOffset || windowc.scrollLeft;
    // var scrollPercent = scrollLeft/(stackWidth-window.innerWidth) || 0;
    var scrollPercent = scrollLeft/4105 || 0;

    stack.style.transform = "rotate(-13deg) translateY("+
     scrollPercent * 900
    + "px)";


    // show info for active card
    var currentSlot = Math.floor(scrollLeft/scrollJump);
    // cards[currentSlot].focus();

    // console.log(currentSlot);

    // stop vertical scrool. super-jittery
    // if (document.body.scrollTop!=0) {
    //   document.body.scrollTop = 0;
    // }
  });
};



// Scroll easing:

// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// main function
function scrollToX(scrollTargetX, speed, easing) {
  var windowc = document.getElementsByTagName("main")[0];
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollX = windowc.scrollLeft || windowc.pageXOffset,
        scrollTargetX = scrollTargetX || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollX - scrollTargetX) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            windowc.scrollTo(scrollX + ((scrollTargetX - scrollX) * t), 0);
        } else {
            console.log('scroll done');
            windowc.scrollTo(scrollTargetX, 0);
        }
    }

    // call it once to get started
    tick();
}

// scroll it!

// use buttons to jump between cards
function scrollCard(direction) {
  var windowc = document.getElementsByTagName("main")[0];
  var scrollLeft = windowc.pageXOffset || windowc.scrollLeft;
  var currentSlot = Math.floor(scrollLeft/scrollJump);
  var lastSlot = (currentSlot-1)*scrollJump;
  var nextSlot = (currentSlot+1)*scrollJump;
  if (direction=="left") {
    scrollToX(lastSlot, 1500, 'easeInOutQuint');
  } else {
    scrollToX(nextSlot, 1500, 'easeInOutQuint');
  }

}

//  bind arrow keys

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        scrollCard("left");
    }
    else if (e.keyCode == '40') {
        // down arrow
        scrollCard("right");
    }
    else if (e.keyCode == '37') {
       // left arrow
       scrollCard("left");
    }
    else if (e.keyCode == '39') {
       // right arrow
       scrollCard("right");
    }

};

// convert vertical to horizontal scroll
$(document).ready(function () {
    $('.main').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});

// drag to scroll

var curYPos, curXPos, curDown;



window.addEventListener('mousedown', function(e){
  var windowc = document.getElementsByTagName("main")[0];
  var scrollLeft = windowc.pageXOffset || windowc.scrollLeft;
  curYPos = e.pageY;
  curXPos = e.pageX;
  curDown = true;
  window.addEventListener('mousemove', function(e){
    if(curDown){
      windowc.scrollTo(scrollLeft + (curXPos - e.pageX), 0);
      // console.log();
    }
  });
});

window.addEventListener('mouseup', function(e){
  curDown = false;
});
