var PortfolioView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#portfolio-template').html()),
    
	events: {
	    "click #portfolio-button": "renderContent",
	},

	renderContent: function() {
		console.log("Click Portfolio Button");
		this.$el.html(this.templateContent());
		return this;
	},
});