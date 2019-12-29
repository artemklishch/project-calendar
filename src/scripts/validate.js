import { arrDaysOfWeek } from './current_week.js';
import { filterCorrectDays } from './generate_event_object.js';

const validateString = document.querySelector('.validate_string');
const btnSave = document.querySelector('.event__btn-save');
const btnSaveAfterEdit = document.querySelector('.event__btn-save_after_edit');

export const funcForCheckIntersectionOfEvents = (array) => {
    let tempArr = filterCorrectDays(array,arrDaysOfWeek[0],arrDaysOfWeek[6])
        .sort((a, b) => a.startTime - b.startTime);
    console.log(tempArr);
};