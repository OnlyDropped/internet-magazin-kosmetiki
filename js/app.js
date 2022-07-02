$('.header-menu__search').on('click', function () {
  $('.header-menu__form').slideDown(1000);
});
$('.header-menu__button').on('click', function () {
  $('.header-menu__form').slideUp(1000);
});

$('.header-menu__btn').on('click', function () {
  $('.wrapper').toggleClass('wrapper--active');
});

$('.closed').on('click', function () {
  $('.wrapper').removeClass('wrapper--active');
});

$('.slider').slick({
   arrows: true,
   prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrrow-prev.svg" alt=""></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrrow-next.svg" alt=""></button>',
   responsive: [
    {
      breakpoint: 376,
      settings: {
        arrows: false,
      }
    }
  ]
});

/*http://w3.org.ua/jquery/jquery-pishem-akkordeon-s-primeneniem-effektov/ */

 $('.add-card__preview').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  vertical: true,
  verticalSwiping: true,
  asNavFor: '.add-card__thumb',
  responsive: [
    {
      breakpoint: 376,
      settings: {
        vertical: false,
        verticalSwiping: false,
      }
    }
  ]
});
$('.add-card__thumb').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.add-card__preview',
  dots: false,
  arrows: false,
  //centerMode: true,
  focusOnSelect: true
});



$('.tovar-thumb').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  //fade: true,
  asNavFor: '.tovar-preview'
});
$('.tovar-preview').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  //autoplay: true,
  //autoplaySpeed: 2000,
  asNavFor: '.tovar-thumb',
  vertical: true,
	//infinite: true,
	verticalSwiping: true,
  arrows: false,
  //dots: true,
  //centerMode: true,
  focusOnSelect: true
});



$('.add-card__input').styler();



$('.beauty-product__wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev-arrow.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next-arrow.svg" alt=""></button>',
  //fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});



$('.add-card__tabs').each(function() {
	var ths = $(this);
	ths.find('.add-card__tab-item').not(':first').hide();
	ths.find('.add-card__tab').click(function() {
		ths.find('.add-card__tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.add-card__tab-item').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('active');
});



/*
$('.account__btn').on(click, function{
  $('.account-profile').toggleClass('account-profile--active');   
});

*/