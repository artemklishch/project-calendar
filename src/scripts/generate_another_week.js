import { startWeekYear, endWeekYear } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';

let firstDayOfWeek = new Date(startWeekYear);
let lastDayOfWeek = new Date(endWeekYear);
const numbersOfDates = document.querySelectorAll('.header__week-block_daydate');
let counter = 0;

export const renderAnotherWeek = event => {
    const certainArrow = event.target;
    const checkArrow = certainArrow.classList.contains('nav__arow_left') 
        || certainArrow.classList.contains('nav__arow_right');  
    if(!checkArrow) return;
    let weekTimeMilliseconds = 604800000;
    
    if(certainArrow.classList.contains('nav__arow_right')){
        firstDayOfWeek = new Date(firstDayOfWeek.valueOf() + weekTimeMilliseconds);
        lastDayOfWeek = new Date(lastDayOfWeek.valueOf() + weekTimeMilliseconds); 
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
        firstDayOfWeek = new Date(firstDayOfWeek.valueOf() - weekTimeMilliseconds);
        lastDayOfWeek = new Date(lastDayOfWeek.valueOf() - weekTimeMilliseconds); 
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
    if(counter === 0) renderCurrentWeek();
};

const arrows = document.querySelector('.nav__arow');
arrows.addEventListener('click', renderAnotherWeek);