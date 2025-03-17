document.addEventListener('DOMContentLoaded', () => {
  "use strict";

   
  window.onpageshow = function(event) {
    if (event.persisted) {
      location.reload(); // Reload the page when navigated back to
    }
  };
      
  // Banner 
  
  $('.heading').height( $(window).height() );
  $('.parallaxie').parallaxie();
  
  
  //Main-Slider		
  $(window).on('load', function() {
      $('.slider-new-2').owlCarousel({
          items: 1,
          navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
          nav:true,
          loop: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 4000,
          animateOut: 'fadeOut',
          responsiveRefreshRate: 0,
          onInitialized: function(event) {
            centerSlideImages(event);
          },
          onResized: function(event) {
            centerSlideImages(event);
          },
      });
  });
  
  $('.slider-new-2').on("translate.owl.carousel", function (e) {
      $(".slider-content h2").removeClass("animated fadeInDown").css("opacity", "0");
      $(".slider-content p").removeClass("animated fadeInDown").css("opacity", "0");
      $(".slider-content .btn-slider").removeClass("animated fadeInDown").css("opacity", "0");
  });
  $('.slider-new-2').on("translated.owl.carousel", function (e) {
      $(".slider-content h2").addClass("animated fadeInDown").css("opacity", "1");
      $(".slider-content p").addClass("animated fadeInDown").css("opacity", "1");
      $(".slider-content .btn-slider").addClass("animated fadeInDown").css("opacity", "1");
  });

});