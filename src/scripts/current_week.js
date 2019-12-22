const numbersOfDates = document.querySelectorAll('.header__week-block_daydate');
export let startWeekYear, endWeekYear;

export const renderCurrentWeek = () => {
    const currentFullDate = new Date();//full day
    const currentDate = currentFullDate.getDate();//date
    const currentDayOfWeek = currentFullDate.getDay();//day num
    let countToDown = 0;
    let countToUp = 0;
    [...numbersOfDates]
        .forEach((element,index) => {
            if(index < currentDayOfWeek){
                countToDown++;
            }else if(index > currentDayOfWeek){
                countToUp++;
            }
            if(currentDayOfWeek === index){
                element.innerHTML = currentDate;
                let tempElem = element.closest('.header__week-block_days');
                tempElem.classList.add('today__header__week-block_days');
            }
        });
    
    countToDown = countToDown * 24 * 60 * 60 * 1000;
    countToUp = countToUp * 24 * 60 * 60 * 1000; 
    
    startWeekYear = new Date(Date.now() - countToDown);
    endWeekYear = new Date(Date.now() + countToUp);
    
    let tempBefore = new Date(currentFullDate - countToDown);
    let tempAfter = new Date(currentFullDate);
    tempAfter.setDate(tempAfter.getDate()+1);
    for(let i = 0; i < [...numbersOfDates].length; i++){
        if(i < currentDayOfWeek){
            numbersOfDates[i].innerHTML = tempBefore.getDate();
            tempBefore.setDate(tempBefore.getDate()+1);
        }
        if(i > currentDayOfWeek){
            numbersOfDates[i].innerHTML = tempAfter.getDate();
            tempAfter.setDate(tempAfter.getDate()+1);
        }
    }    
}
renderCurrentWeek();