import { arrDaysOfWeek } from './current_week.js';
import { renderCurrentWeek } from './current_week.js';
import { renderTitleDate } from './generate_title_date.js';

let firstDayOfWeek = new Date(arrDaysOfWeek[0]);
let lastDayOfWeek = new Date(arrDaysOfWeek[6]);
const numbersOfDates = document.querySelectorAll('.header__week-block_daydate');
let counter = 0;

export const renderAnotherWeek = event => {
    const certainArrow = event.target;
    const checkArrow = certainArrow.classList.contains('nav__arow_left') 
        || certainArrow.classList.contains('nav__arow_right');  
    if(!checkArrow) return;
    
    let weekTimeMilliseconds = 604800000;
    
    if(certainArrow.classList.contains('nav__arow_right')){
        for(let i = 0; i < 7; i++){
            arrDaysOfWeek[i] = new Date(arrDaysOfWeek[i].valueOf() + weekTimeMilliseconds);
        }
        let temp = new Date(arrDaysOfWeek[0]);
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
        for(let i = 0; i < 7; i++){
            arrDaysOfWeek[i] = new Date(arrDaysOfWeek[i].valueOf() - weekTimeMilliseconds);
        }
        let temp = new Date(arrDaysOfWeek[0]);
        [...numbersOfDates]
            .forEach(elem => {
                let tempElem = elem.closest('.header__week-block_days');
                tempElem.classList.remove('today__header__week-block_days');
                elem.innerHTML = temp.getDate();
                temp.setDate(temp.getDate()+1);
            });
        counter--;
    }
    renderTitleDate(arrDaysOfWeek[0], arrDaysOfWeek[6]);
    const todayButton = document.querySelector('.nav_day');
    todayButton.addEventListener('click', () => {
        // firstDayOfWeek = new Date(arrDaysOfWeek[0]);
        // lastDayOfWeek = new Date(arrDaysOfWeek[6]);
        counter = 0;
    });
    
    if(counter === 0) renderCurrentWeek();
};

const arrows = document.querySelector('.nav__arow');
arrows.addEventListener('click', renderAnotherWeek);