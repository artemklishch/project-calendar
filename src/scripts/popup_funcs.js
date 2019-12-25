import { funcForCreateButton } from './create_button.js';
import { tempObj } from './create_button.js';

const popupBlock = document.querySelector('.popup-layer');

const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
};
lockWindow.addEventListener('click', funcForLockWindow);

const titleInput = document.querySelector('.event__name');
export const addTitleFunc = event => {
     tempObj.header = event.target.value;
};
titleInput.addEventListener('input', addTitleFunc);

const startTimeInput = document.querySelector('.event__date-start');
export const funcStartTimeInput = event => {
    tempObj.startTime = new Date(event.target.value);
};
startTimeInput.addEventListener('input', funcStartTimeInput);

const endTimeInput = document.querySelector('.event__date-end');
export const funcEndTimeInput = event => {
    tempObj.endTime = new Date(event.target.value);
};
endTimeInput.addEventListener('input', funcEndTimeInput);


