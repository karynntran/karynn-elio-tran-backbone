var PortfolioView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	singleEl: $('#single-project'),	
	templateContent: _.template($('#portfolio-template').html()),
	projectContent: _.template($('#project-template').html()),
	model: Project,
    
	events: {
	    "click #portfolio-button": "renderPortfolioContent",
	    "click #wine-dine-button": "renderWineDineContent",
	    // "click #games-button": "renderContent",	
	    // "click #seek-button": "renderContent",
	    // "click #comic-button": "renderContent"	    
	},

	renderPortfolioContent: function() {
		console.log("Click Portfolio Button");
		this.$el.html(this.templateContent());
		return this;
	},
	renderWineDineContent: function() {
		console.log("Click Wine & Dine Button");
		var data = restaurant.toJSON();
		this.singleEl.html(this.projectContent(data));
		return this;
	},	
});