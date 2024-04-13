$(document).ready(function () {

      $(".toggle-manu").click(function (e) {
            $("nav").toggleClass("nav-manu");
      });

      $(".nav-close").click(function (e) {
            $("nav").removeClass("nav-manu");

      });
});

// nav-dropdown
$(document).ready(function () {
      $("nav > ul > li > a").click(function (e) {
            $(this).parent("nav > ul > li").find(".dropdwon").slideToggle();
            $(this).parent("nav > ul > li").prevAll("nav > ul > li").find(".dropdwon").slideUp();
            $(this).parent("nav > ul > li").nextAll("nav > ul > li").find(".dropdwon").slideUp();
      });
});

// slider
$(document).ready(function () {
      $('.owl-carousel-1').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1050: {
                        items: 3
                  },
                  1200: {
                        items: 4
                  }
            }
      })
});

$(document).ready(function () {
      $('.owl-carousel-2').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            responsive: {
                  0: {
                        items: 1
                  },

                  1200: {
                        items: 1
                  }
            }
      })
});

// img hover

const cursor = document.querySelector('.card');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let speed = 0.01;

function animate() {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;

      cursorX = cursorX + (distX * speed);
      cursorY = cursorY + (distY * speed);

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animate);
}


animate();

document.addEventListener('mousemove', (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
})



      (function ($) {

            "use strict";

            $(".card").tilt({
                  maxTilt: 15,
                  perspective: 1500,
                  easing: "cubic-bezier(.03,.98,.52,.99)",
                  speed: 500,
                  glare: false,
                  maxGlare: 0.2,
                  scale: 1.01
            });

      }(jQuery));
