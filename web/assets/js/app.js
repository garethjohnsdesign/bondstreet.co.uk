// 1. Packages
// -----------

// @codekit-prepend "/node_modules/jquery/dist/jquery.js";
// @codekit-prepend "/node_modules/foundation-sites/dist/js/foundation.js";
// @codekit-prepend "/node_modules/motion-ui/dist/motion-ui.js";
// @codekit-prepend "/node_modules/what-input/dist/what-input.js";
// @codekit-prepend "/node_modules/swiper/dist/js/swiper.js";
// @codekit-prepend "/node_modules/lightgallery/dist/js/lightgallery-all.js";
// @codekit-prepend "/node_modules/smooth-scroll/dist/smooth-scroll.polyfills.js";
// @codekit-prepend "/node_modules/aos/dist/aos.js";

$(document).ready(function() {

// 2. Foundation Queries
// ---------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

// 3. Foundation
// -------------

$(document).foundation();


// 2. Cookies Policy
// -----------------


// 4. Lightgallery
// ---------------

$('#video-gallery').lightGallery({
  counter : false,
  vimeoPlayerParams: {
      byline : 0,
      portrait : 0,
      color : '272A67'
  },
  youtubePlayerParams: {
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      controls: 0
  }
}); 

// 5. Swiper
// ---------

var swiper = new Swiper('.carousel--explore', {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev'
  },
  breakpoints: {
    1440: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 1
    }
  }
})


var swiper = new Swiper('.carousel--matrix', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev'
  },
})


var swiper = new Swiper('.carousel--instagram', {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev'
  },
  breakpoints: {
    1440: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 1
    }
  }
})

// 6. Smooth Scroll
// ----------------

var scroll = new SmoothScroll('a[href*="#"]');

// 7. Animate on Scroll
// --------------------

$(function() {
  AOS.init({
    offset: 64,
    easing: 'ease-in-out-quart',
    duration: 600
  });
});

$(function() {
  window.addEventListener('load', AOS.refresh);
});


});