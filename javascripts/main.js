new AboutMeView(console.log('AboutMe'));

$( document ).ready(function() {

	$('#header-title')
	  .css('cursor', 'pointer')
	  .click(
	    function(){
	     console.log('code button clicked');
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