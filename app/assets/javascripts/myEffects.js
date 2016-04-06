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

	var swiper = new Swiper('.swiper-container', {
	  nextButton: '.swiper-button-next',
	  prevButton: '.swiper-button-prev',
	  slidesPerView: 1,
	  paginationClickable: true,
	  spaceBetween: 30,
	  loop: true
	});
}