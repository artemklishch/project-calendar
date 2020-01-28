import { setItem, getItem } from './storage.js';
import { onCheckLateEffortOfDeleteOrEdite } from './validate.js';
import { getEventList, createEvent, updatEvent, deleteEvent } from './eventsGateway.js'


const fieldOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
// let currentObject;
export let indexOfElement = 0; 
export let markOnFactLongEvent = 0;
export let markOnFactOfEdit = 0;
export let dataId = '';

export const funcForMakeMarkValuableNull = () => {
    markOnFactLongEvent = 0;
    markOnFactOfEdit = 0;
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
    getEventList()
        .then(array => {
            const arr = [];
            array.forEach(elem => {
                elem.startTime = new Date(elem.startTime);
                elem.endTime = new Date(elem.endTime);
                arr.push(elem);
            });
            return arr;
        })
        .then(eventsArray => {
            eventsArray.forEach((element,index) => {
                if(element.id === dataId){
                    indexOfElement = index;
                }
            });
            
            const currentObject = eventsArray.find(elem => elem.id === dataId);
            
            const title = document.querySelector('.event__name');
            currentObject.header !== null
            ? title.value = currentObject.header
            : title.value = '';     

            const description = document.querySelector('.multiline__text');
            currentObject.description !== null
            ? description.value = currentObject.description
            : description.value = '';     

            const startDateInput = document.querySelector('.event__date-start');
            const startYear = currentObject.startTime.getFullYear();
            let startMonth = currentObject.startTime.getMonth();
            let startDate = currentObject.startTime.getDate();
            const startDateObject = new Date(Date.UTC(startYear,startMonth,startDate));
            startDateInput.value = new Date(startDateObject).toISOString().substr(0, 10);            

            const endDateInput = document.querySelector('.event__date-end');
            const endYear = currentObject.endTime.getFullYear();
            let endMonth = currentObject.endTime.getMonth();
            let endDate = currentObject.endTime.getDate();
            const endDateObject = new Date(Date.UTC(endYear,endMonth,endDate));
            endDateInput.value = new Date(endDateObject).toISOString().substr(0, 10);

            const colorPicerInput = document.querySelector('.pick_color');
            colorPicerInput.value = currentObject.backgroundColor;

            onCheckLateEffortOfDeleteOrEdite(currentObject);
            markOnFactOfEdit = 1;

            return currentObject;
        });
};
fieldOfDays.addEventListener('click', funcForEditEvent);