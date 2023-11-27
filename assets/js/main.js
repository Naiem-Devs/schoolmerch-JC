(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
 // menu 
  $('.sch__item_thumb__front').click( function (){ 
    $('.sch__item').addClass("front")
    $('.sch__item').removeClass("back")    
  }); 
  $('.sch__item_thumb__back').click( function (){  
    $('.sch__item').addClass("back") 
    $('.sch__item').removeClass("front") 
  }); 

  $('.mobile-menu').prepend('<a href="index.html" class="logo-m"><img src="assets/img/logo.png" alt=""></a>')
  $('.mobile-menu nav ').prepend('<div class="header_btn"><a href="#" class="">Create your design</a></div>')

  // owlCarousel
  $(".order-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: true,
    dots: true,
    smartSpeed: 1000
  });


  // owlCarousel
  $(".Product__slider").owlCarousel({
    smartSpeed: 1000,
    loop: true,
    margin: 50,
    items: 3,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".hodi-slider").owlCarousel({
    smartSpeed: 1000,
    loop: true,
    margin: 10,
    items: 5,
    center:true,
    stagePadding: 150,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        center: true,
        stagePadding: 0,
        items: 2
      },
      767: {
        items: 2,
        center: true,
        stagePadding: 70
      },
      992: {
        items: 3,
        stagePadding: 50
      },
      1200: {
        items: 3
      }
    }
  });




  // owlCarousel
  $(".brand-active").owlCarousel({
    smartSpeed: 1000,
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
