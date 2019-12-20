const numbersOfDates = document.querySelectorAll('.header__week-block_daydate');
const monthYear = document.querySelector('.nav__dateMonEar-today');


export const renderCurrentWeek = () => {
    const currentFullDate = new Date();//full day
    const currentYear = currentFullDate.getFullYear();
    const currentMonth = currentFullDate.toDateString().split(' ')[1];
    const currentDate = currentFullDate.getDate();//date
    const currentDayOfWeek = currentFullDate.getDay();//day num
    let arrToDown = [];
    let arrToUp = [];
    [...numbersOfDates]
        .forEach((element,index) => {
            if(index < currentDayOfWeek){
                arrToDown.push(element);
            }else if(index > currentDayOfWeek){
                arrToUp.push(element);
            }
            if(currentDayOfWeek === index){
                element.innerHTML = currentDate;
                let tempElem = element.closest('.header__week-block_days');
                tempElem.classList.add('today__header__week-block_days');
            }
        });
    let tempValueForDown = currentDate-(currentDayOfWeek+1);
    let tempValueForUp = currentDate;
    arrToDown
        .forEach(elem => elem.innerHTML = ++tempValueForDown);
    arrToUp
        .forEach(elem => elem.innerHTML = ++tempValueForUp);

    monthYear.innerHTML = `${currentMonth} ${currentYear}`;
    
}
renderCurrentWeek();