// init select2
// $('.js-select2:not([multiple])').select2({
//     width: '100%',
//     minimumResultsForSearch: 30,
//     placeholder: $(this).data('placeholder'),
//     templateResult: formatState
// });

// filter
$('.js-filter-text').click(function(){
	var el = $(this);
    var block = $('.js-filter-hide-block');

    el.toggleClass('is-active');
    el.parents('.filter-content-list__item').find(block).toggleClass('is-hide');
});

$('.js-filter-head').click(function(){
    var content = $('.js-filter-content');
    content.slideToggle();
});

$('.js-filter-close').click(function(){
    var content = $('.js-filter-content');
    
    content.slideUp();
});


// header menu
// $('.header__buter, .js-menu__close').click(function(){
//     $('.header__buter').toggleClass('is-active');
//     $('.header__menu').toggleClass('is-open');
// })


// $(document).on('click touchstart', function(event) {
//     if (!$(event.target).closest('.header').length) {
//         $('.header__buter').removeClass('is-active');
//         $('.header__menu').removeClass('is-open');
//     }
// });

// validation
// $('.js-form-submit').on('click', function() {
//     var el = $('.js-form-input');
//     if($(el).val() == 0) {
//         el.addClass('not-valid');
//     }
//     else{
//         el.removeClass('not-valid');
//     }
// });

// reviews slider 
// $('.js-reviews').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: false,
//     autoplaySpeed: 5000,
//     draggable: false,
//     arrows: true,
//     responsive: [
//     {
//       breakpoint: 1281,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         arrows: true,
//         adaptiveHeight: true
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         adaptiveHeight: true
//       }
//     }
//   ]
// });

// reviews slider 
$('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: false,
    arrows: true,
    dots: true
});

// range slider
var html5Slider = document.getElementById('range-slider');

if (html5Slider) {
    noUiSlider.create(html5Slider, {
        start: [ 1000, 200000 ],
        connect: true,
        step: 1000,
        range: {
            'min': 1000,
            'max': 20000
        }
    });

    var inputFrom = document.getElementById('js-range-from');
    var inputTo = document.getElementById('js-range-to');

    html5Slider.noUiSlider.on('update', function( values, handle ) {

        var value = values[handle];

        if ( handle ) {
            inputTo.value = Math.round(value);

        } else {
            inputFrom.value = Math.round(value);
        }
    });

    inputFrom.addEventListener('change', function(){
        html5Slider.noUiSlider.set([this.value, null]);
    });

    inputTo.addEventListener('change', function(){
        html5Slider.noUiSlider.set([null, this.value]);
    });
}