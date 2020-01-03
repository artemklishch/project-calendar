import { eventsArray } from './storage.js';
import { funcForSaveButton } from './popup_funcs.js';
import { funcForSaveButtonAfterEdit } from './edit_event.js';

const validateMessageElem = document.querySelector('.validate_message');
const saveButton = document.querySelector('.event__btn-save');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');

const allDateInputs = document.querySelectorAll('.input');
for(let i = 0; i < [...allDateInputs].length; i++){
    allDateInputs[i].oninput = onInputValidate;
}


const funcForCheckIntersectionOfEvents = (object) => {
    let withoutIntersecttion = true;
    for(let i = 0; i < eventsArray.length; i++){
        
        if(object.startTime.getHours() === eventsArray[i].startTime.getHours()
            && object.startTime.getMinutes() === eventsArray[i].startTime.getMinutes()){
            withoutIntersecttion = false;
            break;
        }

        if(
            (object.startTime.getHours() > eventsArray[i].startTime.getHours()
                && object.startTime.getMinutes() > eventsArray[i].startTime.getMinutes())
        && (object.startTime.getHours() < eventsArray[i].endTime.getHours()
            && object.startTime.getMinutes() < eventsArray[i].endTime.getMinutes())
        ){
            withoutIntersecttion = false;
            break;
        }

        if(object.endTime.getHours() === eventsArray[i].endTime.getHours()
            && object.endTime.getMinutes() === eventsArray[i].endTime.getMinutes()){
            withoutIntersecttion = false;
            break;
        }

        if((object.endTime.getHours() < eventsArray[i].endTime.getHours()
            && object.endTime.getMinutes() < eventsArray[i].endTime.getMinutes())
        && (object.endTime.getHours() > eventsArray[i].startTime.getHours()
            && object.endTime.getMinutes() > eventsArray[i].startTime.getMinutes())
        ){
            withoutIntersecttion = false;
            break;
        }

        if((object.startTime.getHours() < eventsArray[i].startTime.getHours()
            && object.startTime.getMinutes() < eventsArray[i].startTime.getMinutes())
        && (object.endTime.getHours() > eventsArray[i].endTime.getHours()
            && object.endTime.getMinutes() > eventsArray[i].endTime.getMinutes())
        ){
            withoutIntersecttion = false;
            break;
        }
    }
    return withoutIntersecttion;  
};

export function onInputValidate(){
    const form = document.querySelector('.popup');
    const tempObj = [...new FormData(form)]
        .reduce((acc,[field,value]) => ({...acc, [field]:value}),{});
    
    const startDate_hours = tempObj.startTimePlace.split(':')[0];
    const startDate_min = tempObj.startTimePlace.split(':')[1];
    tempObj.startTime = [...tempObj.startTime.split('-')];
    tempObj.startTime.push(startDate_hours, startDate_min);
    tempObj.startTime = new Date(...tempObj.startTime);
    
    const endDate_hours = tempObj.endTimePlace.split(':')[0];
    const endDate_min = tempObj.endTimePlace.split(':')[1];
    tempObj.endTime = [...tempObj.endTime.split('-')];
    tempObj.endTime.push(endDate_hours, endDate_min);
    tempObj.endTime = new Date(...tempObj.endTime);
    
    // if(!funcForCheckIntersectionOfEvents(tempObj)){
    //     validateMessageElem.innerHTML = 'Error! Events can\'t intersect';
    //     saveButton.removeEventListener('click', funcForSaveButton);
    //     saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
    // }else{
    //     validateMessageElem.innerHTML = '';
    //     saveButton.addEventListener('click', funcForSaveButton);
    //     saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
    // };
}


