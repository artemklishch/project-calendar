import { eventsArray } from './storage.js';
import { funcForSaveButton } from './popup_funcs.js';
import { funcForSaveButtonAfterEdit } from './edit_event.js';
import { funcForDeleteEvene } from './delete_event.js';

let validateMessageElem = document.querySelector('.message_validation');


export const onClearValidateMessages = () => validateMessageElem.innerHTML = '';


const onCheckIntersectionEvents = (object) => {
    let errorText = undefined;
    eventsArray.forEach(elem => {
        if((object.startTime.getHours() <= elem.endTime.getHours() 
            && object.startTime.getMinutes() <= elem.endTime.getMinutes()) 
        && 
            (object.endTime.getHours() >= elem.startTime.getHours()
            && object.endTime.getMinutes() >= elem.startTime.getMinutes())
        ){
            errorText = 'Error! Event can`t intersect';
        }
    });
    return errorText;
};


const onCheckCorrectDates = (object) =>
    object.endTime < object.startTime
        ? 'Error! End date can`t be ealier than start date'
        : undefined;


const onCheckEventLength = (object) =>
    21600000 <= object.endTime - object.startTime
    ? 'Error! Event can`t be more than 6 hours'
    : undefined;


const onCheckMinutes = (object) => 
    object.startTime.getMinutes() % 15 !== 0 
    || object.endTime.getMinutes() % 15 !== 0
        ? 'Error! Minuts must be a multiple of fifteen'
        : undefined;

        
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
const arrOfValidateFuncs = [onCheckMinutes, onCheckEventLength, 
    onCheckCorrectDates, onCheckIntersectionEvents];
export const onInputValidate = event => {
    if(!event.target.classList.contains('input')) return;
    const tempObj = onMakeObjectFromValuesInForm();
    const errorText = arrOfValidateFuncs
        .map(func => func(tempObj))
        .filter(erroText => erroText)
        .join(' ');
    validateMessageElem.textContent = errorText;
    if(validateMessageElem.textContent !== ''){
        form.removeEventListener('submit', funcForSaveButton);
        form.removeEventListener('submit', funcForSaveButtonAfterEdit); 
    }else{
        form.addEventListener('submit', funcForSaveButton);
        form.addEventListener('submit', funcForSaveButtonAfterEdit);
    } 
};
form.addEventListener('input', onInputValidate);









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