import { setItem, getItem } from './storage.js';
import { renderEventObject } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';
import { renderRedLIne } from './redline.js';
import { onClearValidateMessages, onMakeMarkValuavle4Null } from './validate.js';
import { markValuble4 } from './validate.js';
import { markValuable, indexOfElement, markValuable2 } from './edit_event.js';
import { funcForMakeindexOfElementNull, funcForMakeMarkValuableNull, funcForMakeDataIdEmpty } from './edit_event.js';


const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
let markValuable3 = 0;


const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
    iconDelete.style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
    onClearValidateMessages();
    funcForMakeDataIdEmpty();
    onMakeMarkValuavle4Null();
};
lockWindow.addEventListener('click', funcForLockWindow);


const form = document.querySelector('.popup');
export const funcForSaveButton = event => {
    event.preventDefault();
    const eventsArray = getItem('eventsArray') || [];
    let tempObj = [...new FormData(form)]
        .reduce((acc, [field,value]) => ({...acc,[field]:value}),{});
    tempObj.startTime = tempObj.startTime.split('-');
    tempObj.startTime[1] = tempObj.startTime[1] - 1;
    tempObj.startTimePlace = tempObj.startTimePlace.split(':');
    //tempObj.startTime = [...tempObj.startTime, ...tempObj.startTimePlace]; //this expression makes the same as next expression that is down
    tempObj.startTime = tempObj.startTime.concat(tempObj.startTimePlace);
    tempObj.startTime = new Date(...tempObj.startTime);

    tempObj.endTime = tempObj.endTime.split('-');
    tempObj.endTime[1] = tempObj.endTime[1] - 1;
    tempObj.endTimePlace = tempObj.endTimePlace.split(':');
    //tempObj.endTime = [...tempObj.endTime, ...tempObj.endTimePlace]; //this expression makes the same as next expression that is down
    tempObj.endTime = tempObj.endTime.concat(tempObj.endTimePlace);
    tempObj.endTime = new Date(...tempObj.endTime);
    
    tempObj.ident = Math.random().toFixed(10);

    delete tempObj.startTimePlace;
    delete tempObj.endTimePlace;
    if(markValuble4 === 1) return;
    eventsArray.push(tempObj);
    setItem('eventsArray', eventsArray);
    markValuable3 = 1;
    if(markValuable2 === 1 && markValuable3 === 1){
        if(markValuable !== 0){
           eventsArray.splice(indexOfElement,1);
           eventsArray.splice(indexOfElement-1,1);
           markValuable3 = 0;
        }else{
            eventsArray.splice(indexOfElement,1);
            markValuable3 = 0;
        } 
    funcForMakeindexOfElementNull();
    funcForMakeMarkValuableNull();
   }

    renderEventObject();
    popupBlock.style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
    renderRedLIne();
    funcForMakeDataIdEmpty();
};
form.addEventListener('submit', funcForSaveButton);