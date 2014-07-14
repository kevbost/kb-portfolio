"use strict";

var Portfolio = Backbone.Model.extend({
	defaults: {
	}
});

var PortfolioCollection = Backbone.Collection.extend({
  model: Portfolio,
  url: '/scripts/portfolio-data.js'
  // comparator: function( Photo ) { return Photo.get('_id')}
});