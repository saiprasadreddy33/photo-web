'use strict';

var theme = {
  /**
   * Theme's components/functions list
   * Comment out or delete the unnecessary component.
   * Some components have dependencies (plugins).
   * Do not forget to remove dependency from src/js/vendor/ and recompile.
   */
  init: function init() {
    theme.stickyHeader();
    theme.subMenu();
    theme.offCanvas();
    theme.isotope();
    theme.onepageHeaderOffset();
    theme.anchorSmoothScroll();
    theme.imageHoverOverlay();
    theme.scrollCue();
    theme.swiperSlider();
    theme.lightbox();
    theme.forms();
  },

  /**
   * Sticky Header
   * Enables sticky behavior on navbar on page scroll
   * Requires assets/js/vendor/headhesive.min.js
  */
  stickyHeader: function stickyHeader() {
    var navbar = document.querySelector(".navbar");
    if (navbar == null) return;
    var options = {
      offset: 400,
      offsetSide: 'top',
      classes: {
        clone: 'navbar-clone fixed',
        stick: 'navbar-stick',
        unstick: 'navbar-unstick'
      }
    };
    var banner = new Headhesive('.navbar', options);
  },

  /**
   * Sub Menus
   * Enables multilevel dropdown
   */
  subMenu: function subMenu() {
    (function ($bs) {
      var CLASS_NAME = 'has-child-dropdown-show';

      $bs.Dropdown.prototype.toggle = function (_original) {
        return function () {
          document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
            e.classList.remove(CLASS_NAME);
          });

          var dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');

          for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
            dd.classList.add(CLASS_NAME);
          }

          return _original.call(this);
        };
      }($bs.Dropdown.prototype.toggle);

      document.querySelectorAll('.dropdown').forEach(function (dd) {
        dd.addEventListener('hide.bs.dropdown', function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }

          e.stopPropagation();
        });
      });
    })(bootstrap);
  },

  /**
   * Offcanvas
   * Enables offcanvas-nav, closes offcanvas on anchor clicks, focuses on input in search offcanvas
   */
  offCanvas: function offCanvas() {
    var navbar = document.querySelector(".navbar");
    if (navbar == null) return;
    var navOffCanvasBtn = document.querySelectorAll(".offcanvas-nav-btn");
    var navOffCanvas = document.querySelector('.navbar:not(.navbar-clone) .offcanvas-nav');
    var bsOffCanvas = new bootstrap.Offcanvas(navOffCanvas, {
      scroll: true
    });
    var scrollLink = document.querySelectorAll('.onepage .navbar li a.scroll');
    var searchOffcanvas = document.getElementById('offcanvas-search');
    navOffCanvasBtn.forEach(function (e) {
      e.addEventListener('click', function (event) {
        bsOffCanvas.show();
      });
    });
    scrollLink.forEach(function (e) {
      e.addEventListener('click', function (event) {
        bsOffCanvas.hide();
      });
    });

    if (searchOffcanvas != null) {
      searchOffcanvas.addEventListener('shown.bs.offcanvas', function () {
        document.getElementById("search-form").focus();
      });
    }
  },

  /**
   * Isotope
   * Enables isotope grid layout and filtering
   * Requires assets/js/vendor/isotope.pkgd.min.js
   * Requires assets/js/vendor/imagesloaded.pkgd.min.js
   */
  isotope: function isotope() {
    var grids = document.querySelectorAll('.grid');

    if (grids != null) {
      grids.forEach(function (g) {
        var grid = g.querySelector('.isotope');
        var filtersElem = g.querySelector('.isotope-filter');
        var buttonGroups = g.querySelectorAll('.isotope-filter');
        var iso = new Isotope(grid, {
          itemSelector: '.item',
          layoutMode: 'masonry',
          masonry: {
            columnWidth: grid.offsetWidth / 12
          },
          percentPosition: true,
          transitionDuration: '0.7s'
        });
        imagesLoaded(grid).on("progress", function () {
          iso.layout({
            masonry: {
              columnWidth: grid.offsetWidth / 12
            }
          });
        }), window.addEventListener("resize", function () {
          iso.arrange({
            masonry: {
              columnWidth: grid.offsetWidth / 12
            }
          });
        }, true);

        if (filtersElem != null) {
          filtersElem.addEventListener('click', function (event) {
            if (!matchesSelector(event.target, '.filter-item')) {
              return;
            }

            var filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
              filter: filterValue
            });
          });

          for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            buttonGroup.addEventListener('click', function (event) {
              if (!matchesSelector(event.target, '.filter-item')) {
                return;
              }

              buttonGroup.querySelector('.active').classList.remove('active');
              event.target.classList.add('active');
            });
          }
        }
      });
    }
  },

  /**
   * Onepage Header Offset
   * Adds an offset value to anchor point equal to sticky header height on a onepage
   */
  onepageHeaderOffset: function onepageHeaderOffset() {
    var navbar = document.querySelector(".navbar");
    if (navbar == null) return;
    var header_height = document.querySelector(".navbar").offsetHeight;
    var shrinked_header_height = 75;
    var sections = document.querySelectorAll(".onepage section");
    sections.forEach(function (section) {
      section.style.paddingTop = shrinked_header_height + 'px';
      section.style.marginTop = '-' + shrinked_header_height + 'px';
    });
    var first_section = document.querySelector(".onepage section:first-of-type");

    if (first_section != null) {
      first_section.style.paddingTop = header_height + 'px';
      first_section.style.marginTop = '-' + header_height + 'px';
    }
  },

  /**
   * Anchor Smooth Scroll
   * Adds smooth scroll animation to links with .scroll class
   * Requires assets/js/vendor/smoothscroll.js
   */
  anchorSmoothScroll: function anchorSmoothScroll() {
    var links = document.querySelectorAll(".scroll");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var link = _step.value;
        link.addEventListener("click", clickHandler);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    function clickHandler(e) {
      e.preventDefault();
      this.blur();
      var href = this.getAttribute("href");
      var offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  },

  /**
   * Image Hover Overlay
   * Adds span.bg inside .overlay for simpler markup and styling purposes
   */
  imageHoverOverlay: function imageHoverOverlay() {
    var overlay = document.querySelectorAll('.overlay > a, .overlay > span');

    for (var i = 0; i < overlay.length; i++) {
      var overlay_bg = document.createElement('span');
      overlay_bg.className = "bg";
      overlay[i].appendChild(overlay_bg);
    }
  },

  /**
   * scrollCue.js
   * Enables showing elements by scrolling
   * Requires assets/js/vendor/scrollCue.min.js
   */
  scrollCue: function (_scrollCue) {
    function scrollCue() {
      return _scrollCue.apply(this, arguments);
    }

    scrollCue.toString = function () {
      return _scrollCue.toString();
    };

    return scrollCue;
  }(function () {
    scrollCue.init({
      interval: -200,
      duration: 700,
      percentage: 0.8
    });
    scrollCue.update();
  }),

  /**
   * Swiper Slider
   * Enables carousels and sliders
   * Requires assets/js/vendor/swiper-bundle.min.js
   */
  swiperSlider: function swiperSlider() {
    var carousel = document.querySelectorAll('.swiper-container');

    for (var i = 0; i < carousel.length; i++) {
      var slider1 = carousel[i];
      slider1.classList.add('swiper-container-' + i);
      var controls = document.createElement('div');
      controls.className = "swiper-controls";
      var pagi = document.createElement('div');
      pagi.className = "swiper-pagination";
      var navi = document.createElement('div');
      navi.className = "swiper-navigation";
      var prev = document.createElement('div');
      prev.className = "swiper-button swiper-button-prev";
      var next = document.createElement('div');
      next.className = "swiper-button swiper-button-next";
      slider1.appendChild(controls);
      controls.appendChild(navi);
      navi.appendChild(prev);
      navi.appendChild(next);
      controls.appendChild(pagi);
      var sliderEffect = slider1.getAttribute('data-effect') ? slider1.getAttribute('data-effect') : 'slide';

      if (slider1.getAttribute('data-items-auto') === 'true') {
        var slidesPerViewInit = "auto";
        var breakpointsInit = null;
      } else {
        var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 3; // items in all devices

        var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : 1; // start - 575

        var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsXs); // 576 - 767

        var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsSm); // 768 - 991

        var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsMd); // 992 - 1199

        var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItemsLg); // 1200 - end

        var sliderItemsXxl = slider1.getAttribute('data-items-xxl') ? slider1.getAttribute('data-items-xxl') : Number(sliderItemsXl); // 1500 - end

        var slidesPerViewInit = sliderItems;
        var breakpointsInit = {
          0: {
            slidesPerView: Number(sliderItemsXs)
          },
          576: {
            slidesPerView: Number(sliderItemsSm)
          },
          768: {
            slidesPerView: Number(sliderItemsMd)
          },
          992: {
            slidesPerView: Number(sliderItemsLg)
          },
          1200: {
            slidesPerView: Number(sliderItemsXl)
          },
          1400: {
            slidesPerView: Number(sliderItemsXxl)
          }
        };
      }

      var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
      var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false';
      var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 5000;
      var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true';
      var sliderMargin = slider1.getAttribute('data-margin') ? slider1.getAttribute('data-margin') : 30;
      var sliderLoop = slider1.getAttribute('data-loop') === 'true';
      var sliderCentered = slider1.getAttribute('data-centered') === 'true';
      var swiper = slider1.querySelector('.swiper:not(.swiper-thumbs)');
      var swiperTh = slider1.querySelector('.swiper-thumbs');
      var sliderTh = new Swiper(swiperTh, {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: false,
        threshold: 2,
        slideToClickedSlide: true
      });

      if (slider1.getAttribute('data-thumbs') === 'true') {
        var thumbsInit = sliderTh;
        var swiperMain = document.createElement('div');
        swiperMain.className = "swiper-main";
        swiper.parentNode.insertBefore(swiperMain, swiper);
        swiperMain.appendChild(swiper);
        slider1.removeChild(controls);
        swiperMain.appendChild(controls);
      } else {
        var thumbsInit = null;
      }

      var slider = new Swiper(swiper, {
        on: {
          beforeInit: function beforeInit() {
            if (slider1.getAttribute('data-nav') !== 'true' && slider1.getAttribute('data-dots') !== 'true') {
              controls.remove();
            }

            if (slider1.getAttribute('data-dots') !== 'true') {
              pagi.remove();
            }

            if (slider1.getAttribute('data-nav') !== 'true') {
              navi.remove();
            }
          },
          init: function init() {
            if (slider1.getAttribute('data-autoplay') !== 'true') {
              this.autoplay.stop();
            }

            this.update();
          }
        },
        autoplay: {
          delay: sliderAutoPlayTime,
          disableOnInteraction: false
        },
        speed: sliderSpeed,
        fadeEffect: {
          crossFade: true
        },
        slidesPerView: slidesPerViewInit,
        loop: sliderLoop,
        centeredSlides: sliderCentered,
        spaceBetween: Number(sliderMargin),
        effect: sliderEffect,
        autoHeight: sliderAutoHeight,
        grabCursor: true,
        resizeObserver: false,
        breakpoints: breakpointsInit,
        pagination: {
          el: carousel[i].querySelector('.swiper-pagination'),
          clickable: true
        },
        navigation: {
          prevEl: slider1.querySelector('.swiper-button-prev'),
          nextEl: slider1.querySelector('.swiper-button-next')
        },
        thumbs: {
          swiper: thumbsInit
        }
      });
    }
  },

  /**
   * GLightbox
   * Enables lightbox functionality
   * Requires assets/js/vendor/glightbox.js
   */
  lightbox: function lightbox() {
    var lightbox = GLightbox({
      selector: '*[data-glightbox]',
      touchNavigation: true,
      loop: false,
      zoomable: false,
      autoplayVideos: false,
      moreLength: 0,
      slideExtraAttributes: {
        poster: ''
      },
      plyr: {
        css: '',
        js: '',
        config: {
          ratio: '',
          fullscreen: {
            enabled: false,
            iosNative: false
          },
          youtube: {
            noCookie: true,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3
          },
          vimeo: {
            byline: false,
            portrait: false,
            title: false,
            transparent: false
          }
        }
      }
    });
  },

  /**
   * Form Validation and Contact Form submit
   * Bootstrap validation - Only sends messages if form has class ".contact-form" and is validated and shows success/fail messages
   */
  forms: function forms() {
    (function () {
      "use strict";

      window.addEventListener("load", function () {
        var forms = document.querySelectorAll(".needs-validation");
        var inputRecaptcha = document.querySelector("input[data-recaptcha]");

        window.verifyRecaptchaCallback = function (response) {
          inputRecaptcha.value = response;
          inputRecaptcha.dispatchEvent(new Event("change"));
        };

        window.expiredRecaptchaCallback = function () {
          var inputRecaptcha = document.querySelector("input[data-recaptcha]");
          inputRecaptcha.value = "";
          inputRecaptcha.dispatchEvent(new Event("change"));
        };

        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener("submit", function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");

            if (form.checkValidity() === true) {
              event.preventDefault();
              form.classList.remove("was-validated"); // Send message only if the form has class .contact-form

              var isContactForm = form.classList.contains('contact-form');

              if (isContactForm) {
                var data = new FormData(form);
                var alertClass = 'red';
                fetch("assets/php/contact.php", {
                  method: "post",
                  body: data
                }).then(function (data) {
                  if (data.ok) {
                    alertClass = 'green';
                  }

                  return data.text();
                }).then(function (txt) {
                  var alertBox = '<div class="mb-6 text-' + alertClass + '">' + txt + '</div>';

                  if (alertClass && txt) {
                    form.querySelector(".messages").insertAdjacentHTML('beforeend', alertBox);
                    form.reset();
                    grecaptcha.reset();
                  }
                })["catch"](function (err) {
                  console.log(err);
                });
              }
            }
          }, false);
        });
      }, false);
    })();
  }
};
theme.init();
//# sourceMappingURL=theme.dev.js.map
