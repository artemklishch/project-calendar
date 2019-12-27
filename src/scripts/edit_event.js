const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');
export let indexOfElement = 0; 
export let addintionalIndexOfElem = 0;
export let markVariable = 0;

import { funcForTimeOptions } from './create_button.js';
import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';
//import { firstPoint, lastPoint } from './generate_event_object.js';

// export const funcForEditEvent = event => {
//     const blockOfEvent = event.target;
//     if(!blockOfEvent.classList.contains('main__sidebar_day_object')) return;

//     popupBlock.style.display = 'block';
//     saveBtnForEdit.style.display = 'block';
//     iconDelete.style.display = 'block';

//     funcForTimeOptions();

//     const dataId = blockOfEvent.dataset.id;
//     let currentObject;
//     eventsArray.forEach((elem,index) => {
//         if(elem.ident === dataId){
//             currentObject = elem;
//             indexOfElement = index;
//         }
//     });
    
//     console.log(eventsArray.filter(elem => elem.id2 !== undefined));

//     const title = document.querySelector('.event__name');
//     currentObject.header !== undefined
//     ? title.value = currentObject.header
//     : title.value = ''; 

//     const startDate = document.querySelector('.event__date-start');
//     startDate.value = new Date(currentObject.startTime).toISOString().substr(0, 10);
    
    
//     const endDate = document.querySelector('.event__date-end');
//     endDate.value = new Date(currentObject.endTime).toISOString().substr(0, 10);
    

//     const startHour = document.querySelector('.event__time-start');
//     startHour.value = +new Date(currentObject.startTime).getHours();
//     const startMin = document.querySelector('.event__time-min-start');
//     startMin.value = +new Date(currentObject.startTime).getMinutes();

//     const endHour = document.querySelector('.event__time-end');
//     endHour.value = +new Date(currentObject.endTime).getHours();
//     const endMin = document.querySelector('.event__time-min-end');
//     endMin.value = +new Date(currentObject.endTime).getMinutes();
// };
// blockOfDays.addEventListener('click', funcForEditEvent);


// export const funcForSaveButtonAfterEdit = event => {
//     event.preventDefault();

//     eventsArray.splice(indexOfElement,1);

//     const tempObj = {
//         header: undefined,
//         startTime: undefined,
//         endTime: undefined,
//         description: undefined,
//         ident: Math.random().toFixed(10),
//     };


//     const titleInput = document.querySelector('.event__name');
//     tempObj.header = titleInput.value;

//     const startTimeInput = document.querySelector('.event__date-start');
//     const firstStartDate_year = new Date(startTimeInput.value).getFullYear();
//     const firstStartDate_month = new Date(startTimeInput.value).getMonth();
//     const firstStartDate_date = new Date(startTimeInput.value).getDate();
//     const firstStartDate_hours = +document.querySelector('.event__time-start').value;
//     const firstStartDate_minutes = +document.querySelector('.event__time-min-start').value;
//     tempObj.startTime = new Date(firstStartDate_year, firstStartDate_month,
//         firstStartDate_date, firstStartDate_hours, firstStartDate_minutes);


//     const endTimeInput = document.querySelector('.event__date-end');
//     const firstEndDate_year = new Date(endTimeInput.value).getFullYear();
//     const firstEndDate_month = new Date(endTimeInput.value).getMonth();
//     const firstEndDate_date = new Date(endTimeInput.value).getDate();
//     const firstEndDate_hours = +document.querySelector('.event__time-end').value;
//     const firstEndDate_minutes = +document.querySelector('.event__time-min-end').value;
//     tempObj.endTime = new Date(firstEndDate_year, firstEndDate_month,
//         firstEndDate_date, firstEndDate_hours, firstEndDate_minutes);


//     const descriptionInput = document.querySelector('.multiline__text');
//     tempObj.description = descriptionInput.value;

//     eventsArray.push(tempObj);
//     clearFunc();
//     renderEventObject(eventsArray);
//     popupBlock.style.display = 'none';
//     saveBtnForEdit.style.display = 'none';
//     renderRedLIne();
// };
// saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);






export const funcToMakeMarkNull = () => {
    markVariable = 0;
};


const editEventToNextWeek = () => {
    popupBlock.style.display = 'block';
    saveBtnForEdit.style.display = 'block';
    iconDelete.style.display = 'block';

    funcForTimeOptions();

    let tempArr = eventsArray.filter(elem => elem.id2 !== undefined);
    
    const title = document.querySelector('.event__name');
    tempArr[0].header !== undefined
    ? title.value = tempArr[0].header
    : title.value = ''; 

    const startDate = document.querySelector('.event__date-start');
    startDate.value = new Date(tempArr[0].startTime).toISOString().substr(0, 10);

    const endDate = document.querySelector('.event__date-end');
    endDate.value = new Date(tempArr[0].endTime).toISOString().substr(0, 10);

    const startHour = document.querySelector('.event__time-start');
    startHour.value = +new Date(tempArr[0].startTime).getHours();

    const startMin = document.querySelector('.event__time-min-start');
    startMin.value = +new Date(tempArr[0].startTime).getMinutes();

    const endHour = document.querySelector('.event__time-end');
    endHour.value = +new Date(tempArr[0].endTime).getHours();
    const endMin = document.querySelector('.event__time-min-end');
    endMin.value = +new Date(tempArr[0].endTime).getMinutes();
};


export const funcForEditEvent = event => {
    const blockOfEvent = event.target;
    if(!blockOfEvent.classList.contains('main__sidebar_day_object')) return;
    const dataId = blockOfEvent.dataset.id;
    let currentObject;
    eventsArray.forEach((elem,index) => {
        if(elem.ident === dataId){
            currentObject = elem;
            indexOfElement = index;
        }
        if(elem.additionalId2 !== undefined){
            addintionalIndexOfElem = index;
        }
    });
    if(currentObject.endTime > lastPoint && currentObject.additionalId2 !== undefined){
        markVariable = 1;
        editEventToNextWeek();
    } else {
        popupBlock.style.display = 'block';
        saveBtnForEdit.style.display = 'block';
        iconDelete.style.display = 'block';

        funcForTimeOptions();

        const title = document.querySelector('.event__name');
        currentObject.header !== undefined
        ? title.value = currentObject.header
        : title.value = ''; 

        const startDate = document.querySelector('.event__date-start');
        startDate.value = new Date(currentObject.startTime).toISOString().substr(0, 10);
            
        const endDate = document.querySelector('.event__date-end');
        endDate.value = new Date(currentObject.endTime).toISOString().substr(0, 10);
        
        const startHour = document.querySelector('.event__time-start');
        startHour.value = +new Date(currentObject.startTime).getHours();
        const startMin = document.querySelector('.event__time-min-start');
        startMin.value = +new Date(currentObject.startTime).getMinutes();

        const endHour = document.querySelector('.event__time-end');
        endHour.value = +new Date(currentObject.endTime).getHours();
        const endMin = document.querySelector('.event__time-min-end');
        endMin.value = +new Date(currentObject.endTime).getMinutes();
    }

    
};
blockOfDays.addEventListener('click', funcForEditEvent);






export const funcForSaveButtonAfterEdit = event => {
    event.preventDefault();

    
       eventsArray.splice(indexOfElement,1);

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

        eventsArray.push(tempObj);
        clearFunc();
        renderEventObject(eventsArray);
        popupBlock.style.display = 'none';
        saveBtnForEdit.style.display = 'none';
        renderRedLIne();
};
saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);