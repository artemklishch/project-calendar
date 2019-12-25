import { funcForTimeOptions } from './popup_funcs.js';
const createButton = document.querySelector('.nav__button');
const popupBlock = document.querySelector('.popup-layer');
export const tempObj = {};

export const funcForCreateButton = () => {
    funcForTimeOptions();
    const startHour = new Date().getHours();
    const endHour = startHour+1;
    const startHours = document.querySelectorAll('.event__time-start > .opt-hr');
    [...startHours].forEach(elem => {
        if(elem.innerHTML === startHour.toString()){
            elem.parentNode.value = startHour.toString();
        }
    });
    const endHours = document.querySelectorAll('.event__time-end > .opt-hr');
    [...endHours].forEach(elem => {
        if(elem.innerHTML === endHour.toString()){
            elem.parentNode.value = endHour.toString();
        }
    });
    popupBlock.style.display = 'block';

    const myDate = document.querySelectorAll('.specialDate');
    const today = new Date();
    [...myDate].forEach(elem => elem.value = today.toISOString().substr(0, 10));
};
createButton.addEventListener('click', funcForCreateButton);
