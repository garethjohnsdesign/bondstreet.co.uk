$(document).ready(function() {

// 1. Foundation
// -------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

$(document).foundation();


// 2. Cookies Policy
// -----------------

$(function() {
  if($.cookie('showed_modal') !== "true") {

setTimeout(
  function() 
  {
$("#cookiesPolicy").foundation("open");
  }, 2000);

    $.cookie('showed_modal', 'true', { expires: 365 }); 
  }
});

// 3. Swiper
// ---------

$(document).ready(function () {

var swiper = new Swiper('.carousel--explore', {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 1,
    }
  }
})

});

$(document).ready(function () {

var swiper = new Swiper('.carousel--instagram', {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 1,
    }
  }
})

});


/*
$(document).on('opened.zf.offcanvas', function () {
    console.log('asdfasdfsadf')
    var modal = $(this);
    modal.find('[autofocus]').focus();
});
*/

// 2. Animate on Scroll
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

