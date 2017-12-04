$(window).load(function() {
	$('#fullpage').fullpage({
		navigation: true,
	});

// audio-slider custom
// $(".custom-handle").mousedown(function() {
// 	$(".slider-handle").on("mousemove", function(){
// 		$(".custom-handle").css("margin-left" === "event.pageX" + "px");
// 	});
// });

	var bqheight = document.getElementsByTagName("blockquote")[0].clientHeight;
	if (bqheight < 256 ){
		$("blockquote").css("height",256+"px");
	}
	// audio-slider with jquery-ui
	var slider = $(".unlock-slider").slider({
			 classes: {
					 "ui-slider-handle": "custom-handle"}
	 });
	$(".unlock-slider").slider
	 });
