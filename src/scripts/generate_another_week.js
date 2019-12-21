import { startWeekYear, endWeekYear } from './current_week.js';
let firstDayOfWeek = new Date(startWeekYear);
let lastDayOdWeek = new Date(endWeekYear);
const numbersOfDates = document.querySelectorAll('.header__week-block_daydate');

export const renderAnotherWeek = event => {
    const certainArrow = event.target;
    const checkArrow = certainArrow.classList.contains('nav__arow_left') 
        || certainArrow.classList.contains('nav__arow_right');  
    if(!checkArrow) return;
    let weekTimeMilliseconds = 604800000;
    if(certainArrow.classList.contains('nav__arow_right')){
        firstDayOfWeek = new Date(firstDayOfWeek.valueOf() + weekTimeMilliseconds);
        lastDayOdWeek = new Date(lastDayOdWeek.valueOf() + weekTimeMilliseconds); 
        let temp = new Date(firstDayOfWeek);
        [...numbersOfDates]
            .forEach(elem => {
                let tempElem = elem.closest('.header__week-block_days');
                tempElem.classList.remove('today__header__week-block_days');
                elem.innerHTML = temp.getDate();
                temp.setDate(temp.getDate()+1);
            });
    }
    if(certainArrow.classList.contains('nav__arow_left')){
        firstDayOfWeek = new Date(firstDayOfWeek.valueOf() - weekTimeMilliseconds);
        lastDayOdWeek = new Date(lastDayOdWeek.valueOf() - weekTimeMilliseconds); 
        let temp = new Date(firstDayOfWeek);
        [...numbersOfDates]
            .forEach(elem => {
                let tempElem = elem.closest('.header__week-block_days');
                tempElem.classList.remove('today__header__week-block_days');
                elem.innerHTML = temp.getDate();
                temp.setDate(temp.getDate()+1);
            });
    }
};

const arrows = document.querySelector('.nav__arow');
arrows.addEventListener('click', renderAnotherWeek);