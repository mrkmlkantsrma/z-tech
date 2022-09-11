  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar").addClass("stickyadd");
    } else {
        $(".navbar").removeClass("stickyadd");
    }
});


$(".btn-get-service").on('click', function() {
	$(".popup-service").show();
});

$(".btn-get-homes").on('click', function() {
	$(".homes").show();
});

$(".btn-get-hospital").on('click', function() {
	$(".hospital").show();
});

$(".btn-get-clinics").on('click', function() {
	$(".clinics").show();
});



	$(".cross").on('click', function() {
	$(".popup-service, .homes, .hospital, .clinics").hide();
});







  AOS.init({
  duration: 2000,
})



        var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: 3000,
    autoplayStopOnLast: false, // loop false also
    // If we need pagination
    pagination: '.swiper-pagination',
    paginationType: "bullets",
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 20,
    //
    slidesPerView: 4,
    //
    centeredSlides: true,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
	 breakpoints: {

        // when window width is >= 320px

        320: {

          slidesPerView: 1,

          spaceBetween: 20

        },

        // when window width is >= 480px

        480: {

          slidesPerView: 1,

          spaceBetween: 30

        },

        // when window width is >= 640px

        640: {

          slidesPerView: 1,

          spaceBetween: 40

        }

       }
  }) 
  

  $('.swiper-container').on('mouseleave', function(e){
    console.log('start autoplay');
    mySwiper.startAutoplay();
  })