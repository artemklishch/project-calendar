const todayButton = document.querySelector('.nav_day');
import { renderCurrentWeek } from './current_week.js';
export const todayButtonFunc = () => {
    renderCurrentWeek();
};
todayButton.addEventListener('click', todayButtonFunc);