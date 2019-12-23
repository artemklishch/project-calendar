const todayButton = document.querySelector('.nav_day');
import { arrDaysOfWeek } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';
export const todayButtonFunc = () => {
    renderCurrentWeek();
    renderTitleDate(arrDaysOfWeek[0], arrDaysOfWeek[6]);
};
todayButton.addEventListener('click', todayButtonFunc);