"use strict";

Parse.initialize("CMse2ufXeodygby0AqhmGOq3n4PaOa9eDxxpMEoK", "R5v3ZSW0NQVBN4fiTmw88QzbWsGBkxzVRzx6IOoj");

var appView;

var portfolios = new PortfolioCollection();
var app = new AppRouter();

Parse.history.start();
// Backbone.history.start();

window.onload = function() {
	// paper.setup('myCanvas');
	// Target your .container, .wrapper, .post, etc.
	$(".container").fitVids();
	var config = {
		after: '0s',
		enter: 'bottom',
		move: '0px',
		over: '0.3s',
		easing: 'ease-in-out',
		reset: true,
		init: false,
		viewportFactor: 0
	};
	window.scrollReveal = new scrollReveal( config );
	$.scrollIt({
		upKey: 38,				// key code to navigate to the next section
		downKey: 40,			// key code to navigate to the previous section
		easing: 'linear',		// the easing function for animation
		scrollTime: 600,		// how long (in ms) the animation takes
		activeClass: 'active',	// class given to the active nav element
		onPageChange: null,		// function(pageIndex) that is called when page is changed
		topOffset: 0			// offste (in px) for fixed top navigation
	})

	setInterval(function(){
        $('.time').html(moment().format('hh:mm:ss A'));
	}, 1000)
        $('.year').append(moment().format('YYYY') + ' Kevin Bost');
};


$('.navbar-nav').click(function(){
	$('.navbar-collapse').removeClass('in');
})

$('.navlink').click(function(){
	$('.navbar-collapse').removeClass('in');
})

$( ".under-nav-toggle" ).click(function() {
	$( ".under-toggle").slideToggle( "slow" ).toggleClass('active');
});

$(window).scroll( function() { 
	var scrolled_val = $(document).scrollTop().valueOf();
	if (scrolled_val <= 100) {
		$('.persistent-navbar').fadeOut(500).css('display','none')
	} else if (scrolled_val >= 100) {
		$('.persistent-navbar').fadeIn(500).css('display','inherit')
	}
});
	$('.fit-text-name').fitText(0.8, { minFontSize: '30px', maxFontSize: '100px' });
	$('.fit-text-title').fitText(2, { minFontSize: '15px', maxFontSize: '40px' });
	$('.top-link-out').fitText(1, { minFontSize: '40px', maxFontSize: '80px' });
	$('.top-contact').fitText(3, { minFontSize: '15px', maxFontSize: '30px' });
	$('.title').fitText(0.8, { minFontSize: '50px', maxFontSize: '100px' });
	$('.fit-text').fitText();
	// $('.pdf-link-under').fitText(1, { minFontSize: '16px', maxFontSize: '100px' });

$('.experience-popover').popover({
  trigger: 'focus'
})

$('.easteregg-popover').popover({
  trigger: 'hover focus'
})