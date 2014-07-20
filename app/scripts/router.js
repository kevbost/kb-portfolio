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
		this.fetchPromise = portfolios.fetch();

		this.fetchPromise.done(function(){
			portfolios.each(function(foo){
			new PortfolioView({model: foo})
			})
		})
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
	}

});