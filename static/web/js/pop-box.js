/**弹窗js */
$(document).ready(function(){

    // 显示弹窗
    // $("#sanhuiBtn").on("click", function() {

    //     $("#sanhuiPop").removeClass("hide");

        // 三会一课轮播
        var popSwiper1 = new Swiper('#popSwiper1 .swiper',{
            slidesPerView:1,
            // spaceBetween : 30,
            navigation: {
                nextEl: '#popSwiper1 .swiper-button-next',
                prevEl: '#popSwiper1 .swiper-button-prev',
            },
        })

    // })
    
    
    // 党政通知通告轮播
    var popSwiper2 = new Swiper('#popSwiper2 .swiper',{
        slidesPerView:1,
        // spaceBetween : 30,
        navigation: {
            nextEl: '#popSwiper2 .swiper-button-next',
            prevEl: '#popSwiper2 .swiper-button-prev',
        },
    })

    // 党政通知通告轮播
    var popSwiper3 = new Swiper('#popSwiper3 .swiper',{
        slidesPerView:1,
        // spaceBetween : 30,
        navigation: {
            nextEl: '#popSwiper3 .swiper-button-next',
            prevEl: '#popSwiper3 .swiper-button-prev',
        },
    })

    // “X”随手拍轮播
    var popClapSwiper = new Swiper('#popClapSwiper .swiper',{
        slidesPerView:1,
        // spaceBetween : 30,
        navigation: {
            nextEl: '#popClapSwiper .swiper-button-next',
            prevEl: '#popClapSwiper .swiper-button-prev',
        },
    })

    // 乡村资讯
    var popArticleSwiper = new Swiper('#popArticleSwiper .swiper',{
        slidesPerView:1,
        // spaceBetween : 30,
        navigation: {
            nextEl: '#popArticleSwiper .swiper-button-next',
            prevEl: '#popArticleSwiper .swiper-button-prev',
        },
    })

    // 妇女之家
    var popWomanSwiper = new Swiper('#popWomanSwiper .swiper',{
        slidesPerView:1,
        // spaceBetween : 30,
        navigation: {
            nextEl: '#popWomanSwiper .swiper-button-next',
            prevEl: '#popWomanSwiper .swiper-button-prev',
        },
    })

    // 志愿服务
    var aspirationSwiper = new Swiper('#aspirationSwiper .swiper',{
        slidesPerView:1,
        // spaceBetween : 30,
        navigation: {
            nextEl: '#aspirationSwiper .swiper-button-next',
            prevEl: '#aspirationSwiper .swiper-button-prev',
        },
    })

    // 关闭弹窗
    $(".pop-close-btn").on("click", function() {
        $(this).parents(".pop-box").addClass("hide");
    })
});