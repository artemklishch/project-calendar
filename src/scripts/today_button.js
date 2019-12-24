const todayButton = document.querySelector('.nav_day');
import { generateArrDaysOfWeek } from './current_week.js';
import { arrDaysOfWeek } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';

export const todayButtonFunc = () => {   
    renderTitleDate(arrDaysOfWeek[0], arrDaysOfWeek[6]);
    const arr = generateArrDaysOfWeek();
    renderCurrentWeek(arr);
};
todayButton.addEventListener('click', todayButtonFunc);