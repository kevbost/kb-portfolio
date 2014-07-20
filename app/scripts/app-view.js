"use strict";

var PortfolioView = Backbone.View.extend({
// If you want an added class name
// and to change DIV to LI or INPUT etc,

// className: 'blah',
// tagName: 'li',

	template: _.template($('.portfolio-template').text()),

	events: {

	},

	initialize: function(){
		$('.main').html("")

		var that = this;
		setTimeout(function() {
			$('.main').append(that.el);
			that.render();
		}, 50);
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	}
});

var AboutView = Backbone.View.extend({
	
	template: _.template($('.about-template').text()),

	events: {

	},

	initialize: function(){
		$('.main').html(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template();
		this.$el.html(renderedTemplate);
		return this;
	}
});

var ContactView = Backbone.View.extend({

	template: _.template($('.contact-template').text()),

	events: {

	},

	initialize: function(){
		$('.main').html(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template();
		this.$el.html(renderedTemplate);
		return this;
	}
});

var PhotographyView = Backbone.View.extend({
	
	template: _.template($('.photography-template').text()),

	events: {

	},

	initialize: function(){
		$('.main').html(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template();
		this.$el.html(renderedTemplate);
		return this;
	}
});