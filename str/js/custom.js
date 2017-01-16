$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

    // pop up fancybox init
    $('.fancybox').fancybox({
    	padding: 0
    });

    // init custom input
    $('select').styler();

    // tabs
    $('ul.tabs').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current').parents('.tabs-block__section').find('.box').eq($(this).index()).fadeIn(150).siblings('.box').hide();
	})

	// dropdodn menu
	$(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );

    // top slider main
	$('.js-main-content__carousel').slick({
		dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1
	});



});