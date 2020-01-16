'use strict';

const workCard = document.querySelector('.workCard');
const works = document.getElementsByClassName('work');
const photoCard = document.getElementById("photoCard");
const closeButton = document.querySelector('.closeButton');

const clickWork = (event) => {
    event.stopImmediatePropagation();
    const currentImg = event.currentTarget.querySelector("img");

    changeWorkCard(currentImg);

    workCard.classList.toggle("openWorkCard");
};


for (const work of works) {
    work.onclick = clickWork;
}

const changeWorkCard = img => {
    photoCard.querySelector('img').remove();

    photoCard.prepend(img.cloneNode());
};

closeButton.onclick = () => {
    workCard.classList.toggle('openWorkCard');
}