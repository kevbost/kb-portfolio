"use strict";

var Portfolio = Backbone.Model.extend({
	defaults: {
	}
});

var PortfolioCollection = Backbone.Collection.extend({
  model: Portfolio,
  url: '/scripts.data2.js'
  // url: '/scripts/images.js',
  // comparator: function( Photo ) { return Photo.get('_id')}
});