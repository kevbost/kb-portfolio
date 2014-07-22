"use strict";

Parse.initialize("CMse2ufXeodygby0AqhmGOq3n4PaOa9eDxxpMEoK", "R5v3ZSW0NQVBN4fiTmw88QzbWsGBkxzVRzx6IOoj");

var appView;

var portfolios = new PortfolioCollection();
var app = new AppRouter();

Backbone.history.start();

window.onload = function() {
	paper.setup('myCanvas');
    // Target your .container, .wrapper, .post, etc.
    $(".container").fitVids();
    var config = {
    	after: '0s',
		enter: 'bottom',
		move: '50px',
		over: '0.5s',
		easing: 'ease-in-out',
		reset: true,
		init: false,
		viewportFactor: 0
	};
    window.scrollReveal = new scrollReveal( config );
};

$('.navlink').click(function(){
	$('.navbar-toggle').click();
})

$( ".under-nav-toggle, .open-icon, .close-icon" ).click(function() {
	$( ".under-toggle").slideToggle( "slow", function() {
	});
});

$('body').scrollspy({ target: '.navbar' })