"use strict";

Parse.initialize("CMse2ufXeodygby0AqhmGOq3n4PaOa9eDxxpMEoK", "R5v3ZSW0NQVBN4fiTmw88QzbWsGBkxzVRzx6IOoj");

var appView;

var portfolios = new PortfolioCollection();
var app = new AppRouter();

Parse.history.start();
// Backbone.history.start();
	paper.install(window);

window.onload = function() {
	// paper.setup('myCanvas');
	// Target your .container, .wrapper, .post, etc.
	$(".container").fitVids();
	var config = {
		after: '0s',
		enter: 'bottom',
		move: '0px',
		over: '0.5s',
		easing: 'ease-in-out',
		reset: true,
		init: false,
		viewportFactor: 0
	};
	window.scrollReveal = new scrollReveal( config );
	$.scrollIt({
		upKey: 38,             // key code to navigate to the next section
		downKey: 40,           // key code to navigate to the previous section
		easing: 'linear',      // the easing function for animation
		scrollTime: 600,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: 0         // offste (in px) for fixed top navigation
	})

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
	$('.fit-text-name').fitText(0.8, { minFontSize: '50px', maxFontSize: '100px' });
	$('.fit-text-title').fitText(2, { minFontSize: '20px', maxFontSize: '40px' });
	$('.top-link-out').fitText(1, { minFontSize: '40px', maxFontSize: '80px' });
	$('.top-contact').fitText(3, { minFontSize: '15px', maxFontSize: '30px' });
	$('.title').fitText(0.8, { minFontSize: '50px', maxFontSize: '100px' });
	$('.fit-text').fitText();


