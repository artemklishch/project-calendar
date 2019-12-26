import { eventsArray } from './storage.js';
import { arrDaysOfWeek } from './current_week.js';
import { renderEventObject,  clearFunc } from './generate_event_object.js';
//import { funcForLockWindow } from './popup_funcs.js';
import { funcForTimeOptions } from './create_button.js';

const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');



// export const removeFuncRenderEventOnClick = () => {
//     return blockOfDays.removeEventListener('click', renderEventOnClick);
// };

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
    popupBlock.style.display = 'block';
    funcForTimeOptions();
    const myDate = document.querySelectorAll('.specialDate');
    // const certainDate1 = new Date(tempObj.startTime.setDate(tempObj.startTime.getDate()+1));
    // const certainDate2 = new Date(tempObj.endTime.setDate(tempObj.endTime.getDate()+1));
    const certainDate1 = new Date(tempObj.startTime);
    const certainDate2 = new Date(tempObj.endTime);
    [...myDate][0].value = certainDate1.toISOString().substr(0, 10);
    [...myDate][1].value = certainDate2.toISOString().substr(0, 10);

    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    
    
};
blockOfDays.addEventListener('click', renderEventOnClick);