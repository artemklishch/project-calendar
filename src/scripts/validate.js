import { eventsArray } from './storage.js';
import { funcForSaveButton } from './popup_funcs.js';
import { funcForSaveButtonAfterEdit } from './edit_event.js';
import { funcForDeleteEvene } from './delete_event.js';
import { arrDaysOfWeek } from './current_week.js';

let validateMessageElem = document.querySelector('.message_validation');
const saveButton = document.querySelector('.event__btn-save');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');
const deleteBasket = document.querySelector('.event__btn-delete');

export const onClearValidateMessages = () => validateMessageElem.innerHTML = '';

// const onCheckOneOption = (curStT,stT) => {
//     let accessVal = 0;
//     curStT === stT ? accessVal = 1 : accessVal = 0;
//     return accessVal === 1 || false;
// };


// const onCheckTwoOption1 = (curStTh,curStTm,stTh,stTm) => {
//     if(curStTh >= stTh && curStTm > stTm){
//         return true;
//     }else false;
// };
// const onCheckTwoOption2 = (curStTh,curStTm,endTh,endTm) => {
//     if(curStTh < endTh && curStTm < endTm){
//         return true;
//     }else false;
// }

// const onCheckThreeOption = (curEndT,endT) => {
//     let accessVal = 0;
//     curEndT === endT ? accessVal = 1 : accessVal = 0;
//     return accessVal === 1 || false;
// };
// const onCheckFourOption = (curEndT,endT,stT) => {
//     let accessVal = 0;
//     curEndT < endT && curEndT > stT
//     ? accessVal = 1
//     : accessVal = 0;
//     return accessVal === 1 || false;
// };
// const onCheckFiveOption = (curStT,curEndT,stT,endT) => {
//     let accessVal = 0;
//     curStT < stT && curEndT < endT
//     ? accessVal = 1
//     : accessVal = 0;
//     return accessVal === 1 || false;
// };


const onCheckIntersectionEvents = (object) => {
    // const currentStTimeHours = object.startTime.getHours();
    // const currentStTimeMinutes = object.startTime.getMinutes();
    // const currentEndTimeHours = object.endTime.getHours();
    // const currentEndTimeMinutes = object.endTime.getMinutes();
    const currentStTime = object.startTime.getTime();
    const currentEndTime = object.endTime.getTime();

    let errorText = undefined;
    eventsArray.forEach(elem => {
        if(currentStTime < elem.endTime.getTime() 
            && currentEndTime > elem.startTime.getTime()){
            errorText = 'Error! Event can`t intersect';
        }else errorText = undefined;
    });
    // for(let i = 0; i < eventsArray.length; i++){
    //     let checkedStTimeHours = eventsArray[i].startTime.getHours();
    //     let checkedStTimeMinutes = eventsArray[i].startTime.getMinutes();
    //     let checkedEndTimeHours = eventsArray[i].endTime.getHours();
    //     let checkedEndTimeMinutes = eventsArray[i].endTime.getMinutes();
        

        // if((currentStTimeHours <= checkedEndTimeHours 
        //     && currentStTimeMinutes <= checkedEndTimeMinutes) 
        // && 
        //     (currentEndTimeHours >= checkedStTimeHours
        //     && currentEndTimeMinutes >= checkedStTimeMinutes)
        // ){
        //     errorText = 'Error! Event can`t intersect';
        // }
        
        // if(
        //     (checkedStTimeHours > currentEndTimeHours
        //     && checkedStTimeMinutes > currentEndTimeMinutes) 
        // || 
        //     (checkedEndTimeHours < currentStTimeHours
        //     && checkedEndTimeMinutes < currentStTimeMinutes)
        // ){
        //     errorText = undefined;
        // }else errorText = 'Error! Event can`t intersect';


        // if(currentStTimeHours === checkedStTimeHours
        //     && currentStTimeMinutes === checkedStTimeMinutes){     
        //     errorText = 'Error! Event can`t intersect';
        //     break;
        // }else errorText = undefined;

        // if(currentEndTimeHours === checkedEndTimeHours
        //     && currentEndTimeMinutes === checkedEndTimeMinutes){     
        //     errorText = 'Error! Event can`t intersect';
        //     break;
        // }else errorText = undefined;

        // let oneOpt1 = onCheckTwoOption1(currentStTimeHours,currentStTimeMinutes,
        //     checkedStTimeHours,checkedStTimeMinutes);
        // let oneOpt2 = onCheckTwoOption2(currentStTimeHours,currentStTimeMinutes,
        //     checkedEndTimeHours,checkedEndTimeMinutes);
        // if(oneOpt1 == true && oneOpt2 === true){
        //         errorText = 'Error! Event can`t intersect';
        //         console.log(errorText);
        //         break;
        //     }else errorText = undefined;
        



        // if(onCheckTwoOption(currentStTime,checkedStTime,checkedEndTime)){
        //     errorText = 'Error! Event can`t intersect';
        // }else errorText = undefined;

        // if(onCheckThreeOption(currentEndTime,checkedEndTime)){
        //     errorText = 'Error! Event can`t intersect';
        // }else errorText = undefined;
        
        // if(onCheckFourOption(currentEndTime,checkedEndTime,checkedStTime)){
        //     errorText = 'Error! Event can`t intersect';
        // }else errorText = undefined;

        // if(onCheckFiveOption(currentStTime,currentEndTime,checkedStTime,checkedEndTime)){
        //     errorText = 'Error! Event can`t intersect';
        // }else errorText = undefined;
    //}
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









// export const onCheckLateEffortOfDeleteOrEdite = (object) => {
//     const timeToEvent = (object.startTime.valueOf() - Date.now())/1000/60; 
//     if(timeToEvent <= 15){
//         validateMessageElem3.innerHTML = 'You can`t change or delete event after 15 minutes to event';
//         saveButton.removeEventListener('click', funcForSaveButton);
//         saveBtnForEdit.removeEventListener('click', funcForSaveButtonAfterEdit);
//         deleteBasket.removeEventListener('click', funcForDeleteEvene);
//     }else{
//         validateMessageElem3.innerHTML = '';
//         saveButton.addEventListener('click', funcForSaveButton);
//         saveBtnForEdit.addEventListener('click', funcForSaveButtonAfterEdit);
//         deleteBasket.addEventListener('click', funcForDeleteEvene);
//     };
// };



