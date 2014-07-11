"use strict";

var AppRouter = Backbone.Router.extend({
	
	routes: {
		"":				"home",
		"about":		"about",
		"contact":		"contact",
		"photography":	"photography"
	},

	initialize: function() {
		console.log('AppRouter was just created!');
	},

	home: function() {
		this.view = new PortfolioView();
		console.log('home was just pathed!')
	},

	about: function() {
		this.view = new AboutView();
	},

	contact: function() {
		this.view = new ContactView();
	},

	photography: function() {
		this.view = new PhotographyView();
	},


	destroy_view: function() {

	}

});