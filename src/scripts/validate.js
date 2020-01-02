import { eventsArray } from './storage.js';

export const funcForCheckIntersectionOfEvents = (object) => {
    let withoutIntersecttion = true;
    let tempArr = eventsArray
        .filter(elem => elem.startTime.getFullYear() === object.startTime.getFullYear())
        .filter(elem => elem.startTime.getMonth() === object.startTime.getMonth())
        .filter(elem => elem.startTime.getDate() === object.startTime.getDate());
    for(let i = 0; i < tempArr.length; i++){
        if(object.startTime.valueOf() === tempArr[i].startTime.valueOf()){
            withoutIntersecttion = false;
            break;
        }
        if(object.startTime.valueOf() > tempArr[i].startTime.valueOf()
        && object.startTime.valueOf() < tempArr[i].endTime.valueOf()){
            withoutIntersecttion = false;
            break;
        }
        if(object.endTime.valueOf() === tempArr[i].endTime.valueOf()){
            withoutIntersecttion = false;
            break;
        }
        if(object.endTime.valueOf() < tempArr[i].endTime.valueOf()
        && object.endTime.valueOf() > tempArr[i].startTime.valueOf()){
            withoutIntersecttion = false;
            break;
        }
    }
    return withoutIntersecttion;  
};