$('.tv').click(function(){  
	console.log('work!');
	var count_tv_click = 0
	if(count_tv_click == 0) {
		$('.tv').addClass('tv_active');
		count_tv_click = 1;
	} else {
		$('.tv').removeClass('tv_active');
	}
})

$(function(){
 var shrinkHeader = 805;
	$(window).scroll(function() {
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
	$('.arrowsup').click(function () {
		console.log('Work!')
		$('body').animate({
		scrollTop: 0
	}, 800);
	return false;
});
});




// НЕ РАБОТАЕТ CLICK
$('body').click(function(){
	console.log('YES')
})