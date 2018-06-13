// plus minus
$('.js-cart-minus').on('click', function () {
    var number = $(this).parents('.cart-plus-minus').find('.js-cart-count');
    var result = Number(number.val()) - 1 >= 1 ? Number(number.val()) - 1 : 1;
    number.val(result);
});
$('.js-cart-plus').on('click', function () {
    var number = $(this).parents('.cart-plus-minus').find('.js-cart-count');
    number.val(Number(number.val()) + 1);
});

// cart hide/show
$('.js-cart-link').on('click', function () {
    var cart = $('.js-cart');

    cart.addClass('is-open');
});
$('.js-cart-back').on('click', function () {
    var cart = $('.js-cart');

    cart.removeClass('is-open');
});

// $(document).on('click touchstart', function(event) {
//     if (!$(event.target).closest('.main-form__container').length) {
//         $('.js-cart').removeClass('is-open');
//     }
// });
