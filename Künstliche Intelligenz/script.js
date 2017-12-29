$(document).ready (function() {
  AOS.init({
   duration: 1200
});

var windowWidth = $(window).width();

function checkWidth() {
  if (windowWidth < 1440) {
      $("#myCanvas").show()
  }
  if (windowWidth > 1440){
      $("#myCanvas").hide()
  }
}
checkWidth() ;

$(window).resize(function() {
 checkWidth() ;
});
})
