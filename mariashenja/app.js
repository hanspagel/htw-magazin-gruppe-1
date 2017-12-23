$(document).ready(function() {

  $(".einausblenden").click(function() {
    $(".action").toggle("slow")

    })




  $(window).mousemove(function(event) {
    var offsetX = 800 / $(document).width() * event.pageX;
    var offsetY = 800 / $(document).height() * event.pageY;

    $("#_8").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 700 / $(document).width() * event.pageX;
    var offsetY = 700 / $(document).height() * event.pageY;

    $("#_7").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })
  })

} )
