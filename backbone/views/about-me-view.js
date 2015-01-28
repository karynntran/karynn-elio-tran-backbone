var AboutMeView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#about-me-template').html()),
	initialize: function() {
		this.renderContent();
		this.renderTitle();
	},
	renderContent: function() {
		this.$el.html(this.templateContent())
			.hide().fadeIn();
		return this;
	},
	renderTitle: function(){
		this.titleEl.text("{ Hello there! My name is Karynn. }")
			.append("<img id='about-me-img' src='images/profile.jpg'>")
			.append("<img id='about-me-img' src='images/profile2.jpg'>")
			.append("<img id='about-me-img' src='images/profile3.jpg'>").hide().fadeIn();			
		return this;
	}
});