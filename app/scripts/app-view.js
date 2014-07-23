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
			if( $('.label-primary').is(':empty') ) {
				$('.label-primary:empty').css('background-color','transparent')
			}
			scrollReveal.init();
		}, 500);
	},
	render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	}
});

// ================================================
// ================================================
// ================================================
// var PortfolioView = Backbone.View.extend({
// // If you want an added class name
// // and to change DIV to LI or INPUT etc,
// 	className: 'porfolio-view',
// // tagName: 'li',
// 	template: _.template($('.portfolio-template').text()),
// 	events: {

// 	},
// 	initialize: function(){
// 		$('.portfolio-display').html("");
// 		var that = this;
// 		setTimeout(function() {
// 			$('.portfolio-display').append(that.el);
// 			that.render();
// 			if( $('.label-primary').is(':empty') ) {
// 				$('.label-primary:empty').css('background-color','transparent')
// 			}
// 			scrollReveal.init();
// 		}, 500);
// 	},
// 	render: function(){
// 		var renderedTemplate = this.template(this.model.attributes);
// 		this.$el.html(renderedTemplate);
// 	}
// });
// ================================================
// ================================================
// ================================================

// var AboutView = Backbone.View.extend({
	
// 	template: _.template($('.about-template').text()),

// 	events: {

// 	},

// 	initialize: function(){
// 		$('.main').prepend(this.el);
// 		this.render();
// 	},

// 	render: function(){
// 		var renderedTemplate = this.template();
// 		this.$el.html(renderedTemplate);
// 		return this;
// 	}
// });

// var ContactView = Backbone.View.extend({

// 	template: _.template($('.contact-template').text()),

// 	events: {

// 	},

// 	initialize: function(){
// 		$('.main').html(this.el);
// 		this.render();
// 	},

// 	render: function(){
// 		var renderedTemplate = this.template();
// 		this.$el.html(renderedTemplate);
// 		return this;
// 	}
// });

// var PhotographyView = Backbone.View.extend({
	
// 	template: _.template($('.photography-template').text()),

// 	events: {

// 	},

// 	initialize: function(){
// 		$('.main').html(this.el);
// 		this.render();
// 	},

// 	render: function(){
// 		var renderedTemplate = this.template();
// 		this.$el.html(renderedTemplate);
// 		return this;
// 	}
// });