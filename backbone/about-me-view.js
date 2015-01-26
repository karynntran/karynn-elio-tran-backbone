var AboutMeView = Backbone.View.extend({
	el: $('#main-content'),
	title: $('#section-title'),
	templateContent: _.template($('#about-me-template').html()),
	titleContent: _.template($('#title-template').html()),
	initialize: function() {
		this.renderContent();
		this.renderTitle();
	},
	renderContent: function() {
		this.$el.html(this.templateContent());
		return this;
	},
	renderTitle: function(){
		this.title.html(this.titleContent());
		return this;
	}
});