$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

	// init custom select
	$('select').styler();

	// init popup
	$(".fancy-popup").fancybox({
    	beforeShow: function(){
        	$("body").css({'overflow-y':'hidden'});
    	},
    	afterClose: function(){
        	$("body").css({'overflow-y':'visible'});
    	},
		padding: 0,
		wrapCSS : 'popup-form'
	});

	// menu hover
	$('.dropdown-menu').hover(function(){
		$(this).parent('.nav__item').find('.nav__link').toggleClass('is-hover');
	})

	$('.nav__link.has-sub').hover(function(){
		$(this).toggleClass('is-hover');
	})

	// mobile menu
	$('.header__mobile-menu').on('click', function(){
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('is-open');
	})

	// $(document).on('click touchstart', function(event) {
	//   	if (!$(event.target).closest('.header__content').length) {
	//     	$('.nav').removeClass('is-open');
	// 		$('.header__mobile-menu').removeClass('is-active');
	//   	}
	// });

	$('.nav__link.has-sub').on('click', function(e){
		$(this).toggleClass('is-open').removeClass('is-hover');
		$('.dropdown-menu').slideToggle();
		e.preventDefault();
	})

	$('.dropdown-menu__link--title').on('click', function(e){
		$(this).toggleClass('is-open').parents('.dropdown-menu__block').find('.dropdown-menu__item').slideToggle();
		e.preventDefault();
	})

	// mobile btns
	$('.header__mobile-phone').on('click', function(){
		$('.header__phones').slideToggle();
	})

	// $(document).on('click touchstart', function(event) {
	//   	if (!$(event.target).closest('.header').length) {
	//     	$('.header__phones').slideUp();
	//   	}
	// });

	$('.header__mobile-adres').on('click', function(){
		$('.header__info').slideToggle();
	})

	// $(document).on('click touchstart', function(event) {
	//   	if (!$(event.target).closest('.header').length) {
	//     	$('.header__info').slideUp();
	//   	}
	// });

	$('.nav__mobile-btn').on('click', function(){
		$('.nav').removeClass('is-open');
		$('.header__mobile-menu').removeClass('is-active');
	})

	// append blocks
	var interview = function(){
		if ($(window).width() < 1130 )
		{
			$('#place1').append( $('.header__search'));
		}
		else{
			$('.header__content').append( $('.header__search'));
		}
	};

	$(window).on('load', interview);	
	$(window).on('resize', interview);

	var btn = function(){
		if ($(window).width() < 1130 )
		{
			$('.header__content').append( $('.search__btn'));
		}
		else{
			$('.header__search').append( $('.search__btn'));
		}
	};

	$(window).on('load', btn);	
	$(window).on('resize', btn);

	var handler = function(){
		if ($(window).width() < 767 )
		{
			$('.footer__question').append( $('.social__copy'));
		}
		else{
			$('.footer__social').append( $('.social__copy'));
		}
	};

	$(window).on('load', handler);	
	$(window).on('resize', handler);

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