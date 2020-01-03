import { arrDaysOfWeek } from './current_week.js';
import { onInputValidate } from './validate.js';


const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const saveBtn = document.querySelector('.event__btn-save');

export const renderEventOnClick = event => {
    const clickedHour = event.target;
    if(!clickedHour.classList.contains('main__sidebar_days_hours')) return;

    const hourNumber = +clickedHour.dataset.hourNumber;
    const dayNumber = clickedHour.closest('.main__sidebar_days_line').dataset.dayNumber;
    const currentYear = arrDaysOfWeek[dayNumber].getFullYear();
    const currentMonth = arrDaysOfWeek[dayNumber].getMonth();
    const currentDate = arrDaysOfWeek[dayNumber].getDate();
    
    let endTime; 
    +clickedHour.getAttribute('data-hour-number') === 0
    ? endTime = new Date(currentYear, currentMonth, currentDate+1, hourNumber+1)
    : endTime = new Date(currentYear, currentMonth, currentDate, hourNumber+1);

    popupBlock.style.display = 'block';
    saveBtn.style.display = 'block';
     
    const myDate = document.querySelectorAll('.specialDate');
    [...myDate].forEach(elem => elem.value = new Date(endTime)
        .toISOString().substr(0, 10));


    const startHour = new Date(currentYear, currentMonth, currentDate, hourNumber).getHours();
    const endHour = startHour + 1;

    const startTimePlace = document.querySelector('.startTime_place');
    startHour < 10 
    ? startTimePlace.value = [`0${startHour}`, '00'].join(':')
    : startTimePlace.value = [`${startHour}`, '00'].join(':');
    
    const endTimePlace = document.querySelector('.endTime_place');
    endHour < 10 
    ? endTimePlace.value = [`0${endHour}`, '00'].join(':')
    : endTimePlace.value = [`${endHour}`, '00'].join(':');
    if(startHour === 23)endTimePlace.value = [`00`, '00'].join(':');

    blockOfDays.removeEventListener('click', renderEventOnClick);

    onInputValidate();
    
};
blockOfDays.addEventListener('click', renderEventOnClick);