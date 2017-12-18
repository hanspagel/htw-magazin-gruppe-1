$(window).load(function() {
		if (window.screen.width > 780){
			$('#fullpage').fullpage({
				navigation: true,
			});
			var bqheight = document.getElementsByTagName("blockquote")[0].clientHeight;
			if (bqheight < 370 ){
				$("blockquote").addClass("responsive-quote");
			}
	};

var $audioPlayer = $(".audio-player");
var $playButton = $('#play');
var $progressBar = $("#progressbar");
var $player = $('#player');
var $duration = 0;
var $volume = 0.75;


player.onloadedmetadata = function() {
    var duration = $player.duration;
    $progressBar.progressbar("option", { 'max' : duration });
};

$player.load();
$player.volume = 1;
player.addEventListener("timeupdate", function() {
    $progressBar.progressbar('value', $player.currentTime);
}, true);

$progressBar.progressbar({
    value : player.currentTime,
});

$progressBar.click(function(e) {
    var info = getProgressBarClickInfo($(this), e);
    player.currentTime = player.duration / info.max * info.value;
});

$playButton.click(function() {
    player[player.paused ? 'play' : 'pause']();
    $(this).toggleClass("fa-play", !player.paused);
    $(this).toggleClass("fa-pause", player.paused);
});

	$('#play').click(function() {
    $('.icon').toggleClass('pause');
  });



});
