import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';


const menu = document.querySelector('.menu');
const burger = document.getElementById("burgerContainer");
burger.onclick = function () {
    this.classList.toggle("change");

    if (menu.classList.contains('openMenu')) {
        menu.classList.remove('openMenuAnimation');
        setTimeout(() => {
            menu.classList.remove('openMenu');
        }, 1000);
    } else {
        menu.classList.add('openMenu');
        setTimeout(() => {
            menu.classList.add('openMenuAnimation');
        }, 20);
    }
};

