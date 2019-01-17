$(document).ready(function(){

    // init banner slider
    function initBanner(){
        var banner = $('.js-index-banner');
        var preload = $('.js-slider-preloader');

        banner.addClass('is-load');
        if (banner.hasClass('is-load')){
            preload.addClass('is-hide');
        }
    }

    initBanner();

    // mobile form focus
    $('.js-search-input').on('input', function(){
      var input = $('.js-search-input');
      var container = $('#header');

      if ( input.val() != '' ) {
          container.addClass('is-visible');
      } else {
          container.removeClass('is-visible');
      }
    });

    $('.js-search-close').on('click', function(){
      var input = $('.js-search-input');
      var container = $('#header');

      container.removeClass('is-visible');
      input.removeClass('is-visible');
    });


  $(window).scroll(function() {
    headerFixed();
  });


    function headerFixed() {
        if($(window).width() >= 992) {
          var sticky = $('.header-main'),
          scroll = $(window).scrollTop();
              // if (scroll >= 126) sticky.addClass('fixed');
              if (scroll >= 120) sticky.addClass('fixed');
              else sticky.removeClass('fixed');
            }
          }

          if($(window).width() >= 1200) { 
            $('#nav > ul > li').hover(
              function(){
                $(this).addClass('line');
                var greenLine = $( '#nav > ul .green-line-bg' );
                var width = $('.nav-list__item.line a' ).width(); 
                $( greenLine ).width(width);
                $('#nav > ul > li:first-child .white-line').addClass('hide');
              },
              function(){
                $(this).removeClass('line');
                $('#nav > ul > li:first-child .white-line').removeClass('hide');
              }
            );
          }

          function removeLine(){
            if($(window).width() <= 992) { 
              $('#nav > ul > li:first-child .white-line').remove();
            }
          }

          removeLine();

          $('#phones').on( "click", function() {
            $('.contacts-list-drop').addClass('open');
            $(this).css('cursor', 'inherit');
          });
          $('#close-arrow').on( "click", function() {
            $('.contacts-list-drop').removeClass('open');
            $('#phones').css('cursor', 'pointer');
          });
          $(document).mouseup(function (e){  
            var div = $('.contacts-list-drop');  
            if (!div.is(e.target) && div.has(e.target).length === 0) { 
              $('.contacts-list-drop').removeClass('open');
              $('#phones').css('cursor', 'pointer');
              $('#header').removeClass('is-visible');
            };
          });

          $('#search-link').on( "click", function() {
            $('.search-block__content').addClass('open');
            $('.header-nav').hide();
            if($(window).width() < 992) {
              $('.holder .cart').hide();
              $('.holder .searh-close-icon').addClass('active');
            }
          });

          $('.holder .searh-close-icon').on( "click", function() {
            $('.search-block__content').removeClass('open');
            $('.holder .cart').show();
            $('.holder .searh-close-icon').removeClass('active');
          });

          $(document).mouseup(function (e){  
            var div_search = $('.search-block__content');  
            if (!div_search.is(e.target) && div_search.has(e.target).length === 0) {  
              $('.search-block__content').removeClass('open');
              $('.header-nav').show();
            };
          });


		// ============== mobile-menu ==============
        // if($(window).width() < 992) {
        // $('#burger').on( "click", function() {

    // ============== mobile-menu ==============
       $(window).resize(function() {
            if($( window ).width() < 992 ){
              $('.header-main').removeClass('fixed');
            }
        });
      
      $('#burger').on( "click", function() {
          if($( window ).width() < 992) {
            $('#header').toggleClass('is-open');
            $('.mobile-menu').toggleClass('is-open');
            $('.js-head-main').toggleClass('is-hide');
            $('.holder .cart').toggleClass('hidden-mobile');
            $('#main').toggleClass('d-none');
            $('#footer').toggleClass('d-none');
        }

        $('.js-lang-mobile a').click(function(e){
          e.preventDefault();
          $(this).closest('li').find('.drop').slideToggle();
          $(this).toggleClass('open');
        });

        $('.nav-list__link').on('click', function(event){
            var _el = $(this);
            var item = $('.nav-list__item');
            var btn = $('.nav-list__link');
            var dropdown = item.find('.drop');

            _el.next(dropdown).slideToggle();
            _el.closest('li').siblings().find(dropdown).slideUp();
            _el.parents(item).find(btn).toggleClass('open');
            _el.closest(item).siblings().find(btn).removeClass('open');
            event.preventDefault();
        });

    });
 

    // lang select
    $('#language>select').customSelect({
        maxHeight: 240,
        optStructure: '<div class="selectOptions lang"><ul></ul></div>',
        selectStructure: '<div class="selectArea">' +
        '<a href="#" class="selectButton">' +
        '<div class="center"></div>' +
        '<i class="icon"></i></a>' +
        '<div class="disabled"></div>' +
        '</div>', // fake select structure
    });
    $('#language').on('change', function(e) {
        var selectedVal = $('select[name=language] :selected').val(),
        redirect = $('select[name=language] :selected').data('redirect');

        $('input[name=\'language_code\']').attr('value', selectedVal);
        $('input[name=\'redirect\']').attr('value', redirect  );

        $('#language-form').submit();
    });

    // ================= acordeon =============
        $('.head-acordeon').click(function(e){
           if($(window).width() < 992) {
            e.preventDefault();
            $(this).closest('.accordeon-parent').find('.drop-acordeon').slideToggle();
            $(this).toggleClass('open');
          }
        });
       

      // ============== acordeon-product ============
       
        $('.head-acordeon').click(function(e){
          if($(window).width() < 992) {
            e.preventDefault();
            $(this).next('.accordeon-drop__product').slideToggle();
            $(this).next('span').find('.accordeon-drop__product').slideToggle();
            $(this).parents('.box').toggleClass('open');
          }
        });

        $('.head-acordeon-inner').click(function(e){
          if($(window).width() < 992) {
            e.preventDefault();
            $('.accordeon-drop__product-inner').slideToggle();
            $(this).toggleClass('open');
          }
        });

     
          $('.checkboxAreaChecked').parent().addClass('check');
          $('.checkbox-list > li > div').click(function(){
            if($(this).hasClass('checkboxAreaChecked') ){
                $(this).parent().addClass('check');
            } else {
              $(this).parent().removeClass('check');
            }
          });
       

 
        
      
    // =========== filter-catalog mobile ==========
    $('.catalog-filter-mobile').on( "click", function() {
      $('#header').hide();
      $('.catalog .products .list > li.filter_li').addClass('is-open');
      $('.catalog .products .list').addClass('is-open');
      $('.filter-mobile__content').addClass('is-open'); 
      $('.catalog-no-filter__box').addClass('is-open');
      $('#burger').addClass('is-open');    
      $(this).addClass('no-active');      
    });

    $('.filter-head-link').on( "click", function() {
      $('#header').show();
      $('.catalog .products .list > li.filter_li').removeClass('is-open');
      $('.catalog .products .list').removeClass('is-open');
      $('.filter-mobile__content').removeClass('is-open');    
      $('.catalog-filter-mobile').removeClass('no-active');
      $('#burger').removeClass('is-open'); 
      $('.catalog-no-filter__box').removeClass('is-open');      
    });

})

// move data
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

$('.js-purchase-history-list > li').each(function() {
  moveResize($(this).find('.js-cabinet-desktop-date'), $(this).find('.js-cabinet-history-tablet-date'), 991);
});
$('.js-purchase-history-list > li').each(function() {
  moveResize($(this).find('.js-cabinet-from-tablet-price'), $(this).find('.js-cabinet-mobile-price'), 767);
});
$('.js-purchase-history-list > li').each(function() {
  moveResize($(this).find('.js-cabinet-from-tablet-state'), $(this).find('.js-cabinet-mobile-state'), 767);
});

// aside mobile btn
$('.js-aside-btn').on('click', function(){
    var el = $(this);
    var content = $('.js-aside-content');

    el.toggleClass('is-active');
    content.slideToggle();
});

// checkout fix margin in warning
$('.js-checkout-submit').on('click', function() {

  var text = $('.warning');
  if ( text.text().length > 0 ){
    text.addClass('is-visible');
  }
});

$('.js-box-head').on('click', function(){
  var el = $(this);
  var content = $('.js-box-content');
  el.toggleClass('is-open');
  el.parent().find(content).slideToggle();
});

// product slider
$('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: false,
    fade: true,
    arrows: false,
    asNavFor: '.js-thumbs-slider',
    responsive: [
    {
      breakpoint: 993,
      settings: {
      arrows: true
      }
    }
  ]
});
$('.js-thumbs-slider').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.js-product-slider',
  dots: false,
  variableWidth: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 8
      }
    }
  ]
});
$('.js-product-slider-vertical').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  draggable: false,
  fade: true,
  prevArrow: $('.js-thumbs-prev'),
  nextArrow: $('.js-thumbs-next'),
  asNavFor: '.js-thumbs-slider-vertical'
});
var $slick_slider = $('.js-thumbs-slider-vertical');
  settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.js-product-slider-vertical',
    dots: false,
    arrows: false,
    vertical: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  }
  $slick_slider.slick(settings);

  // reslick only if it's not slick()
  $(window).on('resize', function() {
    if($(window).width() <= 992) {
      if ($slick_slider.hasClass('slick-initialized')){
          $slick_slider.slick('unslick');
      }
  }
    // if (!$slick_slider.hasClass('slick-initialized')) {
    //   return $slick_slider.slick(settings);
    // }
});

// articles slider
$('.js-articles-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: false,
    arrows: true
});

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// init modal
$('.js-popup').fancybox({
  wrapCSS : 'popup-form',
  openMethod : 'dropIn',
  openSpeed : 250,
  closeMethod : 'dropOut',
  closeSpeed : 100
});

$(".js-registration").fancybox({
    beforeShow: function(){
        $('.popup .tabs__caption li:last-child').trigger('click');
    },
    afterClose: function(){
        $('.popup .tabs__caption li:first-child').trigger('click');
    },
    wrapCSS : 'popup-form',
    openMethod : 'dropIn',
    openSpeed : 250,
    closeMethod : 'dropOut',
    closeSpeed : 100
});

// catalog filter add class
$('#filter_toggle').on('click', function(){
  $('ul.list').toggleClass('is-open');
});

// custom fancybox transition
(function ($, F) {
    F.transitions.dropIn = function() {
        var endPos = F._getPosition(true);

        endPos.top = (parseInt(endPos.top, 10) - 200) + 'px';

        F.wrap.css(endPos).show().animate({
            top: '+=200px'
        }, {
            duration: F.current.openSpeed,
            complete: F._afterZoomIn
        });
    };

    F.transitions.dropOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            top: '-=200px'
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };

}(jQuery, jQuery.fancybox));

// lock body in safari mobile
var $docEl = $('html, body'),
  $wrap = $('.out'),
  scrollTop;

$.lockBody = function() {
  if(window.pageYOffset) {
    scrollTop = window.pageYOffset;
    
    $wrap.css({
      top: - (scrollTop),
      position: 'relative'
    });
  }

  $docEl.css({
    height: "100%",
    overflow: "hidden"
  });
}

$.unlockBody = function() {
  $docEl.css({
    height: "",
    overflow: ""
  });

  $wrap.css({
    top: '',
    position: ''
  });

  window.scrollTo(0, scrollTop);
  window.setTimeout(function () {
    scrollTop = null;
  }, 0);

}

// safari popup bug
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) { 
  $('#cart-popup').css('padding-bottom', '85px');
};