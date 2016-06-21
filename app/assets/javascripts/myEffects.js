$(function(){
  init();
});

function init() {

	
	
	// ARROWSUP при клике выполняем функцию скрола вверх
  var up = document.getElementById('arrowsup');
  if(up){
  	up.addEventListener("click", function(){
    	scrollToTop(1000);
    });
  };

  // ARROWSUP делаем пошаговую плавную прокрутку вверх
  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function(){
	      if ( window.scrollY != 0 ) {
	          window.scrollBy( 0, scrollStep );
	      }
      else clearInterval(scrollInterval); 
    },15);
	}

	var shrinkHeader = 805;
	
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= shrinkHeader ) {
			$('#arrowsup').fadeIn('fast');
		} else {
			$('#arrowsup').fadeOut('fast');
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

	// $(document).on("click", ".arrowsup", function(){
	// 	$('body').animate({
	// 	  scrollTop: $('header').offset().top}, 500);
	//   return false;
 //  });

	// $(document).on("click", ".foundFilter", function(event){
	// 	$('body').animate({
	// 	  scrollTop: 1000
	//   }, 800);
	//   return false;
	// })

 	$(document).on("click", ".foundFilter", function(event){
		event.preventDefault();	
		$("html,body").animate({scrollTop:$('#filters').offset().top}, 500);
  });

	var howitwork_count = 0; 
	$(document).on("click", ".howitwork-button", function(){
		if (howitwork_count == 0) {
			$('.howitwork').css("z-index","0");
			$('.howitwork').animate({"top":"0px"});
			$('header').animate({"margin-top":"420px"})
			setTimeout(function(){
				$('.step-one img').delay(3000).addClass('fall-animate')
			}, 5000);
			howitwork_count = 1;	
		} else {
			$('.howitwork').animate({"top":"-420px"});
			$('header').animate({"margin-top":"0px"})
			howitwork_count = 0;
		}
	})

	$(document).on("click", ".howitwork", function(){
		$('.howitwork').animate({"top":"-420px"});
		$('header').animate({"margin-top":"0px"})
		howitwork_count = 0;
	})

	// PRELOADER //
  $(window).on('load', function () {
    var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
		$spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
}