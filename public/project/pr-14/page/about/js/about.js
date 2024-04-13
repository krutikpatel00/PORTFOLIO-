$(document).ready(function () {
      $(".taggle-manu").click(function (e) {
            $("header nav").slideToggle();
      });
});
$(document).ready(function () {
      $('.owl-carousel-1').owlCarousel({
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
                  }
            }
      })
});