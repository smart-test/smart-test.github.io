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
    $('#imgHolder img').fadeOut(500, function(){
      $('#imgHolder img').attr('src', imgPath).fadeIn(300);
    });
  });
});

$(document).ready(function(){
  $('#capSelect1 .capItem').on('click', function(){
    var imgPath;
    imgPath = $(this).attr('data-img-path');
    $('#imgHolder1 img').fadeOut(500, function(){
      $('#imgHolder1 img').attr('src', imgPath).fadeIn(300);
    });
    
  });
});

$(".opacity").click(function(e) {
  e.preventDefault();
  $(".opacity").removeClass('active');
  $(this).addClass('active');
})
$(".opacity1").click(function(e) {
  e.preventDefault();
  $(".opacity1").removeClass('active');
  $(this).addClass('active');
})
$('.capItem').hover(
  function () {
    $(this).addClass('active1');
  },
  function () {
    $(this).removeClass('active1');
  }
);


/* Скролл вверх */
$(document).ready(function(){

  $(function (){
  $("#back-top").hide();

  $(window).scroll(function (){
    if ($(this).scrollTop() > 700){
      $("#back-top").fadeIn();
    } else{
      $("#back-top").fadeOut();
    }
  });
  $("#back-top").click(function (){
    $("body,html").animate({
      scrollTop:0
    }, 800);
    return false;
  });
});
});
$(document).ready(function() { // Ждём загрузки страницы
	
	$(".popup-start").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	});
	
});

$(document).ready(function() { 
	
	$(".popup-start-big").click(function(){
	  	var img = $(this);
		var src = img.attr('src'); 
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src='"+src+"' class='popup_img-big' />"+ 
						 "</div>"); 
		$(".popup").fadeIn(800); 
		$(".popup_bg").click(function(){	  
			$(".popup").fadeOut(800);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 800);
		});
	});
	
});