import { addTitleFunc } from './popup_funcs.js';
const createButton = document.querySelector('.nav__button');
const popupBlock = document.querySelector('.popup-layer');

export const funcForCreateButton = () => {
    popupBlock.style.display = 'block';
};
createButton.addEventListener('click', funcForCreateButton);
