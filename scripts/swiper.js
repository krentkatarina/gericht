
//slider
new Swiper('.image-slider', {     //подключение слайдера
    pagination: {
        el: '.swiper-pagination', //добавление точек
        clickable: true,  //можно кликать на точки
    },
    touchRatio: 0,          //угол срабатывания перетаскивания вправо или влево

    autoplay: {
        delay: 2000,
        disableOnInteraction: false   // что-бы не отключалось после переключения по точкам
    },

    speed: 1000,  //скорость

    effect: 'fade', // эффект переключения

    fadeEffect: {
        crossFade: true   // эффект
    }

});