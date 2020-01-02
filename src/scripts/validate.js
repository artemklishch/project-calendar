// import { eventsArray } from './storage.js';

// export const validateMessageElem = document.querySelector('.validate_message');


// export const funcForCheckIntersectionOfEvents = (object) => {
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
// };