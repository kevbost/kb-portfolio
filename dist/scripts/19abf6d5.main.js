"use strict";var Portfolio=Backbone.Model.extend({defaults:{}}),PortfolioCollection=Backbone.Collection.extend({model:Portfolio,url:"scripts/portfolio-data.js"}),PortfolioView=Backbone.View.extend({template:_.template($(".portfolio-template").text()),events:{},initialize:function(){$(".main").html(this.el),this.render()},render:function(){var a=this.template();this.$el.html(a)}}),AboutView=Backbone.View.extend({template:_.template($(".about-template").text()),events:{},initialize:function(){$(".main").html(this.el),this.render()},render:function(){var a=this.template();return this.$el.html(a),this}}),ContactView=Backbone.View.extend({template:_.template($(".contact-template").text()),events:{},initialize:function(){$(".main").html(this.el),this.render()},render:function(){var a=this.template();return this.$el.html(a),this}}),PhotographyView=Backbone.View.extend({template:_.template($(".photography-template").text()),events:{},initialize:function(){$(".main").html(this.el),this.render()},render:function(){var a=this.template();return this.$el.html(a),this}}),AppRouter=Backbone.Router.extend({routes:{"":"home",about:"about",contact:"contact",photography:"photography"},initialize:function(){console.log("AppRouter was just created!")},home:function(){this.view=new PortfolioView,console.log("home was just pathed!")},about:function(){this.view=new AboutView},contact:function(){this.view=new ContactView},photography:function(){this.view=new PhotographyView}}),appView,portfolios=new PortfolioCollection,app=new AppRouter;Backbone.history.start(),window.onload=function(){paper.setup("myCanvas"),$(".container").fitVids()},$(".navlink").click(function(){$(".navbar-toggle").click()});