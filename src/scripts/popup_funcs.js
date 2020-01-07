import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';
import { renderRedLIne } from './redline.js';
import { onClearValidateMessages } from './validate.js';


const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
const saveBtn = document.querySelector('.event__btn-save');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');

const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
    saveBtnForEdit.style.display = 'none';
    iconDelete.style.display = 'none';
    saveBtn.style.display = 'block';
    blockOfDays.addEventListener('click', renderEventOnClick);
    onClearValidateMessages();
};
lockWindow.addEventListener('click', funcForLockWindow);

const form = document.querySelector('.popup');
const saveButton = document.querySelector('.event__btn-save');
export const funcForSaveButton = event => {
    event.preventDefault();

    let tempObj = [...new FormData(form)]
        .reduce((acc, [field,value]) => ({...acc,[field]:value}),{});
    tempObj.startTime = tempObj.startTime.split('-');
    tempObj.startTimePlace = tempObj.startTimePlace.split(':');
    //tempObj.startTime = [...tempObj.startTime, ...tempObj.startTimePlace];
    tempObj.startTime = tempObj.startTime.concat(tempObj.startTimePlace);
    tempObj.startTime = new Date(...tempObj.startTime);

    tempObj.endTime = tempObj.endTime.split('-');
    tempObj.endTimePlace = tempObj.endTimePlace.split(':');
    //tempObj.endTime = [...tempObj.endTime, ...tempObj.endTimePlace];
    tempObj.endTime = tempObj.endTime.concat(tempObj.endTimePlace);
    tempObj.endTime = new Date(...tempObj.endTime);

    tempObj.ident = Math.random().toFixed(10);

    delete tempObj.startTimePlace;
    delete tempObj.endTimePlace;
   



    // const tempObj = {
    //     header:undefined,
    //     startTime:undefined,
    //     endTime:undefined,
    //     ident:Math.random().toFixed(10), 
    //     description:undefined,
    // };

    // const titleInput = document.querySelector('.event__name');
    // tempObj.header = titleInput.value;

    // const startTimeInput = document.querySelector('.event__date-start');
    // const firstStartDate_year = new Date(startTimeInput.value).getFullYear();
    // const firstStartDate_month = new Date(startTimeInput.value).getMonth();
    // const firstStartDate_date = new Date(startTimeInput.value).getDate();
    // const firstStartDate_hours = document.querySelector('.startTime_place').value.split(':')[0];
    // const firstStartDate_minutes = document.querySelector('.startTime_place').value.split(':')[1];
    // tempObj.startTime = new Date(firstStartDate_year, firstStartDate_month,
    //     firstStartDate_date, firstStartDate_hours, firstStartDate_minutes);

    // const endTimeInput = document.querySelector('.event__date-end');
    // const firstEndDate_year = new Date(endTimeInput.value).getFullYear();
    // const firstEndDate_month = new Date(endTimeInput.value).getMonth();
    // const firstEndDate_date = new Date(endTimeInput.value).getDate();
    // const firstEndDate_hours = document.querySelector('.endTime_place').value.split(':')[0];
    // const firstEndDate_minutes = document.querySelector('.endTime_place').value.split(':')[1];
    // tempObj.endTime = new Date(firstEndDate_year, firstEndDate_month,
    //     firstEndDate_date, firstEndDate_hours, firstEndDate_minutes);

    // const descriptionElem = document.querySelector('.multiline__text').value;
    // tempObj.description = descriptionElem;

    //eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    popupBlock.style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
    renderRedLIne();
    onClearValidateMessages();
};
form.addEventListener('submit', funcForSaveButton);