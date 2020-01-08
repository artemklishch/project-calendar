import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';
import { onCheckLateEffortOfDeleteOrEdite } from './validate.js';


const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
let currentObject = [];
export let indexOfElement = 0; 
export let markValuable = 0;

export const funcForMakeMarkValuableNull = () => {
    markValuable = 0;
};

export const funcForMakeindexOfElementNull = () => {
    indexOfElement = 0;
};

export const funcForEditEvent = event => {
    const blockOfEvent = event.target;
    if(!blockOfEvent.classList.contains('main__sidebar_day_object')) return;

    popupBlock.style.display = 'block';
    iconDelete.style.display = 'block';

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
    

    const startTimePlace = document.querySelector('.startTime_place');
    let startHour = new Date(currentObject[0].startTime).getHours(); 
    startHour < 10 ? startHour = `0${startHour}` : startHour;
    let startMin = new Date(currentObject[0].startTime).getMinutes(); 
    startMin < 10 ? startMin = `0${startMin}` : startMin;
    startTimePlace.value = `${startHour}:${startMin}`;
    
    const endTimePlace = document.querySelector('.endTime_place');
    if(currentObject.length === 1){
        let endHour = new Date(currentObject[0].endTime).getHours(); 
        endHour < 10 ? endHour = `0${endHour}` : endHour;
        let endMin = new Date(currentObject[0].endTime).getMinutes(); 
        endMin < 10 ? endMin = `0${endMin}` : endMin;
        endTimePlace.value = `${endHour}:${endMin}`;
    }else {
        let endHour = new Date(currentObject[1].endTime).getHours(); 
        endHour < 10 ? endHour = `0${endHour}` : endHour;
        let endMin = new Date(currentObject[1].endTime).getMinutes(); 
        endMin < 10 ? endMin = `0${endMin}` : endMin;
        endTimePlace.value = `${endHour}:${endMin}`;
        markValuable = 1;
    }
    onCheckLateEffortOfDeleteOrEdite(currentObject[0]);
};
blockOfDays.addEventListener('click', funcForEditEvent);

const form = document.querySelector('.popup');
export const funcForSaveButtonAfterEdit = event => {
    event.preventDefault();
    
    if(markValuable !== 0){
        eventsArray.splice(indexOfElement,1);
        eventsArray.splice(indexOfElement-1,1);
    }else eventsArray.splice(indexOfElement,1);
    funcForMakeindexOfElementNull();
    

    // let tempObj = [...new FormData(form)]
    //     .reduce((acc, [field,value]) => ({...acc,[field]:value}),{});
    // tempObj.startTime = tempObj.startTime.split('-');
    // tempObj.startTimePlace = tempObj.startTimePlace.split(':');
    // //tempObj.startTime = [...tempObj.startTime, ...tempObj.startTimePlace];
    // tempObj.startTime = tempObj.startTime.concat(tempObj.startTimePlace);
    // tempObj.startTime = new Date(...tempObj.startTime);

    // tempObj.endTime = tempObj.endTime.split('-');
    // tempObj.endTimePlace = tempObj.endTimePlace.split(':');
    // //tempObj.endTime = [...tempObj.endTime, ...tempObj.endTimePlace];
    // tempObj.endTime = tempObj.endTime.concat(tempObj.endTimePlace);
    // tempObj.endTime = new Date(...tempObj.endTime);

    // tempObj.ident = Math.random().toFixed(10);

    // delete tempObj.startTimePlace;
    // delete tempObj.endTimePlace;

    
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
    const firstStartDate_hours = +document.querySelector('.startTime_place').value.split(':')[0];
    const firstStartDate_minutes = +document.querySelector('.startTime_place').value.split(':')[1];
    tempObj.startTime = new Date(firstStartDate_year, firstStartDate_month,
        firstStartDate_date, firstStartDate_hours, firstStartDate_minutes);

    const endTimeInput = document.querySelector('.event__date-end');
    const firstEndDate_year = new Date(endTimeInput.value).getFullYear();
    const firstEndDate_month = new Date(endTimeInput.value).getMonth();
    const firstEndDate_date = new Date(endTimeInput.value).getDate();
    const firstEndDate_hours = +document.querySelector('.endTime_place').value.split(':')[0];
    const firstEndDate_minutes = +document.querySelector('.endTime_place').value.split(':')[1];
    tempObj.endTime = new Date(firstEndDate_year, firstEndDate_month,
        firstEndDate_date, firstEndDate_hours, firstEndDate_minutes);

    const descriptionInput = document.querySelector('.multiline__text');
    tempObj.description = descriptionInput.value;

    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    popupBlock.style.display = 'none';
    iconDelete.style.display = 'none';
    funcForMakeMarkValuableNull();
    renderRedLIne();
    currentObject = [];
};
form.addEventListener('submit', funcForSaveButtonAfterEdit);