"use strict";

var appView;

var app = new AppRouter();
Backbone.history.start();

window.onload = function() {
	paper.setup('myCanvas');
    // Target your .container, .wrapper, .post, etc.
    $(".container").fitVids();
};