'use strict';
import {createNewRadio} from "./radio";
import {changeSlide, autoChangeSlide} from "./changeSlide";


const uploadTestimonials = async () => {
    try {
        const response = await fetch('./data/slides.json');
        const slides = await response.json();

        slides.forEach((slide, index) => {
            if (index < 7) addSlide(slide, index);
            else return 0;
        });
    } catch (e) {
        console.log(e);
    }
};

const addSlide = (slide, index) => {
    const testimonials = document.getElementById('testimonials');
    testimonials.appendChild(createSlide(slide, index));
};

const createSlide = (slide, index) => {
    const slideItem = document.createElement("div");
    const radioBox = document.querySelector('.radioBox');

    slideItem.classList.add('slide');
    if (index === 0) slideItem.classList.add('activeSlide');
    slideItem.setAttribute('id', `slide#${index}`);

    slideItem.appendChild(createImg(slide.imageUrl));
    slideItem.appendChild(createBlockqoute(slide));

    radioBox.appendChild(createNewRadio(index));

    return slideItem;
};

const createImg = img => {
    const image = new Image();
    image.src = img;

    return image;
};

const createBlockqoute = (slide, index) => {
    const blockquote = document.createElement('blockquote');

    blockquote.appendChild(createQuoteText(slide.comment));
    blockquote.appendChild(createQuoteAuthor(slide.author));

    return blockquote;
};

const createQuoteText = text => {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    paragraph.classList.add('quoteText');

    return paragraph;
};

const createQuoteAuthor = author => {
    const paragraph = document.createElement("p");
    paragraph.innerText = `${author.name} ${author.surname} ${author.position}`;
    paragraph.classList.add('quoteAuthor');

    return paragraph;
};

uploadTestimonials();

window.setInterval(autoChangeSlide, 5000);