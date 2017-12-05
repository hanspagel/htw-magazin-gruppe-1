$(window).load(function() {
		if (window.screen.width > 780){
			$('#fullpage').fullpage({
				navigation: true,
			});
	};

	var bqheight = document.getElementsByTagName("blockquote")[0].clientHeight;
	if (bqheight < 256 ){
		$("blockquote").css("height",256+"px");
	}

	 });
