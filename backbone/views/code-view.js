var CodeView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#code-template').html()),

	events: {
	    "click #skills-button": "renderContent",
	},

	renderContent: function() {
		this.$el.html(this.templateContent()).hide().fadeIn().slideDown();
		return this;
	},
	renderTitle: function(){
		this.titleEl.text("{ Check out my code. }").hide().fadeIn().slideDown();
		return this;
	}
});