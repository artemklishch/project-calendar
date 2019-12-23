import { arrDaysOfWeek } from './current_week.js';
import { generateArrDaysOfWeek } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';
import { eventsArray } from './storage.js';
import { renderEventObject } from './generate_event_object.js';

let firstDayOfWeek = new Date(arrDaysOfWeek[0]);
let lastDayOfWeek = new Date(arrDaysOfWeek[6]);

const numbersOfDates = document.querySelectorAll('.header__week-block_daydate');
let counter = 0;

export const renderAnotherWeek = event => {
    const certainArrow = event.target;
    const checkArrow = certainArrow.classList.contains('nav__arow_left') 
        || certainArrow.classList.contains('nav__arow_right');  
    if(!checkArrow) return;
    
    if(certainArrow.classList.contains('nav__arow_right')){
        firstDayOfWeek.setDate(firstDayOfWeek.getDate()+7);
        lastDayOfWeek.setDate(lastDayOfWeek.getDate()+7);
        let temp = new Date(firstDayOfWeek);
        [...numbersOfDates]
            .forEach(elem => {
                let tempElem = elem.closest('.header__week-block_days');
                tempElem.classList.remove('today__header__week-block_days');
                elem.innerHTML = temp.getDate();
                temp.setDate(temp.getDate()+1);
            });
        counter++;
    }
    if(certainArrow.classList.contains('nav__arow_left')){
        firstDayOfWeek.setDate(firstDayOfWeek.getDate()-7);
        lastDayOfWeek.setDate(lastDayOfWeek.getDate()-7);
        let temp = new Date(firstDayOfWeek);
        [...numbersOfDates]
            .forEach(elem => {
                let tempElem = elem.closest('.header__week-block_days');
                tempElem.classList.remove('today__header__week-block_days');
                elem.innerHTML = temp.getDate();
                temp.setDate(temp.getDate()+1);
            });
        counter--;
    }
    renderTitleDate(firstDayOfWeek, lastDayOfWeek);
    const todayButton = document.querySelector('.nav_day');
    todayButton.addEventListener('click', () => {
        firstDayOfWeek = new Date(arrDaysOfWeek[0]);
        lastDayOfWeek = new Date(arrDaysOfWeek[6]);
        counter = 0;
    });
    
    if(counter === 0) {
        const arr = generateArrDaysOfWeek();
        renderCurrentWeek(arr);
    }
};

const arrows = document.querySelector('.nav__arow');
arrows.addEventListener('click', renderAnotherWeek);