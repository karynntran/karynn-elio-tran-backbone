var ProjectView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#project-template').html()),
    
	events: {
	    "click #wine-dine-button": "renderContent",
	},

	renderContent: function() {
		console.log("Click wine and dine button");
		this.$el.html(this.templateContent());
		return this;
	},
});