"use strict";

var Portfolio = Parse.Object.extend({
	className: "Portfolio"
});

// var Assets = Parse.Object.extend({
// 	defaults: {}
// })

var PortfolioCollection = Parse.Collection.extend({
  model: Portfolio,
  comparator: function( Portfolio ) { return Portfolio.get("sort")}
});