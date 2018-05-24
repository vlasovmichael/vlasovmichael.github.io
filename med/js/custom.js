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

// another date aside
$('.js-aside-date-btn').on('click', function(){
    var btn = $('.js-aside-date-btn');

    $('.js-another-date').slideToggle();
    if (btn.text()=='Другие даты') btn.text('Скрыть');
    else btn.text('Другие даты');
});

// datarange picker
$('.js-calendar').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    "locale": {
        "format": "D.MM.YYYY",
        "opens": "left",
        "separator": " - ",
        "daysOfWeek": [
            'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
        ],
        "monthNames": [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        "firstDay": 1
    }
});

// init select2
$('.js-select2:not([multiple])').select2({
    width: '100%',
    minimumResultsForSearch: -1,
    placeholder: $(this).data('placeholder')
});

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
});