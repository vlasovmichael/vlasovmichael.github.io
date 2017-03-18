$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

    // init fancybox
    $('.fancybox').fancybox();

	// top slider
	$('.js-top-slider__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true
	});

	// awards slider
	$('.js-awards__list').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		fade: false,
		infinite: true
	});

});