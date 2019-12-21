const todayButton = document.querySelector('.nav_day');
import { startWeekYear, endWeekYear } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';
export const todayButtonFunc = () => {
    renderCurrentWeek();
    renderTitleDate(startWeekYear, endWeekYear);
};
todayButton.addEventListener('click', todayButtonFunc);