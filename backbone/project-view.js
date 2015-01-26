var ProjectView = Backbone.View.extend({
	el: $('#hello'),
	template: _.template($('#projects-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});