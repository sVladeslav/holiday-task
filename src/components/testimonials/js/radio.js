'use strict';
import {clickRadio} from "./changeSlide";

export const createNewRadio = index => {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'radio');
  inputElement.setAttribute('value', index);
  inputElement.setAttribute('name', 'changeSlide');

  if (index === 0) inputElement.classList.add('changeSlide');

  inputElement.onclick = clickRadio;
  return inputElement;
};