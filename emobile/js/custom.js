// modal
$(".js-modal").fancybox({
    beforeShow: function(){
        $("body").css({'overflow-y':'hidden'});
    },
    afterClose: function(){
        $("body").css({'overflow-y':'visible'});
    },
    autoFocus: false,
    touch: false
});

// scroll to top
$(window).scroll(function(){
    var el = $('.js-arrow-up');
    if ($(this).scrollTop() > 400) {
        el.addClass('is-visible');
    } else {
        el.removeClass('is-visible');
    }
});

$('.js-arrow-up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
});

// filter
$('.js-filter-text').click(function(){
	var el = $(this);
    var block = $('.js-filter-hide-block');

    el.toggleClass('is-active');
    el.parents('.filter-content-list__item').find(block).toggleClass('is-hide');
});

$('.js-filter-head').click(function(){
    var content = $('.js-filter-content');
    var el = $(this);

    el.toggleClass('is-open');
    content.slideToggle();
});

$('.js-filter-close').click(function(){
    var content = $('.js-filter-content');
    
    content.slideUp();
});

// stars
function setting_rating(rate, element) {
    element.parent('.rating').find('a').each(function(j) {
        var el = $(this);
        if (++j <= rate) {
            el.removeClass('unactivestar').addClass('activestar');
        } else {
            el.removeClass('activestar').addClass('unactivestar');
        }
    });
}

$('.rating a').on('mouseover', function() {
    var el = $(this);
    setting_rating(el.attr('data-attr'), el);
});
$('.rating a').on('mouseout', function() {
    var el = $(this);
    if (el.parent('.rating').find('a').hasClass('check'))
        setting_rating(el.parent('.rating').find('a.check').attr('data-attr'), el);
    else
        setting_rating(0, el);
});
$('.rating a').on('click', function() {
    var el = $(this);
    el.addClass('check').siblings().removeClass('check');
    $('.rating-result').find('input[name=rating]').val(el.attr('data-attr'));
    $('.rating-result').find('input[type=hidden]').val(el.attr('data-attr'));
});

// tabs
$(function() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});

// move filter data & function resize
var move = function(more, less, size) {
    $(window).outerWidth() < size ? $(more).children().appendTo(less) : $(less).children().appendTo(more);
}

var moveResize = function(more, less, size) {
    var func = function() {
        move(more, less, size);
    }
    func();
    $(window).on('resize', function() {
        func();
    });
}

moveResize('.js-catalog-item-about-desktop', '.js-catalog-item-about-tablet', 1200);
moveResize('.js-head-search-desktop', '.js-head-search-tablet', 1023);
moveResize('.js-head-search-tablet', '.js-mobile-search', 767);
moveResize('.js-nav', '.js-mobile-catalog', 767);
moveResize('.js-head-top', '.js-mobile-menu', 767);
moveResize('.js-desktop-phone', '.js-mobile-phone', 767);

// tablet menu btn's
$('.js-tablet-catalog-btn').on('click', function(){
    $('.js-nav').slideToggle();
});

$('.js-tablet-menu-btn').on('click', function(){
    $('.js-head-top').slideToggle();
});

// mobile menu btn's
$('.js-mobile-btn').on('click', function(){
    var item = $('.menu-mobile-list__item');
    var content = $('.js-mobile-content');
    var el = $(this);
    var btn = $('.js-mobile-btn');

    el.parents(item).find(btn).toggleClass('is-active');
    el.closest(item).siblings().find(btn).removeClass('is-active');
    $(this).next(content).slideToggle();
    $(this).closest(item).siblings().find(content).slideUp();
});

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

// sync catalog item carousel
$('.js-catalog-item-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    asNavFor: '.js-catalog-item-thumbs'
});

$('.js-catalog-item-thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-catalog-item-main',
    dots: false,
    arrows: true,
    infinite: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});

// current slick slick color click item
$(".filter-radio__item").on('click', function(){
  var slideIndex = $(this).index();
  var slider = $( '.js-catalog-item-main' );

  slider[0].slick.slickGoTo(parseInt(slideIndex));
});

// masked input
$(".js-masked-input").mask("+7(999) 999-99-99");

// pop up form
$(".js-popupForm").submit(function(e) {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
    $(this).find("input").val("");
    parent.$.fancybox.close();
    $('#mymodal').show();
    setTimeout(function(){
        $('#mymodal').fadeOut('fast')},3000);
        $(".js-popupForm").trigger("reset");
    });
    e.preventDefault();
});

// catalog mobile
function catalogMobile(){
    var width = $(window).width(); 
    if (width < 1023) {
        
        $('.nav-list__item').each(function() {
            if ($(this).children('.nav-list-dropdown').length){
                $(this).addClass('has-content');
            }
        });
    }
};

$('.nav-list__item > i').on('click', function(){

    $('.nav-list-dropdown').slideToggle();
});

catalogMobile();
$(window).on('debouncedresize', catalogMobile);

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