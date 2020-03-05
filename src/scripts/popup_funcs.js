import { setItem } from './storage.js';
import { renderEventObject } from './generate_event_object.js';
import { counter } from './generate_another_week.js';
import { onClickOnPlaceInField } from './event_on_click.js';
import { renderRedLIne } from './redline.js';
import { onClearValidateMessages, onMakeMarkOnValidateTextFalse } from './validate.js';
import { markOnValidateText } from './validate.js';
import { markOnFactOfEdit, dataId } from './edit_event.js';
import { funcForMakeMarkValuableFalse, funcForMakeDataIdEmpty } from './edit_event.js';
import { getEventList, createEvent, updatEvent } from './eventsGateway.js'


const fieldOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');


const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
    iconDelete.style.display = 'none';
    fieldOfDays.addEventListener('click', onClickOnPlaceInField);
    onClearValidateMessages();
    funcForMakeDataIdEmpty();
    onMakeMarkOnValidateTextFalse();
    funcForMakeMarkValuableFalse();
};
lockWindow.addEventListener('click', funcForLockWindow);


const form = document.querySelector('.popup');
export const onFormSubmit = event => {
    event.preventDefault();

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
    
    delete tempObj.startTimePlace;
    delete tempObj.endTimePlace;
    
    if(markOnValidateText) return;
    
    if(!markOnFactOfEdit){
        createEvent(tempObj)
            .then(() => getEventList())
            .then(eventsArray => {
                setItem('arrayOfEvents', eventsArray);
                renderEventObject();
                if(counter === 0) renderRedLIne();
            });
    }else if(markOnFactOfEdit){
        getEventList()
            .then(eventsArray => {
                const obj = eventsArray.find(element => element.id === dataId);
                Object.assign(obj,tempObj); 
                updatEvent(obj.id, obj)
                    .then(() => getEventList())
                    .then(eventsArray => { 
                        setItem('arrayOfEvents', eventsArray);
                        renderEventObject();
                        funcForMakeMarkValuableFalse();
                        funcForMakeDataIdEmpty();
                        if(counter === 0) renderRedLIne();
                    });
            });
    }
    popupBlock.style.display = 'none';
    fieldOfDays.addEventListener('click', onClickOnPlaceInField);
    
};
form.addEventListener('submit', onFormSubmit);