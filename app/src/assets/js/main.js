// //= ../libs/js/*.js
// //= modules/*.js
'use strict';
//= ../libs/js/jquery.js
//= ../libs/js/slick.js
//= ../libs/js/ion.rangeSlider.js
//= ../libs/js/jquery.formstyler.js
//= ../libs/js/jquery.rateyo.js


//= modules/tabs.js
//= modules/dynamicAdapt.js
//= modules/bugs.js

$('.banner__slider-box').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    prevArrow: $('.banner__slider-arrow_prev'),
    nextArrow: $('.banner__slider-arrow_next'),
});

$('.products-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="products-slider__arrow products-slider__arrow_prev"><img src="assets/image/icon/slider-arrow-bl_l.svg" alt="<" ></button>',
    nextArrow: '<button class="products-slider__arrow products-slider__arrow_next"><img src="assets/image/icon/slider-arrow-bl_r.svg" alt=">" ></button>',
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 870,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



// табы
$('.tab').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.tab').removeClass('tab_active');
    $(this).closest('.tabs-inner').find('.tab-content').removeClass('tab-content_active');
    $(this).addClass('tab_active');
    $($(this).attr('href')).addClass('tab-content_active');
});

$('.footer__item_mob-tab .footer__title').on('click', function () {
    if ($(document).width() <= 479.98) {
        $(this).next().slideToggle(200);
    }
});


$('.favorite-icon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('added');
});


$('.compare-icon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('added');
});

$('.basket-icon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('added');
});

function changeViewStart(arr) {
    arr.forEach(elem => {
        if (elem.classList.contains('active')) {
            const viewValue = elem.getAttribute('data-view');
            $('.product-card').attr('data-view', viewValue);
        }
    });
}
changeViewStart(document.querySelectorAll('.views-btn'))



$('.views-btn').on('click', function (e) {
    function changeView(elem) {
        let viewValue = elem.attr('data-view-btn');
        $('.product-card').attr('data-view', viewValue);
    }
    e.preventDefault();
    $('.views-btn').removeClass('active');
    $(this).addClass('active');
    changeView($(this));
});


$('.filter-style').styler();


$('.filter__title-drop').on('click', function (e) {
    $(this).toggleClass('filter__title-drop_active');
    $(this).siblings('.filter__content-drop').slideToggle(200);
});


let filterPrice = $(".filter-price").data("ionRangeSlider");
let filterFrom = $('.filter-price__info-from__value');
let filterTo = $('.filter-price__info-to__value');

$(".filter-price").ionRangeSlider({
    type: "double",
    grid: false,

    onFinish: function (data) {
        filterFrom.text($(this).data("from"));
        console.log($(this).data("value"));
    }
});


$(function () {
    let rateValue = $("#rating").attr('data-rate');
    $("#rating").rateYo({
        normalFill: "#c4c4c4",
        ratedFill: "#1c62cd",
        starWidth: "21px",
        spacing: "7px",
        rating: rateValue,
        readOnly: true
    });

});

$('.menu-btn').on('click', function () {
    $('.menu-mobile').toggleClass('active');
});