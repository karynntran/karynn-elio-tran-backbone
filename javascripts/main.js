var aboutMeView = new AboutMeView(console.log('AboutMe'));
var codeView = new CodeView(console.log('Code'));
var careerView = new CareerView(console.log('Career'));
var contactView = new ContactView(console.log('Contact'));
var createView = new CreateView(console.log('Create'));

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
			$(this).css('background', '#ff00ff');
		},
		function(){
			$(this).css('background', '');
		}
		);

});