var aboutMeView = new AboutMeView(console.log('AboutMe'));
var codeView = new CodeView(console.log('Code'));
var careerView = new CareerView(console.log('Career'));
var contactView = new ContactView(console.log('Contact'));
var createView = new CreateView(console.log('Create'));
var portfolioView = new PortfolioView(console.log('Portfolio'));

var restaurant = new Project({ name: "WINE & DINE", url: "http://107.170.136.228:1111/", description: "The Wine & Dine Restaurant app is the first app I built, a project that served as an introduction to CRUD applications. This app allows users to create, edit, and delete menu items, parties and table orders. (Week Four)", languages: "Ruby + Sinatra + ActiveRecord + PostgresQL", photo: "images/projects/wineanddine.png" });

var game = new Project({ name: "SNOWMAN HANGMAN", url: "http://107.170.136.228:2222/", description: "This app is based on the popular game Hangman. It primarily interacts between a Sinatra framework, database and Javascript resulting in randomly generated words and reactions based on user guesses. Each wrong guess melts the snowman, and victories result in rebuilding it! (Week Seven)", languages: "Ruby + Sinatra + PostgreSQL + Javascript + AJAX", photo: "images/projects/snowman.png" });

var seek = new Project({ name: "SEEK TRAVEL", url: "http://107.170.53.16:3333/", description: "This travel app utilizes multiple APIs and database information to generate a snapshot of a  destination's photos, historical weather, average flight prices. As a group project, it relied on effective collaboration with Git version control and merge conflict resolution. (Week Nine)", languages: "Ruby + Rails + PostgreSQL + Javascript + AJAX + Hotwire and Flickr APIs", photo: "images/projects/seek.png" });

var comics = new Project({ name: "COMIC SMASH UP", url: "http://107.170.136.228:4444/", description: "Comic SmashUp is a comic book story-generating app that allows users to search for favorite characters and select actions against a random opponent. Character content is derived from parsed API data. (Final Project)", languages: "Ruby + Rails + PostgreSQL + Javascript + AJAX + Backbone + Underscore + ComicVine API", photo: "images/projects/comicsmashup.png" });

$( document ).ready(function() {

	Image1= new Image(175,50)
	Image1.src = "images/profile.jpg"

	Image2 = new Image(25,30)
	Image2.src = "images/profile2.jpg"

	Image3 = new Image(125,80)
	Image3.src = "images/profile3.jpg"

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