// 1. Packages
// -----------

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import Foundation from 'foundation-sites';
import Cookie from 'jquery.cookie'
import Swiper from 'swiper';
import AOS from 'aos';
import "lightGallery";
import "lg-fullscreen";
import "lg-video";
import "lg-autoplay";
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll("[data-scroll]");


// 2. Foundation Queries
// ---------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

// 3. Foundation
// -------------

$(document).foundation();


// 4. Viewport Height Fix
// ----------------------

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


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
  slidesPerView: 'auto',
  loop: false,
  centeredSlides: false,
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev'
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
  }
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

// var scroll = new SmoothScroll('a[href*="#"]');

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


// 2. Newsletter
// -------------

Foundation.MediaQuery.current

if (Foundation.MediaQuery.atLeast('medium')) {

  $(function() {
    if($.cookie('showed_modal') !== "true") {
  
  setTimeout(
    function() 
    {
  $("#newsletter").foundation("open");
    }, 2000);
  
      $.cookie('showed_modal', 'true', { expires: 365 }); 
    }
  });

}