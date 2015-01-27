var ProjectView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#portfolio-template').html()),
    
	events: {
	    "click #wine-dine-button": "renderContent",
	},

	renderContent: function() {
		console.log("projectview");
		this.$el.html(this.templateContent());
		return this;
	},
});