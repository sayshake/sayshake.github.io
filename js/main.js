$(document).ready(function(){
    
    //переключаем див для кнопки , открываем выпадающий текст
    
    $('.header-read').click(function(event){
        event.preventDefault();
        $('.header-text-closed').slideToggle('slow');
    });
    
    //плавная прокрутка кнопок из меню по категории 
    
    $('.menu-click').on('click','a', function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    //плавная прокрутка по кнопке наверх  к меню 
    
    $('.button-arrow-footer').on('click','a', function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    
     //функция для выравнивания колонок
    
        $('.container').each(function(e){
            var highestBox = 0;
            $('.categories-box', this).each(function(){
                if($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            
            $('.categories-box',this).height(highestBox);
        });
    
    
  $(".owl-carousel").owlCarousel({
    loop: true,
    stagePadding: 7,
    margin: 15,
    dots: false,
    navText:["<img src=\"img/arrow%20(1).png\"> предыдущий слайд","следующий слайд <img src=\"img/arrow.png\">"],
    responsiveClass: true,
    responsive: {
        0:{
            items:1,
            nav:false,
            dots: true,
            stagePadding: 20
        },
        690:{
            items:2,
            nav: false,
            dots: true
        },
        1000:{
            items:3,
            nav:true,
            touchDrag:true
        }
    }
  });
    
});
   
//событие для галереи

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
