import $ from 'jquery';
import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import lozad from "lozad";

//lazyload
$(function () {
    const observer = lozad();
    observer.observe();
});

//swiper
const swiper = new Swiper('#carousel-swiper', {
    effect: 'slide',
    fadeEffect: {
        crossFade: true
    },
    modules: [Navigation, Pagination, Autoplay],
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        999: {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: '.carousel-button-next',
        prevEl: '.carousel-button-prev',
        clickable: true,
    },
    pagination: {
        el: '.carousel-slider-pagination',
        type: 'bullets',
        clickable: true,
    },
});

//show content

    $('.more-link').each(function(i) {
        $(this).on('click',function(e) {
            e.preventDefault();
            $('.tab-content-item-wrapper').eq(i).toggleClass('show');
        })
    })




