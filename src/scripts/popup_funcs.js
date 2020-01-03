import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';
import { renderRedLIne } from './redline.js';


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
};
lockWindow.addEventListener('click', funcForLockWindow);



const saveButton = document.querySelector('.event__btn-save');

export const funcForSaveButton = event => {
    event.preventDefault();

    const tempObj = {
        header:undefined,
        startTime:undefined,
        endTime:undefined,
        ident:Math.random().toFixed(10), 
        description:undefined,
    };

    const headerElem = document.querySelector('.event__name');
    tempObj.header = headerElem.value;
    
    const startDate = document.querySelector('.event__date-start').value.split('-');
    let startHours = document.querySelector('.startTime_place').value.split(':')[0];
    let startMinutes = document.querySelector('.startTime_place').value.split(':')[1];
    startDate.push(startHours, startMinutes);
    tempObj.startTime = new Date(...startDate);

    const endDate = document.querySelector('.event__date-end').value.split('-');
    let endHours = document.querySelector('.endTime_place').value.split(':')[0];
    let endMinutes = document.querySelector('.endTime_place').value.split(':')[1];
    endDate.push(endHours, endMinutes);
    tempObj.endTime = new Date(...endDate);

    const descriptionElem = document.querySelector('.multiline__text').value;
    tempObj.description = descriptionElem;

    // const form = document.querySelector('.popup');    
    // const tempObj = [...new FormData(form)]
    //     .reduce((acc,[field,value]) => ({...acc, [field]:value}),{});
    // const startDate_hours = tempObj.startTimePlace.split(':')[0];
    // const startDate_min = tempObj.startTimePlace.split(':')[1];
    // tempObj.startTime = [...tempObj.startTime.split('-')];
    // tempObj.startTime.push(startDate_hours, startDate_min);
    // tempObj.startTime = new Date(...tempObj.startTime);
    
    // const endDate_hours = tempObj.endTimePlace.split(':')[0];
    // const endDate_min = tempObj.endTimePlace.split(':')[1];
    // tempObj.endTime = [...tempObj.endTime.split('-')];
    // tempObj.endTime.push(endDate_hours, endDate_min);
    // tempObj.endTime = new Date(...tempObj.endTime);

    // tempObj.ident = Math.random().toFixed(10);

    // delete tempObj.startTimePlace;
    // delete tempObj.endTimePlace;
    
    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    popupBlock.style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
    renderRedLIne();
};
saveButton.addEventListener('click', funcForSaveButton);