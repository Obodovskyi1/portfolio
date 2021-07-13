const hamburger = document.querySelector('.hamburger'),
     closes = document.querySelector('.menu_block_close'),
     menu = document.querySelector('.menu'),
     items = document.querySelector('.menu_block_list'),
     aside = document.querySelector('.aside'),
     overlay = document.querySelector('.menu_overlay'),
     body = document.querySelector('.body'),
     scroll = calcScroll();

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
    body.classList.add('overflow');
    document.body.style.cssText = `
    padding-right: 16px;
    `
});

function hideMenu(i){
  i.addEventListener('click', ()=>{
      menu.classList.remove('active');
      body.classList.remove('overflow');
  }); 
}

hideMenu(closes);
hideMenu(overlay);

$(window).scroll(function(){
  if ($(this).scrollTop() < 550){
    aside.classList.add('aside__active');
  } else {
    aside.classList.remove('aside__active');
  }
});

function calcScroll(){
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  return scrollWidth;
}
function Up(i){
    $(i).click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+80+"px"});
      menu.classList.remove('active');
      body.classList.remove('overflow');
      return false;
    });
  }
  Up("a[href^='#about']");
  Up("a[href^='#experience']");
  Up("a[href^='#skills']");
  Up("a[href^='#works']");
  Up("a[href^='#price']");
  Up("a[href^='#contacts']");
  function UpArrow(i){
    $(i).click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      menu.classList.remove('active');
      return false;
    });
  }
  UpArrow("a[href^='#up']");



const percents = document.querySelectorAll('.skills_ratings_percent'),
    lines = document.querySelectorAll('.skills_ratings_line span');

percents.forEach( (item, i) =>{
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){


    $(window).scroll(function(){
    if ($(this).scrollTop() > 1350){
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
    });

    

// Form
// function validateForms(form){
//   $(form).validate({
//       rules: {
//           name: {
//               required: true,
//               minlength: 2
//           },
//           phone: "required",
//           email: {
//               required: true,
//               email: true
//           }
//       },
//       messages: {
//           name: {
//               required: "Пожалуйста, введите свое имя",
//               minlength: jQuery.validator.format("Введите {0} символа!")
//             },
//           email: {
//             required: "Пожалуйста, введите свою почту",
//             email: "Неправильно введен адрес почты"
//           }
//       }
//   }); 
// }
// validateForms('#contacts_form');
// $('#contacts_form').validate();
var submitted=false;


$('#contacts_form').on('submit', function(e){ 
  $('#contacts_form *').hide(); 
  $('#contacts_form').prepend('Спасибо, ваша заявка обработана...'); 
}); 

 
// $('form').submit(function(e){
//     e.preventDefault();
//     $.ajax({
//       type: "POST",
//       url: "../mailer/smart.php",
//       data: $(this).serialize()
//     }).done(function(){
//       $(this).find("input").val("");
//       $('#consultation, #order').fadeOut();
//       $('.overlay, #thanks').fadeIn('slow');

//       $('form').trigger('reset');
//     });
//     return false;
//   });

  new WOW().init();
});


/*!***************************************************
 * google-translate.js v1.0.2
 * https://Get-Web.Site/
 * author: L2Banners
 *****************************************************/

const googleTranslateConfig = {
  lang: "ru",
  /* Если скрипт не работает на поддомене, 
  раскомментируйте и
  укажите основной домен в свойстве domain */
  /* domain: "Get-Web.Site" */
};

function TranslateInit() {
  let code = TranslateGetCode();
  // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
  $('[data-google-lang="' + code + '"]').addClass('language__img_active');

  if (code == googleTranslateConfig.lang) {
      // Если язык по умолчанию, совпадает с языком на который переводим
      // То очищаем куки
      TranslateCookieHandler(null, googleTranslateConfig.domain);
  }

  // Инициализируем виджет с языком по умолчанию
  new google.translate.TranslateElement({
      pageLanguage: googleTranslateConfig.lang,
  });

  // Вешаем событие  клик на флаги
  $('[data-google-lang]').click(function () {
      TranslateCookieHandler("/auto/" + $(this).attr("data-google-lang"), googleTranslateConfig.domain);
      // Перезагружаем страницу
      window.location.reload();
  });
}

function TranslateGetCode() {
  // Если куки нет, то передаем дефолтный язык
  let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
  return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
  // Записываем куки /язык_который_переводим/язык_на_который_переводим
  $.cookie('googtrans', val);
  $.cookie("googtrans", val, {
      domain: "." + document.domain,
  });

  if (domain == "undefined") return;
  // записываем куки для домена, если он назначен в конфиге
  $.cookie("googtrans", val, {
      domain: domain,
  });

  $.cookie("googtrans", val, {
      domain: "." + domain,
  });
}
