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
		this.$el.html(this.templateContent()).hide().fadeIn().slideDown();
		this.$('#single-project').html("<p class='header-title'>Over twelve weeks, I built four web applications as part of the Web Development Immersive program at General Assembly. Each project was a lesson in new languages, frameworks, self-motivation, teamwork and patience. Click on any project to learn more! Enjoy.</p>").hide().fadeIn().slideDown();
		return this;
	},
	renderWineDineContent: function() {
		console.log("Click Wine & Dine Button");
		var data = restaurant.toJSON();
		this.$('#single-project').html(this.projectContent(data)).hide().fadeIn().slideDown();
		return this;
	},	
	renderGamesContent: function() {
		console.log("Click Wine & Dine Button");
		var data = game.toJSON();
		this.$('#single-project').html(this.projectContent(data)).hide().fadeIn().slideDown();
		return this;
	},	
	renderSeekContent: function() {
		console.log("Click Wine & Dine Button");
		var data = seek.toJSON();
		this.$('#single-project').html(this.projectContent(data)).hide().fadeIn().slideDown();
		return this;
	},	
	renderComicContent: function() {
		console.log("Click Wine & Dine Button");
		var data = comics.toJSON();
		this.$('#single-project').html(this.projectContent(data)).hide().fadeIn().slideDown();
		return this;
	},	
});