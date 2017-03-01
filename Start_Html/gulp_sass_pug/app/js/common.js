// magnific-popup

$(document).ready(function() {
    $('.test-popup-link').magnificPopup({
      type:'image',
      gallery: {
        enabled: true,
        tCounter: '%curr% из %total%'
      }
    });
  });

// slick-slider

$(document).ready(function(){
  $('.portfolio-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

// Main-nav scroll animation

$(document).ready(function(){
  $("#mainNav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 700 мс
    $('body,html').animate({scrollTop: top}, 700);
  });
});

//Sections show animation

$(document).ready(function() {

// fadeInLeft animtaion
  $('.animate-fade-in-left').addClass("invisible-block").viewportChecker({
  classToAdd: 'visible-block animated fadeInLeft',
  offset: 150
  });
//  fadeInRight animtaion
  $('.animate-fade-in-right').addClass("invisible-block").viewportChecker({
  classToAdd: 'visible-block animated fadeInRight',
  offset: 150
  });
//  fadeIn animtaion
  $('.animate-fade-in').addClass("invisible-block").viewportChecker({
  classToAdd: 'visible-block animated fadeIn',
  offset: 100
  });

});

//Social buttons animation

$(document).ready(function() {

  $('.animate-social').hover(
       function(){ $(this).addClass('animated swing') },
       function(){ $(this).removeClass('animated swing') }
)

});

//Main-nav links hover animation

$(document).ready(function() {

  $('.animate-main-link').hover(
       function(){ $(this).addClass('animated rubberBand') },
       function(){ $(this).removeClass('animated rubberBand') }
)

});
