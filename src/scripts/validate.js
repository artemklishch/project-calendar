import { eventsArray } from './storage.js';

const validateMessageElem = document.querySelector('.validate_message');

const allDateInputs = document.querySelectorAll('.input');
for(let i = 0; i < [...allDateInputs].length; i++){
    allDateInputs[i].oninput = onInputValidate;
}
export function onInputValidate(){
    const tempObj = {
        startTime: undefined,
        endTime: undefined,
    };
    const startTimeInput = document.querySelector('.event__date-start');
    const firstStartDate_year = new Date(startTimeInput.value).getFullYear();
    const firstStartDate_month = new Date(startTimeInput.value).getMonth();
    const firstStartDate_date = new Date(startTimeInput.value).getDate();
    const firstStartDate_hours = +document.querySelector('.startTime_place').value.split(':')[0];
    const firstStartDate_minutes = +document.querySelector('.startTime_place').value.split(':')[1];
    tempObj.startTime = new Date(firstStartDate_year, firstStartDate_month,
        firstStartDate_date, firstStartDate_hours, firstStartDate_minutes);


    const endTimeInput = document.querySelector('.event__date-end');
    const firstEndDate_year = new Date(endTimeInput.value).getFullYear();
    const firstEndDate_month = new Date(endTimeInput.value).getMonth();
    const firstEndDate_date = new Date(endTimeInput.value).getDate();
    const firstEndDate_hours = +document.querySelector('.endTime_place').value.split(':')[0];
    const firstEndDate_minutes = +document.querySelector('.endTime_place').value.split(':')[1];
    tempObj.endTime = new Date(firstEndDate_year, firstEndDate_month,
        firstEndDate_date, firstEndDate_hours, firstEndDate_minutes);
            
}


// const blockOfDateInputs = document.querySelector('.popup__picker');
// export const onInputDateValidation = event => {
//     event.preventDefault();
//     const currentInput = event.target;
//     if(!currentInput.classList.contains('input')) return;
//     const tempObj = {
//         startTime: undefined,
//         endTime: undefined,
//     };
//     const startTimeInput = document.querySelector('.event__date-start');
//     const firstStartDate_year = new Date(startTimeInput.value).getFullYear();
//     const firstStartDate_month = new Date(startTimeInput.value).getMonth();
//     const firstStartDate_date = new Date(startTimeInput.value).getDate();
//     const firstStartDate_hours = +document.querySelector('.startTime_place').value.split(':')[0];
//     const firstStartDate_minutes = +document.querySelector('.startTime_place').value.split(':')[1];
//     tempObj.startTime = new Date(firstStartDate_year, firstStartDate_month,
//         firstStartDate_date, firstStartDate_hours, firstStartDate_minutes);


//     const endTimeInput = document.querySelector('.event__date-end');
//     const firstEndDate_year = new Date(endTimeInput.value).getFullYear();
//     const firstEndDate_month = new Date(endTimeInput.value).getMonth();
//     const firstEndDate_date = new Date(endTimeInput.value).getDate();
//     const firstEndDate_hours = +document.querySelector('.endTime_place').value.split(':')[0];
//     const firstEndDate_minutes = +document.querySelector('.endTime_place').value.split(':')[1];
//     tempObj.endTime = new Date(firstEndDate_year, firstEndDate_month,
//         firstEndDate_date, firstEndDate_hours, firstEndDate_minutes);
//     console.log(tempObj);
// };
// blockOfDateInputs.addEventListener('input', onInputDateValidation);









//export const funcForCheckIntersectionOfEvents = (object) => {
//     let withoutIntersecttion = true;
//     for(let i = 0; i < eventsArray.length; i++){
//         if(object.startTime.valueOf() === eventsArray[i].startTime.valueOf()){
//             withoutIntersecttion = false;
//             validateMessageElem.innerHTML = 'Error! Events can\'t intersect';
//             break;
//         }
//         if(object.startTime.valueOf() > eventsArray[i].startTime.valueOf()
//         && object.startTime.valueOf() < eventsArray[i].endTime.valueOf()){
//             withoutIntersecttion = false;
//             validateMessageElem.innerHTML = 'Error! Events can\'t intersect';
//             break;
//         }
//         if(object.endTime.valueOf() === eventsArray[i].endTime.valueOf()){
//             withoutIntersecttion = false;
//             validateMessageElem.innerHTML = 'Error! Events can\'t intersect';
//             break;
//         }
//         if(object.endTime.valueOf() < eventsArray[i].endTime.valueOf()
//         && object.endTime.valueOf() > eventsArray[i].startTime.valueOf()){
//             withoutIntersecttion = false;
//             validateMessageElem.innerHTML = 'Error! Events can\'t intersect';
//             break;
//         }
//         if(object.startTime.valueOf() < eventsArray[i].startTime.valueOf()
//         && object.endTime.valueOf() > eventsArray[i].endTime.valueOf()){
//             withoutIntersecttion = false;
//             validateMessageElem.innerHTML = 'Error! Events can\'t intersect';
//             break;
//         }
//     }
//     return withoutIntersecttion;  
//};