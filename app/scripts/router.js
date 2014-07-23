"use strict";

var AppRouter = Parse.Router.extend({
	
	routes: {
		"": 			"home",
		":any":			"home",
		"about":		"about",
		"contact":		"contact",
		"photography":	"photography"
	},

	initialize: function() {
		console.log('AppRouter was just created!');
	},

	home: function() {
		console.log('home was just pathed!')
		this.fetchPromise = portfolios.fetch();

		this.fetchPromise.done(function(){
			portfolios.each(function(foo){
			new PortfolioView({model: foo})
			})
		})
	}

	// about: function() {
	// 	this.view = new AboutView();
	// },

	// contact: function() {
	// 	this.view = new ContactView();
	// },

	// photography: function() {
	// 	this.view = new PhotographyView();
	// }

});