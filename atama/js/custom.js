$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

    // init fancybox
    $('.fancybox').fancybox();

	// top slider
	$('.js-top-slider__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true
	});

	// awards slider
	$('.js-awards__list').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		fade: false,
		infinite: true
	});

});


// google map
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
    
 function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,
	scrollwheel: false,
	

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(38.707697, -77.008094), // New York
    

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: 
    	[
		  {
		    "stylers": [
		      { "saturation": -100 },
		      { "lightness": -47 },
		      { "invert_lightness": true },
		      { "gamma": 0.3 }
		    ]
		  }
		]

    };

	// Get the HTML DOM element that will contain your map 
	// We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
			
	var marker = new google.maps.Marker({   
    	position: new google.maps.LatLng(38.708037, -77.021244),
		map: map,
		icon: 'img/marker.png'
	});
			
	var contentString = 
		'<div class="map-content">'+
			'<div class="map-content__image"><img src="img/map/map-content.png" alt=""></div>'+
			'<h3 class="map-content__title">Vulkan  2000</h3>'+
			'<div class="map-content__place">г. Воронеж</div>'+
			'<div class="map-content__btn"><a href="">Посмотреть модель</a></div>'
		'</div>'
	;

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 360
	});

	   
     
			
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, this);
	});
};