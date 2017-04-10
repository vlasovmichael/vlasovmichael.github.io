$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

	// init custom select
	$('select').styler();

	// menu hover
	$('.dropdown-menu').hover(function(){
		$(this).parent('.nav__item').find('.nav__link').toggleClass('is-hover');
	})

	$('.nav__link.has-sub').hover(function(){
		$(this).toggleClass('is-hover');
	})

	// top slider
	$('.js-top-slider__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		speed: 800,
		dots: true,
		infinite: true
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			variableWidth: false,
		// 			adaptiveHeight: true
		// 		}
		// 	}
		// ]
	});

});