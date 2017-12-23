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

var audio_player = $(".audio-player");
var play_button = $('#play');
var progress_bar = $("#progressbar");
var player = document.getElementById('player');
var duration = 0;
var volume = 0.75;

var time = $("#time");

player.onloadedmetadata = function() {
    duration = player.duration;
    progress_bar.progressbar("option", { 'max' : duration });
};

player.load();
player.volume = 0.75;
player.addEventListener("timeupdate", function() {
    progress_bar.progressbar('value', player.currentTime);
    time.text(getTime(player.currentTime));
}, false);

function getTime(t) {
    var m=~~(t/60), s=~~(t % 60);
    return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
}

function getProgressBarClickInfo(progress_bar, e) {
    var offset = document.getElementById("progressbar").getBoundingClientRect();
    var x = e.pageX - offset.x; // or e.offsetX (less support, though)
    var y = e.pageY - offset.y;  // or e.offsetY
    var max = progress_bar.progressbar("option", "max");
    var value = x * max / progress_bar.width();

    return { x: x, y: y, max: max, value: value };
}

progress_bar.progressbar({
    value : player.currentTime,
});
var progress_bar_val = $( ".ui-progressbar-value" );
progress_bar_val.after( "<div class='ui-progressbar-value-after' ></div>" );

progress_bar.click(function(e) {
    var info = getProgressBarClickInfo($(this), e);
    player.currentTime = player.duration / info.max * info.value;
		$( ".ui-progressbar-value-after" ).css('left', (info.value / info.max * 100)+"%");

});


play_button.click(function() {
    player[player.paused ? 'play' : 'pause']();
    $(this).toggleClass("fa-play", !player.paused);
    $(this).toggleClass("fa-pause", player.paused);
});

$('#play').click(function() {
	$('.icon').toggleClass('pause');
});



});
