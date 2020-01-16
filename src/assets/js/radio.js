'use strict';
import {clickRadio} from "./changeSlide";

export const createNewRadio = index => {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'radio');
  inputElement.setAttribute('value', index);
  inputElement.setAttribute('name', 'changeSlide');


  inputElement.onclick = clickRadio;
  console.log(inputElement);
  return inputElement;
};



