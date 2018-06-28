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

// select2
$('.js-select2[multiple]').select2({
    width: '100%',
    placeholder: $(this).data('placeholder'),
    allowClear: true,
    closeOnSelect: false
});

$('.js-select2[multiple]').on('change', function() {
    var el = $(this);
    function isPositive(number) {
        return number == 'all';
    }
    el.val().length ? el.addClass('selected') : el.removeClass('selected');
    if(el.hasClass('is-set-all') && el.val().length > 1) {
        el.removeClass('is-set-all');
        var arr = el.val();
        arr.shift();
        console.log(arr);
        el.val(arr);
    } else if(el.val().some(isPositive)) {
        el.addClass('is-set-all');
        el.val(['all']);
    }
    el.trigger('change.select2');
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