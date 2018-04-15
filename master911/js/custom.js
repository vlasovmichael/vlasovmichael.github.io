$(document).ready(function(){

    // init audio player
    $('audio').audioPlayer();

    // init select2
    $('.js-select2:not([multiple])').select2({
        width: '100%',
        minimumResultsForSearch: 30,
        templateResult: formatState
    });

    function formatState (state) {
        if (!state.id) {
    return state.text;
    }

    var html = '';
    switch(state.text) {
        case '1':
            html = '<img src="img/icons/icons-1.png" alt=""><div>КОТЛЫ</div>';
        break
        case '2':
            html = '<img src="img/icons/icons-2.png" alt=""><div>колонки</div>';
        break
        case '3':
            html = '<img src="img/icons/icons-3.png" alt=""><div>бойлеры</div>';
        break
        case '4':
            html = '<img src="img/icons/icons-4.png" alt=""><div>ПЛИТЫ / ДУХОВОКИ</div>';
        break
        case '5': 
            html = '<img src="img/icons/icons-5.png" alt=""><div>СТИРАЛЬНЫЕ МАШИНЫ</div>';
        break
        case '6': 
            html = '<img src="img/icons/icons-6.png" alt=""><div>ХОЛОДИЛЬНИКИ</div>';
        break
    }
      
    var $state = $(
        '<div class="custom-results">'+html+'</div> '
    );
        return $state;
    };

    // masked input
    $(".js-phone").mask("+38(999) 999-99-99");

    // header menu
    $('.js-header-buter, .js-menu__close').click(function(){
        $('.js-header-buter').toggleClass('is-active');
        $('.header__menu').toggleClass('is-open');
    });

    $('.js-header-buter').on('click', function(){
        $('.main-menu-list').removeClass('is-open');
        $('.header-citys-dropdown').removeClass('is-open');
        $('.js-header-citys').removeClass('is-open');
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.header').length) {
            $('.js-header-buter').removeClass('is-active');
            $('.header__menu').removeClass('is-open');
        }
    });

    // validation
    $('.js-form-submit').on('click', function() {
        var el = $('.js-form-input');
        if($(el).val() == 0) {
            el.addClass('not-valid');
        }
        else{
            el.removeClass('not-valid');
        }
    });

    // reviews slider 
    $('.js-reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 5000,
        draggable: false,
        arrows: true
    });

    // live orders slider 
    $('.js-live-orders').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        draggable: false,
        infinite: false,
        autoplaySpeed: 5000,
        arrows: false
    });

});