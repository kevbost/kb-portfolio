"use strict";

var AppRouter = Parse.Router.extend({

	routes: {
		"": "home",
		":any": "home"
	},

	initialize: function() {
		console.log('AppRouter was just created!');
	},

	home: function() {
		console.log('home was just pathed!')
		var query = new Parse.Query(Portfolio);
		query.equalTo("active", true);
		// query.descending("sort");
		query.find({
			success: function(results) {
				console.log("Successfully retrieved " + results.length + " objects.");
				// Do something with the returned Parse.Object values
				query.each(function(foo) {
					new PortfolioView({
						model: foo
					})
				});
			},
			error: function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});
		// this.fetchPromise = portfolios.fetch();

		// this.fetchPromise.done(function(){
		// 	portfolios.each(function(foo){
		// 	new PortfolioView({model: foo})
		// 	})
		// })
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