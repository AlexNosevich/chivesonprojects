const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  
});
new Splide( '.splide' ).mount();

// Обработка формы
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Введите Ваше имя",
          minlength: "Имя не может быть короче 2-х символов",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Введите ваш номер",
          phone: "Ваш номер должен быть в формате +79999999999",
          minlength: "Номер телефона не может быть короче 10 символов",

        },
      },
    });
  })
  $('.phone').mask('+7 (000)-000-00-00');
  $( ".phone" ).validate({
    rules: {
      field: {
        required:"More that 10 symbols",
        minlength: "More that 10 symbols",
        
      }
    }
  });