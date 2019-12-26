const todayButton = document.querySelector('.nav_day');
import { eventsArray } from './storage.js';
import { generateArrDaysOfWeek } from './current_week.js';
import { arrDaysOfWeek } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';
import { renderEventObject,  clearFunc } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';

export const todayButtonFunc = () => {   
    renderTitleDate(arrDaysOfWeek[0], arrDaysOfWeek[6]);
    const arr = generateArrDaysOfWeek();
    renderCurrentWeek(arr);
    clearFunc();
    renderEventObject(eventsArray);
    renderRedLIne();
};
todayButton.addEventListener('click', todayButtonFunc);