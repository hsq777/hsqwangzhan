var swiper = new Swiper('.banner', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false
    },
    pagination: {
        el: '.banner-cricle',
        clickable: true
    },
    navigation: {
        nextEl: '.banner-btn-r',
        prevEl: '.banner-btn-l'
    }
});
var mySwiper = new Swiper('.con-swiper',{
    pagination: {
        el: '.con-cricle',
        clickable: true
    },
    navigation: {
        nextEl: '.con-btn-r',
        prevEl: '.con-btn-l'
    }
});