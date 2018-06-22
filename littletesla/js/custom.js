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

// mobile menu
$('.js-head-mobile-menu').on('click', function(){
    $(this).toggleClass('is-active');
    $('.js-head-nav').toggleClass('is-open');
});

// accordion
$('.js-client-issues-title').on('click', function(){
    var wrapper = $('.client-issues-list__item');
    var content = $('.js-client-issues-content');
    var accordion = $('.js-client-issues-title');
    var el = $(this);

    el.next(content).slideToggle();
    el.closest(wrapper).siblings().find(content).slideUp();
    el.parents(wrapper).find(accordion).toggleClass('is-active');
    el.closest(wrapper).siblings().find(accordion).removeClass('is-active');
});

// footer arrow top
$('.js-arrow-up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
});

// masked input
$(".js-masked-input").mask("+7(999) 999-99-99");

// ajax form
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

$(".js-catalogForm").submit(function(e) {
    $.ajax({
        type: "POST",
        url: "mail-catalog.php",
        data: $(this).serialize()
    }).done(function() {
    $(this).find("input").val("");
    $('#mymodal').show();
    setTimeout(function(){
        $('#mymodal').fadeOut('fast')},3000);
        $(".js-catalogForm").trigger("reset");
    });
    e.preventDefault();
});