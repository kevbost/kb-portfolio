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
};

$('.navlink').click(function(){
	$('.navbar-toggle').click();
})

$( ".under-nav-toggle, .icon-container" ).click(function() {
		$(".main").toggleClass('move-up');
		$(".main").toggleClass('move-down');
	$( ".under-toggle, .icon-container" ).slideToggle( "slow", function() {
	});
});
