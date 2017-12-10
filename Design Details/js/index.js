$(window).load(function() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 0368eea... Revert "Moblie Compatibility Changes"
		if (window.screen.width > 780){
			$('#fullpage').fullpage({
				navigation: true,
			});
	};
=======
	$('#fullpage').fullpage({
<<<<<<< HEAD
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
=======
		navigation: true,
>>>>>>> origin/master
<<<<<<< HEAD
=======
	$('#fullpage').fullpage({
		navigation: true,
>>>>>>> parent of 40e6bf5... Moblie Compatibility Changes
=======
	$('#fullpage').fullpage({
		navigation: true,
>>>>>>> parent of 40e6bf5... Moblie Compatibility Changes
=======
>>>>>>> parent of 0368eea... Revert "Moblie Compatibility Changes"
	});

// audio-slider custom
// $(".custom-handle").mousedown(function() {
// 	$(".slider-handle").on("mousemove", function(){
// 		$(".custom-handle").css("margin-left" === "event.pageX" + "px");
// 	});
// });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bbe840845de586b7248b2af8560ac95e901c4b60
=======
>>>>>>> parent of 40e6bf5... Moblie Compatibility Changes
=======
>>>>>>> parent of 40e6bf5... Moblie Compatibility Changes
=======
>>>>>>> bbe840845de586b7248b2af8560ac95e901c4b60
>>>>>>> parent of 0368eea... Revert "Moblie Compatibility Changes"

	var bqheight = document.getElementsByTagName("blockquote")[0].clientHeight;
	if (bqheight < 256 ){
		$("blockquote").css("height",256+"px");
	}

	 });
