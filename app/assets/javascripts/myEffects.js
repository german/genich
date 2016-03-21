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