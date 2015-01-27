var aboutMeView = new AboutMeView(console.log('AboutMe'));
var codeView = new CodeView(console.log('Code'));
var careerView = new CareerView(console.log('Career'));
var contactView = new ContactView(console.log('Contact'));
var createView = new CreateView(console.log('Create'));
var portfolioView = new PortfolioView(console.log('Portfolio'));

var restaurant = new Project({ name: "Wine & Dine", url: "http://107.170.136.228:1111/", description: "Week 4: Our very first CRUD app: a restaurant app that manages menu items, parties, and orders.", languages: "Ruby, Sinatra, ActiveRecord and PostgresQL", photo: "images/projects/wineanddine.png" });

var game = new Project({ name: "Snowman Hangman", url: "http://107.170.136.228:2222/", description: "Week 7: A game app based on hangman that generates random words. Each wrong guess melts the snowman!", languages: "Ruby, Sinatra, PostgreSQL, Javascript, AJAX methods", photo: "images/projects/snowman.png" });

var seek = new Project({ name: "Seek Travel", url: "http://107.170.53.16:3333/", description: "Week 9: A group project that utilizes APIs to generate a snapshot of a destination's photos, historical weather, average flight prices, etc.", languages: "Ruby, Rails, SQL, Javascript, AJAX methods, Hotwire and Flickr APIs", photo: "images/projects/seek.png" });

var comics = new Project({ name: "Comic SmashUp", url: "http://107.170.136.228:4444/", description: "Final Project: A comic book story-generating app that allows users to search for favorite characters and select actions against a random opponent.", languages: "Ruby, Rails, SQL, Javascript, AJAX and Backbone methods, ComicVine APIs", photo: "images/projects/comicsmashup.png" });

$( document ).ready(function() {

	$('#create')
	.css('cursor', 'pointer')
	.click(
		function(){
			console.log('create button clicked');
			createView.renderContent();
			createView.renderTitle();
		}
	)
	.hover(
		function(){
			$(this).css('background', '#ff00ff');
		},
		function(){
			$(this).css('background', '');
		}
	);

	$('#contact')
	.css('cursor', 'pointer')
	.click(
		function(){
			console.log('contact button clicked');
			contactView.renderContent();
			contactView.renderTitle();
		}
		)
	.hover(
		function(){
			$(this).css('background', '#ff00ff');
		},
		function(){
			$(this).css('background', '');
		}
		);

	$('#career')
	.css('cursor', 'pointer')
	.click(
		function(){
			console.log('career button clicked');
			careerView.renderContent();
			careerView.renderTitle();
		}
		)
	.hover(
		function(){
			$(this).css('background', '#ff00ff');
		},
		function(){
			$(this).css('background', '');
		}
		);

	$('#code')
	.css('cursor', 'pointer')
	.click(
		function(){
			console.log('code button clicked');
			codeView.renderContent();
			codeView.renderTitle();
		}
		)
	.hover(
		function(){
			$(this).css('background', '#ff00ff');
		},
		function(){
			$(this).css('background', '');
		}
		);

	$('.main-title')
	.css('cursor', 'pointer')
	.click(
		function(){
			console.log('about me clicked');
			aboutMeView.renderContent();
			aboutMeView.renderTitle();
		}
		)
	.hover(
		function(){
			$(this).css('background', '#E8E8E8');
		},
		function(){
			$(this).css('background', '');
		}
		);

});