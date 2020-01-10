import { setItem, getItem } from './storage.js';
import { onCheckLateEffortOfDeleteOrEdite } from './validate.js';


const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
let currentObject = [];
export let indexOfElement = 0; 
export let markValuable = 0;
export let markValuable2 = 0;
export let dataId = '';

export const funcForMakeMarkValuableNull = () => {
    markValuable = 0;
    markValuable2 = 0;
};

export const funcForMakeindexOfElementNull = () => {
    indexOfElement = 0;
};

export const funcForMakeDataIdEmpty = () => {
    dataId = '';
};

export const funcForEditEvent = event => {
    const blockOfEvent = event.target;
    if(!blockOfEvent.classList.contains('main__sidebar_day_object')) return;

    popupBlock.style.display = 'block';
    iconDelete.style.display = 'block';

    dataId = blockOfEvent.dataset.id;
    let eventsArray = getItem('eventsArray') || [];
    eventsArray
        .map(elem => {
            elem.startTime = new Date(elem.startTime);
            elem.endTime = new Date(elem.endTime);
        });
    eventsArray
        .forEach((element,index) => {
            if(element.ident === dataId){
                indexOfElement = index;
                //console.log(element);
            } 
          
        });
    currentObject = eventsArray.filter(elem => elem.ident === dataId);
    
    const title = document.querySelector('.event__name');
    currentObject[0].header !== null
    ? title.value = currentObject[0].header
    : title.value = '';     

    const description = document.querySelector('.multiline__text');
    currentObject[0].description !== null
    ? description.value = currentObject[0].description
    : description.value = '';     

    const startDateInput = document.querySelector('.event__date-start');
    const startYear = currentObject[0].startTime.getFullYear();
    let startMonth = currentObject[0].startTime.getMonth();
    let startDate = currentObject[0].startTime.getDate();
    const startDateObject = new Date(Date.UTC(startYear,startMonth,startDate));
    startDateInput.value = new Date(startDateObject).toISOString().substr(0, 10);
    
    if(currentObject.length === 1){
        const endDateInput = document.querySelector('.event__date-end');
        const endYear = currentObject[0].endTime.getFullYear();
        let endMonth = currentObject[0].endTime.getMonth();
        let endDate = currentObject[0].endTime.getDate();
        const endDateObject = new Date(Date.UTC(endYear,endMonth,endDate));
        endDateInput.value = new Date(endDateObject).toISOString().substr(0, 10);
    }else{
        const endDateInput = document.querySelector('.event__date-end');
        const endYear = currentObject[1].endTime.getFullYear();
        let endMonth = currentObject[1].endTime.getMonth();
        let endDate = currentObject[1].endTime.getDate();
        const endDateObject = new Date(Date.UTC(endYear,endMonth,endDate));
        endDateInput.value = new Date(endDateObject).toISOString().substr(0, 10);
    }
    

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
    markValuable2 = 1;
};
blockOfDays.addEventListener('click', funcForEditEvent);