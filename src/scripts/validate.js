import { eventsArray } from './storage.js';
import { funcForSaveButton } from './popup_funcs.js';
//import { funcForDeleteEvene } from './delete_event.js';

let validateMessageElem = document.querySelector('.message_validation');
//const deleteBasket = document.querySelector('.event__btn-delete');

export const onClearValidateMessages = () => validateMessageElem.innerHTML = '';


const onCheckIntersectionEvents = (object) => {
    let errorText = undefined;
    eventsArray.forEach(elem => {
        if((object.startTime < elem.endTime 
            && object.startTime < elem.endTime) 
        && 
            (object.endTime > elem.startTime
            && object.endTime > elem.startTime)
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
    }else{
        form.addEventListener('submit', funcForSaveButton);
    } 
};
form.addEventListener('input', onInputValidate);









// export const onCheckLateEffortOfDeleteOrEdite = (object) => {
//     const timeToEvent = (object.startTime.valueOf() - Date.now())/1000/60; 
//     if(timeToEvent <= 15){
//         validateMessageElem.innerHTML = 'You can`t change or delete event after 15 minutes to event';
//         form.removeEventListener('submit', funcForSaveButton);
//         form.removeEventListener('submit', funcForSaveButtonAfterEdit);
//         deleteBasket.removeEventListener('click', funcForDeleteEvene);
//     }else{
//         validateMessageElem.innerHTML = '';
//         form.addEventListener('submit', funcForSaveButton);
//         form.addEventListener('submit', funcForSaveButtonAfterEdit);
//         deleteBasket.addEventListener('click', funcForDeleteEvene);
//     };
// };