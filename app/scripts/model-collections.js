"use strict";

// var Portfolio = Backbone.Model.extend({
// 	defaults: {}
// });

// var Assets = Backbone.Model.extend({
// 	defaults: {}
// })

// var PortfolioCollection = Backbone.Collection.extend({
//   model: Portfolio,
//   url: 'scripts/portfolio-data.js'
//   // comparator: function( Photo ) { return Photo.get('_id')}
// });

// var AssetsCollection = Backbone.Collection.extend({
// 	model: Assets,
// 	url: 'scripts/assets-data.json'
// })

var Portfolio = Parse.Object.extend({
	className: "Portfolio"
});

// var Assets = Parse.Object.extend({
// 	defaults: {}
// })

var PortfolioCollection = Parse.Collection.extend({
  model: Portfolio,
  // comparator: function( Photo ) { return Photo.get('_id')}
});

// var AssetsCollection = Parse.Collection.extend({
// 	model: Assets,
// 	url: 'scripts/assets-data.json'
// })