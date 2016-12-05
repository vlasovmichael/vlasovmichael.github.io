$(function(){

	// pixel perfect toggle
	$('body').keydown(function(e){
        if(e.keyCode == 27) {
            $('body').toggleClass('pixelperfect');
        }
    });

    // form styler
    $('input, select').styler();

    // fancybox
	$(".fancybox").fancybox({
		padding: 0
	});

    // next input
    $(".inputs").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.inputs').focus();
        }
    });

	// modal cancel button
	$('.main-form-table__link.modalbtn').click(function(){
		$('.fancybox-close').click();
		return false;
    });

    // aimate round arrows
    $('.main-form-table__link.again').click(function(){
        $('.icon-round-arrows').addClass('animate');
        return false;
    });

    // clear input
    $('input, textarea').each(function () {
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function () {
			$(this).attr('placeholder', '');			
			return false;
		});
		$(this).focusout(function () {
			$(this).attr('placeholder', placeholder);			
			return false;
		});
	});

	// news__carousel
	$('.news__carousel').owlCarousel({
	    loop:false,
	    margin:35,
	    nav:true,
	    dots: true,
	    navText:false,
	    autoplay:false,
	    autoplayTimeout:5000,
	    autoplaySpeed:1000,
	    items:3,
	});

	// hide anketa block
	$(".main-form-table__link.close").click(function () {
		$('.main-form-out.close').hide();
		return false;
    });

    // range slider
	$("#range_08").ionRangeSlider({
		type: "double",
		grid: false,
		from: 4,
		to: 8,
		values: [
		    "D", "C-", "C",
	        "C+", "B-", "B",
	        "B-", "A-", "A", "A+"
		]
	});

	$("#range_08-2").ionRangeSlider({
		type: "double",
		grid: false,
		from: 4,
		to: 6,
		values: [
		    "1", "2", "3",
	        "4", "5", "6",
	        "7", "8", "9", "10"
		]
	});

	// show labels
    $('.toggle_link').click(function(e){
      e.preventDefault();
      var link = $(this);
      var block = $($(this).attr('href'));
      if(!block.is(':visible')){
          link.text('Свернуть');
          block.show();
      }else{
          link.text('Увеличить размер списка');
          block.hide();
      }
    });

    // money format
    $('.money-format').priceFormat();

    // show hide params
    $(".add-param a").on("click", function(){
        $(".param-wrap").slideToggle();
        return false;
    });

    // show hide label
    $(".js-label .jq-checkbox").on("click", function(){
        $(".js-hide").slideToggle();
    });

    // show hide label
    $(".js-label2 .jq-checkbox").on("click", function(){
        $(".js-hide2").slideToggle();
    });

    // autocomplete
    $('#autocomplete').autocomplete({
        lookup: function (query, done) {
            // Do Ajax call or lookup locally, when done,
            // call the callback and pass your results:
            var result = {
                suggestions: [
                    { "value": "Синичкина Мария",        "data": "sinichkina12" },
                    { "value": "Синичкина Мария",        "data": "sinichkina" },
                    { "value": "Синичкина Мария",        "data": "sinichkin" }
                ]
            };
            done(result);
        },
    });

});


// money format
(function ($) {
    // узнать позицию курсора
    $.fn.getCursorPosition = function () {
        var input = this.get(0);
        if (!input) return;
        if ('selectionStart' in input) {
            return input.selectionStart;
        } else if (document.selection) {
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    }
    // установить позицию курсора
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
    // удалить выделенный текст
    $.fn.delSelected = function () {
        var input = $(this);
        var value = input.val();
        var start = input[0].selectionStart;
        var end = input[0].selectionEnd;
        input.val(
                value.substr(0, start) + value.substring(end, value.length)
        );
        return end - start;
    };

    $.fn.priceFormat = function () {

        function priceFormatted(element) {
            element = String(element).replace(/[^\d]/g, '');
            if(!element) return '';
            return (String(parseInt(element))).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        }

        $(this)
        // Отмена перетаскивания текста и вставки через контекстное меню
        .bind('contextmenu', function (event) {
            event.preventDefault();
        })
        .bind('drop', function (event) {
            var value = $(this).val();
            $(this).val(''); // хак для хрома
            $(this).val(value);
            event.preventDefault();
        })
        .keydown(function (event) {
            var cursor = $(this).getCursorPosition();
            var code = event.keyCode;
            var startValue = $(this).val();
            if ((event.ctrlKey === true && code == 86) || // Ctrl+V | Shift+insert
                (event.metaKey === true && code == 86) || 
                    (event.shiftKey === true && code == 45)) {
                return false;
            } else if (
                    code == 9 || // tab
                            code == 27 || // ecs
                            event.ctrlKey === true || // все что вместе с ctrl
                            event.metaKey === true ||
                            event.altKey === true || // все что вместе с alt
                            event.shiftKey === true || // все что вместе с shift
                            (code >= 112 && code <= 123) || // F1 - F12
                            (code >= 35 && code <= 39)) // end, home, стрелки
            {
                return;

            } else if (code == 8) {// backspace

                var delCount = $(this).delSelected();
                if (!delCount) {
                    if (startValue[cursor - 1] === ' ') {
                        cursor--;
                    }
                    $(this).val(startValue.substr(0, cursor - 1) + startValue.substring(cursor, startValue.length));
                }
                $(this).val(priceFormatted($(this).val()));
                $(this).setCursorPosition(cursor - (startValue.length - $(this).val().length - delCount));

            } else if (code == 46) { // delete

                var delCount = $(this).delSelected();
                if (!delCount) {
                    if (startValue[cursor] === ' ') {
                        cursor++;
                    }
                    $(this).val(startValue.substr(0, cursor) + startValue.substring(cursor + 1, startValue.length));
                }
                if (!delCount)delCount = 1;
                $(this).val(priceFormatted($(this).val()));
                $(this).setCursorPosition(cursor - (startValue.length - $(this).val().length - delCount));

            } else {
                $(this).delSelected();
                startValue = $(this).val();
                var key = false;
                // цифровые клавиши
                if ((code >= 48 && code <= 57)) {
                    key = (code - 48);
                }
                // numpad
                else if ((code >= 96 && code <= 105 )) {
                    key = (code - 96);
                } else {
                    $(this).val(priceFormatted($(this).val()));
                    $(this).setCursorPosition(cursor);
                    return false;
                }
                var length = startValue.length
                var value = startValue.substr(0, cursor) + key + startValue.substring(cursor, startValue.length);
                $(this).val(priceFormatted(value));
                $(this).setCursorPosition(cursor + $(this).val().length - startValue.length);
            }
            event.preventDefault();
        });
    };
})(jQuery);



