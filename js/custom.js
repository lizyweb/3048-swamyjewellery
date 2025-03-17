$(function(){

  'use strict';
  
  $(".loader").delay(50).fadeOut("slow");
  $("#overlayer").delay(50).fadeOut("slow");	
  
  
  var siteIstotope = function() {
    var $container = $('#posts').isotope({
      itemSelector : '.item',
      isFitWidth: true
    });
  
    $(window).resize(function(){
      $container.isotope({
        columnWidth: '.col-sm-3'
      });
    });
  
    $container.isotope({ filter: '*' });
  
    $('#filters').on( 'click', 'a', function(e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
      $('#filters a').removeClass('active');
      $(this).addClass('active');
    });
  
    $container.imagesLoaded()
    .progress( function() {
      $container.isotope('layout');
    })
    .done(function() {
      $('.gsap-reveal-img').each(function() {
        var html = $(this).html();
        $(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
      });
  
      var controller = new ScrollMagic.Controller();
  
      var revealImg = $('.gsap-reveal-img');
  
      if ( revealImg.length ) {
        var i = 0;
        revealImg.each(function() {
  
          var cover = $(this).find('.cover'),
          revealContent = $(this).find('.reveal-content'),
          img = $(this).find('.reveal-content img');
  
  
          var tl2 = new TimelineMax();
          setTimeout(function() {
            tl2
            tl2.set(img, {  scale: '1.2', autoAlpha: 1, })
            .to(cover, 0.5, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
              tl2.set(revealContent, { autoAlpha: 1 });
              tl2.to(cover, 0.5, { marginLeft: '102%', ease:Expo.easeInOut });
              tl2.to(img, 2, { scale: '1.0', ease:Linear.easeNone }, '-=2.5');
            } } )
  
          }, i * 200);
  
  
  
          var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "0%",
            reverse: false,
            offset: "-300%",
          })
          .setTween(tl2)
          .addTo(controller);
  
          i++;
  
        });
      }
    })
  
    $('.js-filter').on('click', function(e) {
      e.preventDefault();
      $('#filters').toggleClass('active');
    });
  
  }
  siteIstotope();
  
  
  var siteGSAPRevealHero = function() {
    var controller = new ScrollMagic.Controller();
  
    $('.gsap-reveal-hero').each(function() {
      var html = $(this).html();
      $(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
    });
    var grevealhero = $('.gsap-reveal-hero');
  
    if ( grevealhero.length ) {
      var heroNum = 0;
      grevealhero.each(function() {
  
        var cover = $(this).find('.cover'),
        revealContent = $(this).find('.reveal-content');
  
        var tl2 = new TimelineMax();
  
        setTimeout(function() {
  
          tl2
          .to(cover, 0.5, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
            tl2.set(revealContent, { x: 0 });
            tl2.to(cover, 0.5, { marginLeft: '102%', ease:Expo.easeInOut });
          } } )
        }, heroNum * 0 );
  
        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: "0%",
          reverse: false,
          offset: "-300%",
        })
        .setTween(tl2)
        .addTo(controller);
  
        heroNum++;
      });
    }
  }
  siteGSAPRevealHero();
  
  
  });