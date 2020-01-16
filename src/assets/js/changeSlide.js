'use strict';

export let currentSlide = 0;
let direct = true;

export const clickRadio = (event) => {
    currentSlide = event.target.value;

    changeSlide(currentSlide);
};

export const changeSlide = index => {
    const activeSlide = document.querySelector('.activeSlide');

    activeSlide.classList.remove('activeSlide');

    const changesSlide = document.getElementById(`slide#${index}`);

    changesSlide.classList.add('activeSlide');
};

export const autoChangeSlide = () => {
    if (currentSlide === 2) direct = false;
    else if (currentSlide === 0) direct = true;
    if (direct) {
        changeSlide(++currentSlide);
    } else {
        changeSlide(--currentSlide);
    }
};