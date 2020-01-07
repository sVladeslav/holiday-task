'use strict';


const menu = document.querySelector('.menu');
const burger = document.getElementById("burgerContainer");
const header = document.querySelector(".header");

window.addEventListener('scroll',fixedHeader);


burger.onclick = function () {
    this.classList.toggle("change");

    if (menu.classList.contains('openMenu')) {
        menu.classList.remove('openMenuAnimation');
        setTimeout(() => {
            menu.classList.remove('openMenu');
        }, 500);
    } else {
        menu.classList.add('openMenu');
        setTimeout(() => {
            menu.classList.add('openMenuAnimation');
        }, 20);
    }
};

function fixedHeader() {
    let windowRelativeTop = document.documentElement.getBoundingClientRect().top;

    if (windowRelativeTop < -10) {
        header.classList.add("headerFixed");
    } else {
        header.classList.remove("headerFixed");
    }
}