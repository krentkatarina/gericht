"use strict"

// header
    const iconMenu = document.querySelector ('.header__menu-icon');
    if(iconMenu){
        const menuBody = document.querySelector ('.header__menu-body');
        iconMenu.addEventListener("click", function() {
            document.body.classList.toggle('_lock'); //не прокручивается страница при открытом меню
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }