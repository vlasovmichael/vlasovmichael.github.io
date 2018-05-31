// mobile menu
$('.js-mobile-menu').click(function(){
	$(this).toggleClass('is-active');
    $('.header__nav').toggleClass('is-open');
});

// plus minus
$('.js-basket-minus').click(function () {
    var number = $(this).parent().find('.js-basket-count');
    var result = Number(number.val()) - 1 >= 1 ? Number(number.val()) - 1 : 1;
    number.val(result);
});
$('.js-basket-plus').click(function () {
    var number = $(this).parent().find('.js-basket-count');
    number.val(Number(number.val()) + 1);
});

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// product page sliders
$('.js-item-images-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.js-item-images-thumbs'
});
$('.js-item-images-thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-item-images-main',
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        }
      },
      {
        breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        }
      }
    ]
});