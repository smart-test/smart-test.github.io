$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  }, 
});
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets =$('.swiper-pagination');


    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height > 100){
      $('header').addClass('header__scroll');
      } else{
      $('header').removeClass('header__scroll');
      }
      
      });  	
        var header = $(".header");
        var scrollPrev = 0 
        
        $(window).scroll(function() {
          var scrolled = $(window).scrollTop(); 
          var firstScrollUp = false;
          var firstScrollDown = false;
          
          if ( scrolled > 0 ) {
            if ( scrolled > scrollPrev ) {
              firstScrollUp = false;
              if ( scrolled < header.height() + header.offset().top ) {
                if ( firstScrollDown === false ) {
                  var topPosition = header.offset().top;
                  header.css({
                    "top": topPosition + "px"
                  });
                  firstScrollDown = true;
                }
                header.css({
                  "position": "absolute"
                });
              } else {
                header.css({
                  "position": "fixed",
                  "top": "-" + header.height() + "px"
                });
              }
            } else {
              firstScrollDown = false; 
              if ( scrolled > header.offset().top ) {
                if ( firstScrollUp === false ) {
                  var topPosition = header.offset().top;
                  header.css({
                    "top": topPosition + "px"
                  });
                  firstScrollUp = true;
                }
                header.css({
                  "position": "absolute"
                });
              } else {
                header.removeAttr("style");
              }
            }
            scrollPrev = scrolled;
          }
          
        });

        new WOW().init();

});

$(document).ready(function(){
  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
      e.preventDefault();
      var t = 1200;
      var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
  });
});

$(document).ready(function(){
  $('#capSelect .capItem').on('click', function(){
    var imgPath;
    imgPath = $(this).attr('data-img-path');
    $('#imgHolder img').attr('src', imgPath);
  });
});
