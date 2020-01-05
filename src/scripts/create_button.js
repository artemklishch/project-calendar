//import { onInputValidate } from './validate.js';
const createButton = document.querySelector('.nav__button');
const popupBlock = document.querySelector('.popup-layer');
const saveBtn = document.querySelector('.event__btn-save');


export const funcForCreateButton = () => {
    const startHour = new Date().getHours();
    const endHour = startHour + 1;
   
    const startTime = document.querySelector('.startTime_place');
    const startTimeString = [startHour, '00'].join(':');
    startTime.value = startTimeString;
    
    const endTime = document.querySelector('.endTime_place');
    const endTimeString = [endHour, '00'].join(':');
    endTime.value = endTimeString;

    popupBlock.style.display = 'block';
    saveBtn.style.display = 'block';

    const myDate = document.querySelectorAll('.specialDate');
    const today = new Date();
    [...myDate].forEach(elem => elem.value = today.toISOString().substr(0, 10));

    //onInputValidate();
};
createButton.addEventListener('click', funcForCreateButton);