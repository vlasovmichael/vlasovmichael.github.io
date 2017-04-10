$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

	// fancybox
	$('.fancybox').fancybox();

    // form send
    $(".js-form-send").submit(function(e) {
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function() {
        $(this).find("input").val("");
        $('#mymodal').show();
        setTimeout(function(){
            $('#mymodal').fadeOut('fast')},3000);
            $(".js-form-send").trigger("reset");
        });
        e.preventDefault();
    });

    $(".js-click-form").submit(function(e) {
        $.ajax({
            type: "POST",
            url: "php/mail2.php",
            data: $(this).serialize()
        }).done(function() {
        $(this).find("input").val("");
        parent.$.fancybox.close();
        $('#mymodal').show();
        setTimeout(function(){
            $('#mymodal').fadeOut('fast')},3000);
            $(".js-click-form").trigger("reset");
        });
        e.preventDefault();
    });

	// header search
	$('.info__search').click(function(){
		$(this).hide();
		$('.info').addClass('is-active');
		// $('.header-top .list.mobile').hide();
		$('.info__skype').hide();
		$('.header-top .mobile-menu').addClass('is-hidden');
		$('.info__hidden').addClass('is-visible');
		$('.info__input').focus();
	})

	$(document).on('click touchstart', function(event) {
		if (!$(event.target).closest('.header-top .info').length) {
			$('.info__search').show();
			// $('.header-top .list.mobile').show();
			$('.info').removeClass('is-active');
			$('.info__skype').show();
			$('.header-top .mobile-menu').removeClass('is-hidden');
			$('.info__hidden').removeClass('is-visible');
		}
	});

	var mobiletoggle = function(){
		if ($(window).width() > 992 )
		{
			$('.info__search').click(function(){
				$('.header-top .list.mobile').addClass('is-hidden');
			})
		}
		else{
			$(document).on('click touchstart', function(event) {
				if (!$(event.target).closest('.header-top .info').length) {
					$('.header-top .list.mobile').removeClass('is-hidden');
				}
			});
		}
	};

	$(window).on('load', mobiletoggle);	
	$(window).on('resize', mobiletoggle);

	$('.info__search').click(function(){
		$('.header-top__call').addClass('is-hidden');
	})
		
	$(document).on('click touchstart', function(event) {
		if (!$(event.target).closest('.header-top .info').length) {
			$('.header-top__call').removeClass('is-hidden');
		}
	});
	
	// masked input
	$(".js-form__input--phone").mask("+375(99) 999-99-99");

	// scroll to top
	$(window).scroll(function(){
    	if ($(this).scrollTop() > 400) {
    		$('.scroll-top').addClass('is-visible');
    	} else {
    		$('.scroll-top').removeClass('is-visible');
    	}
    });

	$('.scroll-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
	})

	// mobile menu
	$('.header-top__menu').on('click', function(){
		$(this).toggleClass('is-active')
		$('.js-mobile-menu').toggleClass('is-visible');
		$('.header-top__text').addClass('is-visible');
		$('.header-top__mob-call').addClass('is-visible');
	})

	$(document).on('click touchstart', function(event) {
		if (!$(event.target).closest('.header-top__container').length) {
			$('.header-top__menu').removeClass('is-active');
			$('.header-top__text').removeClass('is-visible');
			$('.js-mobile-menu').removeClass('is-visible');
			$('.header-top__mob-call').removeClass('is-visible');
		}
	});

	// click models
	$('.models__text').on('click', function(){
		$(this).toggleClass('is-open').parent('.models__block').find('.models__list').slideToggle();
	})

	// show all items
	$('.hot__all').on('click', function(){
		$(this).toggleClass('is-active');
		$('.hot__item').toggleClass('is-show');
		if ($('.hot__all').text()=='Показать еще модели') $('.hot__all').text('Скрыть');
        else $('.hot__all').text('Показать еще модели');
	})

	// add class to modls list options mobile
	var mobiletoggle2 = function(){
		if ($(window).width() < 767 )
		{
			$('.models__list.mobile').addClass('is-hidden');
		}
		else{
			$('.models__list.mobile').removeClass('is-hidden');

		}
	};

	$(window).on('load', mobiletoggle2);	
	$(window).on('resize', mobiletoggle2);

	// tabs
	$('ul.tabs').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.section').find('div.box').eq($(this).index()).fadeIn(400).siblings('div.box').hide();
	})

	$('.tabs li').click(function(){
		$('.tabs li div').addClass('gray');
		$(this).find('div').removeClass('gray');
	})

	// sync slider
	$('.js-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		infinite: false,
		adaptiveHeight: true,
		asNavFor: '.js-thumbs'
	});
	$('.js-thumbs').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-big',
		dots: false,
		arrows: false,
		infinite: false,
		focusOnSelect: true
	});

	$('.js-big2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		infinite: false,
		adaptiveHeight: true,
		asNavFor: '.js-thumbs2'
	});
	$('.js-thumbs2').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-big2',
		dots: false,
		arrows: false,
		infinite: false,
		focusOnSelect: true
	});

	$('.js-big3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		infinite: false,
		adaptiveHeight: true,
		asNavFor: '.js-thumbs3'
	});
	$('.js-thumbs3').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-big3',
		dots: false,
		arrows: false,
		infinite: false,
		focusOnSelect: true
	});

	// tabs slider
	$('.tabs.mobile').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: false,
		swipe: true,
		focusOnSelect: true,
		variableWidth: true,
		infinite: false
	});

	// spincrement
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;       
 
        var w_top = $(window).scrollTop();     
        var e_top = $(countbox).offset().top;  
 
        var w_height = $(window).height();   
        var d_height = $(document).height();
 
        var e_height = $(countbox).outerHeight();
 
        if(w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
            	thousandSeparator: '',
                from: 0,
                duration: 3000
            });
 
            show = false;
        }
    });

});

var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.js-big, .js-big2, .js-big3');

var pswpElement = document.querySelectorAll('.pswp')[0];


// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init()