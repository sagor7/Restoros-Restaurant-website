$(function(){
 
  "use strict";
    
  var $nav = $('.full-nav');
  var $dis = $nav.offset().top;
  var $htmlbody = $('html,body');

   $(window).scroll(function () {
      var $scrolling = $(this).scrollTop();
     if ($scrolling >= 400) {
          $nav.addClass('position-fixed');
      } else {
          $nav.removeClass('position-fixed');
      }
  })
  
  $(window).scroll(function () {
    var $scrolling = $(this).scrollTop();
    if ($scrolling >= 800) {
        $nav.addClass('translateY');
    } else {
        $nav.removeClass('translateY');
    }
  })

  //smooth scroll 
  $('.navbar-nav .nav-item .nav-link').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $htmlbody.animate({
              scrollTop: target.offset().top - 65
          }, 1000);
          return false;
      }
    } 
  }); 
  
  //wow for banner text
  new WOW().init();
  
  //baanner background video
  $("#bgndVideo").YTPlayer();
   
  // setTimeout(function() {
  //   $("#bgndVideo").YTPlayer();
  // }, 3000);

  //food menu filter
  $(document).on('click', '.food-menu button', function(){
       $(this).addClass('active').siblings().removeClass('active')
   })

  var mixer = mixitup('.food-filter');

  //offer item slide
  $('.offer-slick').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });
  
  //gallery venobox
  $('.venobox').venobox({
    infinigall: true,
    spinner: "double-bounce",
    spinColor: "var(--brand-color)",
    arrowsColor: "#fff",
    border: '10px',             
    bgcolor: '#5dff5e',
    bgcolor: '#fff'
  });  

  //team slide
  $('.team-slick').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
     
    ]
  })

  //form date picker
  $('.datepicker').datepicker();

  //client slide
  $('.feedbk-slick').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
     
    ]
  })

  //back to top button
   $(".top-btn").click(function(){
      $($htmlbody).animate({
          "scrollTop" : "0"
      }, 500)
  });
  //top button fade in fade out
  $(window).scroll(function(){
      var scrollValue = $(this).scrollTop();

      if(scrollValue >= 500){
          $(".top-btn").fadeIn();
      }else{
       $(".top-btn").fadeOut();
      }
  });


  
 
}); 

