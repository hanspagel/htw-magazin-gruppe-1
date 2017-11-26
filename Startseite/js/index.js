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
    cards[currentSlot].focus();
    // console.log(currentSlot);

    // stop vertical scrool. super-jittery
    // if (document.body.scrollTop!=0) {
    //   document.body.scrollTop = 0;
    // }
  });
};

function scrollCard(direction) {
  var windowc = document.getElementsByTagName("main")[0];
  var scrollLeft = windowc.pageXOffset || windowc.scrollLeft;
  var currentSlot = Math.floor(scrollLeft/scrollJump);
  if (direction=="left") {
    windowc.scrollTo((currentSlot-1)*scrollJump, 0);
  } else {
    windowc.scrollTo((currentSlot+1)*scrollJump, 0);
  }

}
