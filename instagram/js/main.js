
$(document).ready(function() {
  
	$('.comments>.button-click__body').not(':first-of-type').hide();
	$(".button-click__button").removeClass("button-active").addClass("button-passive");
	 
	 $('.comments>.button-click__header').click(function() {
	   $(".button-click__button").removeClass("button-active").addClass("button-passive");
	   var findArticle = $(this).next();
	   var findWrapper = $(this).closest('.comments');
	   
	   if (findArticle.is(':visible')) {
		 findArticle.slideUp('fast');
		  
		  $(this).children(".button-click__button").removeClass("button-active").addClass("button-passive");
   
	   }
	   else {
		 findWrapper.find('>.button-click__body').slideUp('fast');
		 findArticle.slideDown('fast');
		 
		  $(this).children(".button-click__button").removeClass("button-passive").addClass("button-active");
   
	   }
	 });
	 
   });

   $(document).ready(function($) {
    $('.popup-content').magnificPopup({
		type: 'inline',
		// Delay in milliseconds before popup is removed
		removalDelay: 300,

		// Class that is added to popup wrapper and background
		// make it unique to apply your CSS animations just to this exact popup
		mainClass: 'mfp-fade'
    });
});