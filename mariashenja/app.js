$(document).ready(function() {

  $(".button").click(function() {
    $(".article-interactive").toggleClass("action")
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

    $("#_6").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 600 / $(document).width() * event.pageX;
    var offsetY = 600 / $(document).height() * event.pageY;


    $("#_5").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 500 / $(document).width() * event.pageX;
    var offsetY = 500 / $(document).height() * event.pageY;


    $("#_4").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 400 / $(document).width() * event.pageX;
    var offsetY = 400 / $(document).height() * event.pageY;

    $("#_3").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 300 / $(document).width() * event.pageX;
    var offsetY = 300 / $(document).height() * event.pageY;


    $("#_2").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 200 / $(document).width() * event.pageX;
    var offsetY = 200 / $(document).height() * event.pageY;

    $("#_1").css({
      transform: "translate(" + offsetX + "px, " + offsetY + "px)"
    })

    var offsetX = 100 / $(document).width() * event.pageX;
    var offsetY = 100 / $(document).height() * event.pageY;



  })

} )
