import { eventsArray } from './storage.js';
import { arrDaysOfWeek } from './current_week.js';
import { addintionalIndexOfElem } from './edit_event.js';

export const clearFunc = () => {
    const arrOfHours = document.querySelectorAll('.main__sidebar_days_hours');
    [...arrOfHours].forEach(elem => elem.innerHTML = '');
};



const transformObjectFunc = (element) => {
    const endYearForObj1 = new Date(element.startTime).getFullYear();
    const endMonthForObj1 = new Date(element.startTime).getMonth();
    const endDateForObj1 = new Date(element.startTime).getDate();
    let endTimeForObj1 = new Date(endYearForObj1,endMonthForObj1,endDateForObj1,24);
    
    const startYearForObj2 = new Date(element.endTime).getFullYear();
    const startMonthForObj2 = new Date(element.endTime).getMonth();
    const endDateForObj2 = new Date(element.endTime).getDate();
    const startTimeForObj2 = new Date(startYearForObj2,startMonthForObj2,endDateForObj2);
    const indentificator = Math.random().toFixed(10);


    const obj1 = {
        header: element.header,
        startTime:element.startTime,
        endTime: endTimeForObj1,
        description:element.description,
        ident: indentificator,
    };
    const obj2 = {
        header: element.header,
        startTime:startTimeForObj2,
        endTime: element.endTime,
        description:element.description,
        ident: indentificator,
    };
    eventsArray.push(obj1, obj2);        
};

const forChangingEventsArray = (eventsArray) => {
    eventsArray.forEach((element,index) => {
        if(element.startTime.getDate() !== element.endTime.getDate() && element.endTime.getHours() > 0){
            eventsArray.splice(index,1);
            transformObjectFunc(element);
        }
    });
    console.log(eventsArray);
};

export const renderEventObject = () => {
    return forChangingEventsArray(eventsArray);    
};
renderEventObject();