import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';

const blockOfDays = document.querySelector('.main__sidebar_days');
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
    blockOfDays.addEventListener('click', renderEventOnClick);
};
lockWindow.addEventListener('click', funcForLockWindow);



const titleInput = document.querySelector('.event__name');
export const addTitleFunc = event => {
     tempObj.header = event.target.value;
};
titleInput.addEventListener('input', addTitleFunc);



const startTimeInput = document.querySelector('.event__date-start');
export const funcStartTimeInput = event => {
    const year = new Date(event.target.value).getFullYear();
    const month = new Date(event.target.value).getMonth();
    const date = new Date(event.target.value).getDate();
    
    const startHour = document.querySelector('.event__time-start');
    const hour = +startHour.value;
    const startMinute = document.querySelector('.event__time-min-start');
    const minute = +startMinute.value;

    tempObj.startTime = new Date(year,month,date,hour,minute);
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

    const a = document.querySelector('.event__date-start');


    console.log(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    popupBlock.style.display = 'none';
    
};
saveButton.addEventListener('click', funcForSaveButton);