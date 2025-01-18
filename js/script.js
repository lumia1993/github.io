$(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    margin: 10,
    lazyLoad: true,
    center: true,
    responsive: {
      800: {
        items: 1
      },
      850: {
        items: 2
      },
      1250: {
        items: 2
      }
    }
  });
});


