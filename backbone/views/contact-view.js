var ContactView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#contact-template').html()),
	renderContent: function() {
		this.$el.html(this.templateContent());
		return this;
	},
	renderTitle: function(){
		this.titleEl.text("{ Let's chat. }");
		return this;
	}
});