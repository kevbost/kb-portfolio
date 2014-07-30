"use strict";

var PortfolioView = Parse.View.extend({
// If you want an added class name
// and to change DIV to LI or INPUT etc,
	className: 'porfolio-view',
// tagName: 'li',
	template: _.template($('.portfolio-template').text()),
	events: {

	},
	initialize: function(){
		$('.portfolio-display').html("");
		var that = this;
		setTimeout(function() {
			$('.portfolio-display').append(that.el);
			that.render();
			// if( $('.asset-label').is(':empty') ) {
			// 	$('.asset-label:empty').css('display','none')
			scrollReveal.init();
		}, 500);
	},
	render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	}
});