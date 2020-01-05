import { eventsArray } from './storage.js';
import { funcForSaveButton } from './popup_funcs.js';
import { funcForSaveButtonAfterEdit } from './edit_event.js';
import { funcForDeleteEvene } from './delete_event.js';

const validateMessageElem1 = document.querySelector('.validate_message_1');
const validateMessageElem2 = document.querySelector('.validate_message_2');
const validateMessageElem3 = document.querySelector('.validate_message_3');
//const validateMessageElem4 = document.querySelector('.validate_message_4');
const saveButton = document.querySelector('.event__btn-save');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');
const deleteBasket = document.querySelector('.event__btn-delete');

// const onCheckOneOption = (curStH,curStM,stH,stM) => {
//     let accessVal1 = 0;
//     if(curStH === stH && curStM === stM){
//         accessVal1 = 1;
//     }else accessVal1 = 0;
//     return accessVal1 === 1 || false;
// };
// const onCheckTwoOption = (curStH,curStM,stH,stM,edH,edM) => {
//     let accessVal1 = 0, accessVal2 = 0;
//     if(curStH > stH && curStM > stM){
//         accessVal1 = 1;
//     }else accessVal1 = 0;
//     if(curStH < edH && curStM < edM){
//         accessVal2 = 1;
//     }else accessVal2 = 0;
//     return accessVal1 === accessVal2 || false;
// };
// const onCheckThreeOption = (curEdH,curEdM,edH,edM) => {
//     let accessVal1 = 0, accessVal2 = 0;
//     if(curEdH === edH && curEdM === edM){
//         accessVal1 = 1;
//         accessVal2 = 1;
//     }else{
//         accessVal1 = 0;
//         accessVal2 = 0;
//     } 
//     return accessVal1 === accessVal2 || false;
// };
// const onCheckFourOption = (curEdH,curEdM,edH,edM,stH,stM) => {
//     let accessVal1 = 0, accessVal2 = 0;
//     if(curEdH < edH && curEdM < edM){
//         accessVal1 = 1;
//     }else accessVal1 = 0;
//     if(curEdH > stH && curEdM > stM){
//         accessVal2 = 1;
//     }else accessVal2 = 0;
//     return accessVal1 === accessVal2 || false;
// };
// const onCheckFiveOption = (curStH,curStM,curEdH,curEdM,stH,stM,edH,edM) => {
//     let accessVal1 = 0, accessVal2 = 0;
//     if(curStH < stH && curStM < stM){
//         accessVal1 = 1;
//     }else accessVal1 = 0;
//     if(curEdH > edH && curEdM > edM){
//         accessVal2 = 1;
//     }else accessVal2 = 0;
//     return accessVal1 === accessVal2 || false;
// };

// const onCheckIntersectionEvents = (object) => {
//     let withoutIntersecttion = true;
//     const currentStHours = object.startTime.getHours();
//     const currentStMinutes = object.startTime.getMinutes();
//     const currentEdHours = object.endTime.getHours();
//     const currentEdMinutes = object.endTime.getMinutes();
//     for(let i = 0; i < eventsArray.length; i++){
//         const checkedStHours = eventsArray[i].startTime.getHours();
//         const checkedStMinutes = eventsArray[i].startTime.getMinutes(); 
//         const checkedEndHours = eventsArray[i].endTime.getHours();
//         const checkedEndMinutes = eventsArray[i].endTime.getMinutes();

//         if(!onCheckOneOption(currentStHours,currentStMinutes,checkedStHours,checkedStMinutes)){
//             withoutIntersecttion = false;
//             break;
//         }else withoutIntersecttion = true;

//         if(onCheckTwoOption(currentStHours,currentStMinutes,checkedStHours,checkedStMinutes,
//             checkedEndHours,checkedEndMinutes)){
//                 withoutIntersecttion = false;
//                 break;
//         }else withoutIntersecttion = true;

//         if(onCheckThreeOption(currentEdHours,currentEdMinutes,checkedEndHours,checkedEndMinutes)){
//             withoutIntersecttion = false;
//             break;
//         }else withoutIntersecttion = true;
        
//         if(onCheckFourOption(currentEdHours,currentEdMinutes,checkedEndHours,checkedEndMinutes,
//             checkedStHours,checkedStMinutes)){
//                 withoutIntersecttion = false;
//                 break;
//         }else withoutIntersecttion = true;

//         if(onCheckFiveOption(currentStHours,currentStMinutes,currentEdHours, currentEdMinutes,checkedStHours,checkedStMinutes,
//             checkedEndHours,checkedEndMinutes)){
//                 withoutIntersecttion = false;
//                 break;
//         }else withoutIntersecttion = true;
//     }
//     return withoutIntersecttion;  
// };


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

// export const onInputValidateOnIntersection = event => {
//     if(!event.target.classList.contains('input')) return;

//     const tempObj = onMakeObjectFromValuesInForm();
    
//     if(!onCheckIntersectionEvents(tempObj)){
//         validateMessageElem4.innerHTML = 'Error! Event can`t intersect';
//         saveButton.removeEventListener('click', funcForSaveButton);
//         saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
//     }else{
//         validateMessageElem4.innerHTML = '';
//         saveButton.addEventListener('click', funcForSaveButton);
//         saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
//     };
// }
// form.addEventListener('input', onInputValidateOnIntersection);









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



