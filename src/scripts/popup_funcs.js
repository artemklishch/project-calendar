import { funcForCreateButton } from './create_button.js';
import { tempObj } from './create_button.js';
import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';

const popupBlock = document.querySelector('.popup-layer');

const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
};
lockWindow.addEventListener('click', funcForLockWindow);

const titleInput = document.querySelector('.event__name');
const addTitleFunc = event => {
     tempObj.header = event.target.value;
};
titleInput.addEventListener('input', addTitleFunc);

const startTimeInput = document.querySelector('.event__date-start');
const funcStartTimeInput = event => {
    tempObj.startTime = new Date(event.target.value);
};
startTimeInput.addEventListener('input', funcStartTimeInput);

const endTimeInput = document.querySelector('.event__date-end');
const funcEndTimeInput = event => {
    tempObj.endTime = new Date(event.target.value);
};
endTimeInput.addEventListener('input', funcEndTimeInput);

export const funcForTimeOptions = () => {
    const hours = document.querySelectorAll('.hours');
    let hourArr = [];
    for(let i = 0; i <= 24; i++){
        let temp = `
        <option class="opt-hr">${i}</option>
        `;
        hourArr.push(temp);
    }
    [...hours].forEach(elem => elem.innerHTML = hourArr.join(''));
    const minutes = document.querySelectorAll('.minutes');
    let minArr = [];
    let counterMin = 0;
    while(counterMin < 60){
        let temp = `
        <option class="opt-min">${counterMin}</option>
        `;
        minArr.push(temp);
        counterMin += 15;
    }
    [...minutes].forEach(elem => elem.innerHTML = minArr.join(''));
}; 




const saveButton = document.querySelector('.event__btn-save');
export const funcForSaveButton = () => {
    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
};
saveButton.addEventListener('click', funcForSaveButton);
