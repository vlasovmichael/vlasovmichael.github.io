$(document).ready(function(){

    // init audio player
    $('audio').audioPlayer();

    

    // header mobile marker position
    $('.js-header-citys').on('click', function(){
        if (window.innerWidth <= 430 )
        {    
            $(this).toggleClass('is-open');
            $('.header-citys-dropdown').toggleClass('is-open');
        }
    })

    $('.header-citys-dropdown-list__link').on('click', function(e) {
        var el = $(this);
        var index = el.attr('data-attr');
        alert('Вы выбрали ' + index);
        e.preventDefault();
    });

    // anchor
    $(".menu__link").click(function(e) {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top -80;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        e.preventDefault();
    });

    $(".js-next-block").click(function(e) {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 80;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        e.preventDefault();
    });

    // button more
    $('.js-btn-more').on('click', function() {
        $(this).toggleClass('is-active');
        $('.js-hidden-more').slideToggle();
    });

    // main menu btn
    $('.js-main-menu__btn').on('click', function(){
        $(this).toggleClass('is-active');
        $('.main-menu-list').toggleClass('is-open');
    })

    // init select2
    $('.js-select2:not([multiple])').select2({
        width: '100%',
        minimumResultsForSearch: 30,
        placeholder: $(this).data('placeholder'),
        templateResult: formatState
    });

    function formatState (state) {
        if (!state.id) {
    return state.text;
    }

    var html = '';
    switch(state.text) {
        case 'котлы':
            html = '<img src="img/icons/icons-1.png" alt=""><div>КОТЛЫ</div>';
        break
        case 'колонки':
            html = '<img src="img/icons/icons-2.png" alt=""><div>колонки</div>';
        break
        case 'бойлеры':
            html = '<img src="img/icons/icons-3.png" alt=""><div>бойлеры</div>';
        break
        case 'плиты / духовки':
            html = '<img src="img/icons/icons-4.png" alt=""><div>ПЛИТЫ / ДУХОВОКИ</div>';
        break
        case 'стиральные машины': 
            html = '<img src="img/icons/icons-5.png" alt=""><div>СТИРАЛЬНЫЕ МАШИНЫ</div>';
        break
        case 'холодильники': 
            html = '<img src="img/icons/icons-6.png" alt=""><div>ХОЛОДИЛЬНИКИ</div>';
        break
    }
      
    var $state = $(
        '<div class="custom-results">'+html+'</div> '
    );
        return $state;
    };

    // init head select
    $('.js-formstyler').styler();

    // masked input
    $(".js-phone").mask("+38(999) 999-99-99");

    // header menu
    $('.header__buter, .js-menu__close').click(function(){
        $('.header__buter').toggleClass('is-active');
        $('.header__menu').toggleClass('is-open');
    })

    $('.header__buter').on('click', function(){
        $('.main-menu-list').removeClass('is-open');
        $('.header-citys-dropdown').removeClass('is-open');
        $('.js-header-citys').removeClass('is-open');
    })

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.header').length) {
            $('.header__buter').removeClass('is-active');
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
        arrows: true,
        responsive: [
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            adaptiveHeight: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true
          }
        }
      ]
    });

    // live orders slider 
    function slickOrders () {
        var autoplaySpeed = 5000;
        var autoplayOn    = true;

        var $slickRoot = $('.js-live-orders');

        $slickRoot.on('init', function() {
            var $slickList = $slickRoot.find('.slick-list');

            window.setInterval(function() {
                if (!autoplayOn) return;
                $slickRoot.slick('slickPrev');
            }, autoplaySpeed);
        });

        $slickRoot.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            draggable: false,
            infinite: true,
            swipe: false,
            autoplaySpeed: 5000,
            arrows: false,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });


    }

    slickOrders();

    // honor slider
    $('.js-honor-list').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });

    // blog slider
    $('.js-blog-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });

    $(window).on('resize orientationChange', function(event) { 
        if (window.innerWidth <= 767 ) {
            $('.js-blog-list').slick('init');
        }
    });

});