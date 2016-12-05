$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

	// cart
	$('.header__bottom .right-side__cart').on("click", function() {
		$('.header__bottom .right-side__cart .cart-hidden').addClass('is-open');
	});

	// header menu
	$('.header__main .menu__item').hover(function(){
		$(this).addClass('active');
	},
	function(){
		$(this).removeClass('active');
	});

	$('.header__main .menu__item').hover(function(){
		$(this).find('.has-menu').addClass('active');
	},
	function(){
		$(this).find('.has-menu').removeClass('active');
	});
	
	var mobclick = function(){
		if ($(window).width() < 767 )
		{
			$(".header__main .menu__item").on("click", function(){
				$(this).find('.submenu').addClass('active');
			});
		}
		else{
			$(".header__main .menu__item").on("click", function(){
				$(this).find('.submenu').removeClass('active');
			});
		}
		
	};

	$(window).on('load', mobclick);	
	$(window).on('resize', mobclick);

	$(document).on('click touchstart', function(event) {
	  if (!$(event.target).closest('.header .right-side').length) {
	      $('.header__bottom .right-side__cart .cart-hidden').removeClass('is-open');
	  }
	});

	// mob menu
	$(".header__mobile-menu").on("click", function(){
		$(".header__main .menu").slideToggle('.active');
		$(this).toggleClass("drop");
		$('.header__main .submenu').removeClass('active');
	});

	$(document).on('click touchstart', function(event) {
	  if (!$(event.target).closest('.header__main').length) {
	      $('.header__main .menu').hide();
	  }
	});

	// main slider
	$('.main-slider').slick({
		dots: true,
        infinite: true,
        slidesToShow: 1
	});

	// reviws slider
	$('.reviews__slider').slick({
		dots: true,
        infinite: true,
        slidesToShow: 1
	});


});



