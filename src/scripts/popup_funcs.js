import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';


const popupBlock = document.querySelector('.popup-layer');
export const tempObj = {
   header:undefined,
   startTime: undefined,
   endTime:undefined,
   description:undefined,
};


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



const saveButton = document.querySelector('.event__btn-save');
export const funcForSaveButton = event => {
    event.preventDefault();
    console.log('fdgdfgfdgdg');
};
saveButton.addEventListener('click', funcForSaveButton);