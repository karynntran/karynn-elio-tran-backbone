var AboutMeView = Backbone.View.extend({
	el: $('#main-content'),
	template: _.template($('#about-me-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});