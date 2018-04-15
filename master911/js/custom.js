$(document).ready(function(){

    // init select2
    $('.js-select2:not([multiple])').select2({
        width: '100%',
        minimumResultsForSearch: 30,
        templateResult: formatState
    });

    function formatState (state) {
        if (!state.id) {
    return state.text;
    }

    var html = '';
    switch(state.text) {
        case '1':
            html = '<img src="img/icons/icons-1.png" alt=""><div>КОТЛЫ</div>';
        break
        case '2':
            html = '<img src="img/icons/icons-2.png" alt=""><div>колонки</div>';
        break
        case '3':
            html = '<img src="img/icons/icons-3.png" alt=""><div>бойлеры</div>';
        break
        case '4':
            html = '<img src="img/icons/icons-4.png" alt=""><div>ПЛИТЫ / ДУХОВОКИ</div>';
        break
        case '5': 
            html = '<img src="img/icons/icons-5.png" alt=""><div>СТИРАЛЬНЫЕ МАШИНЫ</div>';
        break
        case '6': 
            html = '<img src="img/icons/icons-6.png" alt=""><div>ХОЛОДИЛЬНИКИ</div>';
        break
    }
      
    var $state = $(
        '<div class="custom-results">'+html+'</div> '
    );
        return $state;
    };

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

    // reviews slider 
    $('.js-reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true
    });

    // live orders slider 
    $('.js-live-orders').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        draggable: false,
        infinite: false,
        autoplaySpeed: 5000,
        arrows: false
    });

});


// 
// Setup Canvas
var canvas = document.getElementById('visualizer');
var canvasContext = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

// Setup Audio Context
var audioContext = new AudioContext();
var audio = document.getElementById('audio');

var source = audioContext.createMediaElementSource(audio);
var analyser = audioContext.createAnalyser();

source.connect(analyser);
analyser.connect(audioContext.destination);

var bufferLength = analyser.frequencyBinCount;
var frequencyData = new Uint8Array(bufferLength);

// Visualizer Settings
function Visualizer() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  analyser.getByteFrequencyData(frequencyData);

  var frequencyWidth = (canvas.width / bufferLength),
    frequencyHeight = 0,
    x = 0;

  for (var increment = 0; increment < bufferLength; increment++) {
    frequencyHeight = frequencyData[increment] * (canvas.height * 0.003);
    
  var my_gradient = canvasContext.createLinearGradient(0,0,canvas.width,0);
  
  my_gradient.addColorStop(0,"#FFFFFF");
  my_gradient.addColorStop(1,"#FFFFFF");
    
  canvasContext.fillStyle = my_gradient;
  canvasContext.fillRect(x, canvas.height - frequencyHeight, frequencyWidth, frequencyHeight);
    x += frequencyWidth + 4;
  }

  call = requestAnimationFrame(Visualizer);
}

// Default Audio Variable
var isPlaying = true;

// Start Visualizer on Load
var startVisualizer = function() {
  isPlaying = !isPlaying;
  Visualizer();
}
startVisualizer();

// Audio and Visualizer Controls
var controls = document.getElementById('controls');
var ctrl_label = document.getElementById('control-label');

controls.addEventListener('click', function() {
  isPlaying = !isPlaying;

  if (isPlaying) {
    controls.innerHTML = "<span class='icon-volume-high'></span>";
    controls.style.background = "#FFA500";
    ctrl_label.innerHTML = "Audio <span>On</span>";
    audio.play();
    Visualizer();
  } else {
    controls.innerHTML = "<span class='icon-volume-mute''></span>";
    controls.style.background = "#0000FF";
    ctrl_label.innerHTML = "Audio <span>Off</span>";
    audio.pause();
    cancelAnimationFrame(call);
    canvas.height = window.innerHeight / 2;
  }
});

// Load the Audio
// var request = new XMLHttpRequest();

// request.open('GET', 'https://s3-us-west-2.amazonaws.com/harriscarney/audio/Foliation.mp3', true);
// request.responseType = 'blob';

// request.onload = function() {
//   audio.src = window.URL.createObjectURL(request.response);
//   console.log(request.response);
// }

// request.send();

// Resize Canvas on Browser Resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;
});