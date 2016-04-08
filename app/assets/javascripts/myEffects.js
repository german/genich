$(function(){
  init();
});

function init() {
	var shrinkHeader = 805;
	
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= shrinkHeader ) {
			$('.arrowsup').fadeIn('fast');
		} else {
			$('.arrowsup').fadeOut('fast');
		}
	});
	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	$('.arrowsup').on('click', function () {
		console.log('Work!')
		$('body').animate({
		  scrollTop: 0
	  }, 800);
	  return false;
  });

	
}