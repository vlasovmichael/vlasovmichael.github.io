 $(function(){
    $('#page').val('1');
    // initUpdatedFunctions();
    initInputs();
    initCarousel();
    productDrop();
    navArrowPosition();    
    initPlugins();
    initAccordion();
    initFilterToggle();
    infoBoxArrowPosition();
    activeStateOnChecked();
    initSlideShow();
    initHovers();
    initDropzone(); 
    initCart();
    initActionPopup();   
    orderUpdateGoods();
    initOrderScripts();
    initSearch();
    regValidate();
    loginValidate();
    initPagination();
    initProductPagination();
    initMaps();
    initPopups();   
    initGallery();
    initOptions();
    imageSecure();
    mobileScripts();
    fotoramaScript();
    popupObj();
    initDoubleTapToGo();
    buy_in_color();
});
  var owlP = {};
function getPrice(price){
    price=price.replace(/ /g,"");
    price=price.match(/(\d*)\.?(\d*)(,|\.){0,1}(\d+)/)[0];
    price=price.replace(/^(\d*)\.?(\d*)(\.|,)(\d+)$/,"$1$2$3$4");
    price=price.replace(/,/,".");
    return price;
}
function imageSecure() {
   $("img").on("contextmenu", false);
    $("img:not(.ui-draggable)").on("dragstart", false).on("drop", false);
}

function mobileScripts() {
    $('#nav li').mouseout(function() {
        $("body").css("cursor","auto");
    });
    
    //Аксессуары в IOS
    $('.item-section .accessoires li').on('touchstart', function(e){
        $('.item-section .accessoires li').find('.drop').css('display','none');
        $(this).find('.drop').css('display','block');
    });

    // $(".products  .drop .slideset li a>img").on('touchstart',function(e){
    //      var cliked = $(e.target).parent();
    //     window.location = cliked[0].href;
    // });

    $('.item-section .accessoires li a>img').on('touchstart',function(e){
        var cliked = $(e.target).parent();
        window.location = cliked[0].href;
    });
     $('.item-section .accessoires li .drop .title>a').on('touchstart',function(e){
        var cliked = $(e.target);
        window.location = cliked[0].href;
    });
     $(".item-section .visual .holder .slideset .info a.btn-green").on('touchstart',function(e){
        var cliked = $(e.target);
        window.location = cliked[0].href;
    });
    $('#footer, .catalog, .products-racks h2').on('touchstart', function(e){
        $('.item-section .accessoires li').find('.drop').css('display','none');
        var touchClass = e.originalEvent.targetTouches[0].target.parentElement.parentElement.className;
        if(touchClass!='sub-holder') {
            $('#abs-hover').remove();
        }
        e.stopPropagation();
    });
    //Готовые наборы
    // $('#main, #footer').on('click', function(e){
    //     e.stopPropagation();
    //    $('#abs-hover').remove();
    // });
    var firstTouch;
    $('.products-racks-holder>.holder>.list>li').on("touchstart", function(){
        event.preventDefault();
        event.stopPropagation();
        var hovered = $(this);
        $.when($('#abs-hover').remove()).then(function(){
            var elem = hovered.html();
            var pos = hovered.position();
            var marg_str = hovered.parent().css('margin-left');
            var margin = marg_str.slice(0,marg_str.length-2);
            pos.left += parseInt(margin);
            $.when($('.products-racks-holder').parent().append('<div id="abs-hover" class="fader-abs" style="display:none;left:'+pos.left+'px;top:'+pos.top+'px;">'+elem+'</div>')).then(
                function(){
                    $('#abs-hover').fadeIn(400);    

                });         
        });
        firstTouch = true;      
    });
    
}

function fotoramaScript() {
    $(".gallery_fotorama").fotorama({
         width:700,
         // height:365,
         nav:false,
         arrows:'always'
    });
}
function initOptions(elem) {
    var button = $('.option_checker');
    button.on('click', function(e) {
        e.preventDefault();
        var price = $(this).attr('data-price'),
            sale = $(this).attr('data-sale'),
            status = $(this).attr('data-status'),
        image = $(this).attr('data-image'),
        preview = $(this).attr('data-preview'),
        retina = $(this).attr('data-retina');
        // смена активного цвета
        $(this).closest('.colors').find('li').removeClass('active');
        //$(".colors li").removeClass('active');
        $(this).parent().addClass('active');
        
        //смена цены
        if(price && $(this).closest(".sm").length==0){
            $(".product-section .price").html(price);
            $(".product-section .price").next().attr('content',getPrice(price));
            if(sale){
                $('.item-section .product-section .two-cols .col-2 strong').text(sale);
            }
        }
        // смена артикула
        $(".article dd").html($(this).attr('data-sku'));

        // смена статуса опции товара
        if (status=='instock'){
            $('.product-section .status').removeClass('status-none');
            $('.product-section .status').html('<i class="ico"></i> ' + translationsOptions.in_stock);

        }else{
            $('.product-section .status').addClass('status-none');
            $('.product-section .status').html('<i class="ico"></i> ' +  translationsOptions.pre_order);
        }

        // смена картинки
        if(image !== '' && preview !== '') {
            if($(this).closest(".sm").length){
                $(this).closest('.drop').find('.slideset li').removeClass("active");
                $(this).closest('.drop').find('.slideset img:first').attr("src", image);
                $(this).closest('.drop').find('.slideset li:first').addClass("active");
               //check retina
                if(retina == '1'){
                    retinaOne($(this).closest('.drop').find('.slideset img:first')[0]);
                }
                if(price)
                    $(this).closest('.drop').find(".wrap-price").find('.price').html(price);
            }else{
                $(".img-list li").removeClass("active");

                $(".img-list .slideset img:first").attr("src", image);

                $(".img-list .pager li:first").addClass("active");
                $(".img-list .pager img:first").attr("src", preview).trigger('click');
                //check retina
                if(retina == '1'){
                    retinaOne($(".img-list .slideset img:first")[0]);
                	retinaOne($(".img-list .pager img:first")[0]);
                }
            }

        }
    });

}

function initGallery() {
    // setTimeout(function() {
    //     alert();
    // }, 1000);
    // alert();
    var button = $('.gallery-link');
    button.each(function() {
        var link = this;
        $(this).fancybox({
            'width': 780,
            // 'height':590,
            // 'autoSize' : false,
            afterShow: function(){
                var r = $(this);
                var slide = $("#"+$(link).attr('data-slide'));
                slide.bxSlider({
                    pagerCustom: "#"+$(link).attr('data-pager')
                });
                $("#"+$(link).attr('data-pager')).bxSlider({
                    slideWidth: 57,
                    minSlides: 2,
                    maxSlides: 10,
                    marginSlide:2,
                    nextSelector: '.btn-next',
                    prevSelector: '.btn-prev',
                    pager:false
                });
            }
        });
    });
}

function initMaps() {

    var button = $('.map-link');
    button.fancybox({
        afterLoad : function() {
            coordX = $(this.element).attr('data-x');
            coordY = $(this.element).attr('data-y');
            $('div.fancybox-close').addClass('btn-close');
        },
        afterShow: function(){
            var mapCanvas = document.getElementById('map-canvas'),
            myLatLng = new google.maps.LatLng(coordX, coordY),
            mapOptions = {
                center: myLatLng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            map = new google.maps.Map(mapCanvas, mapOptions),
            iconBase = 'catalog/view/theme/idea/images/marker.png',
            marker = new google.maps.Marker({
                position: map.getCenter(),
                map: map,
                icon: iconBase
            });
        },
        beforeClose: function(){
            $("#map-canvas").empty();
        }
    });
}

function initActionPopup(){
    var button = $('.action_popup');
    button.fancybox({

    });
}

function orderUpdateGoods() {
    var product_input = $(".order_product_input");

    product_input.on('change', function() {
        var quantity = $(this).val(),
        id = $(this).attr('data-id'),
        url = 'index.php?route=module/checkout&update='+id+'&quantity='+quantity;
        location = url;
    });
}

function initOrderScripts() {
    var constr_checkbox = $('input[name="construct"]').not( "span" ),
    info_block = $(".order-info"),
    delivery_checkbox = $('input[name="delivery"]').not( "span" ),
    status = 0;

    constr_checkbox.on('change click', function() {
        if($(this).attr("checked")){
            status = 1;
        } else {
            status = 0;
        }
        var delivery_checkbox = $('input[name="delivery"]:checked');
        $.getJSON( "index.php?route=module/checkout/change_block&constr="+ status + "&delivery=" + delivery_checkbox.val(), function(data) {
            $(".total-span").html(data.total);
            info_block.html(data.cart);
            orderUpdateGoods();
        });
    });

    delivery_checkbox.on('change click', function() {
        if(constr_checkbox.attr("checked")){
            status = 1;
        } else {
            status = 0;
        }
        $.getJSON( "index.php?route=module/checkout/change_block&constr="+ status + "&delivery=" + $(this).val(), function(data) {
            $(".total-span").html(data.total);
            info_block.html(data.cart);
            orderUpdateGoods();
        });
    });
}

function initPagination() {
    var button = $('.pagintaion-btn'),
    href = button.attr("href"),
    total = button.data("total"),
    limit = button.data("limit"),
    start = button.data("start"),
    news = button.data("news"),

    items_block = $(".news-list .list");

    button.on('click', function(e) {
        e.preventDefault();
        //alert(news);
        $.ajax({
            url: href,
            type: 'post',
            data: {
                page: button.data("page"),
                limit: limit,
                start: start,
                news_id:news
            },
            success: function(data) {
                var current_page = parseInt(button.data("page")) + 1,
                    shown = 4 + limit*(current_page-1);
                button.data("page", current_page);
                items_block.append(data);

 		var d = total - shown;

		if (d < 10) button.text('Еще ' + declOfNum(d, [' статья', ' статьи', ' статей']));

                if(shown >= total) {
                    button.remove();
                }
            }
        });
    });
}

function initProductPagination() {
    var button = $('#pagination_btn'),
    page = $("#page"),
    total_products = $("#total_products"),
    limit = $("#limit"),
    search = $("#search"),
    category = $("#products_category_id"),
    products_list = $(".catalog .products .list"),
    filter_params = $("#filter_params"),
    sort = $("#sort");

    button.on('click', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'index.php?route=product/category/add_products',
            type: 'post',
            data: {
                page: page.val(),
                category_id: category.val(),
                filter_params: filter_params.val(),
                sort : sort.val(),
                search : search.val(),
            },
            success: function(data) {
                var current_page = parseInt(page.val()) + 1,
                shown_products = current_page * limit.val();

                page.val(current_page);
                products_list.append(data);
                if($(".filter_li").hasClass("filter-open") && $(".filter_li").height() > 320){
                    if($(".filter_li").height()>663)
                        recountCss(Math.ceil($(".filter_li").height()/320));
                    else recountCss(2);
                }
                productDrop();
                initOptions();
                buy_in_color();
                imageSecure();
                retinajs();
 		var t = total_products.val()-shown_products;

		if (currentLanguage == 'ru') {
			if (t < 20) button.text('Показать еще ' + declOfNum(t, [' вариант', ' варианта', ' вариантов']));
		}else if (currentLanguage == 'ua') {
			if (t < 20) button.text('Показати ще ' + declOfNum(t, [' варіант', ' варіанта', ' варіантів']));
		}else if (currentLanguage == 'en'){
			if (t < 20) button.text('Show more ' + declOfNum(t, [' option', ' options', ' options']));
		}else {
			if (t < 20) button.text('Показать еще ' + declOfNum(t, [' вариант', ' варианта', ' вариантов']));
		}

                if(shown_products >= total_products.val()) {
                    button.parent().remove();
                }
            }
        });
    });
}

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return number + titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function initSearch() {
    var form = $('.search'),
    search_url = $('#search_url').val(),
    input = $('input[name="filter_name"]');
    form.on('submit', function(e){
        e.preventDefault();
        var search = input.val();
        if(input.hasClass('text-active'))
            location = search_url + '&filter_name=' +search;
    });
}

function loginValidate() {
    var email = $('#login-email'),
    password = $('#login-pass'),
    remember = $('#remember'),
    form = $('#login-form');

    form.submit(function(e){
        e.preventDefault();
        $(".warning").remove();

        $.ajax({
            type: 'POST',
            url: 'index.php?route=module/login/login',
            data: {
                email : email.val(),
                password : password.val(),
                remember:remember.prop("checked")
            },
            dataType: 'json',
            beforeSend: function () {
                $(".in_process").show();
            },
            success: function(data) {
                $(".in_process").fadeOut();
                if(data.error) {
                    $(email).parent().before(data.error.email);
                    $(password).parent().before(data.error.password);
                } else {
                    location.reload();
                }
            }
        });
    });

}

function regValidate() {
    var email = $('#reg-email'),
    form = $('#reg-form'),
    redirect = $('#reg-form-redirect');
    form.submit(function(e){
        e.preventDefault();
        $(".warning").remove();

        $.ajax({
            type: 'POST',
            url: 'index.php?route=module/login/registration',
            data: {
                email : email.val(),
                redirect : redirect.val()
            },
            dataType: 'json',
            beforeSend: function () {
                $(".in_process").show();
            },
            success: function(data) {
                $(".in_process").fadeOut();
                if(data.error) {
                    $(email).parent().after(data.error);
                } else {
                    location.reload();
                }
            }
        });
    });

}

function deleteFromCart(product_id) {
    $.ajax({
        url: 'index.php?route=checkout/cart/add/',
        type: 'post',
        data: {
            'product_id' : product_id,
            'delete' : 'delete'
        },
        dataType: 'json',
        success: function(json) {
            if (json['success']) {
                $('.cart').parent().html(json['cart']);
                $('.cart').parent().addClass("cart-popup-holder");
                initCart();
            }
        }
    });
}

function updateCart(product_id, quantity) {
    var quantity = typeof(quantity) != 'undefined' ? quantity : 1;

    $.ajax({
        url: 'index.php?route=checkout/cart/add/',
        type: 'post',
        data: {
            'product_id' : product_id,
            'quantity' : quantity,
            'update' : 'update'
        },
        dataType: 'json',
        success: function(json) {
            if (json['success']) {
                $('.cart').parent().html(json['cart']);
                $('.cart').parent().addClass("cart-popup-holder");
                retinajs();
                initCart();
            }
        }
    });
}
function buy_in_color(){
    $('.buy_in_color').click(function(e){
        e.preventDefault();
        var id = $(this).closest('.drop').find('.sm li.active a').data("id"),
        option_id = $(this).closest('.drop').find('.sm li.active a').data("option-id"),
        product_id = $(this).data('product');
        var options = [];
        var quantity = 1;

    if(id && option_id) {
        // options[option_id] = id;
        options.push(option_id);
        options.push(id);
    }
    $.ajax({
        url: 'index.php?route=checkout/cart/add/',
        type: 'post',
        data: {
            'product_id' : product_id,
            'quantity' : quantity,
            'option' : options
        },
        dataType: 'json',
        success: function(json) {
            if (json['redirect']) {
                location = json['redirect'];
            }
            if (json['success']) {
                $('.cart').parent().html(json['cart']);
                //$('#cart-total').html(json['total']);

                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');

                retinajs();
                // $('.cart').parent().addClass("cart-popup-holder");
                initCart();
            }
        }
    });

    });
}
function addToCart(product_id, quantity) {
    var quantity = typeof(quantity) != 'undefined' ? quantity : 1;
    var id = $(".colors li.active a").attr("data-id"),
    option_id = $(".colors li.active a").attr("data-option-id");
    var options = [];

    if(id && option_id) {
        // options[option_id] = id;
        options.push(option_id);
        options.push(id);
    }
    $.ajax({
        url: 'index.php?route=checkout/cart/add/',
        type: 'post',
        data: {
            'product_id' : product_id,
            'quantity' : quantity,
            'option' : options
        },
        dataType: 'json',
        success: function(json) {
            if (json['redirect']) {
                location = json['redirect'];
            }
            if (json['success']) {
                $('.cart').parent().html(json['cart']);
                //$('#cart-total').html(json['total']);

                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');

                $('.cart').parent().addClass("cart-popup-holder");
                retinajs();
                initCart();
            }
        }
    });
}


// function initCart() {
//     var button = $('.cart'),
//     wrapper = button.parent();
//     button.on('click', function(e){
//         e.preventDefault();
//         if(button.hasClass("hold-enable")) {
//             wrapper.toggleClass("cart-popup-holder");
//         }
//     });
//     $(document).click(function(e){
//         if($(e.target).closest(wrapper).length) {
//             $('body').css("cursor","pointer");
//             return;
//         }else $('body').css("cursor","auto");
//         wrapper.removeClass("cart-popup-holder");
//         e.stopPropagation();
//     });

// }

function initCart() {
    var button = $('.cart');
    button.on('click', function(e){
        e.preventDefault();
          if(button.hasClass("hold-enable")) {
            $('#popup .cart-popup').addClass('is-open');
            $.lockBody();
          }
      });

      $('#popup .cart-popup .btn-close').on( "click", function() {
        $('#popup .cart-popup').removeClass('is-open');
        $.unlockBody();
      });
}

function initFilterToggle() {
    var wrapper = $('.filter_li'),
    button = $('#filter_toggle');

    //    console.log($(".catalog .products .list >li:not(li.filter_li)").length);
    if(wrapper.height() < 320){
        button.hide();
    }

    button.on('click', function(e){
        e.preventDefault();
        wrapper.toggleClass("filter-open");
        if(wrapper.height() > 320){

            if(wrapper.height()>663)
                recountCss(Math.ceil(wrapper.height()/320));
            else recountCss(2);
        }
        else {
            // $(".catalog .products .list li:nth-child(4n) .drop").css({
            //   left: 'auto',
            //   right: 0
            // });
        }
    });
}

// incomplete = это рядки по 3 элемента
// function recountCss(incomplete){
//     var c1 = incomplete*3+3,
//     c = incomplete*3; //номер рядка по 4 элемента

//      $.each($(".catalog .products .list >li:not(li.filter_li)"), function(item, value){
//         //не целые рядки
//             if(incomplete){
//                 if((item+1)%3 === 0){
//                     $(value).find(".drop").css({
//                         left: 'auto',
//                         right: 0
//                     });
//                     incomplete--;
//                 }else if((item+1)%3 == 1){
//                     $(value).find(".drop").css({
//                         left: 0,
//                         right: 0
//                     });
//                 }
//             }else{
//                 if((item) == c1 ){
//                     $(value).find(".drop").css({
//                         left: 'auto',
//                         right: 0
//                     });
//                     c1 = c1+4;
//                 }else{
//                     $(value).find(".drop").css({
//                         left: 0,
//                         right: 0
//                     });
//                 }


//             }
//         });
// }
function activeStateOnChecked(){
    var parent = $('.order-section .radio-list li'),
    radioButton = parent.find('input[type=radio]'),
    activeClass = 'show-info';
    activeClass2 = 'show-address';
    // radioButton.each(function(){
    //     var cur = $(this);
    //     if(cur.is(':checked')){
    //         cur.parents('li').first().addClass(activeClass);
    //     }
    // });
    radioButton.on('change click', function(){
        var cur = $(this);
        if(cur.is(':checked')){
            var holder = cur.parents('li');
            if(holder.find('.info-box').length){
                parent.removeClass(activeClass);
                holder.addClass(activeClass);
            }
        }
    })
}

function infoBoxArrowPosition(){
    var parent = $('.order-section .radio-list'),
    infoBox = parent.find('.info-box');
    infoBox.each(function(){
        var cur = $(this),
        arrow = cur.find('.arrow'),
        holder = cur.parents('li');
        holderPosition = holder.position().top;
        arrow.css('top', holderPosition - 30);
    });
}

// accordion menu init
function initAccordion() {
    jQuery('.faq .list').slideAccordion({
        opener: '.opener',
        slider: '.slide',
        animSpeed: 300
    });
}

function navArrowPosition(){
    var nav = $('#nav'),

    navFirstItem = nav.find('> ul > li:first-child'),
    navLastItem = nav.find('> ul > li:last-child'),
    navFirstItemWidth = navFirstItem.width(),
    navLastItemWidth = navLastItem.width(),
    arrowFirst = navFirstItem.find('.arrow'),
    arrowLast = navLastItem.find('.arrow');
    arrowFirst.css('left', navFirstItemWidth/2);
    arrowLast.css('right', navLastItemWidth/2);

}
  function makeCounter() {
      var currentCount = 0;

      return function() {
        currentCount++;
        return currentCount;
      };
    }


function initUpdatedFunctions(){
     // owlP = $(".catalog .products .drop .holder .slideset").owlCarousel({
     //        rewindNav:false,
     //        pagination:false,
     //        singleItem:true,
     //        touchDrag: false,
     //        scrollPerPage:true
     //    });
    // jQuery('.products li > .drop').scrollGallery({
    //     mask: '.holder',
    //     slider: '.slideset',
    //     slides: '> li',
    //     btnPrev: 'a.btn-prev',
    //     btnNext: 'a.btn-next',
    //     pagerLinks: '.pagination li',
    //     autoRotation: false,
    //     circularRotation: false,
    //     switchTime: 3000,
    //     animSpeed: 500
    // });

    // console.log($(".catalog .products .drop .holder .btn-prev"));
    //     $(".catalog .products .drop .holder .btn-prev").on('click', function(e){
    //         console.log("prev");
    //         e.preventDefault();
    //         e.stopPropagation();
    //         // owl.prev();

    //        owl.trigger('owl.prev');
    //     });
    //     var counter1 = 2,
    //          counter = makeCounter();
    //     $(".catalog .products .drop .holder .btn-next").on('click',function(e){
    //         console.log("next");
    //         var counter;
    //         // alert(counter1);
    //         e.preventDefault();
    //         // e.stopPropagation();
    //        // if(counter1 == 1){

    //          owl.trigger('owl.next');
    //         // counter1 = 0;
    //         //}
    //         // if(counter1 == 2) counter1 = counter();

    //         //this.prev().next();
    //         // return false;
    //     });
    // var owl = $(".products .list li > .drop > .holder");
    //     owl.owlCarousel({
    //     singleItem : true,
    //     pagination:false
    // });

    // $(".products .list li > .drop > .holder .btn-prev").click(function(){
    //    $("#owl-banner").trigger('owl.prev');
    // });

    // $(".products .list li > .drop > .holder .btn-next").click(function(){
    //     $("#owl-banner").trigger('owl.next');
    // });
}
/*************************/
function productDrop(){

    var productLoad = {
        config:{
            loadedStatus: 'loaded',
            activeClass:'active',
            owlArr: []
        },
        init: function(){
            this.findCollection();
            this.bindEvents();
        },
        findCollection: function(){
            this.page = $('html');
            this.parent = $('.products .list');
            this.itemCollection = this.parent.find('> li');
            this.opener = this.parent.find('.opener');

        },
        bindEvents: function(){
            var self = this;
            self.opener.on('click', function(event){
                $('body').css("cursor","pointer");
                // $('html').addClass('is-overflow');
                // $.lockBody();
                // $('.products.favorites-list').addClass('is-overflow');
                var $drop = $(this).parents('li').find('.drop');
                event.preventDefault();
                var cur = $(this),
                href = cur.attr('href'),
                statusAttribute = cur.attr('data-attribute'),
                parentItem = cur.parents('li');

                if(cur.attr('data-attribute') == self.config.loadedStatus){
                    self.itemCollection.removeClass(self.config.activeClass);
                    parentItem.addClass(self.config.activeClass);
                }
                else{
                    self.itemCollection.each(function(){
                        $(this).removeClass(self.config.activeClass);
                    });
                    parentItem.addClass(self.config.activeClass);
                    self.loadContent(href, cur);
                }
                if($(window).width() <= 992) {
                    if ($drop.find('.slideset').hasClass('slick-initialized')){
                        $drop.find('.slideset').slick('unslick');
                    }
                }
                $drop.find('.slideset').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    draggable: false,
                    arrows: true,
                    responsive: [
                        {
                          breakpoint: 768,
                          settings: {
                            arrows: false
                          }
                        }
                    ]
                });
                retinajs();
            });
            self.page.on('click', function(){
                self.itemCollection.removeClass(self.config.activeClass);
                $('body').css("cursor","auto");
                // $('html').removeClass('is-overflow');
                // // $.unlockBody();
                // $('.products.favorites-list').removeClass('is-overflow');
                if($(window).width() <= 992) {
                    $('.slideset').slick('unslick');
                }
            });
            self.itemCollection.on('click', function(event){
                event.stopPropagation();

            });
        },
        //ВО ВСЕМ ВИНОВАТ OLW.CAROUSEL.JS
        loadContent: function(href, curentLink){
            var self = this,
            href = href,
            curentLink = curentLink,
            imgHolder = curentLink.parent('.img-holder'),
            itemHolder = curentLink.parents('li'),
            owlP = imgHolder.parent().find(".drop .holder .slideset"),
            loader = '<span class="loader"><i class="ico"></i></span>';
            var owlA = {};
            $.ajax({
                url: href,
                type: 'GET',
                dataType: 'html',
                beforeSend: function(){
                    imgHolder.append(loader);
                    // owlA = owlP.owlCarousel({
                    //     rewindNav:false,
                    //     pagination:false,
                    //     singleItem:true,
                    //     beforeMove: function(elem){
                    //         var base = this;
                    //         if(base.currentItem == base.maximumItem){
                    //            elem.next().next().addClass("disabled");
                    //         }else{
                    //             elem.next().next().removeClass("disabled")
                    //         }

                    //         if(base.currentItem == 0){
                    //             elem.next().addClass("disabled");
                    //         }else{
                    //             elem.next().removeClass("disabled")
                    //         }
                    //     },
                    //     afterInit: function(elem){
                    //         elem.next().addClass("disabled");
                    //         //initOptions(this);
                    //     }
                    // });
                    owlP.parent().find('.btn-prev').on('click', function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        owlA.trigger('owl.prev');
                    });

                    $(owlP).parent().find('.btn-next').on('click',function(e){
                        console.log("next");
                        e.preventDefault();
                        owlA.trigger('owl.next');

                       // owl.trigger('owl.next');
                    });
                },
                success: function(data){
                    delete owlP;
                    itemHolder.append(data).addClass('active');
                    curentLink.attr('data-attribute', self.config.loadedStatus);
                    // initUpdatedFunctions()


                    var button = $('.option_checker');
                    button.on('click touchstart', function(e) {
                        e.preventDefault();
                        var price = $(this).attr('data-price'),
                            sale = $(this).attr('data-sale'),
                            status = $(this).attr('data-status'),
                        image = $(this).attr('data-image'),
                        preview = $(this).attr('data-preview'),
                        retina = $(this).attr('data-retina');

                        // смена активного цвета
                        $(this).closest('.colors').find('li').removeClass('active');
                        //$(".colors li").removeClass('active');
                        $(this).parent().addClass('active');

                        // смена статуса опции товара
                        if (status=='instock'){
                            $(this).closest('.drop').find('.status').removeClass("status-none");
                            $(this).closest('.drop').find('.status').html('<i class="ico"></i> '  + translationsOptions.in_stock);
                        }else{
                            $(this).closest('.drop').find('.status').addClass("status-none");
                            $(this).closest('.drop').find('.status').html('<i class="ico"></i> ' +  translationsOptions.pre_order);
                        }
     
                        //смена цены
                           
                        if(price && $(this).closest(".sm").length == 0){
                            $(".product-section .price").html(price);
                            $(".product-section .price").next().attr('content',getPrice(price));
                            if(sale){
                                $('.item-section .product-section .two-cols .col-2 strong').text(sale);
                            }
                        }
                        // смена артикула
                        $(".article dd").html($(this).attr('data-sku'));


                        // смена картинки
                        if(image !== '' && preview !== '') {
                            if($(this).closest(".sm").length){
                                $(this).closest('.drop').find('.slideset li').removeClass("active");
                                $(this).closest('.drop').find('.slideset img:first').attr("src", image);
                                $(this).closest('.drop').find('.slideset li:first').addClass("active");
                                //if(!jQuery.isEmptyObject(elem)) elem.trigger("owl.goTo",0);
                                if(retina == '1' && $(this).closest('.drop').find('.slideset img:first')[0]){
                                    retinaOne($(this).closest('.drop').find('.slideset img:first')[0]);
                                }

                                if(price)
                                    $(this).closest('.drop').find(".wrap-price").find('.price').html(price);
                            }else{
                                $(".img-list li").removeClass("active");
                                $(".img-list .slideset img:first").attr("src", image);
                                $(".img-list .pager li:first").addClass("active");
                                $(".img-list .pager img:first").attr("src", preview).trigger('click');
                            }
                            
                        }
                    });
    
                },
                complete: function(){
                    imgHolder.find('.loader').remove();
                }
            });
        }
    }.init();

}
    
function initPlugins(){
    $('input[type=checkbox]').customCheckbox();
    $('input[type=radio]').сustomRadio();
    $('#language>select').customSelect({
        maxHeight: 240,
        optStructure: '<div class="selectOptions lang"><ul></ul></div>'
    });
    $('select:not(".constructor-section select,#select_door, #filter-origin")').customSelect({
        maxHeight: 240
    });
    $('.constructor-section select:not("#filter-origin,#select_door")').customSelect({
        maxHeight: 240,
        optStructure: '<div class="selectOptions alt"><ul></ul></div>'
    });

}

// fade gallery init
function initSlideShow() {
    jQuery('.product-section .img-list').fadeGallery({
        slides: '.slideset > li',
        btnPrev: false,
        btnNext: false,
        pagerLinks: '.pager li',
        event: 'click touchstart',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
}

// scroll gallery init
function initCarousel() {
//banner carousel
    var owl = $(".js-index-banner");
        owl.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 900,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
    });

    // $("#visual .btn-prev").click(function(){
    //    $("#owl-banner").trigger('owl.prev');
    // });

    // $(" #visual .btn-next").click(function(){
    //     $("#owl-banner").trigger('owl.next');
    // });    
    jQuery('.item-section .visual').scrollGallery({
        mask: '> .holder',
        slider: '.slideset',
        slides: '> li',
        btnPrev: '.holder > .btn-prev',
        btnNext: '.holder > .btn-next',
        pagerLinks: '.pager li',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    jQuery('.item-section .visual .pager').scrollGallery({
        mask: '.holder',
        slider: '.pager-list',
        slides: 'li',
        btnPrev: 'a.btn-prev',
        btnNext: 'a.btn-next',
        pagerLinks: '.pager li',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    jQuery('.item-section .visual2').scrollGallery({
        mask: '> .holder',
        slider: '.slideset',
        slides: '> li',
        btnPrev: '.holder > .btn-prev',
        btnNext: '.holder > .btn-next',
        pagerLinks: '.pager li',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    jQuery('.item-section .visual2 .pager').scrollGallery({
        mask: '.holder',
        slider: '.pager-list',
        slides: 'li',
        btnPrev: 'a.btn-prev',
        btnNext: 'a.btn-next',
        pagerLinks: '.pager li',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });

    jQuery('.item-section .product-section .pager').scrollGallery({
        mask: '.holder',
        slider: '.list',
        slides: 'li',
        btnPrev: 'a.btn-prev',
        btnNext: 'a.btn-next',
        pagerLinks: '.pager li',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    jQuery('.item-section .accessoires .holder').scrollGallery({
        mask: '.list',
        slider: '.slideset',
        slides: 'li',
        btnPrev: 'a.btn-prev',
        btnNext: 'a.btn-next',
        pagerLinks: '.pagination li',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    jQuery('.photo-slider').scrollGallery({
        mask: '.holder',
        slider: '.list',
        slides: 'li',
        btnPrev: 'a.btn-prev',
        btnNext: 'a.btn-next',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    jQuery('.products-racks-holder').scrollGallery({
        mask: '> .holder',
        slider: '.list',
        slides: '> li',
        btnPrev: '> a.btn-prev',
        btnNext: '> a.btn-next',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500,
        step: 1
    });
    jQuery('.accessorie-list').scrollGallery({
        mask: '> .holder',
        slider: '.list',
        slides: '> li',
        btnPrev: '> a.btn-prev',
        btnNext: '> a.btn-next',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    jQuery('.constructions-library').scrollGallery({
        mask: '> .holder',
        slider: '.list',
        slides: '> li',
        btnPrev: '> a.btn-prev',
        btnNext: '> a.btn-next',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
    // var owl_presets = $("#olw-presets");
    //     owl_presets.owlCarousel({
    //         singleItem : true,
    //         pagination:false
    //     });

    // $("#visual .btn-prev").click(function(){
    //    $("#owl-banner").trigger('owl.prev');
    // });

    // $(" #visual .btn-next").click(function(){
    //     $("#owl-banner").trigger('owl.next');
    // }); 
    jQuery('.constractor-items').scrollGallery({
        mask: '> .modules-list-wrapper',
        slider: '#modules-list-container',
        slides: '> li',
        btnPrev: '> a.arrow-prev',
        btnNext: '> a.arrow-next',
        autoRotation: false,
        switchTime: 3000,
        animSpeed: 500
    });
 // jQuery('.popup-gallery-slider').scrollGallery({
 //        mask: '> .holder',
 //        slider: '.list',
 //        slides: '> li',
 //        swipeGap: false,
 //        btnPrev: '.holder > .btn-prev',
 //        btnNext: '.holder > .btn-next',
 //        pagerLinks: '.pager li',
 //        autoRotation: false,
 //        switchTime: 3000,
 //        animSpeed: 500
 //    });

}
/* redeclared OpenPopup */
   function popupObj() {
      return  {
        _zIndex: 1000,
        _fadeSpeed: 200,
        _faderOpacity: 0.8,
        _faderBackground :'#fff',
        _faderId:'lightbox-overlay',
        _closeLink: 'a.btn-close, a.close, a.cancel',
        _fader:'',
        _lightbox : null,
        _ajaxClass : 'ajax-load',
        _openers: jQuery('a.open-popup-obj'),
        _page :jQuery(document),
        _minWidth :jQuery('body > div:eq(0)').outerWidth(),
        _scroll :false,

        name:'',
        init: function(){
            this.name= this;
            this._fader = jQuery('#'+this._faderId);
            if(!this._fader.length) {
                this._fader = jQuery('<div />');
                this._fader.attr('id',this._faderId);
                jQuery('body').append(this._fader);
            }
            this._fader.css({
                opacity:this._faderOpacity,
                backgroundColor:this._faderBackground,
                position:'absolute',
                overflow:'hidden',
                display:'none',
                top:0,
                left:0,
                zIndex:this._zIndex
            });
        },
        positionLightbox: function(){
            if(this._lightbox) {
            var _windowHeight = jQuery(window).height();
            var _windowWidth = jQuery(window).width();
            var _lightboxWidth = this._lightbox.outerWidth();
            var _lightboxHeight = this._lightbox.outerHeight();
            var _pageHeight = this._page.height();

            if (_windowWidth < this._minWidth) this._fader.css('width',this._minWidth);
            else this._fader.css('width','100%');
            if (_windowHeight < _pageHeight) this._fader.css('height',_pageHeight);
            else this._fader.css('height',_windowHeight);

            this._lightbox.css({
                position:'absolute',
                zIndex:(this._zIndex+1)
            });

            // vertical position
            if (_windowHeight > _lightboxHeight) {
                if (jQuery.browser.msie && jQuery.browser.version < 7) {
                    this._lightbox.css({
                        position:'absolute',
                        top: parseInt(jQuery(window).scrollTop()) + (_windowHeight - _lightboxHeight) / 2
                    });
                } else {
                    this._lightbox.css({
                        position:'fixed',
                        top: (_windowHeight - _lightboxHeight) / 2
                    });
                }
            } else {
                var _faderHeight = this._fader.height();
                if(_faderHeight < _lightboxHeight) this._fader.css('height',_lightboxHeight);
                if (!this._scroll) {
                    if (_faderHeight - _lightboxHeight > parseInt(jQuery(window).scrollTop())) {
                        _faderHeight = parseInt(jQuery(window).scrollTop())
                        this._scroll = _faderHeight;
                    } else {
                        this._scroll = _faderHeight - _lightboxHeight;
                    }
                }
               this. _lightbox.css({
                    position:'absolute',
                    top: _scroll
                });
            }

            // horizontal position
            if (this._fader.width() >this._lightbox.outerWidth()) this._lightbox.css({
                left:(this._fader.width() -this._lightbox.outerWidth()) / 2
            });
            else this._lightbox.css({
                left: 0
            });
        }
        },
        toggleState: function(_state) {
            var self = this;
            if(!this._lightbox) return;
            if(_state) {
                this._fader.fadeIn(this._fadeSpeed,function(){
                    (self._lightbox).fadeIn(self._fadeSpeed);
                });
                this._scroll = false;
                this.positionLightbox();
            } else {
                this._lightbox.fadeOut(this._fadeSpeed,function(){
                    self._fader.fadeOut(self._fadeSpeed);
                    self._scroll = false;
                });
            }
        },
    initPopupActions: function(_obj) {
        var self = this;
        if(!_obj.get(0).jsInit) {
            _obj.get(0).jsInit = true;
            // close link
            _obj.find(self._closeLink).click(function(e){
                e.preventDefault();
                 self._lightbox = _obj;
                self.toggleState(false);
                return false;
            });
        }
    },
    openPopup: function(_target){
        var self = this;
        if(jQuery(_target).length) {
            // init actions for popup
            var _popup = jQuery(_target);
            self.initPopupActions(_popup);
            
            if(self._lightbox) {
                self._lightbox.fadeOut(self._fadeSpeed,function(){
                    self._lightbox = _popup.hide();
                    self.toggleState(true);
                })
            } else {
                self._lightbox = _popup.hide();
                self.toggleState(true);
            }
        }
            return false;
    }

    };
}

function initDoubleTapToGo() {
    jQuery( '#nav li:has(ul)' ).doubleTapToGo();
}

// clear inputs on focus
function initInputs() {
    PlaceholderInput.replaceByOptions({
        // filter options
        clearInputs: true,
        clearTextareas: true,
        clearPasswords: true,
        skipClass: 'default',
        
        // input options
        wrapWithElement: false,
        showUntilTyping: false,
        getParentByClass: false,
        placeholderAttr: 'value'
    });
}

function initDropzone() {
    var fileList = new Array;
    var i = 0;
    if($("#drop-zone").length>0) { 
        $("#drop-zone").dropzone({
            url: "/index.php?route=information/project/upload",
            maxFiles: 5,
            maxFilesize: 5, //mb
            dictInvalidFileType: "Вы не можете загружить файлы данного типа! Разрешены: jpeg, jpg, doc, docx, pdf",
            acceptedFiles: ".jpeg,.jpg,.doc,.docx, .pdf, .JPEG,.JPG,.DOC,.DOCX, .PDF",
            previewsContainer: "#previews", // Define the container to display the previews
            clickable: "#submit-all", // Define the element that should be used as click trigger to select files.
            accept: function(file, done) {
                thisDropzone = this;
                done();
            },
            init: function() {
                var submitButton = $("#submit-all .btn-yellow"),
                 pathFile,
                loadButton = $("#submit-all #submit-load"),
                thisDropzone = this; // closure
               
                this.on("success", function(file, serverFileName) {

                        fileList[i] = {"serverFileName" : serverFileName, "fileName" : file.name,"fileId" : i,"session":0 };
                       i++;

                    });

                this.on("maxfilesreached", function(file){
                    alert("Слишком большой размер файла! Максимум 5 mB");
                    this.removeFile(file);
                });
                this.on("maxfilesexceeded", function(file){
                    alert("Загружено максимальное количество файлов!");
                    this.removeFile(file);
                });
                // this.on("error", function(file, message){
                //     alert("Error! "+message);
                //     this.removeFile(file);
                // });
                
                this.on("addedfile", function(file) {
                    submitButton.show();
                    loadButton.hide();
                });
                this.on("removedfile", function(file) {
                    var rmvFile = "";
                    for(f=0;f<fileList.length;f++){

                        if(fileList[f].fileName == file.name)
                        {
                            rmvFile = fileList[f].serverFileName;

                        }

                    }

                    if (rmvFile){                      
                        $.post('/index.php?route=information/project/delete', {
                            name : file.name,
                           fileList : rmvFile 
                        });
                    }
                    if($(".dz-preview").length > 0) {
                        submitButton.show();
                        loadButton.hide();
                    } else {
                        submitButton.hide();
                        loadButton.show();
                    };
                });
                
                $.get('/index.php?route=information/project/upload', {
                    file: $("#file").val()
                })
                .done(function(data) {             
                    $.each(data, function(key,value){              
                        var mockFile = {
                            name: value.filename, 
                            size: value.size,
                            fullname:value.name
                        };
                        thisDropzone.options.addedfile.call(thisDropzone, mockFile);
                        thisDropzone.options.thumbnail.call(thisDropzone, mockFile, value.name);   
                        fileList.push({"serverFileName" :value.name, "fileName" : value.filename,"fileId" : i,"session":1 });
                        i++;            
                    }); 
                    if(data.length > 0) {
                        submitButton.show();
                        loadButton.hide();
                    }
                });
            }
        });
        
        $("#submit_btn").on("click", function(e){
            e.preventDefault();
            $(".dz-preview .dz-filename").each(function(){ 
                var name = $(this).find("span").text();
                $("#file").val('');
                var file = [];
                $.each(fileList,function(index,item){
                     var fileName = "";
                    if(item.session){
                       fileName = '#$'+item.serverFileName;
                    }else{
                        fileName =item.serverFileName;
                    }
                    file.push(fileName);
                });
                $("#file").val(file.join('?'));
             });
            $("#drop-zone").submit();
        });
    }
}

function initHovers(){
    var firstHover;
    
    $('.accessorie-list .list li>.subitem').hover(function(){
        var hovered = $(this);
        $.when($('#abs-hover').remove()).then(function(){
            var elem = hovered.html();
            var pos = hovered.position();
            
            $.when($('.accessorie-list').append('<div id="abs-hover" style="display:none;left:'+pos.left+'px;top:'+pos.top+'px;">'+elem+'</div>')).then(
                function(){
                    $('#abs-hover').fadeIn(400);                        
                });         
        });
        firstHover = true;      
    },function(e){          
        if(!firstHover && $(e.target).closest('#abs-hover').length == 0) {
            $('#abs-hover').remove();
        }
    });

    /*  $('#abs-hover .opener').on('click', function(event){
        event.preventDefault();
        var cur = $(this),
            href = cur.attr('href'),
            statusAttribute = cur.attr('data-attribute');
        if(cur.attr('data-attribute') == 'loaded'){
            productLoad.itemCollection.removeClass(self.config.activeClass);
            parentItem.addClass(self.config.activeClass);
        }
        else{
            productLoad.loadContent(href, cur);
        }
    });*/

    $('.products-racks-holder>.holder>.list>li').hover(function(){
        var hovered = $(this);
        $.when($('#abs-hover').remove()).then(function(){
            var elem = hovered.html();
            var pos = hovered.position();
            var marg_str = hovered.parent().css('margin-left');
            var margin = marg_str.slice(0,marg_str.length-2);
            pos.left += parseInt(margin);
            $.when($('.products-racks-holder').parent().append('<div id="abs-hover" style="display:none;left:'+pos.left+'px;top:'+pos.top+'px;">'+elem+'</div>')).then(
                function(){
                    $('#abs-hover').fadeIn(400);    

                });         
        });
        firstHover = true;      
    },function(e){          
        if(!firstHover && $(e.target).closest('#abs-hover').length == 0) {

            $('#abs-hover').remove();
        }
    });
    $(document).on('mouseleave','#abs-hover', function(){
        var elem = $(this);

        elem.fadeOut(400, function(){
            elem.remove();
        });     
    });
}

jQuery.fn.customCheckbox = function(_options){
    var _options = jQuery.extend({
        checkboxStructure: '<div></div>',
        checkboxDisabled: 'disabled',
        checkboxDefault: 'checkboxArea',
        checkboxChecked: 'checkboxAreaChecked'
    }, _options);
    return this.each(function(){
        var checkbox = jQuery(this);
        if(!checkbox.hasClass('outtaHere') && checkbox.is(':checkbox')){
            var replaced = jQuery(_options.checkboxStructure);
            this._replaced = replaced;
            if(checkbox.is(':disabled')) replaced.addClass(_options.checkboxDisabled);
            else if(checkbox.is(':checked')) replaced.addClass(_options.checkboxChecked);
            else replaced.addClass(_options.checkboxDefault);
            replaced.click(function(){
                if(checkbox.is(':checked')) checkbox.removeAttr('checked');
                else checkbox.attr('checked', 'checked');
                changeCheckbox(checkbox);
            });
            checkbox.click(function(){
                changeCheckbox(checkbox);
            });
            replaced.insertBefore(checkbox);
            checkbox.addClass('outtaHere');
        }
    });
    function changeCheckbox(_this){
        if(!_this.is(':disabled')) {
            if(_this.is(':checked')) _this.get(0)._replaced.removeClass().addClass(_options.checkboxChecked);
            else _this.get(0)._replaced.removeClass().addClass(_options.checkboxDefault);
            if(typeof(_this.change) == 'function') _this.change();
            if(typeof(_this.get(0).onchange) == 'function') _this.get(0).onchange();
        }
    }
};


jQuery.fn.doubleTapToGo = function( params )
    {
        if( !( 'ontouchstart' in window ) &&
            !navigator.msMaxTouchPoints &&
            !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

        this.each( function()
        {
            var curItem = false;

            $( this ).on( 'click', function( e )
            {
                var item = $( this );
                if( item[ 0 ] != curItem[ 0 ] )
                {
                    e.preventDefault();
                    curItem = item;
                }
            });

            $( document ).on( 'click touchstart MSPointerDown', function( e )
            {
                var resetItem = true,
                    parents   = $( e.target ).parents();

                for( var i = 0; i < parents.length; i++ )
                    if( parents[ i ] == curItem[ 0 ] )
                        resetItem = false;

                if( resetItem )
                    curItem = false;
            });
        });
        return this;
    };

/*--- jQuery Custom Checkbox ---*/
/*;(function(){
    "use strict";

    function CustomCheckbox(thisDOMObj, config){
        this.dataItem = jQuery(thisDOMObj);
        if(typeof config !== 'string' && !this.dataItem.data(dataName)){ // init custom checkbox
            // default options
            this.options = jQuery.extend({
                checkboxStructure: '<div></div>', // HTML struct for custom checkbox
                checkboxDisabled: 'disabled', // disabled class name
                checkboxDefault: 'checkboxArea', // default class name
                checkboxChecked: 'checkboxAreaChecked', // checked class name
                hideClass: 'outtaHere', // hide class for checkbox
                onInit: null, // oninit callback
                onChange: null // onchage callback
            }, config);

            this.init();
        }
        return this;
    }

    CustomCheckbox.prototype = {
        // init function
        init: function(){
            if (this.dataItem.data(dataName)) {
                return;
            }
            // add api in data checkbox
            this.dataItem.data(dataName, this);

            this.createElements();
            this.createStructure();
            this.attachEvents();
            this.dataItem.addClass(this.options.hideClass);

            // init callback
            if(typeof this.options.onInit === 'function'){
                this.options.onInit(this.getUI());
            }
        },
        getUI: function(){
            return {
                checkbox: this.dataItem[0],
                fakecheckbox: this.fakecheckbox
            };
        },
        // attach events and listeners
        attachEvents: function(){
            if (this.dataItem.is(':disabled')) {
                return;
            }
            this.clickEvent = this.bindScope(function(event){
                if(event.target !== this.dataItem[0]){
                    if (this.dataItem[0].checked) {
                        this.dataItem.removeAttr('checked');
                        this.dataItem[0].checked = false;
                    } else {
                        this.dataItem.attr('checked', 'checked');
                        this.dataItem[0].checked = true;
                    }
                }
                this.toggleState();
                // change callback
                if(typeof this.options.onChange === 'function'){
                    this.options.onChange(event, this.getUI());
                }
            });
            this.fakeCheckbox.on({'click': this.clickEvent});
            this.dataItem.on({'click': this.clickEvent});
        },
        // checked or disabled checkbox
        toggleState: function(){
            this.fakeCheckbox.removeAttr('class').addClass(this.options[this.dataItem[0].checked ? 'checkboxChecked' : 'checkboxDefault']);
        },
        // create api elements
        createElements: function(){
            this.fakeCheckbox = jQuery(this.options.checkboxStructure);
        },
        // create custom checkbox struct
        createStructure: function(){
            if (this.dataItem.is(':disabled')) {
                this.fakeCheckbox.addClass(this.options.checkboxDisabled);
            } else if (this.dataItem.is(':checked')) {
                this.fakeCheckbox.addClass(this.options.checkboxChecked);
            } else {
                this.fakeCheckbox.addClass(this.options.checkboxDefault);
            }
            this.fakeCheckbox.insertBefore(this.dataItem);
        },
        // api update function
        update: function(){
            this.fakeCheckbox.detach();
            this.fakeCheckbox = jQuery(this.options.checkboxStructure);
            this.dataItem.off('click', this.clickEvent);
            this.createStructure();
            this.attachEvents();
            // init callback
            if(typeof this.options.onInit === 'function'){
                this.options.onInit(this.getUI(), true);
            }
        },
        // api destroy function
        destroy: function(){
            this.fakeCheckbox.detach();
            this.dataItem.removeClass(this.options.hideClass);
            this.dataItem.off('click', this.clickEvent || null);
            this.dataItem.removeData(dataName);
        },
        bindScope: function(func, scope){
            return jQuery.proxy(func, scope || this);
        }
    };

    jQuery.fn.customCheckbox = function(config, param){
        var tempData = {};
        if (!this.length) {
            return this;
        } else if (typeof config === 'string') {
            for (var i = 0; i < arrNames.length; i++) {
                if (arrNames[i] === config) {
                    tempData = true;
                }
            }
            if (tempData === true) {
                tempData = this.eq(0).data(dataName);
                if (typeof tempData[config] === 'function') {
                    return tempData[config](param) || this;
                } else if (tempData[config]) {
                    return tempData[config];
                } else {
                    return this;
                }
            } else if (typeof CustomCheckbox.prototype[config] === 'function') {
                return this.each(function(){
                    var curData = jQuery(this).data(dataName);
                    if (curData) {
                        curData[config](param);
                    }
                });
            } else if (CustomCheckbox.prototype[config]) {
                return this.eq(0).data(dataName)[config];
            } else {
                return this;
            }
        } else {
            return this.each(function(){
                new CustomCheckbox(this, config);
            });
        }
    };

    var dataName = 'CustomCheckbox',
        arrNames = ['bindScope', 'getUI'];

}(jQuery));
     */
/*
     * jQuery Carousel plugin
     */
;
(function($){
    function ScrollGallery(options) {
        this.options = $.extend({
            mask: 'div.mask',
            slider: '>*',
            slides: '>*',
            activeClass:'active',
            disabledClass:'disabled',
            btnPrev: 'a.btn-prev',
            btnNext: 'a.btn-next',
            generatePagination: false,
            pagerList: '<ul>',
            pagerListItem: '<li><a href="#"></a></li>',
            pagerListItemText: 'a',
            pagerLinks: '.pagination li',
            currentNumber: 'span.current-num',
            totalNumber: 'span.total-num',
            btnPlay: '.btn-play',
            btnPause: '.btn-pause',
            btnPlayPause: '.btn-play-pause',
            galleryReadyClass: 'gallery-js-ready',
            autorotationActiveClass: 'autorotation-active',
            autorotationDisabledClass: 'autorotation-disabled',
            stretchSlideToMask: false,
            circularRotation: true,
            disableWhileAnimating: false,
            autoRotation: false,
            pauseOnHover: isTouchDevice ? false : true,
            maskAutoSize: false,
            switchTime: 4000,
            animSpeed: 600,
            event:'click',
            swipeGap: false,
            swipeThreshold: 0,
            handleTouch: true,
            vertical: false,
            useTranslate3D: false,
            step: false
        }, options);
        this.init();
    }
    ScrollGallery.prototype = {
        init: function() {
            if(this.options.holder) {
                this.findElements();
                this.attachEvents();
                this.refreshPosition();
                this.refreshState(true);
                this.resumeRotation();
                this.makeCallback('onInit', this);
            }
        },
        findElements: function() {
            // define dimensions proporties
            this.fullSizeFunction = this.options.vertical ? 'outerHeight' : 'outerWidth';
            this.innerSizeFunction = this.options.vertical ? 'height' : 'width';
            this.slideSizeFunction = 'outerHeight';
            this.maskSizeProperty = 'height';
            this.animProperty = this.options.vertical ? 'marginTop' : 'marginLeft';
            this.swipeProperties = this.options.vertical ? ['up', 'down'] : ['left', 'right'];
            
            // control elements
            this.gallery = $(this.options.holder).addClass(this.options.galleryReadyClass);
            this.mask = this.gallery.find(this.options.mask);
            this.slider = this.mask.find(this.options.slider);
            this.slides = this.slider.find(this.options.slides);
            this.btnPrev = this.gallery.find(this.options.btnPrev);
            this.btnNext = this.gallery.find(this.options.btnNext);
            this.currentStep = 0;
            this.stepsCount = 0;
            
            // get start index
            if(this.options.step === false) {
                var activeSlide = this.slides.filter('.'+this.options.activeClass);
                if(activeSlide.length) {
                    this.currentStep = this.slides.index(activeSlide);
                }
            }
            
            // calculate offsets
            this.calculateOffsets();
            $(window).bind('load resize orientationchange', $.proxy(this.onWindowResize, this));
            
            // create gallery pagination
            if(typeof this.options.generatePagination === 'string') {
                this.pagerLinks = $();
                this.buildPagination();
            } else {
                this.pagerLinks = this.gallery.find(this.options.pagerLinks);
                this.attachPaginationEvents();
            }
            // autorotation control buttons
            this.btnPlay = this.gallery.find(this.options.btnPlay);
            this.btnPause = this.gallery.find(this.options.btnPause);
            this.btnPlayPause = this.gallery.find(this.options.btnPlayPause);
            
            // misc elements
            this.curNum = this.gallery.find(this.options.currentNumber);
            this.allNum = this.gallery.find(this.options.totalNumber);
        },
        attachEvents: function() {
            this.btnPrev.bind(this.options.event, this.bindScope(function(e){
                this.prevSlide();
                e.preventDefault();
            }));
            this.btnNext.bind(this.options.event, this.bindScope(function(e){
                this.nextSlide();
                e.preventDefault();
            }));
            
            // pause on hover handling
            if(this.options.pauseOnHover) {
                this.gallery.hover(this.bindScope(function(){
                    if(this.options.autoRotation) {
                        this.galleryHover = true;
                        this.pauseRotation();
                    }
                }), this.bindScope(function(){
                    if(this.options.autoRotation) {
                        this.galleryHover = false;
                        this.resumeRotation();
                    }
                }));
            }
            
            // autorotation buttons handler
            this.btnPlay.bind(this.options.event, this.bindScope(this.startRotation));
            this.btnPause.bind(this.options.event, this.bindScope(this.stopRotation));
            this.btnPlayPause.bind(this.options.event, this.bindScope(function(){
                if(!this.gallery.hasClass(this.options.autorotationActiveClass)) {
                    this.startRotation();
                } else {
                    this.stopRotation();
                }
            }));
            
             //swipe event handling
             if(isTouchDevice) {
                 // enable hardware acceleration
                 if(this.options.useTranslate3D) {
                     this.slider.css({
                         '-webkit-transform': 'translate3d(0px, 0px, 0px)'
                     });
                     this.attachPaginationEvents();
                 }
        
                 // swipe gestures
                 if(this.options.handleTouch && $.fn.swipe) {
                     this.mask.swipe({
                         excludedElements: '',
                         fallbackToMouseEvents: false,
                         threshold: this.options.swipeThreshold,
                         allowPageScroll: 'vertical',
                         swipeStatus: $.proxy(function(e, phase, direction, distance) {
                             if(phase === 'start') {
                                 this.originalOffset = parseInt(this.slider.stop(true, false).css(this.animProperty));
                             } else if(phase === 'move') {
                                 if(direction === this.swipeProperties[0] || direction === this.swipeProperties[1]) {
                                     var tmpOffset = this.originalOffset + distance * (direction === this.swipeProperties[0] ? -1 : 1);
                                     if(!this.options.swipeGap) {
                                         tmpOffset = Math.max(Math.min(0, tmpOffset), this.maxOffset);
                                     }
                                     this.tmpProps = {};
                                     this.tmpProps[this.animProperty] = tmpOffset;
                                     this.slider.css(this.tmpProps);
                                    // e.preventDefault();
                                 }
                             } else if(phase === 'cancel') {
                                 // return to previous position
                                 this.switchSlide();
                             } 
                         },this),
                         swipe: $.proxy(function(event, direction) {
                             if(direction === this.swipeProperties[0]) {
                                 if(this.currentStep === this.stepsCount - 1) this.switchSlide();
                                 else this.nextSlide();
                             } else if(direction === this.swipeProperties[1]) {
                                 if(this.currentStep === 0) this.switchSlide();
                                 else this.prevSlide();
                             }
                         },this)
                     });
                 }
            }
        },
        onWindowResize: function() {
            if(!this.galleryAnimating) {
                this.calculateOffsets();
                this.refreshPosition();
                this.buildPagination();
                this.refreshState();
                this.resizeQueue = false;
            } else {
                this.resizeQueue = true;
            }
        },
        refreshPosition: function() {
            this.currentStep = Math.min(this.currentStep, this.stepsCount - 1);
            this.tmpProps = {};
            /*jk*/
            this.tmpProps[this.animProperty] = this.currentStep<7 ? 0 : this.getStepOffset();
            this.slider.stop().css(this.tmpProps);
        },
        calculateOffsets: function() {
            if(this.options.stretchSlideToMask) {
                var tmpObj = {};
                tmpObj[this.innerSizeFunction] = this.mask[this.innerSizeFunction]();
                this.slides.css(tmpObj);
            }
            
            this.maskSize = this.mask[this.innerSizeFunction]();
            this.sumSize = this.getSumSize();
            this.maxOffset = this.maskSize - this.sumSize;

            // vertical gallery with single size step custom behavior
            if(this.options.vertical && this.options.maskAutoSize) {
                this.options.step = 1;
                this.stepsCount = this.slides.length;
                this.stepOffsets = [0];
                var tmpOffset = 0;
                for(var i = 0; i < this.slides.length; i++) {
                    tmpOffset -= $(this.slides[i])[this.fullSizeFunction](true);
                    this.stepOffsets.push(tmpOffset);
                }
                this.maxOffset = tmpOffset;
                return;
            }
            
            // scroll by slide size
            if(typeof this.options.step === 'number' && this.options.step > 0) {
                this.slideDimensions = [];
                this.slides.each($.proxy(function(ind, obj){
                    this.slideDimensions.push( $(obj)[this.fullSizeFunction](true) );
                },this));
                
                // calculate steps count
                this.stepOffsets = [0];
                this.stepsCount = 1;
                var tmpOffset = 0, tmpStep = 0;
                while(tmpOffset > this.maxOffset) {
                    tmpOffset -= this.getSlideSize(tmpStep, tmpStep + this.options.step);
                    tmpStep += this.options.step;
                    this.stepOffsets.push(Math.max(tmpOffset, this.maxOffset));
                    this.stepsCount++;
                }
            }
            // scroll by mask size
            else {
                // define step size
                this.stepSize = this.maskSize;
                
                // calculate steps count
                this.stepsCount = 1;
                var tmpOffset = 0;
                while(tmpOffset > this.maxOffset) {
                    tmpOffset -= this.stepSize;
                    this.stepsCount++;
                }
            }
        },
        getSumSize: function() {
            var sum = 0;
            this.slides.each($.proxy(function(ind, obj){
                sum += $(obj)[this.fullSizeFunction](true);
            },this));
            this.slider.css(this.innerSizeFunction, sum);
            return sum;
        },
        getStepOffset: function(step) {
            step = step || this.currentStep;
            if(typeof this.options.step === 'number') {
                return this.stepOffsets[this.currentStep];
            } else {
                return Math.max(-this.currentStep * this.stepSize, this.maxOffset);
            }
        },
        getSlideSize: function(i1, i2) {
            var sum = 0;
            for(var i = i1; i < Math.min(i2, this.slideDimensions.length); i++) {
                sum += this.slideDimensions[i];
            }
            return sum;
        },
        buildPagination: function() {
            if(typeof this.options.generatePagination === 'string') {
                if(!this.pagerHolder) {
                    this.pagerHolder = this.gallery.find(this.options.generatePagination);
                }
                if(this.pagerHolder.length && this.oldStepsCount != this.stepsCount) {
                    this.oldStepsCount = this.stepsCount;
                    this.pagerHolder.empty();
                    this.pagerList = $(this.options.pagerList).appendTo(this.pagerHolder);
                    for(var i = 0; i < this.stepsCount; i++) {
                        $(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(i+1);
                    }
                    this.pagerLinks = this.pagerList.children();
                    this.attachPaginationEvents();
                }
            }
        },
        attachPaginationEvents: function() {
            this.pagerLinks.each(this.bindScope(function(ind, obj){
                $(obj).bind(this.options.event, this.bindScope(function(){
                    this.numSlide(ind);
                    return false;
                }));
            }));
        },
        prevSlide: function() {
            if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
                if(this.currentStep > 0) {
                    this.currentStep--;
                    this.switchSlide();
                } else if(this.options.circularRotation) {
                    this.currentStep = this.stepsCount - 1;
                    this.switchSlide();
                }
            }
        },
        nextSlide: function(fromAutoRotation) {
            if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
                if(this.currentStep < this.stepsCount - 1) {
                    this.currentStep++;
                    this.switchSlide();
                } else if(this.options.circularRotation || fromAutoRotation === true) {
                    this.currentStep = 0;
                    this.switchSlide();
                }
            }
        },
        numSlide: function(c) {
            if(this.currentStep != c) {
                this.currentStep = c;
                this.switchSlide();
            }
        },
        switchSlide: function() {
            this.galleryAnimating = true;
            this.tmpProps = {}
            this.tmpProps[this.animProperty] = this.getStepOffset();
            this.slider.stop().animate(this.tmpProps,{
                duration: this.options.animSpeed, 
                complete: this.bindScope(function(){
                    // animation complete
                    this.galleryAnimating = false;
                    if(this.resizeQueue) {
                        this.onWindowResize();
                    }
                
                    // onchange callback
                    this.makeCallback('onChange', this);
                    this.autoRotate();
                })
            });
            this.refreshState();
           // this.attachEvents();
            // onchange callback
            this.makeCallback('onBeforeChange', this);
        },
        refreshState: function(initial) {
            if(this.options.step === 1 || this.stepsCount === this.slides.length) {
                this.slides.removeClass(this.options.activeClass).eq(this.currentStep).addClass(this.options.activeClass);
            }
            this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentStep).addClass(this.options.activeClass);
            this.curNum.html(this.currentStep+1);
            this.allNum.html(this.stepsCount);
            
            // initial refresh
            if(this.options.maskAutoSize && typeof this.options.step === 'number') {
                this.tmpProps = {};
                this.tmpProps[this.maskSizeProperty] = this.slides.eq(Math.min(this.currentStep,this.slides.length-1))[this.slideSizeFunction](true);
                this.mask.stop()[initial ? 'css' : 'animate'](this.tmpProps);
            }
            
            // disabled state
            if(!this.options.circularRotation) {
                this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass);
                if(this.currentStep === 0) this.btnPrev.addClass(this.options.disabledClass);
                if(this.currentStep === this.stepsCount - 1) this.btnNext.addClass(this.options.disabledClass);
            }
        },
        startRotation: function() {
            this.options.autoRotation = true;
            this.galleryHover = false;
            this.autoRotationStopped = false;
            this.resumeRotation();
        },
        stopRotation: function() {
            this.galleryHover = true;
            this.autoRotationStopped = true;
            this.pauseRotation();
        },
        pauseRotation: function() {
            this.gallery.addClass(this.options.autorotationDisabledClass);
            this.gallery.removeClass(this.options.autorotationActiveClass);
            clearTimeout(this.timer);
        },
        resumeRotation: function() {
            if(!this.autoRotationStopped) {
                this.gallery.addClass(this.options.autorotationActiveClass);
                this.gallery.removeClass(this.options.autorotationDisabledClass);
                this.autoRotate();
            }
        },
        autoRotate: function() {
            clearTimeout(this.timer);
            if(this.options.autoRotation && !this.galleryHover && !this.autoRotationStopped) {
                this.timer = setTimeout(this.bindScope(function(){
                    this.nextSlide(true);
                }), this.options.switchTime);
            } else {
                this.pauseRotation();
            }
        },
        bindScope: function(func, scope) {
            return $.proxy(func, scope || this);
        },
        makeCallback: function(name) {
            if(typeof this.options[name] === 'function') {
                var args = Array.prototype.slice.call(arguments);
                args.shift();
                this.options[name].apply(this, args);
            }
        }
    };
    
    // detect device type
    var isTouchDevice = (function() {
        try {
            return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
        }
        catch (e) {
            return false;
        }
    }());
    
    // jquery plugin
    $.fn.scrollGallery = function(opt){
        return this.each(function(){
            $(this).data('ScrollGallery', new ScrollGallery($.extend(opt,{
                holder:this
            })));
        });
    };
}(jQuery));

/*--- custom radio's ---*/
(function($){
    "use strict";
    function CustomRadio(thisDOMObj, config){
        this.radio = jQuery(thisDOMObj);
        if(this.radio.data('CustomRadio') && typeof this.radio.data('CustomRadio')[config] === 'function'){ // call api function
            this.radio.data('CustomRadio')[config]();
        } else if(typeof config != 'string'){ // init custom radio
            // default options
            this.options = jQuery.extend({
                radioStructure: '<div></div>', // HTML struct for custom radio
                radioDisabled: 'disabled', // disabled class name
                radioDefault: 'radioArea', // default class name
                radioChecked: 'radioAreaChecked', // checked class name
                hideClass: 'outtaHere', // hide class for radio
                onInit: null, // oninit callback
                onChange: null // onchage callback
            }, config);

            this.init();
        }
        return this;
    }

    CustomRadio.prototype = {
        // init function
        init: function(){
            // add api in data radio
            this.radio.data('CustomRadio', this);

            this.createElements();
            this.createStructure();
            this.attachEvents();
            this.radio.addClass(this.options.hideClass);

            // init callback
            if(typeof this.options.onInit == 'function'){
                this.options.onInit(this.getUI());
            }
        },
        getUI: function(){
            return {
                radio: this.radio[0],
                fakeRadio: this.fakeRadio
            };
        },
        // attach events and listeners
        attachEvents: function(){
            this.clickEvent = this.bindScope(function(event){
                if(event.target != this.radio[0]){
                    if (this.radio[0].checked) {
                        this.radio.removeAttr('checked');
                        this.radio[0].checked = false;
                    }
                }
                this.toggleState();
                // change callback
                if(typeof this.options.onChange == 'function'){
                    this.options.onChange(event, this.getUI());
                }
            });
            this.fakeRadio.on({
                'click': this.clickEvent
            });
            this.radio.on({
                'click': this.clickEvent
            });
        },
        // checked or disabled radio
        toggleState: function(){
            jQuery('input:radio[name=' + this.radio.attr("name") + ']').not(this.radio).each(function(){
                var cur = jQuery(this),
                curAPI = cur.data('CustomRadio'),
                curUI = null;
                cur.removeAttr('checked');
                this.checked = false;
                if(curAPI){
                    curUI = curAPI.getUI();
                    if(curUI.fakeRadio && !cur.is(':disabled')){
                        curUI.fakeRadio.removeAttr('class').addClass(curAPI.options.radioDefault);
                    }
                }
            });
            this.radio.attr('checked', 'checked');
            this.radio[0].checked = true;
            this.fakeRadio.removeAttr('class').addClass(this.options.radioChecked);
        },
        // create api elements
        createElements: function(){
            this.fakeRadio = jQuery(this.options.radioStructure);
        },
        // create custom radio struct
        createStructure: function(){
            if (this.radio.is(':disabled')) {
                this.fakeRadio.addClass(this.options.radioDisabled);
            } else if (this.radio.is(':checked')) {
                this.fakeRadio.addClass(this.options.radioChecked);
            } else {
                this.fakeRadio.addClass(this.options.radioDefault);
            }
            this.fakeRadio.insertBefore(this.radio);
        },
        // api update function
        update: function(){
            this.fakeRadio.detach();
            this.fakeRadio = jQuery(this.options.radioStructure);
            this.radio.off('click', this.clickEvent);
            this.createStructure();
            this.attachEvents();
            // init callback
            if(typeof this.options.onInit == 'function'){
                this.options.onInit(this.getUI(), true);
            }
        },
        // api destroy function
        destroy: function(){
            this.fakeRadio.detach();
            this.radio.removeClass(this.options.hideClass);
            this.radio.off('click', this.clickEvent);
            this.radio.removeData('CustomRadio');
        },
        bindScope: function(func, scope){
            return jQuery.proxy(func, scope || this);
        }
    };

    jQuery.fn.сustomRadio = function(config){
        return this.each(function(){
            new CustomRadio(this, config);
        });
    };
}(jQuery));

/*--- custom select's ---*/
(function($){
    "use strict";
    function CustomSelect(thisDOMObj, config){
        this.select = jQuery(thisDOMObj);
        if (this.select.data('CustomSelect') && typeof this.select.data('CustomSelect')[config] === 'function') { // call api function
            this.select.data('CustomSelect')[config]();
        } else if (typeof config != 'string') { // init custom select
            // default options
            this.options = jQuery.extend({
                selectStructure: '<div class="selectArea"><div class="left"></div><div class="center"></div><a href="#" class="selectButton"><i class="icon"></i></a><div class="disabled"></div></div>', // fake select structure
                optStructure: '<div class="selectOptions"><ul></ul></div>', // option list structure
                optItemStructure: '<li><a href="#"><span></span></a></li>', // option item structure
                optItemText: 'span', // selector of option item text
                selectDisabled: '.disabled', // selector of disable block when select has attr disabled
                selectBtn: '.selectButton', // selector of opener
                hideClass: 'outtaHere', // hide class for select
                selectText: '.center', // selector of select text
                activeSelectClass: 'selectAreaActive', // active class
                optionScrollBox: '.select-list', // selector of scroll box
                optList: 'ul', // selector of options list
                itemClassAttr: 'data-type', // attr for option item class
                withWindowScroll: false, // scoll options drop with window (for popups)
                defaultText: false, // placeholder text
                maxHeight: 99999, // max height for scroll block
                onChange: null, // onchage callback
                onShow: null, // onshow callback
                onHide: null, // onhide callback
                onInit: null, // oninit callback
                upend: false, // options list will be opened before select
                delay: 200, // delay before hide options drop
                touchDropDefault: false // default functionality in option list on touch devices
            }, config);
            
            this.options.touchDropDefault = this.options.touchDropDefault && isTouchDevice;

            if (this.options.touchDropDefault) {
                this.options.hideClass = this.options.hideClass + '-touch';
            }

            this.init();
        }
        return this;
    }

    CustomSelect.prototype = {
        // init function
        init: function(){
            // add api in data select
            this.select.data('CustomSelect', this);

            this.createElements();
            this.createStructure();
            this.attachEvents();
            this.select.addClass(this.options.hideClass);

            // init callback
            if (typeof this.options.onInit == 'function') {
                this.options.onInit(this.getUI());
            }
        },
        getUI: function(){
            return {
                select: this.select[0],
                fakeSelect: this.fakeSelect,
                optHolder: this.options.touchDropDefault ? jQuery() : this.optHolder
            };
        },
        // attach events and listeners
        attachEvents: function(){
            this.changeEvent = this.bindScope(function(event){
                if (this.options.touchDropDefault) {
                    var curOpt = this.select.find('option').eq(this.select[0].selectedIndex);
                    this.toggleClassSelect(curOpt[0]);
                    this.selectText.html(curOpt.html());
                }
                // change callback
                if (typeof this.options.onChange == 'function') {
                    this.options.onChange(event, this.getUI());
                }
            });
            this.select.on({
                'change': this.changeEvent
            });
            if (!this.options.touchDropDefault) {
                // hover event
                this.optHolder.add(this.fakeSelect).on({
                    'mouseenter': this.bindScope(function(){
                        if (this.optTimer) {
                            clearTimeout(this.optTimer);
                        }
                    }),
                    'mouseleave': this.bindScope(function(){
                        this.optTimer = setTimeout(this.bindScope(function(){
                            this.toggleState(false);
                        }), this.options.delay);
                    })
                });
                // click on select opener event
                this.selectBtn.on({
                    'click': this.bindScope(function(event){
                        event.preventDefault();
                        if (this.optHolder.is(':visible')) {
                            this.toggleState(false);
                        } else {
                            if (this.optHolder.show().find(this.options.optionScrollBox).height() > this.options.maxHeight) {
                                this.optHolder.hide().find(this.options.optionScrollBox).css({
                                    'height': this.options.maxHeight,
                                    'overflow':'auto',
                                    'overflow-x': 'hidden'
                                });
                            }
                            this.toggleState(true);
                        }
                    })
                });
                // on window scroll event when oprion list is opened
                if (this.options.withWindowScroll) {
                    this.onWinScroll = this.bindScope(function(){
                        if (this.optHolder && this.optHolder.length && this.optHolder.is(':visible')) {
                            this.toggleState(true, true);
                        }
                    });
                    this.win.on({
                        'scroll': this.onWinScroll
                    });
                }
            }
        },
        // set width on fake select and options list
        setWidth: function(show){
            var replacedWidth = this.select.outerWidth();
            this.fakeSelect.width(replacedWidth);
            if (!this.options.touchDropDefault) {
                this.optHolder[show ? 'show' : 'hide']().css({
                    width: replacedWidth,
                    position: 'absolute'
                });
            }
        },
        updatePosition: function(show){
            if (show) {
                if (this.options.upend) {
                    this.optHolder.css({
                        bottom: this.document.height() - this.fakeSelect.offset().top,
                        left: this.fakeSelect.offset().left,
                        top: 'auto'
                    });
                } else {
                    this.optHolder.css({
                        top: this.fakeSelect.offset().top + this.fakeSelect.outerHeight(),
                        left: this.fakeSelect.offset().left
                    });
                }
            }
        },
        // show or hide options list
        toggleState: function(show, scroll){
            if (this.options.touchDropDefault) {
                return;
            }
            if (show) {
                this.updatePosition(show);
                if (!scroll) {
                    this.setWidth(true);
                    this.optHolder.show(0, this.bindScope(function(){
                        // show callback
                        if (typeof this.options.onShow == 'function') {
                            this.options.onShow(this.getUI());
                        }
                    }));
                    this.fakeSelect.addClass(this.options.activeSelectClass);
                }
            } else {
                this.fakeSelect.removeClass(this.options.activeSelectClass);
                if (!this.optHolder.is(':visible')) {
                    return;
                }
                this.optHolder.hide(0, this.bindScope(function(){
                    // hide callback
                    if (typeof this.options.onHide == 'function') {
                        this.options.onHide(this.getUI());
                    }
                }));
            }
        },
        // create api elements
        createElements: function(){
            this.optTimer = null;
            this.win = jQuery(window);
            this.document = jQuery(document);
            this.body = jQuery(document.body);
            this.fakeSelect = jQuery(this.options.selectStructure);
            this.selectText = this.fakeSelect.find(this.options.selectText);
            this.selectBtn = this.fakeSelect.find(this.options.selectBtn);
            this.selectDisabled = this.fakeSelect.find(this.options.selectDisabled)[this.select.attr('disabled') ? 'show' : 'hide']();
            if (!this.options.touchDropDefault) {
                this.optHolder = jQuery(this.options.optStructure);
                this.optList = this.optHolder.find(this.options.optList);
            }
            this.prevSelectClass = '';
        },
        // create custom select struct
        createStructure: function(){
            if (!this.options.touchDropDefault) {
                this.optionItems = jQuery();
                this.optionLinks = jQuery();
                this.selectOptions = jQuery();
                this.optList.empty();

                this.select.find('option').each(this.bindScope(function(index, thisDOMObj){
                    var tempItem = jQuery(this.options.optItemStructure), thisObj = jQuery(thisDOMObj);
                    tempItem.addClass(thisDOMObj.getAttribute(this.options.itemClassAttr) || '').find(this.options.optItemText).html(thisObj.html());
                    if (!!thisObj.attr('selected')) {
                        this.selectText.html(thisObj.html());
                        tempItem.addClass('selected');
                        this.toggleClassSelect(thisDOMObj);
                    }
                    // on click fake option
                    tempItem.find('a').on({
                        'click': this.bindScope(function(event){
                            event.preventDefault();
                            var newVal = thisDOMObj.value || thisObj.text();
                            this.optionItems.removeClass('selected');
                            this.selectOptions.removeAttr('selected');
                            tempItem.addClass('selected');
                            thisObj.attr('selected', 'selected');
                            this.selectText.html(thisObj.html());
                            this.select.trigger('change').val(newVal);
                            this.toggleClassSelect(thisDOMObj);
                            this.toggleState(false);
                        })
                    });

                    // add items in api varibles
                    this.optionItems = this.optionItems.add(tempItem);
                    this.optionLinks = this.optionLinks.add(tempItem.find('a'));
                    this.selectOptions = this.selectOptions.add(thisObj);
                    // add custom item in list
                    this.optList.append(tempItem);
                }));

                // set class from select
                if (this.select.attr('class') && this.select.attr('class') != 'outtaHere') {
                    this.optHolder.addClass('drop-' + this.select.attr('class').split(' ')[0]);
                }

                // append custom select structure in html document
                this.body.append(this.optHolder.addClass(this.select.attr('id') || ''));
            } else if (this.select.find('option[selected]').length) {
                var curOpt = this.select.find('option[selected]');
                this.toggleClassSelect(curOpt[0]);
                this.selectText.html(curOpt.html());
            }

            // set default text
            if (!this.select.find('option[selected]').length && this.options.defaultText !== false) {
                var defaultText = '';
                switch (typeof this.options.defaultText) {
                    case 'string':
                        defaultText = this.options.defaultText;
                        break;
                    case 'function':
                        defaultText = this.options.defaultText(this.select[0]);
                        break;
                    default:
                        defaultText = '';
                }
                this.selectText.html(defaultText);
            }
            this.fakeSelect.addClass(this.select.attr('class') || '').insertBefore(this.select);
            this.setWidth();
        },
        // api update function
        update: function(){
            this.fakeSelect.detach();
            if (!this.options.touchDropDefault) {
                this.optHolder.detach();
            }
            this.createStructure();
            this.setWidth();
            // init callback
            if (typeof this.options.onInit == 'function') {
                this.options.onInit(this.getUI(), true);
            }
        },
        toggleClassSelect: function(opt){
            opt = opt || this.select.find('option:selected')[0];
            this.fakeSelect.removeClass(this.prevSelectClass);
            this.prevSelectClass = opt.getAttribute(this.options.itemClassAttr) || '';
            this.fakeSelect.addClass(this.prevSelectClass);
        },
        // api destroy function
        destroy: function(){
            this.select.removeClass(this.options.hideClass);
            this.select.off('change', this.changeEvent);
            this.fakeSelect.detach();
            if (!this.options.touchDropDefault) {
                this.optHolder.detach();
            }
            if (this.options.withWindowScroll) {
                this.win.off('scroll', this.onWinScroll);
            }
            this.select.removeData('CustomSelect');
        },
        bindScope: function(func, scope){
            return jQuery.proxy(func, scope || this);
        }
    };

    var isTouchDevice = /MSIE 10.*Touch/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

    jQuery.fn.customSelect = function(config){
        return this.each(function(){
            new CustomSelect(this, config);
        });
    };
}(jQuery));

// placeholder class
;
(function(){
    var placeholderCollection = [];
    PlaceholderInput = function() {
        this.options = {
            element:null,
            showUntilTyping:false,
            wrapWithElement:false,
            getParentByClass:false,
            showPasswordBullets:false,
            placeholderAttr:'value',
            inputFocusClass:'focus',
            inputActiveClass:'text-active',
            parentFocusClass:'parent-focus',
            parentActiveClass:'parent-active',
            labelFocusClass:'label-focus',
            labelActiveClass:'label-active',
            fakeElementClass:'input-placeholder-text'
        };
        placeholderCollection.push(this);
        this.init.apply(this,arguments);
    };
    PlaceholderInput.refreshAllInputs = function(except) {
        for(var i = 0; i < placeholderCollection.length; i++) {
            if(except !== placeholderCollection[i]) {
                placeholderCollection[i].refreshState();
            }
        }
    };
    PlaceholderInput.replaceByOptions = function(opt) {
        var inputs = [].concat(
            convertToArray(document.getElementsByTagName('input')),
            convertToArray(document.getElementsByTagName('textarea'))
            );
        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].className.indexOf(opt.skipClass) < 0) {
                var inputType = getInputType(inputs[i]);
                var placeholderValue = inputs[i].getAttribute('placeholder');
                if(opt.focusOnly || (opt.clearInputs && (inputType === 'text' || inputType === 'email' || placeholderValue)) ||
                    (opt.clearTextareas && inputType === 'textarea') ||
                    (opt.clearPasswords && inputType === 'password')
                    ) {
                    new PlaceholderInput({
                        element:inputs[i],
                        focusOnly: opt.focusOnly,
                        wrapWithElement:opt.wrapWithElement,
                        showUntilTyping:opt.showUntilTyping,
                        getParentByClass:opt.getParentByClass,
                        showPasswordBullets:opt.showPasswordBullets,
                        placeholderAttr: placeholderValue ? 'placeholder' : opt.placeholderAttr
                    });
                }
            }
        }
    };
    PlaceholderInput.prototype = {
        init: function(opt) {
            this.setOptions(opt);
            if(this.element && this.element.PlaceholderInst) {
                this.element.PlaceholderInst.refreshClasses();
            } else {
                this.element.PlaceholderInst = this;
                if(this.elementType !== 'radio' || this.elementType !== 'checkbox' || this.elementType !== 'file') {
                    this.initElements();
                    this.attachEvents();
                    this.refreshClasses();
                }
            }
        },
        setOptions: function(opt) {
            for(var p in opt) {
                if(opt.hasOwnProperty(p)) {
                    this.options[p] = opt[p];
                }
            }
            if(this.options.element) {
                this.element = this.options.element;
                this.elementType = getInputType(this.element);
                if(this.options.focusOnly) {
                    this.wrapWithElement = false;
                } else {
                    if(this.elementType === 'password' && this.options.showPasswordBullets) {
                        this.wrapWithElement = false;
                    } else {
                        this.wrapWithElement = this.elementType === 'password' || this.options.showUntilTyping ? true : this.options.wrapWithElement;
                    }
                }
                this.setPlaceholderValue(this.options.placeholderAttr);
            }
        },
        setPlaceholderValue: function(attr) {
            this.origValue = (attr === 'value' ? this.element.defaultValue : (this.element.getAttribute(attr) || ''));
            if(this.options.placeholderAttr !== 'value') {
                this.element.removeAttribute(this.options.placeholderAttr);
            }
        },
        initElements: function() {
            // create fake element if needed
            if(this.wrapWithElement) {
                this.fakeElement = document.createElement('span');
                this.fakeElement.className = this.options.fakeElementClass;
                this.fakeElement.innerHTML += this.origValue;
                this.fakeElement.style.color = getStyle(this.element, 'color');
                this.fakeElement.style.position = 'absolute';
                this.element.parentNode.insertBefore(this.fakeElement, this.element);
                
                if(this.element.value === this.origValue || !this.element.value) {
                    this.element.value = '';
                    this.togglePlaceholderText(true);
                } else {
                    this.togglePlaceholderText(false);
                }
            } else if(!this.element.value && this.origValue.length) {
                this.element.value = this.origValue;
            }
            // get input label
            if(this.element.id) {
                this.labels = document.getElementsByTagName('label');
                for(var i = 0; i < this.labels.length; i++) {
                    if(this.labels[i].htmlFor === this.element.id) {
                        this.labelFor = this.labels[i];
                        break;
                    }
                }
            }
            // get parent node (or parentNode by className)
            this.elementParent = this.element.parentNode;
            if(typeof this.options.getParentByClass === 'string') {
                var el = this.element;
                while(el.parentNode) {
                    if(hasClass(el.parentNode, this.options.getParentByClass)) {
                        this.elementParent = el.parentNode;
                        break;
                    } else {
                        el = el.parentNode;
                    }
                }
            }
        },
        attachEvents: function() {
            this.element.onfocus = bindScope(this.focusHandler, this);
            this.element.onblur = bindScope(this.blurHandler, this);
            if(this.options.showUntilTyping) {
                this.element.onkeydown = bindScope(this.typingHandler, this);
                this.element.onpaste = bindScope(this.typingHandler, this);
            }
            if(this.wrapWithElement) this.fakeElement.onclick = bindScope(this.focusSetter, this);
        },
        togglePlaceholderText: function(state) {
            if(!this.element.readOnly && !this.options.focusOnly) {

                if(this.wrapWithElement) {
                    this.fakeElement.style.display = state ? '' : 'none';
                } else {
                    this.element.value = state ? this.origValue : '';
                }
            }
        },
        focusSetter: function() {
            this.element.focus();
        },
        focusHandler: function() {
            clearInterval(this.checkerInterval);
            this.checkerInterval = setInterval(bindScope(this.intervalHandler,this), 1);
            this.focused = true;
            if(!this.element.value.length || this.element.value === this.origValue) {
                if(!this.options.showUntilTyping) {
                    this.togglePlaceholderText(false);
                }
            }
            this.refreshClasses();
        },
        blurHandler: function() {
            clearInterval(this.checkerInterval);
            this.focused = false;
            if(!this.element.value.length || this.element.value === this.origValue) {
                this.togglePlaceholderText(true);
            }
            this.refreshClasses();
            PlaceholderInput.refreshAllInputs(this);
        },
        typingHandler: function() {
            setTimeout(bindScope(function(){
                if(this.element.value.length) {
                    this.togglePlaceholderText(false);
                    this.refreshClasses();
                }
            },this), 10);
        },
        intervalHandler: function() {
            if(typeof this.tmpValue === 'undefined') {
                this.tmpValue = this.element.value;
            }
            if(this.tmpValue != this.element.value) {
                PlaceholderInput.refreshAllInputs(this);
            }
        },
        refreshState: function() {
            if(this.wrapWithElement) {
                if(this.element.value.length && this.element.value !== this.origValue) {
                    this.togglePlaceholderText(false);
                } else if(!this.element.value.length) {
                    this.togglePlaceholderText(true);
                }
            }
            this.refreshClasses();
        },
        refreshClasses: function() {
            this.textActive = this.focused || (this.element.value.length && this.element.value !== this.origValue);
            this.setStateClass(this.element, this.options.inputFocusClass,this.focused);
            this.setStateClass(this.elementParent, this.options.parentFocusClass,this.focused);
            this.setStateClass(this.labelFor, this.options.labelFocusClass,this.focused);
            this.setStateClass(this.element, this.options.inputActiveClass, this.textActive);
            this.setStateClass(this.elementParent, this.options.parentActiveClass, this.textActive);
            this.setStateClass(this.labelFor, this.options.labelActiveClass, this.textActive);
        },
        setStateClass: function(el,cls,state) {
            if(!el) return;
            else if(state) addClass(el,cls); else removeClass(el,cls);
        }
    };
    
    // utility functions
    function convertToArray(collection) {
        var arr = [];
        for (var i = 0, ref = arr.length = collection.length; i < ref; i++) {
            arr[i] = collection[i];
        }
        return arr;
    }
    function getInputType(input) {
        return (input.type ? input.type : input.tagName).toLowerCase();
    }
    function hasClass(el,cls) {
        return el.className ? el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')) : false;
    }
    function addClass(el,cls) {
        if (!hasClass(el,cls)) el.className += " "+cls;
    }
    function removeClass(el,cls) {
        if (hasClass(el,cls)) {
            el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');
        }
    }
    function bindScope(f, scope) {
        return function() {
            return f.apply(scope, arguments);
        };
    }
    function getStyle(el, prop) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(el, null)[prop];
        } else if (el.currentStyle) {
            return el.currentStyle[prop];
        } else {
            return el.style[prop];
        }
    }
}());

/*
     * jQuery SlideShow plugin
     */
;
(function($){
    function FadeGallery(options) {
        this.options = $.extend({
            slides: 'ul.slideset > li',
            activeClass:'active',
            disabledClass:'disabled',
            btnPrev: 'a.btn-prev',
            btnNext: 'a.btn-next',
            generatePagination: false,
            pagerList: '<ul>',
            pagerListItem: '<li><a href="#"></a></li>',
            pagerListItemText: 'a',
            pagerLinks: '.pagination li',
            currentNumber: 'span.current-num',
            totalNumber: 'span.total-num',
            btnPlay: '.btn-play',
            btnPause: '.btn-pause',
            btnPlayPause: '.btn-play-pause',
            galleryReadyClass: 'gallery-js-ready',
            autorotationActiveClass: 'autorotation-active',
            autorotationDisabledClass: 'autorotation-disabled',
            autorotationStopAfterClick: false,
            circularRotation: true,
            switchSimultaneously: true,
            disableWhileAnimating: false,
            disableFadeIE: false,
            autoRotation: false,
            pauseOnHover: true,
            autoHeight: false,
            useSwipe: false,
            switchTime: 4000,
            animSpeed: 600,
            event:'click'
        }, options);
        this.init();
    }
    FadeGallery.prototype = {
        init: function() {
            if(this.options.holder) {
                this.findElements();
                this.initStructure();
                this.attachEvents();
                this.refreshState(true);
                this.autoRotate();
                this.makeCallback('onInit', this);
            }
        },
        findElements: function() {
            // control elements
            this.gallery = $(this.options.holder).addClass(this.options.galleryReadyClass);
            this.slides = this.gallery.find(this.options.slides);
            this.slidesHolder = this.slides.eq(0).parent();
            this.stepsCount = this.slides.length;
            this.btnPrev = this.gallery.find(this.options.btnPrev);
            this.btnNext = this.gallery.find(this.options.btnNext);
            this.currentIndex = 0;
            
            // disable fade effect in old IE
            if(this.options.disableFadeIE && $.browser.msie && $.browser.version < 9) {
                this.options.animSpeed = 0;
            }
            
            // create gallery pagination
            if(typeof this.options.generatePagination === 'string') {
                this.pagerHolder = this.gallery.find(this.options.generatePagination).empty();
                this.pagerList = $(this.options.pagerList).appendTo(this.pagerHolder);
                for(var i = 0; i < this.stepsCount; i++) {
                    $(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(i+1);
                }
                this.pagerLinks = this.pagerList.children();
            } else {
                this.pagerLinks = this.gallery.find(this.options.pagerLinks);
            }
            
            // get start index
            var activeSlide = this.slides.filter('.'+this.options.activeClass);
            if(activeSlide.length) {
                this.currentIndex = this.slides.index(activeSlide);
            }
            this.prevIndex = this.currentIndex;
            
            // autorotation control buttons
            this.btnPlay = this.gallery.find(this.options.btnPlay);
            this.btnPause = this.gallery.find(this.options.btnPause);
            this.btnPlayPause = this.gallery.find(this.options.btnPlayPause);
            
            // misc elements
            this.curNum = this.gallery.find(this.options.currentNumber);
            this.allNum = this.gallery.find(this.options.totalNumber);
            
            // handle flexible layout
            $(window).bind('load resize orientationchange', $.proxy(this.onWindowResize, this));
        },
        initStructure: function() {
            this.slides.css({
                display:'block',
                opacity:0
            }).eq(this.currentIndex).css({
                opacity:''
            });
        },
        attachEvents: function() {
            var self = this;
            this.btnPrev.bind(this.options.event, function(e){
                self.prevSlide();
                if(self.options.autorotationStopAfterClick) {
                    self.stopRotation();
                }
                e.preventDefault();
            });
            this.btnNext.bind(this.options.event, function(e){
                self.nextSlide();
                if(self.options.autorotationStopAfterClick) {
                    self.stopRotation();
                }
                e.preventDefault();
            });
            this.pagerLinks.each(function(ind, obj){
                $(obj).bind(self.options.event, function(e){
                    self.numSlide(ind);
                    if(self.options.autorotationStopAfterClick) {
                        self.stopRotation();
                    }
                    e.preventDefault();
                });
            });
            
            // autorotation buttons handler
            this.btnPlay.bind(this.options.event, function(e){
                self.startRotation();
                e.preventDefault();
            });
            this.btnPause.bind(this.options.event, function(e){
                self.stopRotation();
                e.preventDefault();
            });
            this.btnPlayPause.bind(this.options.event, function(e){
                if(!self.gallery.hasClass(self.options.autorotationActiveClass)) {
                    self.startRotation();
                }
                else {
                    self.stopRotation();
                }
                e.preventDefault();
            });

            // swipe gestures handler
            if(this.options.useSwipe && $.fn.swipe) {
                this.gallery.swipe({
                    excludedElements: '',
                    fallbackToMouseEvents: false,
                    swipeLeft: function() {
                        self.nextSlide();
                    },
                    swipeRight: function() {
                        self.prevSlide();
                    }
                });
            }
            
            // pause on hover handling
            if(this.options.pauseOnHover) {
                this.gallery.hover(function(){
                    if(self.options.autoRotation) {
                        self.galleryHover = true;
                        self.pauseRotation();
                    }
                }, function(){
                    if(self.options.autoRotation) {
                        self.galleryHover = false;
                        self.resumeRotation();
                    }
                });
            }
           
        },

        onWindowResize: function(){
            if(this.options.autoHeight) {
                this.slidesHolder.css({
                    height: this.slides.eq(this.currentIndex).outerHeight(true)
                });
            }
        },
        prevSlide: function() {
            if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
                this.prevIndex = this.currentIndex;
                if(this.currentIndex > 0) {
                    this.currentIndex--;
                    this.switchSlide();
                } else if(this.options.circularRotation) {
                    this.currentIndex = this.stepsCount - 1;
                    this.switchSlide();
                }
            }
        },
        nextSlide: function(fromAutoRotation) {
            if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
                this.prevIndex = this.currentIndex;
                if(this.currentIndex < this.stepsCount - 1) {
                    this.currentIndex++;
                    this.switchSlide();
                } else if(this.options.circularRotation || fromAutoRotation === true) {
                    this.currentIndex = 0;
                    this.switchSlide();
                }
            }
        },
        numSlide: function(c) {
            if(this.currentIndex != c) {
                this.prevIndex = this.currentIndex;
                this.currentIndex = c;
                this.switchSlide();
            }
        },
        switchSlide: function() {
            var self = this;
            if(this.slides.length > 1) {
                this.galleryAnimating = true;
                if(!this.options.animSpeed) {
                    this.slides.eq(this.prevIndex).css({
                        opacity:0
                    });
                }
                else {
                    this.slides.eq(this.prevIndex).stop().animate({
                        opacity:0
                    },{
                        duration: this.options.animSpeed
                    });
                }
                
                this.switchNext = function() {
                    if(!self.options.animSpeed) {
                        self.slides.eq(self.currentIndex).css({
                            opacity:''
                        });
                    }
                    else {
                        self.slides.eq(self.currentIndex).stop().animate({
                            opacity:1
                        },{
                            duration: self.options.animSpeed
                        });
                    }
                    setTimeout(function() {
                        self.slides.eq(self.currentIndex).css({
                            opacity:''
                        });
                        self.galleryAnimating = false;
                        self.autoRotate();
                        
                        // onchange callback
                        self.makeCallback('onChange', self);
                    }, self.options.animSpeed);
                }
                
                if(this.options.switchSimultaneously) {
                    self.switchNext();
                } else {
                    clearTimeout(this.switchTimer);
                    this.switchTimer = setTimeout(function(){
                        self.switchNext();
                    }, this.options.animSpeed);
                }
                this.refreshState();
                
                // onchange callback
                this.makeCallback('onBeforeChange', this);
            }
        },
        refreshState: function(initial) {
            this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
            this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
            this.curNum.html(this.currentIndex+1);
            this.allNum.html(this.stepsCount);
            
            // initial refresh
            if(this.options.autoHeight) {
                if(initial) {
                    this.slidesHolder.css({
                        height: this.slides.eq(this.currentIndex).outerHeight(true)
                    });
                } else {
                    this.slidesHolder.stop().animate({
                        height: this.slides.eq(this.currentIndex).outerHeight(true)
                    }, {
                        duration: this.options.animSpeed
                    });
                }
            }
            
            // disabled state
            if(!this.options.circularRotation) {
                this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass);
                if(this.currentIndex === 0) this.btnPrev.addClass(this.options.disabledClass);
                if(this.currentIndex === this.stepsCount - 1) this.btnNext.addClass(this.options.disabledClass);
            }
        },
        startRotation: function() {
            this.options.autoRotation = true;
            this.galleryHover = false;
            this.autoRotationStopped = false;
            this.resumeRotation();
        },
        stopRotation: function() {
            this.galleryHover = true;
            this.autoRotationStopped = true;
            this.pauseRotation();
        },
        pauseRotation: function() {
            this.gallery.addClass(this.options.autorotationDisabledClass);
            this.gallery.removeClass(this.options.autorotationActiveClass);
            clearTimeout(this.timer);
        },
        resumeRotation: function() {
            if(!this.autoRotationStopped) {
                this.gallery.addClass(this.options.autorotationActiveClass);
                this.gallery.removeClass(this.options.autorotationDisabledClass);
                this.autoRotate();
            }
        },
        autoRotate: function() {
            var self = this;
            clearTimeout(this.timer);
            if(this.options.autoRotation && !this.galleryHover && !this.autoRotationStopped) {
                this.gallery.addClass(this.options.autorotationActiveClass);
                this.timer = setTimeout(function(){
                    self.nextSlide(true);
                }, this.options.switchTime);
            } else {
                this.pauseRotation();
            }
        },
        makeCallback: function(name) {
            if(typeof this.options[name] === 'function') {
                var args = Array.prototype.slice.call(arguments);
                args.shift();
                this.options[name].apply(this, args);
            }
        }
    }

    // jquery plugin
    $.fn.fadeGallery = function(opt){
        return this.each(function(){
            $(this).data('FadeGallery', new FadeGallery($.extend(opt,{
                holder:this
            })));
        });
    }
}(jQuery));

/*
     * jQuery Accordion plugin
     */
;
(function($){
    $.fn.slideAccordion = function(opt){
        // default options
        var options = $.extend({
            addClassBeforeAnimation: false,
            activeClass:'active',
            opener:'.opener',
            slider:'.slide',
            animSpeed: 300,
            collapsible:true,
            event:'click'
        },opt);

        return this.each(function(){
            // options
            var accordion = $(this);
            var items = accordion.find(':has('+options.slider+')');

            items.each(function(){
                var item = $(this);
                var opener = item.find(options.opener);
                var slider = item.find(options.slider);
                opener.bind(options.event, function(e){
                
                    if(!slider.is(':animated')) {
                        if(item.hasClass(options.activeClass)) {
                            if(options.collapsible) {
                                slider.slideUp(options.animSpeed, function(){
                                    hideSlide(slider);
                                    item.removeClass(options.activeClass);
                                });
                            }
                        } else {
                            // show active
                            var levelItems = item.siblings('.'+options.activeClass);
                            var sliderElements = levelItems.find(options.slider);
                            item.addClass(options.activeClass);
                            showSlide(slider).hide().slideDown(options.animSpeed);
                        
                            // collapse others
                            sliderElements.slideUp(options.animSpeed, function(){
                                levelItems.removeClass(options.activeClass);
                                hideSlide(sliderElements);
                            });
                        }
                    }
                    e.preventDefault();
                });
                if(item.hasClass(options.activeClass)) showSlide(slider); else hideSlide(slider);
            });
        });
    };

    // accordion slide visibility
    var showSlide = function(slide) {
        return slide.css({
            position:'', 
            top: '', 
            left: '', 
            width: ''
        });
    };
    var hideSlide = function(slide) {
        return slide.show().css({
            position:'absolute', 
            top: -9999, 
            left: -9999, 
            width: slide.width()
        });
    };
}(jQuery));


/*
HTML code sample:
<a class="open-popup ajax-load" href="inc/popup1.html">Open popup1</a>
Load and show lightbox from external file
     */

// popups function
function initPopups() {
    var _zIndex = 1000;
    var _fadeSpeed = 200;
    var _faderOpacity = 0.8;
    var _faderBackground = '#fff';
    var _faderId = 'lightbox-overlay';
    var _closeLink = 'a.btn-close, a.close, a.cancel';
    var _fader;
    var _lightbox = null;
    var _ajaxClass = 'ajax-load';
    var _openers = jQuery('a.open-popup');
    var _page = jQuery(document);
    var _minWidth = jQuery('body > div:eq(0)').outerWidth();
    var _scroll = true;

    // init popup fader
    _fader = jQuery('#'+_faderId);
    if(!_fader.length) {
        _fader = jQuery('<div />');
        _fader.attr('id',_faderId);
        jQuery('body').append(_fader);
    }
    _fader.css({
        opacity:_faderOpacity,
        backgroundColor:_faderBackground,
        position:'absolute',
        overflow:'hidden',
        display:'none',
        top:0,
        left:0,
        zIndex:_zIndex
    });
    var e =  navigator.userAgent.toLowerCase();
    //alert(e);
    // IE6 iframe fix
    // if(jQuery.browser.msie && jQuery.browser.version < 7) {
    //     if(!_fader.children().length) {
    //         var _frame = jQuery('<iframe src="javascript:false" frameborder="0" scrolling="no" />');
    //         _frame.css({
    //             opacity:0,
    //             width:'100%',
    //             height:'100%'
    //         });
    //         var _frameOverlay = jQuery('<div>');
    //         _frameOverlay.css({
    //             top:0,
    //             left:0,
    //             zIndex:1,
    //             opacity:0,
    //             background:'#000',
    //             position:'absolute',
    //             width:'100%',
    //             height:'100%'
    //         });
    //         _fader.empty().append(_frame).append(_frameOverlay);
    //     }
    // }

    // lightbox positioning function
    function positionLightbox() {
        if(_lightbox) {
            var _windowHeight = jQuery(window).height();
            var _windowWidth = jQuery(window).width();
            var _lightboxWidth = _lightbox.outerWidth();
            var _lightboxHeight = _lightbox.outerHeight();
            var _pageHeight = _page.height();

            if (_windowWidth < _minWidth) _fader.css('width',_minWidth);
            else _fader.css('width','100%');
            if (_windowHeight < _pageHeight) _fader.css('height',_pageHeight);
            else _fader.css('height',_windowHeight);

            _lightbox.css({
                position:'fixed',
                zIndex:(_zIndex+1)
            });

            // vertical position
            if (_windowHeight > _lightboxHeight) {
                if (jQuery.browser.msie && jQuery.browser.version < 7) {
                    _lightbox.css({
                        position:'absolute',
                        top: parseInt(jQuery(window).scrollTop()) + (_windowHeight - _lightboxHeight) / 2
                    });
                } else {
                    _lightbox.css({
                        position:'fixed',
                        top: (_windowHeight - _lightboxHeight) / 2
                    });
                }
            } else {
                var _faderHeight = _fader.height();
                if(_faderHeight < _lightboxHeight) _fader.css('height',_lightboxHeight);
                if (!_scroll) {
                    if (_faderHeight - _lightboxHeight > parseInt(jQuery(window).scrollTop())) {
                        _faderHeight = parseInt(jQuery(window).scrollTop())
                        _scroll = _faderHeight;
                    } else {
                        _scroll = _faderHeight - _lightboxHeight;
                    }
                }
                _lightbox.css({
                    position:'absolute',
                    top: _scroll
                });
            }
            // horizontal position
            if (_fader.width() > _lightbox.outerWidth()) _lightbox.css({
                left:(_fader.width() - _lightbox.outerWidth()) / 2
            });
            else _lightbox.css({
                left: 0
            });
        }
    }

    // show/hide lightbox
    function toggleState(_state) {
        if(!_lightbox) return;
        if(_state) {
            _fader.fadeIn(_fadeSpeed,function(){
                _lightbox.fadeIn(_fadeSpeed);
            });
            _scroll = false;
            positionLightbox();
        } else {
            _lightbox.fadeOut(_fadeSpeed,function(){
                _fader.fadeOut(_fadeSpeed);
                _scroll = false;
            });
        }
    }

    // popup actions
    function initPopupActions(_obj) {

        if(!_obj.get(0).jsInit) {
            _obj.get(0).jsInit = true;
            // close link
            _obj.find(_closeLink).click(function(){
                _lightbox = _obj;
                toggleState(false);
                return false;
            });
        }
    }
    // lightbox openers
    _openers.each(function(){
        var _opener = jQuery(this);
        var _target = _opener.attr('href');
        
        // popup load type - ajax or static
        if(_opener.hasClass(_ajaxClass)) {
            _opener.click(function(){
            
                // ajax load
                if(jQuery('div[rel*="'+_target+'"]').length == 0) {
                    jQuery.ajax({
                        url: _target,
                        type: "POST",
                        dataType: "html",
                        success: function(msg){
                            // append loaded popup
                            _lightbox = jQuery(msg);
                            _lightbox.find('img').load(positionLightbox)
                            _lightbox.attr('rel',_target).hide().css({
                                position:'absolute',
                                zIndex:(_zIndex+1),
                                top: -9999,
                                left: -9999
                            });
                            jQuery('body').append(_lightbox);

                            // init js for lightbox
                            initPopupActions(_lightbox);

                            // show lightbox
                            toggleState(true);
                            retinajs();
                        },
                        error: function(msg){
                            alert('AJAX error!');
                            return false;
                        }
                    });
                } else {
                    _lightbox = jQuery('div[rel*="'+_target+'"]');
                    toggleState(true);
                }                
                return false;
            });
        } else {
            if(jQuery(_target).length) {
                // init actions for popup
                var _popup = jQuery(_target);
                initPopupActions(_popup);
                // open popup
                _opener.click(function(){
                
                    if(_lightbox) {
                        _lightbox.fadeOut(_fadeSpeed,function(){
                            _lightbox = _popup.hide();
                            toggleState(true);
                        })
                    } else {
                        _lightbox = _popup.hide();
                        toggleState(true);
                    }
                    return false;
                });
            }
        }
    });

    // event handlers
    jQuery(window).resize(positionLightbox);
    jQuery(window).scroll(positionLightbox);
    jQuery(document).keydown(function (e) {
        if (!e) evt = window.event;
        if (e.keyCode == 27) {
            toggleState(false);
        }
    })
    _fader.click(function(){
    
        if(!_fader.is(':animated')) toggleState(false);
        return false;
    })
}

/*
     * touchSwipe - jQuery Plugin
     * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * http://labs.skinkers.com/touchSwipe/
     * http://plugins.jquery.com/project/touchSwipe
     *
     * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     * $version: 1.6.0
     */;
(function(d){
    +"use strict";
    var n="left",m="right",c="up",u="down",b="in",v="out",k="none",q="auto",j="swipe",r="pinch",e="click",x="horizontal",s="vertical",h="all",f="start",i="move",g="end",o="cancel",a="ontouchstart" in window,w="TouchSwipe";
    var l={
        fingers:1,
        threshold:75,
        pinchThreshold:20,
        maxTimeThreshold:null,
        fingerReleaseThreshold:250,
        swipe:null,
        swipeLeft:null,
        swipeRight:null,
        swipeUp:null,
        swipeDown:null,
        swipeStatus:null,
        pinchIn:null,
        pinchOut:null,
        pinchStatus:null,
        click:null,
        triggerOnTouchEnd:true,
        triggerOnTouchLeave:false,
        allowPageScroll:"auto",
        fallbackToMouseEvents:true,
        excludedElements:"button, input, select, textarea, a, .noSwipe"
    };
    
    d.fn.swipe=function(A){
        var z=d(this),y=z.data(w);
        if(y&&typeof A==="string"){
            if(y[A]){
                return y[A].apply(this,Array.prototype.slice.call(arguments,1))
            }else{
                d.error("Method "+A+" does not exist on jQuery.swipe")
            }
        }else{
            if(!y&&(typeof A==="object"||!A)){
                return t.apply(this,arguments)
            }
        }
        return z
    };

    d.fn.swipe.defaults=l;
    d.fn.swipe.phases={
        PHASE_START:f,
        PHASE_MOVE:i,
        PHASE_END:g,
        PHASE_CANCEL:o
    };

    d.fn.swipe.directions={
        LEFT:n,
        RIGHT:m,
        UP:c,
        DOWN:u,
        IN:b,
        OUT:v
    };

    d.fn.swipe.pageScroll={
        NONE:k,
        HORIZONTAL:x,
        VERTICAL:s,
        AUTO:q
    };

    d.fn.swipe.fingers={
        ONE:1,
        TWO:2,
        THREE:3,
        ALL:h
    };

    function t(y){
        if(y&&(y.allowPageScroll===undefined&&(y.swipe!==undefined||y.swipeStatus!==undefined))){
            y.allowPageScroll=k
        }
        if(!y){
            y={}
        }
        y=d.extend({},d.fn.swipe.defaults,y);
        return this.each(function(){
            var A=d(this);
            var z=A.data(w);
            if(!z){
                z=new p(this,y);
                A.data(w,z)
            }
        })
    }
    function p(S,af){
        var aF=(a||!af.fallbackToMouseEvents),ax=aF?"touchstart":"mousedown",U=aF?"touchmove":"mousemove",au=aF?"touchend":"mouseup",D=aF?null:"mouseleave",R="touchcancel";
        var ac=0;
        var N=null;
        var ag=0;
        var aB=0;
        var A=0;
        var ai=1;
        var aH=0;
        var H=d(S);
        var O="start";
        var aE=0;
        var ah=null;
        var I=0;
        var Y=0;
        var aA=0;
        var aJ=0;
        try{
            H.bind(ax,ar);
            H.bind(R,M)
        }
        catch(aC){
            d.error("events not supported "+ax+","+R+" on jQuery.swipe")
        }
        this.enable=function(){
            H.bind(ax,ar);
            H.bind(R,M);
            return H
        };
        
        this.disable=function(){
            Q();
            return H
        };
        
        this.destroy=function(){
            Q();
            H.data(w,null);
            return H
        };
        
        function ar(aM){
            if(X()){
                return
            }
            if(d(aM.target).closest(af.excludedElements,H).length>0){
                return
            }
            var aN=aM.originalEvent;
            var aL,aK=a?aN.touches[0]:aN;
            O=f;
            if(a){
                aE=aN.touches.length
            }else{
                aM.preventDefault()
            }
            ac=0;
            N=null;
            aH=null;
            ag=0;
            aB=0;
            A=0;
            ai=1;
            pinchDistance=0;
            ah=T();
            z();
            if(!a||(aE===af.fingers||af.fingers===h)||ao()){
                aI(0,aK);
                I=B();
                if(aE==2){
                    aI(1,aN.touches[1]);
                    aB=A=Z(ah[0].start,ah[1].start)
                }
                if(af.swipeStatus||af.pinchStatus){
                    aL=aD(aN,O)
                }
            }else{
                aL=false
            }
            if(aL===false){
                O=o;
                aD(aN,O);
                return aL
            }else{
                aj(true)
            }
        }
        function P(aN){
            var aQ=aN.originalEvent;
            if(O===g||O===o||ae()){
                return
            }
            var aM,aL=a?aQ.touches[0]:aQ;
            var aO=V(aL);
            Y=B();
            if(a){
                aE=aQ.touches.length
            }
            O=i;
            if(aE==2){
                if(aB==0){
                    aI(1,aQ.touches[1]);
                    aB=A=Z(ah[0].start,ah[1].start)
                }else{
                    V(aQ.touches[1]);
                    A=Z(ah[0].end,ah[1].end);
                    aH=an(ah[0].end,ah[1].end)
                }
                ai=y(aB,A);
                pinchDistance=Math.abs(aB-A)
            }
            if((aE===af.fingers||af.fingers===h)||!a||ao()){
                N=aq(aO.start,aO.end);
                C(aN,N);
                ac=G(aO.start,aO.end);
                ag=L();
                if(af.swipeStatus||af.pinchStatus){
                    aM=aD(aQ,O)
                }
                if(!af.triggerOnTouchEnd||af.triggerOnTouchLeave){
                    var aK=true;
                    if(af.triggerOnTouchLeave){
                        var aP=at(this);
                        aK=az(aO.end,aP)
                    }
                    if(!af.triggerOnTouchEnd&&aK){
                        O=aG(i)
                    }else{
                        if(af.triggerOnTouchLeave&&!aK){
                            O=aG(g)
                        }
                    }
                    if(O==o||O==g){
                        aD(aQ,O)
                    }
                }
            }else{
                O=o;
                aD(aQ,O)
            }
            if(aM===false){
                O=o;
                aD(aQ,O)
            }
        }
        function aa(aM){
            var aO=aM.originalEvent;
            if(a){
                if(aO.touches.length>0){
                    av();
                    return true
                }
            }
            if(ae()){
                aE=aJ
            }
            aM.preventDefault();
            Y=B();
            if(af.triggerOnTouchEnd||(af.triggerOnTouchEnd==false&&O===i)){
                O=g;
                var aL=((aE===af.fingers||af.fingers===h)||!a);
                var aK=ah[0].end.x!==0;
                var aN=aL&&aK&&(am()||ay());
                if(aN){
                    aD(aO,O)
                }else{
                    O=o;
                    aD(aO,O)
                }
            }
            else{
                if(O===i){
                    O=o;
                    aD(aO,O)
                }
            }
            aj(false)
        }
        function M(){
            aE=0;
            Y=0;
            I=0;
            aB=0;
            A=0;
            ai=1;
            z();
            aj(false)
        }
        function W(aK){
            var aL=aK.originalEvent;
            if(af.triggerOnTouchLeave){
                O=aG(g);
                aD(aL,O)
            }
        }
        function Q(){
            H.unbind(ax,ar);
            H.unbind(R,M);
            H.unbind(U,P);
            H.unbind(au,aa);
            if(D){
                H.unbind(D,W)
            }
            aj(false)
        }
        function aG(aN){
            var aM=aN;
            var aL=ap();
            var aK=ad();
            if(!aL){
                aM=o
            }else{
                if(aK&&aN==i&&(!af.triggerOnTouchEnd||af.triggerOnTouchLeave)){
                    aM=g
                }else{
                    if(!aK&&aN==g&&af.triggerOnTouchLeave){
                        aM=o
                    }
                }
            }
            return aM
        }
        function aD(aM,aK){
            var aL=undefined;
            if(ab()){
                aL=al(aM,aK,j)
            }
            if(ao()&&aL!==false){
                aL=al(aM,aK,r)
            }
            if(K()&&aL!==false){
                aL=al(aM,aK,e)
            }
            if(aK===o){
                M(aM)
            }
            if(aK===g){
                if(a){
                    if(aM.touches.length==0){
                        M(aM)
                    }
                }else{
                    M(aM)
                }
            }
            return aL
        }
        function al(aN,aK,aM){
            var aL=undefined;
            if(aM==j){
                if(af.swipeStatus){
                    aL=af.swipeStatus.call(H,aN,aK,N||null,ac||0,ag||0,aE);
                    if(aL===false){
                        return false
                    }
                }
                if(aK==g&&ay()){
                    if(af.swipe){
                        aL=af.swipe.call(H,aN,N,ac,ag,aE);
                        if(aL===false){
                            return false
                        }
                    }
                    switch(N){
                        case n:
                            if(af.swipeLeft){
                                aL=af.swipeLeft.call(H,aN,N,ac,ag,aE)
                            }
                            break;
                        case m:
                            if(af.swipeRight){
                                aL=af.swipeRight.call(H,aN,N,ac,ag,aE)
                            }
                            break;
                        case c:
                            if(af.swipeUp){
                                aL=af.swipeUp.call(H,aN,N,ac,ag,aE)
                            }
                            break;
                        case u:
                            if(af.swipeDown){
                                aL=af.swipeDown.call(H,aN,N,ac,ag,aE)
                            }
                            break
                    }
                }
            }
            if(aM==r){
                if(af.pinchStatus){
                    aL=af.pinchStatus.call(H,aN,aK,aH||null,pinchDistance||0,ag||0,aE,ai);
                    if(aL===false){
                        return false
                    }
                }
                if(aK==g&&am()){
                    switch(aH){
                        case b:
                            if(af.pinchIn){
                                aL=af.pinchIn.call(H,aN,aH||null,pinchDistance||0,ag||0,aE,ai)
                            }
                            break;
                        case v:
                            if(af.pinchOut){
                                aL=af.pinchOut.call(H,aN,aH||null,pinchDistance||0,ag||0,aE,ai)
                            }
                            break
                    }
                }
            }
            if(aM==e){
                if(aK===o){
                    if(af.click&&(aE===1||!a)&&(isNaN(ac)||ac===0)){
                        aL=af.click.call(H,aN,aN.target)
                    }
                }
            }
            return aL
        }
        function ad(){
            if(af.threshold!==null){
                return ac>=af.threshold
            }
            return true
        }
        function ak(){
            if(af.pinchThreshold!==null){
                return pinchDistance>=af.pinchThreshold
            }
            return true
        }
        function ap(){
            var aK;
            if(af.maxTimeThreshold){
                if(ag>=af.maxTimeThreshold){
                    aK=false
                }else{
                    aK=true
                }
            }else{
                aK=true
            }
            return aK
        }
        function C(aK,aL){
            if(af.allowPageScroll===k||ao()){
                aK.preventDefault()
            }else{
                var aM=af.allowPageScroll===q;
                switch(aL){
                    case n:
                        if((af.swipeLeft&&aM)||(!aM&&af.allowPageScroll!=x)){
                            aK.preventDefault()
                        }
                        break;
                    case m:
                        if((af.swipeRight&&aM)||(!aM&&af.allowPageScroll!=x)){
                            aK.preventDefault()
                        }
                        break;
                    case c:
                        if((af.swipeUp&&aM)||(!aM&&af.allowPageScroll!=s)){
                            aK.preventDefault()
                        }
                        break;
                    case u:
                        if((af.swipeDown&&aM)||(!aM&&af.allowPageScroll!=s)){
                            aK.preventDefault()
                        }
                        break
                }
            }
        }
        function am(){
            return ak()
        }
        function ao(){
            return !!(af.pinchStatus||af.pinchIn||af.pinchOut)
        }
        function aw(){
            return !!(am()&&ao())
        }
        function ay(){
            var aK=ap();
            var aM=ad();
            var aL=aM&&aK;
            return aL
        }
        function ab(){
            return !!(af.swipe||af.swipeStatus||af.swipeLeft||af.swipeRight||af.swipeUp||af.swipeDown)
        }
        function E(){
            return !!(ay()&&ab())
        }
        function K(){
            return !!(af.click)
        }
        function av(){
            aA=B();
            aJ=event.touches.length+1
        }
        function z(){
            aA=0;
            aJ=0
        }
        function ae(){
            var aK=false;
            if(aA){
                var aL=B()-aA;
                if(aL<=af.fingerReleaseThreshold){
                    aK=true
                }
            }
            return aK
        }
        function X(){
            return !!(H.data(w+"_intouch")===true)
        }
        function aj(aK){
            if(aK===true){
                H.bind(U,P);
                H.bind(au,aa);
                if(D){
                    H.bind(D,W)
                }
            }else{
                H.unbind(U,P,false);
                H.unbind(au,aa,false);
                if(D){
                    H.unbind(D,W,false)
                }
            }
            H.data(w+"_intouch",aK===true)
        }
        function aI(aL,aK){
            var aM=aK.identifier!==undefined?aK.identifier:0;
            ah[aL].identifier=aM;
            ah[aL].start.x=ah[aL].end.x=aK.pageX;
            ah[aL].start.y=ah[aL].end.y=aK.pageY;
            return ah[aL]
        }
        function V(aK){
            var aM=aK.identifier!==undefined?aK.identifier:0;
            var aL=J(aM);
            aL.end.x=aK.pageX;
            aL.end.y=aK.pageY;
            return aL
        }
        function J(aL){
            for(var aK=0;aK<ah.length;aK++){
                if(ah[aK].identifier==aL){
                    return ah[aK]
                }
            }
        }
        function T(){
            var aK=[];
            for(var aL=0;aL<=5;aL++){
                aK.push({
                    start:{
                        x:0,
                        y:0
                    },
                    end:{
                        x:0,
                        y:0
                    },
                    identifier:0
                })
            }
            return aK
        }
        function L(){
            return Y-I
        }
        function Z(aN,aM){
            var aL=Math.abs(aN.x-aM.x);
            var aK=Math.abs(aN.y-aM.y);
            return Math.round(Math.sqrt(aL*aL+aK*aK))
        }
        function y(aK,aL){
            var aM=(aL/aK)*1;
            return aM.toFixed(2)
        }
        function an(){
            if(ai<1){
                return v
            }else{
                return b
            }
        }
        function G(aL,aK){
            return Math.round(Math.sqrt(Math.pow(aK.x-aL.x,2)+Math.pow(aK.y-aL.y,2)))
        }
        function F(aN,aL){
            var aK=aN.x-aL.x;
            var aP=aL.y-aN.y;
            var aM=Math.atan2(aP,aK);
            var aO=Math.round(aM*180/Math.PI);
            if(aO<0){
                aO=360-Math.abs(aO)
            }
            return aO
        }
        function aq(aL,aK){
            var aM=F(aL,aK);
            if((aM<=45)&&(aM>=0)){
                return n
            }else{
                if((aM<=360)&&(aM>=315)){
                    return n
                }else{
                    if((aM>=135)&&(aM<=225)){
                        return m
                    }else{
                        if((aM>45)&&(aM<135)){
                            return u
                        }else{
                            return c
                        }
                    }
                }
            }
        }
        function B(){
            var aK=new Date();
            return aK.getTime()
        }
        function at(aK){
            aK=d(aK);
            var aM=aK.offset();
            var aL={
                left:aM.left,
                right:aM.left+aK.outerWidth(),
                top:aM.top,
                bottom:aM.top+aK.outerHeight()
            };
        
            return aL
        }
        function az(aK,aL){
            return(aK.x>aL.left&&aK.x<aL.right&&aK.y>aL.top&&aK.y<aL.bottom)
        }
        
    }
})(jQuery);