// header search
$('.js-head-search-btn').on('click', function(){
	$(this).addClass('is-hide');
    $('.header-form').addClass('is-open');
});

$(document).on('click touchstart', function(event) {
    if (!$(event.target).closest('.header-search').length) {
        $('.js-head-search-btn').removeClass('is-hide');
    	$('.header-form').removeClass('is-open');
    }
});

// init select2
// $('.js-select2:not([multiple])').select2({
//     width: '100%',
//     minimumResultsForSearch: 30,
//     placeholder: $(this).data('placeholder'),
//     templateResult: formatState
// });


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
$('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: false,
    arrows: true,
    dots: true,
    adaptiveHeight: true
    // infinite: false
});