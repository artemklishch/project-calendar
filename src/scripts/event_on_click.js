import { eventsArray } from './storage.js';
import { arrDaysOfWeek } from './current_week.js';
import { renderEventObject,  clearFunc } from './generate_event_object.js';

const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
export const renderEventOnClick = event => {
    const clickedHour = event.target;
    const hourNumber = +clickedHour.dataset.hourNumber;
    const dayNumber = clickedHour.closest('.main__sidebar_days_line').dataset.dayNumber;
    const currentYear = arrDaysOfWeek[dayNumber].getFullYear();
    const currentMonth = arrDaysOfWeek[dayNumber].getMonth();
    const currentDate = arrDaysOfWeek[dayNumber].getDate(); 

    const tempObj = {
        header: undefined,
        startTime: new Date(currentYear, currentMonth, currentDate, hourNumber),
        endTime: new Date(currentYear, currentMonth, currentDate, hourNumber+1),
        description: undefined,
    };
    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    // popupBlock.style.display = 'block';
    // blockOfDays.removeEventListener('click', renderEventOnClick);
};
blockOfDays.addEventListener('click', renderEventOnClick);