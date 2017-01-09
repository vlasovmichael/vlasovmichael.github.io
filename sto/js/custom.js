$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('rtl');
        }
    });

    // pop up fancybox init
    $('.fancybox').fancybox({
    	padding: 0
    });

    // init custom input
    $('input').styler();

    // slick kit init
    $(".js-main-block__right").stick_in_parent();

    // select2 init
    $(".js-search-item__select,.js-filling__select").select2();

	// like click
	$('.js-like').on('click', function(e){
		$(this).toggleClass('is-active');
		e.preventDefault();
	})

	// filling toggle items
	$('.js-filling__title').on('click', function(){
		$(this).parent('.filling__item').find('.filling__content').slideToggle();
		$('.filling__icon').toggleClass('is-active');
	})

	$('.filling__icon-top').on('click', function(){
		$('.filling__cont').slideToggle();
		$('.filling__icon-top').toggleClass('is-active');
	})

	// count symbols
	$("textarea[class='filling__input']").each(function() {
    	$(this).keyup(function count(){
		    var number = $(this).val().length;
		    $(this).parents('.filling__item').find('.filling__max span').html(number);
		});
	});

	// anchor
	$(".scrollto").click(function(e) {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({
				scrollTop: destination
			}, 800);
		e.preventDefault();	   	
	});

	// scroll to top
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 100) {
	    	$('.scrollup').addClass('is-active');
	    } else {
	    	$('.scrollup').removeClass('is-active');
	    }
	});
	     
	    $('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	})

	// add new element
	$('.filling__wrap--plus').on('click', function(){
		$('.filling__wrap--new-el').append('<div class="filling__wrap"><input class="filling__input" type="text" placeholder="Вставьте ссылку на видео с YouTube"></div>');
	})

	// upload photo
	$('.js-file-button').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.b-file').find('.js-file-input').trigger('click');
    });

    $('.js-file-input--1').on('change', function(e) {
        var html = '';
        if (!e.target.files || !window.FileReader) return;
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        var el = $(this);
        var parent = el.parents('.b-file');
        filesArr.forEach(function(f) {
            var reader = new FileReader();
            reader.onload = function(e) {
                html += "<div class='js-img-file'><img class='media-edit__img' src=\"" + e.target.result + "\"></div>";
                // selDiv.innerHTML += html;
                if (el.hasClass('js-file-input-change')) {
                    parent.find('.js-img-file-del-1').trigger('click');
                    parent.find('.js-media-edit-figure').prepend(html);
                }
            }
            reader.readAsDataURL(f);
        });
    });

    $(document).on('click', '.js-img-file-del-1', function(e) {
        e.preventDefault();
        $(this).parents('.b-file').find('.js-img-file').remove();
    });

	// map item click
    // $('.js-map__nav .map__item').click(function(){
    //   $(this).addClass('is-active').siblings().removeClass('is-active');
    // });

	// validate select
    $('#submit').on('click', function(e) {
        $('.main-block__search .search-item').each(function() {
            var $this = $(this);
            var el = $this.find('.js-search-item__select');
            if($(el).val() == 0) {
                // если select пустой
                $this.find('.search-item__hidden').addClass('is-show');
            }
            else{
                $this.find('.search-item__hidden').removeClass('is-show');
            }
        });
        e.preventDefault();
    });

    var mobilearrow = function(){
		if ($(window).width() < 767 )
		{
			 $('.js-map__nav .map__item').click(function(){
		    	$(this).removeClass('is-active').siblings().removeClass('is-active');
		    });
		}
		else{
			$('.js-map__nav .map__item').click(function(){
		      $(this).addClass('is-active').siblings().removeClass('is-active');
		    });
		}
	};

	$(window).on('load', mobilearrow);	
	$(window).on('resize', mobilearrow);

    // mobile map list init
	var mobilelist = function(){
		if ($(window).width() < 767 )
		{
			$(".js-map__nav").attr("id","mobileselect");
		}
		else{
			$(".js-map__nav").removeAttr("id","mobileselect");
		}
	};

	$(window).on('load', mobilelist);	
	$(window).on('resize', mobilelist);

	var handlerselect = function(){
		if ($(window).width() < 767 )
		{
			$("#mobileselect").on("click", ".init", function() {
		    	$(this).closest("#mobileselect").children('li:not(.init)').toggle();
			});

			var allOptions = $("#mobileselect").children('li:not(.init)');
			$("#mobileselect").on("click", "li:not(.init)", function() {
			    allOptions.removeClass('selected');
			    $(this).addClass('selected');
			    $("#mobileselect").children('.init').html($(this).html());
			    allOptions.toggle();
			});
		}
	};

	$(window).on('load', handlerselect);	
	$(window).on('resize', handlerselect);

    // append blocks
	var interview = function(){
		if ($(window).width() < 991 )
		{
			$('#place1').append( $('#place2>.interviews-links'));
		}
		else{
			$('#place2').append( $('#place1>.interviews-links'));
		}
	};

	$(window).on('load', interview);	
	$(window).on('resize', interview);

	var mapapp = function(){
		if ($(window).width() < 767 )
		{
			$('#place3').append( $('#place4>.map__right'));
		}
		else{
			$('#place4').append( $('#place3>.map__right'));
		}
	};

	$(window).on('load', mapapp);	
	$(window).on('resize', mapapp);

	// custom scroll bar init and destroy
	var mapapp = function(){
		if ($(window).width() < 767 )
		{
			$(".js-map__nav").mCustomScrollbar('destroy');
		}
		else{
			$(".js-map__nav").mCustomScrollbar();
		}
	};

	$(window).on('load', mapapp);	
	$(window).on('resize', mapapp);

	var stickuns = function(){
		if ($(window).width() < 991 )
		{
			$('#place5').append( $('.js-main-block__right'));
		}
		else{
			$('.js-main-block__right').append( $('#place5>.js-main-block__right'));
		}
	};

	$(window).on('load', stickuns);	
	$(window).on('resize', stickuns);

	// mobile spoiler
	$('.price__hidden').on('click', function(){
		$(this).toggleClass('is-active');
		$('.main-block .price__item:nth-child(n+4)').slideToggle();
		if ($('.price__hidden').text()=='Ещё') $('.price__hidden').text('Скрыть');
        else $('.price__hidden').text('Ещё');
	})

	$('.sale__hidden').on('click', function(){
		$(this).toggleClass('is-active');
		$(this).parent('.sale__item').find('p span').slideToggle();
		if ($('.sale__hidden.is-active').text()=='Ещё') $('.sale__hidden.is-active').text('Скрыть');
        else $('.sale__hidden').text('Ещё');
	})

	$('.description__hidden').on('click', function(){
		$(this).toggleClass('is-active');
		$('.description p span').slideToggle();
		if ($('.description__hidden').text()=='Ещё') $('.description__hidden').text('Скрыть');
        else $('.description__hidden').text('Ещё');
	})

	$('.select-city__more').on('click', function(){
		$(this).toggleClass('is-active');
		$('.select-city--hidden').slideToggle();
		if ($('.select-city__more').text()=='Ещё') $('.select-city__more').text('Скрыть');
        else $('.select-city__more').text('Ещё');
	})

	// top slider main
	$('.js-top-carousel').slick({
		dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1
	});

	// top slider main
	$('.clinic-photos').slick({
		dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        // centerMode: true,
        speed: 300,
        variableWidth: true,
        responsive: [
    	{
	      	breakpoint: 767,
	      	settings: {
	        	slidesToShow: 3
      		}
    	},
    	{
	      	breakpoint: 500,
	      	settings: {
	        	slidesToShow: 2
      		}
    	},
    	{
	      	breakpoint: 416,
	      	settings: {
	        	slidesToShow: 1,
        		variableWidth: false
      		}
    	}
    	]
	});

	// popular slider
	$('.js-main-block__popular').slick({
		dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        responsive: [
    	{
	      	breakpoint: 991,
	      	settings: {
	        	slidesToShow: 2
      		}
    	},
    	{
	      	breakpoint: 767,
	      	settings: {
	        	slidesToShow: 1
      		}
    	}
    	]
	});

});

// google map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    scrollwheel: false,
    center: {lat: 51.655671, lng: 39.242249}
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [
  ['Bondi Beach', 51.651111, 39.241119, 4],
  ['Coogee Beach', 51.655331, 39.243339, 5],
  ['Cronulla Beach', 51.655571, 39.252559, 3],
  ['Manly Beach', 51.657771, 39.246779, 2],
  ['Maroubra Beach', 51.655991, 39.249999, 1]
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'img/map-marker.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(19, 28),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}