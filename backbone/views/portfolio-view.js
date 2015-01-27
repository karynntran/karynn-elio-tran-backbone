var PortfolioView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#portfolio-template').html()),
	projectContent: _.template($('#project-template').html()),
	model: Project,
    
	events: {
	    "click #portfolio-button": "renderPortfolioContent",
	    "click #wine-dine-button": "renderWineDineContent",
	    "click #games-button": "renderGamesContent",	
	    "click #seek-button": "renderSeekContent",
	    "click #comic-button": "renderComicContent"	    
	},

	renderPortfolioContent: function() {
		console.log("Click Portfolio Button");
		this.$el.html(this.templateContent());
		return this;
	},
	renderWineDineContent: function() {
		console.log("Click Wine & Dine Button");
		var data = restaurant.toJSON();
		this.$('#single-project').html(this.projectContent(data));
		return this;
	},	
	renderGamesContent: function() {
		console.log("Click Wine & Dine Button");
		var data = game.toJSON();
		this.$('#single-project').html(this.projectContent(data));
		return this;
	},	
	renderSeekContent: function() {
		console.log("Click Wine & Dine Button");
		var data = seek.toJSON();
		this.$('#single-project').html(this.projectContent(data));
		return this;
	},	
	renderComicContent: function() {
		console.log("Click Wine & Dine Button");
		var data = comics.toJSON();
		this.$('#single-project').html(this.projectContent(data));
		return this;
	},	
});