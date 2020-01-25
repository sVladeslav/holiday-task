'use strict';
import {createNewRadio} from "./radio";
import { autoChangeSlide, setCountSlides} from "./changeSlide";
import {loadImage, loadJSON} from "../../../utils";


const uploadTestimonials = async () => {
        const slides = await loadJSON('./data/slides.json');

        setCountSlides(slides.length);

        slides.forEach((slide, index) => {
            if (index < 7) addSlide(slide, index);
            else return 0;
        });
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

    slideItem.appendChild(
        loadImage(slide.imageUrl,"testimonials", "./assets/images/onError/picture.jpg")
    );
    slideItem.appendChild(createBlockqoute(slide));

    radioBox.appendChild(createNewRadio(index));

    return slideItem;
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

window.setInterval(autoChangeSlide, 10000);