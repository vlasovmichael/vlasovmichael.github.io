$(document).ready(function(){

    // init select2
    $('.js-select2:not([multiple])').select2({
        width: '100%',
        minimumResultsForSearch: 30,
        placeholder: $(this).data('placeholder')
    });

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

});