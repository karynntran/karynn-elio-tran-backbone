var CodeView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#code-template').html()),
	renderContent: function() {
		this.$el.html(this.templateContent());
		return this;
	},
	renderTitle: function(){
		this.titleEl.text("{ Check out my code }");
		this.titleEl.append("<center><button id='portfolio-button'>See My Portfolio</button></center>")
		return this;
	}
});