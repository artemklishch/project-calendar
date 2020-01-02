import { arrDaysOfWeek } from './current_week.js';
import { funcForTimeOptions } from './create_button.js';

const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const saveBtn = document.querySelector('.event__btn-save');

export const renderEventOnClick = event => {
    const clickedHour = event.target;
    if (!clickedHour.classList.contains('main__sidebar_days_hours')) return;

    const hourNumber = +clickedHour.dataset.hourNumber;
    const dayNumber = clickedHour.closest('.main__sidebar_days_line').dataset.dayNumber;
    const currentYear = arrDaysOfWeek[dayNumber].getFullYear();
    const currentMonth = arrDaysOfWeek[dayNumber].getMonth();
    const currentDate = arrDaysOfWeek[dayNumber].getDate();

    let endTime; +
    clickedHour.getAttribute('data-hour-number') === 0 ?
        endTime = new Date(currentYear, currentMonth, currentDate + 1, hourNumber + 1) :
        endTime = new Date(currentYear, currentMonth, currentDate, hourNumber + 1);

    popupBlock.style.display = 'block';
    saveBtn.style.display = 'block';
    funcForTimeOptions();

    const myDate = document.querySelectorAll('.specialDate');
    [...myDate].forEach(elem => elem.value = new Date(endTime)
        .toISOString().substr(0, 10));

    const startHour = document.querySelector('.event__time-start');
    startHour.value = hourNumber;

    const endHour = document.querySelector('.event__time-end');
    endHour.value = hourNumber + 1;
    blockOfDays.removeEventListener('click', renderEventOnClick);

};
blockOfDays.addEventListener('click', renderEventOnClick);