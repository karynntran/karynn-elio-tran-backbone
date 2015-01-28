var CreateView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#create-template').html()),
	renderContent: function() {
		this.$el.html(this.templateContent()).hide().fadeIn().slideDown();
		return this;
	},
	renderTitle: function(){
		this.titleEl.text("{ Let's make something awesome. }").hide().fadeIn().slideDown();
		return this;
	}
});