var CareerView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#career-template').html()),
	renderContent: function() {
		this.$el.html(this.templateContent()).hide().fadeIn().slideDown();
		return this;
	},
	renderTitle: function(){
		this.titleEl.text("{ Some other cool stuff. }").hide().fadeIn().slideDown();
		return this;
	}
});