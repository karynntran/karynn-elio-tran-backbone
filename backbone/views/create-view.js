var CreateView = Backbone.View.extend({
	el: $('#main-content'),
	titleEl: $('#section-title'),
	templateContent: _.template($('#create-template').html()),
	galleryContent: _.template($('#gallery-template').html()),	
	renderContent: function() {
		this.$el.html(this.templateContent()).hide().fadeIn().slideDown();	
		return this;
	},
	renderGallery: function() {
		console.log("what");
		debugger;
		this.$('#gallery-section').html(this.galleryContent()).hide().fadeIn().slideDown();		
		return this;
	},
	renderTitle: function(){
		this.titleEl.text("{ Let's make something awesome. }").hide().fadeIn().slideDown();
		return this;
	}
});