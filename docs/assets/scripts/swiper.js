"use strict";

var elmIndexSwiper = document.querySelectorAll('.js-index-slider');
var elmIndexBtnP = document.querySelectorAll('.js-slider-btnPrev');
var elmIndexBtnN = document.querySelectorAll('.js-slider-btnNext'); // if (elmIndexSwiper.length > 0) {
//   for (let i = 0; i < elmIndexSwiper.length; i++) {
//     elmIndexSwiper[i].className += i;
//     elmIndexBtnP[i].className += i;
//     elmIndexBtnN[i].className += i;
//     var swiper = new Swiper('.js-index-slider' + i, {
//       slidesPerView: 'auto',
//       grabCursor: true,
//       touchEventsTarget: true,
//       navigation: {
//         prevEl: '.js-slider-btnPrev' + i,
//         nextEl: '.js-slider-btnNext' + i,
//       },
//     });
//   }
// }

var swiper01 = new Swiper('.js-index-slider', {
  slidesPerView: 'auto',
  grabCursor: true,
  touchEventsTarget: true,
  navigation: {
    prevEl: '.js-slider-btnPrev',
    nextEl: '.js-slider-btnNext'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    // スクロールバーとして認識させるクラス
    hide: false,
    // ユーザー操作後にスクロールバーを非表示にしない
    draggable: true,
    // ドラッグ操作を可能にする
    dragClass: 'drag',
    // ドラッグ可能なクラスの指定
    dragSize: 1,
    // ドラッグのサイズ指定
    snapOnRelease: false // スクロールバーを離したときにスライダーの位置を固定しないようにする

  }
});
var modalSwiper = new Swiper('.js-modal-slider', {
  slidesPerView: 'auto',
  // loop: true,
  grabCursor: true,
  autoHeight: true,
  centeredSlides: true,
  effect: "slide",
  speed: 800,
  navigation: {
    prevEl: '.js-modal--btnPrev',
    nextEl: '.js-modal--btnNext'
  },
  pagination: {
    el: '.js-modal--pagi',
    type: 'fraction',
    renderFraction: function renderFraction(currentClass, totalClass) {
      return 'Image ' + ' <span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
    }
  }
});
$('.js-modal-open').on('click', function () {
  var index = $(this).index();
  modalSwiper.slideTo(index);
  $('.l-modal').fadeIn();
  $('body').addClass('is-lock');
});
modalSwiper.on('slideChange', function () {
  $body.attr("data-character", modalSwiper.realIndex + 1);
});
$('.js-modal-close').on('click', function () {
  $('.l-modal').fadeOut();
  $('body').removeClass('is-lock');
});
var swiper03 = new Swiper('.p-chara__slider', {
  // loop: true,
  // grabCursor: true,
  effect: 'slide',
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
swiper03.on('slideChange', function () {
  $body.attr("data-character", swiper03.realIndex + 1);
});
$(".js-chara-tab").on("click", function () {
  $('.p-chara__item--tab').removeClass('is-active');
  $(this).addClass('is-active');
  swiper03.slideTo($(this).attr("data-num"));
});
var swiper04 = new Swiper('.p-gallery__slider', {
  loop: true,
  slidesPerView: 'auto',
  grabCursor: true,
  touchEventsTarget: true,
  centeredSlides: true,
  loopAdditionalSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});