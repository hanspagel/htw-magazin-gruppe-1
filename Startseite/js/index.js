
window.onload = function() {
  var windowWidth = window.innerWidth;
  var stack = document.getElementsByClassName('card-stack')[0];
  var stackWidth = 
  // update position of square 1 ands when scroll event fires.
  window.addEventListener('scroll', function() {
    var scrollLeft = window.pageXOffset || window.scrollLeft;
    var scrollPercent = scrollLeft/3175 || 0;

    stack.style.transform = "rotate(-13deg) translateY("+
     scrollPercent*window.innerWidth
    + "px)";
  });
};

// window.onload = function() {
//   var container = document.getElementById('container');
//   var windowHeight = window.innerHeight;
//   var windowWidth = window.innerWidth;
//   var scrollArea = 1000 - windowHeight;
//   var square1 = document.getElementsByClassName('card-stack')[0];
//
//   // update position of square 1 ands when scroll event fires.
//   window.addEventListener('scroll', function() {
//     var scrollLeft = window.pageYOffset || window.scrollLeft;
//     var scrollPercent = scrollLeft/scrollArea || 0;
//
//     square1.style.transform = "rotate(-13deg) translateY("+scrollPercent*window.innerWidth + "px)";
//   });
// };
