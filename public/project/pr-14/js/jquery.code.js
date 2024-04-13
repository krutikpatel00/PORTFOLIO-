$(document).ready(function () {
      $(".taggle-manu").click(function (e) {
            $("header nav").slideToggle();
      });
});

$(document).ready(function () {
      $('.owl-carousel-1').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  900: {
                        items: 3
                  },
                  1200: {
                        items: 4
                  }
            }
      })
      var owl = $('.owl-carousel-1');
      owl.owlCarousel();
      // Go to the next item
      $('.customNextBtn-1').click(function () {
            owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.customPrevBtn-1').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
      })
});

$(document).ready(function () {
      $('.owl-carousel-2').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                  0: {
                        items: 1
                  }

            }
      })
      var owl = $('.owl-carousel-2');
      owl.owlCarousel();
      // Go to the next item
      $('.customNextBtn-2').click(function () {
            owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.customPrevBtn-2').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
      })
});

$(document).ready(function () {
      $('.owl-carousel-3').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  },
                  1200: {
                        items: 4
                  }
            }
      })
});