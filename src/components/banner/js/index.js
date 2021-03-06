'use strict';
import '../scss/banner.scss';
import '../scss/burgerButton.scss';
import '../scss/navigation.scss';

const menu = document.querySelector('.menu');
const burger = document.getElementById("burgerContainer");
const header = document.querySelector(".header");
const navItems = document.querySelectorAll('.menu>ul>li>a');

navItems.forEach( item => {
    item.onclick = function () {
        menu.classList.remove('openMenu');
        burger.classList.remove('change');
    }
});

window.addEventListener('scroll', fixedHeader);


burger.onclick = function () {
    this.classList.toggle("change");

    if (menu.classList.contains('openMenu')) {
        menu.classList.remove('openMenu');
    } else {
        menu.classList.add('openMenu');
    }
};

function fixedHeader() {
    const heightTop = window.pageYOffset;

    if (heightTop > 10) {
        header.classList.add("headerFixed");
    } else {
        header.classList.remove("headerFixed");
    }
}