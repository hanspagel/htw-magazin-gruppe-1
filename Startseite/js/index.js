
window.onload = function() {
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
    var scrollPercent = scrollLeft/3205 || 0;

    stack.style.transform = "rotate(-13deg) translateY("+
     scrollPercent * 693
    + "px)";
    console.log(scrollPercent);

    // stop vertical scrool. super-jittery
    // if (document.body.scrollTop!=0) {
    //   document.body.scrollTop = 0;
    // }
  });
};
