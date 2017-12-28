$(document).ready(function() {
	$(".nhl_map img").mousemove(function(e) {
		$('.map_text').css('left', e.clientX + 15);
		$('.map_text').css('top', e.clientY + 5);
		$('.map_text').css('display', 'block');
	});
	$(".nhl_map").mouseout(function(e) {
		$('.map_text').css('display', 'none');
	});
})

$(document).ready(function() {
  $(".button").click(function() {
    $(".giphy").toggleClass("action")
  })
})

$(document).ready(function() {
  $(".button").click(function() {
    $(".giphy-fr").toggleClass("action")
  })
})
