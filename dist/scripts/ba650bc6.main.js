"use strict";var Portfolio=Backbone.Model.extend({defaults:{}}),Assets=Backbone.Model.extend({defaults:{}}),PortfolioCollection=Backbone.Collection.extend({model:Portfolio,url:"scripts/portfolio-data.js"}),AssetsCollection=Backbone.Collection.extend({model:Assets,url:"scripts/assets-data.json"}),PortfolioView=Backbone.View.extend({template:_.template($(".portfolio-template").text()),events:{},initialize:function(){var a=this;setTimeout(function(){$(".portfolio-display").append(a.el),a.render(),$(".label-primary").is(":empty")&&$(".label-primary:empty").css("background-color","transparent")},50)},render:function(){var a=this.template(this.model.attributes);this.$el.html(a)}}),AppRouter=Backbone.Router.extend({routes:{"":"home",":any":"home",about:"about",contact:"contact",photography:"photography"},initialize:function(){console.log("AppRouter was just created!")},home:function(){console.log("home was just pathed!"),this.fetchPromise=portfolios.fetch(),this.fetchPromise.done(function(){portfolios.each(function(a){new PortfolioView({model:a})})})}});Parse.initialize("CMse2ufXeodygby0AqhmGOq3n4PaOa9eDxxpMEoK","R5v3ZSW0NQVBN4fiTmw88QzbWsGBkxzVRzx6IOoj");var appView,portfolios=new PortfolioCollection,app=new AppRouter;Backbone.history.start(),window.onload=function(){paper.setup("myCanvas"),$(".container").fitVids()},$(".navlink").click(function(){$(".navbar-toggle").click()}),$(".under-nav-toggle, .open-icon, .close-icon").click(function(){$(".under-toggle").slideToggle("slow",function(){})}),$("body").scrollspy({target:".navbar"});