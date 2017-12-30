$(document).ready(function() {

  $(".einausblenden").click(function() {
    $(".action").toggle("slow")

    })




    $(window).mousemove(function(event) {
    var offsetX = 40 / $(document).width() * event.pageX;
    var offsetY = 40 / $(document).height() * event.pageY;

    $("#_8").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 50 / $(document).width() * event.pageX;
    var offsetY = 50 / $(document).height() * event.pageY;

    $("#_7").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    $("#_6").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 80 / $(document).width() * event.pageX;
    var offsetY = 80 / $(document).height() * event.pageY;


    $("#_5").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 100 / $(document).width() * event.pageX;
    var offsetY = 100 / $(document).height() * event.pageY;


    $("#_4").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 200 / $(document).width() * event.pageX;
    var offsetY = 200 / $(document).height() * event.pageY;

    $("#_3").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 300 / $(document).width() * event.pageX;
    var offsetY = 300 / $(document).height() * event.pageY;


    $("#_2").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 500 / $(document).width() * event.pageX;
    var offsetY = 500 / $(document).height() * event.pageY;

    $("#_1").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 1000 / $(document).width() * event.pageX;
    var offsetY = 1000 / $(document).height() * event.pageY;



  })

} )
