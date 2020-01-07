import { eventsArray } from './storage.js';
import { funcForSaveButton } from './popup_funcs.js';
import { funcForSaveButtonAfterEdit } from './edit_event.js';
import { funcForDeleteEvene } from './delete_event.js';

const validateMessageElem1 = document.querySelector('.validate_message_1');
const validateMessageElem2 = document.querySelector('.validate_message_2');
const validateMessageElem3 = document.querySelector('.validate_message_3');
const validateMessageElem4 = document.querySelector('.validate_message_4');
const validateMessageElem5 = document.querySelector('.validate_message_5');
const saveButton = document.querySelector('.event__btn-save');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');
const deleteBasket = document.querySelector('.event__btn-delete');

export const onClearValidateMessages = () => {
    validateMessageElem1.innerHTML = '';
    validateMessageElem2.innerHTML = '';
    validateMessageElem3.innerHTML = '';
    validateMessageElem4.innerHTML = '';
    validateMessageElem5.innerHTML = '';
};

const onCheckOneOption = (curStT,stT) => {
    let accessVal = 0;
    curStT === stT ? accessVal = 1 : accessVal = 0;
    return accessVal === 1 || false;
};
const onCheckTwoOption = (curStT,stT,endT) => {
    let accessVal = 0;
    curStT > stT && curStT < endT
    ? accessVal = 1
    : accessVal = 0;
    return accessVal === 1 || false;
};
const onCheckThreeOption = (curEndT,endT) => {
    let accessVal = 0;
    curEndT === endT ? accessVal = 1 : accessVal = 0;
    return accessVal === 1 || false;
};
const onCheckFourOption = (curEndT,endT,stT) => {
    let accessVal = 0;
    curEndT < endT && curEndT > stT
    ? accessVal = 1
    : accessVal = 0;
    return accessVal === 1 || false;
};
const onCheckFiveOption = (curStT,curEndT,stT,endT) => {
    let accessVal = 0;
    curStT < stT && curEndT < endT
    ? accessVal = 1
    : accessVal = 0;
    return accessVal === 1 || false;
};

const onCheckIntersectionEvents = (object) => {
    let withoutIntersecttion = true;
    const currentStTime = object.startTime.getDate();
    const currentEndTime = object.endTime.getDate();
    for(let i = 0; i < eventsArray.length; i++){
        let checkedStTime = eventsArray[i].startTime.getDate();
        let checkedEndTime = eventsArray[i].endTime.getDate();

        if(onCheckOneOption(currentStTime, checkedStTime)){
            withoutIntersecttion = false;
            break;
        }else withoutIntersecttion = true;

        if(onCheckTwoOption(currentStTime,checkedStTime,checkedEndTime)){
                withoutIntersecttion = false;
                break;
        }else withoutIntersecttion = true;

        if(onCheckThreeOption(currentEndTime,checkedEndTime)){
            withoutIntersecttion = false;
            break;
        }else withoutIntersecttion = true;
        
        if(onCheckFourOption(currentEndTime,checkedEndTime,checkedStTime)){
                withoutIntersecttion = false;
                break;
        }else withoutIntersecttion = true;

        if(onCheckFiveOption(currentStTime,currentEndTime,checkedStTime,checkedEndTime)){
                withoutIntersecttion = false;
                break;
        }else withoutIntersecttion = true;
    }
    return withoutIntersecttion;  
};


const onCheckCorrectDates = (object) => object.endTime > object.startTime || false;

const onCheckEventLength = (object) => {
    const maxLength = 21600000;
    const objectLength = object.endTime - object.startTime;
    return objectLength <= maxLength || false; 
};

const onCheckMinutes = (object) => {
    let startMinutes = object.startTime.getMinutes();
    let endMinutes = object.endTime.getMinutes();
    return startMinutes % 15 !== 0 || endMinutes % 15 !== 0 ? false : true;
};

const onMakeObjectFromValuesInForm = () => {
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

    return tempObj;
};

const form = document.querySelector('.popup');






export const onInputValidateOnMinutes = event => {
    if(!event.target.classList.contains('input')) return;

    const tempObj = onMakeObjectFromValuesInForm();
    
    if(!onCheckMinutes(tempObj)){
        validateMessageElem1.innerHTML = ' Error! Minuts must be a multiple of fifteen';
        saveButton.removeEventListener('click', funcForSaveButton);
        saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
    }else{
        validateMessageElem1.innerHTML = '';
        saveButton.addEventListener('click', funcForSaveButton);
        saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
    };
}
form.addEventListener('input', onInputValidateOnMinutes);





export const onInputValidateOnLong = event => {
    if(!event.target.classList.contains('input')) return;

    const tempObj = onMakeObjectFromValuesInForm();
    
    if(!onCheckEventLength(tempObj)){
        validateMessageElem2.innerHTML = 'Error! Event can`t be more than 6 hours';
        saveButton.removeEventListener('click', funcForSaveButton);
        saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
    }else{
        validateMessageElem2.innerHTML = '';
        saveButton.addEventListener('click', funcForSaveButton);
        saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
    };
}
form.addEventListener('input', onInputValidateOnLong);

export const onInputCorrectDates = event => {
    if(!event.target.classList.contains('input')) return;

    const tempObj = onMakeObjectFromValuesInForm();

    if(!onCheckCorrectDates(tempObj)){
        validateMessageElem5.innerHTML = 'Error! End date can`t be ealier than start date';
        saveButton.removeEventListener('click', funcForSaveButton);
        saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
    }else{
        validateMessageElem5.innerHTML = '';
        saveButton.addEventListener('click', funcForSaveButton);
        saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
    };    
};
form.addEventListener('input', onInputCorrectDates);




export const onInputValidateOnIntersection = event => {
    if(!event.target.classList.contains('input')) return;

    const tempObj = onMakeObjectFromValuesInForm();
    
    if(!onCheckIntersectionEvents(tempObj)){
        validateMessageElem4.innerHTML = 'Error! Event can`t intersect';
        saveButton.removeEventListener('click', funcForSaveButton);
        saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
    }else{
        validateMessageElem4.innerHTML = '';
        saveButton.addEventListener('click', funcForSaveButton);
        saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
    };
}
form.addEventListener('input', onInputValidateOnIntersection);









export const onCheckLateEffortOfDeleteOrEdite = (object) => {
    const timeToEvent = (object.startTime.valueOf() - Date.now())/1000/60; 
    if(timeToEvent <= 15){
        validateMessageElem3.innerHTML = 'You can`t change or delete event after 15 minutes to event';
        saveButton.removeEventListener('click', funcForSaveButton);
        saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
        deleteBasket.removeEventListener('click', funcForDeleteEvene);
    }else{
        validateMessageElem3.innerHTML = '';
        saveButton.addEventListener('click', funcForSaveButton);
        saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
        deleteBasket.addEventListener('click', funcForDeleteEvene);
    };
};



