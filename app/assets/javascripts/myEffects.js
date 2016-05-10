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

	var newhotel_buypremium = 175;
	var width = document.body.clientWidth;	
	// var width = $(document).width();

	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= newhotel_buypremium && width > 600 ) {
			$('.newhotel-buypremium').addClass('fixed-newhotel-buy');
		} else {
			$('.newhotel-buypremium').removeClass('fixed-newhotel-buy');
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

	var howitwork_count = 0; 
	$('.howitwork-button').click(function(){
		if (howitwork_count == 0) {
			$('.howitwork').animate({"height":"200px"}, 500);
			howitwork_count = 1;	
		} else {
			$('.howitwork').animate({"height":"0px"}, 500);
			howitwork_count = 0;
		}
	})

	// PRELOADER //
  $(window).on('load', function () {
    var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
		$spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
}