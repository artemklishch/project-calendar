import { arrDaysOfWeek } from './current_week.js';
import { filterCorrectDays } from './generate_event_object.js';
import { eventsArray } from './storage.js';

//const validateString = document.querySelector('.validate_string');
const btnSave = document.querySelector('.event__btn-save');
const btnSaveAfterEdit = document.querySelector('.event__btn-save_after_edit');

export const funcForCheckIntersectionOfEvents = (array) => {
    let tempArr = filterCorrectDays(array,arrDaysOfWeek[0],arrDaysOfWeek[6])
        .sort((a, b) => a.startTime - b.startTime);
    let x = true;
    for(let i = 0; i < tempArr.length; i++){
        if(tempArr[i].endTime > tempArr[i++].startTime){
            x = false;
            break;
        } 
    }
    return x;
};