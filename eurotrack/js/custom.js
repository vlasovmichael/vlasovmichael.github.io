$(document).ready(function(){

    // nav menu
    $('.header-top__menu').on('click', function(){
    	$(this).toggleClass('is-active');
        $('.menu-nav').toggleClass('is-open');
    });

    // select2
    $('select:not([multiple])').select2({
        width: '100%',
        minimumResultsForSearch: 30,
        placeholder: $(this).data('placeholder')
    });

});

// yandex map
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.907228, 31.260503],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([55.907228, 31.260503], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Балун метки",
            balloonContentBody: "Содержимое <em>балуна</em> метки",
            hintContent: "Хинт метки"
        });

    myMap.behaviors.disable('scrollZoom')
    myMap.geoObjects.add(myPlacemark);

}