$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

    // fancybox
    $('.fancybox').fancybox({
    	height: 650,
    	fitToView : false,
   		autoSize : false
    });

	// sliders
	$('.top_slider').slick({
		dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1
	});

	var $status = $('.paginginfo');
    var $slickElement = $('.new__carousel');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        autoplay: false,
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
    	{
	      	breakpoint: 1180,
	      	settings: {
	        slidesToShow: 4,
        	slidesToScroll: 4

      		}
    	},
    	{
	      	breakpoint: 991,
	      	settings: {
	        slidesToShow: 3,
        	slidesToScroll: 3
      		}
    	},
    	{
	      	breakpoint: 767,
	      	settings: {
	        slidesToShow: 2,
        	slidesToScroll: 2
      		}
    	},
    	{
	      	breakpoint: 500,
	      	settings: {
	        slidesToShow: 1,
        	slidesToScroll: 1
      		}
    	}
  		]
    });

    // sync slider
	$('.catalog-main__big-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.small-slider'
	});
	$('.small-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.catalog-main__big-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});

	// final slider
	$('.catalog-main__final-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		rows: 2,
		responsive: [
    	{
	      	breakpoint: 767,
	      	settings: {
	        slidesToShow: 2
      		}
    	},
    	{
	      	breakpoint: 501,
	      	settings: {
	        slidesToShow: 1
      		}
    	}
  		]
	});

    // share click
	$(".share__icon").on("click", function(){
		$(this).parent('.share').find('.share__social').slideToggle();
		// $('.share__social').show(300);
	});

	$(document).on('click touchstart', function(event) {
	  if (!$(event.target).closest('.new__item .share').length) {
	      $('.share__social').hide(300);
	  }
	});

	// mob menu
	$(".header .nav__mobile").on("click", function(){
		$(this).toggleClass('drop');
		$('.header .nav__list').slideToggle();
	});

	$(".catalog-main__mobile").on("click", function(){
		$(this).toggleClass('drop');
		$('.catalog-main .menu').slideToggle();
	});

	// reviews margin
	var item = $('.reviews__item').length;
	if(item > 3){
		$('.reviews__item').addClass('reviews__item_more-than-three');
	}

	// size item
	$(".catalog-main__item-info .inside__top .right__link").click(function(e) {
        $(".catalog-main__item-info .inside__top .right__link").removeClass("active");         
        $(this).toggleClass("active");
        e.preventDefault();
    })

    // calendar
    $(".myDatePicker-1").ionDatePicker({
	    lang: "ru",
	    sundayFirst: false,
	    years: "2016-2020",
	    format: "DD/MM/YYYY"
	});

	// append blocks
	var sliderapp = function(){
		if ($(window).width() < 767 )
		{
			$('#place1').append( $('#place2>.small-slider'));
		}
		else{
			$('#place2').append( $('#place1>.small-slider'));
		}
	};

	$(window).on('load', sliderapp);	
	$(window).on('resize', sliderapp);

});

// map
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.736407, 37.709443],
            zoom: 16
        }),

        myPlacemark = new ymaps.Placemark([55.736407, 37.709443], {
            // Свойства.
            hintContent: 'Метка'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            balloonContent: 'Балун',
            iconImageHref: 'img/icon/marker.png',
            // Размеры метки.
            iconImageSize: [64, 64],
            balloonContent: 'Балун'
        });

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark)
}


// vk 
VK.Widgets.Group("vk_groups", {mode: 3, width: "220"}, 20003922);

// fb widget
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.7&appId=908625545852614";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));