"use strict";




const elmIndexSwiper = document.querySelectorAll('.js-index-slider');
const elmIndexBtnP = document.querySelectorAll('.js-slider-btnPrev');
const elmIndexBtnN = document.querySelectorAll('.js-slider-btnNext');

if (elmIndexSwiper.length > 0) {
  for (let i = 0; i < elmIndexSwiper.length; i++) {

    elmIndexSwiper[i].className += i;

    elmIndexBtnP[i].className += i;
    elmIndexBtnN[i].className += i;

    var swiper = new Swiper('.js-index-slider' + i, {
      slidesPerView: 'auto',
      grabCursor: true,
      touchEventsTarget: true,
      navigation: {
        prevEl: '.js-slider-btnPrev' + i,
        nextEl: '.js-slider-btnNext' + i,
      },
    });
  }
}



const modalSwiper = new Swiper('.js-modal-slider', {
  slidesPerView: 'auto',
  // loop: true,
  grabCursor: true,
  autoHeight: true,
  centeredSlides: true,
  effect: "slide",
  speed: 800,
  navigation: {
    prevEl: '.js-modal--btnPrev',
    nextEl: '.js-modal--btnNext',
  },
  pagination: {
    el: '.js-modal--pagi',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return 'Image ' + ' <span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
    }
  },
});

$('.js-modal-open').on('click', function () {
  var index = $(this).index();
  modalSwiper.slideTo(index);
  $('.l-modal').fadeIn();
  $('body').addClass('is-lock');
})

modalSwiper.on('slideChange', function () {
  $body.attr("data-character", modalSwiper.realIndex + 1);
});


$('.js-modal-close').on('click', function () {


  $('.l-modal').fadeOut();
  $('body').removeClass('is-lock');

});

const swiper03 = new Swiper('.p-chara__slider', {
  // loop: true,
  grabCursor: true,
  effect: 'slide',
  centeredSlides: true,
  slidesPerView: 2,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

swiper03.on('slideChange', function () {
  $body.attr("data-character", swiper03.realIndex + 1);
});

$(".js-chara-tab").on("click", function () {
  $('.p-chara__item--tab').removeClass('is-active');
  $(this).addClass('is-active');
  swiper03.slideTo($(this).attr("data-num"));
});

const swiper04 = new Swiper('.p-gallery__slider', {
  loop: true,
  slidesPerView: 'auto',
  grabCursor: true,
  touchEventsTarget: true,
  centeredSlides: true,
  loopAdditionalSlides: 1,
})
