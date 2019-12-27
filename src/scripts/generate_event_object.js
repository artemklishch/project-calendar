import { eventsArray } from './storage.js';
import { arrDaysOfWeek } from './current_week.js';
import { addintionalIndexOfElem } from './edit_event.js';



export let firstPoint, lastPoint;



export const clearFunc = () => {
    const arrOfHours = document.querySelectorAll('.main__sidebar_days_hours');
    [...arrOfHours].forEach(elem => elem.innerHTML = '');
};

const filterCorrectDays = (eventsArray, firstDayOfWeek, lastDayOfWeek) => {
    let firstDateInWeek = new Date(firstDayOfWeek);
    let firstDayYear = firstDateInWeek.getFullYear();
    let firstDayMonth = firstDateInWeek.getMonth();
    let firstDayDate = firstDateInWeek.getDate();
    firstPoint = new Date(firstDayYear, firstDayMonth, firstDayDate);
    
    let lastDateInWeek = new Date(lastDayOfWeek);
    let lastDayYear = lastDateInWeek.getFullYear();
    let lastDayMonth = lastDateInWeek.getMonth();
    let lastDayDate = lastDateInWeek.getDate();
    lastPoint = new Date(lastDayYear, lastDayMonth, lastDayDate+1); 
    return eventsArray
        .filter(elem => elem.startTime >= firstPoint && elem.startTime < lastPoint);        
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

const fillDayPlace = (dayObject) => {
    let certainHour = new Date(dayObject.startTime).getHours();

    let startTimeHour = new Date(dayObject.startTime).getHours();
    startTimeHour = transformHourFormat(startTimeHour);
    let startTimeMinutes = new Date(dayObject.startTime).getMinutes();
    
    let endTimeHour = new Date(dayObject.endTime).getHours();
    endTimeHour = transformHourFormat(endTimeHour);
    let endTimeMinutes = new Date(dayObject.endTime).getMinutes();
    
    if(startTimeMinutes !== 0) {
        startTimeHour += `:${startTimeMinutes}`; 
    }
    if(endTimeMinutes !== 0) {
        endTimeHour += `:${endTimeMinutes}`; 
    }
   
    let certainDay = [...fileOfHoures]
        .find((elem,index) => index === new Date(dayObject.startTime).getDay());
    let certainPlace = [...certainDay.children]
        .find((elem,index) => index === certainHour);
    let tempNum = 12;
    let tempVal;
    [...fileOfHoures].forEach(() => {
        if(new Date(dayObject.startTime).getHours() <= tempNum && new Date(dayObject.endTime).getHours() <= tempNum){
            tempVal = `${startTimeHour} - ${endTimeHour} AM`;
        }
        if(new Date(dayObject.startTime).getHours() <= tempNum && new Date(dayObject.endTime).getHours() > tempNum){
            tempVal = `${startTimeHour} AM - ${endTimeHour} PM`;
        }
        if(new Date(dayObject.startTime).getHours() > tempNum){
            tempVal = `${startTimeHour} - ${endTimeHour} PM`;
        }
    });
    
    const divElem = document.createElement('div');
    const h7Elem = document.createElement('h7');
    dayObject.header ? h7Elem.innerHTML = dayObject.header : h7Elem.innerHTML = "without of header";
    const pElem = document.createElement('p');
    pElem.innerHTML = tempVal;
    divElem.classList.add('main__sidebar_day_object');
    divElem.setAttribute('data-id', dayObject.ident);
    forHeight(dayObject, divElem);
    divElem.append(h7Elem, pElem);
    certainPlace.append(divElem); 
};


const funcForFillPlaces = (filtArr) => {
    filtArr.forEach(elem => fillDayPlace(elem));
};


const forChangingEventsArray = (array) => {
    let tempArr = filterCorrectDays(array,arrDaysOfWeek[0],arrDaysOfWeek[6]);
    tempArr.map((element,index) => {
        if(element.startTime.getDate() !== element.endTime.getDate() && element.endTime.getHours() > 0){
            array.splice(index,1);
            transformObjectFunc(element);
        }
    });
    funcForFillPlaces(tempArr);
};



export const renderEventObject = () => {
    return forChangingEventsArray(eventsArray);    
};
renderEventObject();