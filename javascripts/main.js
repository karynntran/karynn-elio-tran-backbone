new AboutMeView(console.log('AboutMe'));
var codeView = new CodeView(console.log('Code'));
var careerView = new CareerView(console.log('Career'));

$( document ).ready(function() {

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

	$('#header-title')
	  .css('cursor', 'pointer')
	  .click(
	    function(){
	     console.log('about me clicked');
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