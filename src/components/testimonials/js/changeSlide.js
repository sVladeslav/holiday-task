'use strict';

export let currentSlide = 0;
let countSlide = 0;


export const clickRadio = (event) => {
    currentSlide = event.target.value;

    changeSlide(currentSlide);
};

export const changeSlide = index => {
    const activeSlide = document.querySelector('.activeSlide');

    activeSlide.classList.remove('activeSlide');
    document.querySelector('.changeSlide').classList.remove('changeSlide');

    const changesSlide = document.getElementById(`slide#${index}`);

    changesSlide.classList.add('activeSlide');

    document.getElementsByTagName('input')[index].classList.add('changeSlide');
};

export const autoChangeSlide = () => {
        currentSlide = (currentSlide + 1) % countSlide;
        changeSlide(currentSlide);
};

export const setCountSlides = count => {
  countSlide = count;
};