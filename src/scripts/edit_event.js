import { funcForTimeOptions } from './create_button.js';
import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';
import { funcForCheckIntersectionOfEvents } from './validate.js';

const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');
let currentObject = [];
export let markVariable = 0;
export let indexOfElement = 0; 

export const funcForMakeindexOfElementNull = () => {
    indexOfElement = 0;
};
export const funcForMakeMarkVariableNull = () => {
    markVariable = 0;
};

export const funcForEditEvent = event => {
    const blockOfEvent = event.target;
    if(!blockOfEvent.classList.contains('main__sidebar_day_object')) return;

    popupBlock.style.display = 'block';
    saveBtnForEdit.style.display = 'block';
    iconDelete.style.display = 'block';

    funcForTimeOptions();

    const dataId = blockOfEvent.dataset.id;
    eventsArray.forEach((element,index) => {
        if(element.ident === dataId) indexOfElement = index;
    })
    currentObject = eventsArray.filter(elem => elem.ident === dataId);


    const title = document.querySelector('.event__name');
    currentObject[0].header !== undefined
    ? title.value = currentObject[0].header
    : title.value = ''; 
   
    const startDate = document.querySelector('.event__date-start');
    startDate.value = new Date(currentObject[0].startTime).toISOString().substr(0, 10);
    
    
    const endDate = document.querySelector('.event__date-end');
    currentObject.length === 1
    ? endDate.value = new Date(currentObject[0].endTime).toISOString().substr(0, 10)
    : endDate.value = new Date(currentObject[1].endTime).toISOString().substr(0, 10);
    

    const startHour = document.querySelector('.event__time-start');
    startHour.value = +new Date(currentObject[0].startTime).getHours();
    const startMin = document.querySelector('.event__time-min-start');
    startMin.value = +new Date(currentObject[0].startTime).getMinutes();

    const endHour = document.querySelector('.event__time-end');
    const endMin = document.querySelector('.event__time-min-end');
    if(currentObject.length === 1){
        endHour.value = +new Date(currentObject[0].endTime).getHours();
        endMin.value = +new Date(currentObject[0].endTime).getMinutes();
    }else{
        endHour.value = +new Date(currentObject[1].endTime).getHours();
        endMin.value = +new Date(currentObject[1].endTime).getMinutes();
        markVariable = 1;
    }

};
blockOfDays.addEventListener('click', funcForEditEvent);


export const funcForSaveButtonAfterEdit = event => {
    event.preventDefault();
    
    if(markVariable === 1){
        eventsArray.splice(indexOfElement,1);
        eventsArray.splice(indexOfElement-1,1);
    }else eventsArray.splice(indexOfElement,1);
    funcForMakeindexOfElementNull();
    
    const tempObj = {
        header: undefined,
        startTime: undefined,
        endTime: undefined,
        description: undefined,
        ident: Math.random().toFixed(10),
    };


    const titleInput = document.querySelector('.event__name');
    tempObj.header = titleInput.value;

    const startTimeInput = document.querySelector('.event__date-start');
    const firstStartDate_year = new Date(startTimeInput.value).getFullYear();
    const firstStartDate_month = new Date(startTimeInput.value).getMonth();
    const firstStartDate_date = new Date(startTimeInput.value).getDate();
    const firstStartDate_hours = +document.querySelector('.event__time-start').value;
    const firstStartDate_minutes = +document.querySelector('.event__time-min-start').value;
    tempObj.startTime = new Date(firstStartDate_year, firstStartDate_month,
        firstStartDate_date, firstStartDate_hours, firstStartDate_minutes);


    const endTimeInput = document.querySelector('.event__date-end');
    const firstEndDate_year = new Date(endTimeInput.value).getFullYear();
    const firstEndDate_month = new Date(endTimeInput.value).getMonth();
    const firstEndDate_date = new Date(endTimeInput.value).getDate();
    const firstEndDate_hours = +document.querySelector('.event__time-end').value;
    const firstEndDate_minutes = +document.querySelector('.event__time-min-end').value;
    tempObj.endTime = new Date(firstEndDate_year, firstEndDate_month,
        firstEndDate_date, firstEndDate_hours, firstEndDate_minutes);


    const descriptionInput = document.querySelector('.multiline__text');
    tempObj.description = descriptionInput.value;

    funcForCheckIntersectionOfEvents(tempObj);
    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    funcForMakeMarkVariableNull();
    popupBlock.style.display = 'none';
    saveBtnForEdit.style.display = 'none';
    renderRedLIne();
};
saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);