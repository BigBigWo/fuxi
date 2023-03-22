$(document).ready(function(){
  var mySwiper = new Swiper('#swiper-container1 .swiper',{
    slidesPerView: 1,
    //  spaceBetween : 20,
    // loop: true,
    navigation: {
      nextEl: '#swiper-container1 .swiper-button-next',
      prevEl: '#swiper-container1 .swiper-button-prev',
    },
});

});