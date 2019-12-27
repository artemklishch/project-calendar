import { eventsArray } from './storage.js';
import { arrDaysOfWeek } from './current_week.js';

const fileOfHoures = document.querySelectorAll('.main__sidebar_days_line');

export let firstPoint, lastPoint;

export const clearFunc = () => {
    const arrOfHours = document.querySelectorAll('.main__sidebar_days_hours');
    [...arrOfHours].forEach(elem => elem.innerHTML = '');
};

const fillDayPlaceForLongEvent = (dayObject) => {
    let certainHour = new Date(dayObject.startTime).getHours();

    let startTimeHour = new Date(dayObject.accessStartTime).getHours();
    startTimeHour = transformHourFormat(startTimeHour);
    let startTimeMinutes = new Date(dayObject.accessStartTime).getMinutes();
    
    let endTimeHour = new Date(dayObject.accessEndTime).getHours();
    endTimeHour = transformHourFormat(endTimeHour);
    let endTimeMinutes = new Date(dayObject.accessEndTime).getMinutes();
    
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
    
    const divElem = document.createElement('div');
    const h7Elem = document.createElement('h7');
    dayObject.header ? h7Elem.innerHTML = dayObject.header : h7Elem.innerHTML = "without of header";
    const pElem = document.createElement('p');
    pElem.innerHTML = `${startTimeHour} PM - ${endTimeHour} AM`;
    divElem.classList.add('main__sidebar_day_object');
    divElem.setAttribute('data-id', dayObject.ident);
    forHeight(dayObject, divElem);
    divElem.append(h7Elem, pElem);
    certainPlace.append(divElem); 
};

const generateLongEvent = (object) => {
    const year = new Date(object.startTime).getFullYear();
    const month = new Date(object.startTime).getMonth();
    const date = new Date(object.startTime).getDate();
    const lastTimeThisDay = new Date(year,month,date,24,0);
    const firstTimeNextDay = new Date(year,month,date+1);
    const identificator = object.ident;
    const identificator2 = Math.random().toFixed(10);
    const onePartEvent = {
        header:object.header,
        startTime:object.startTime,
        endTime:lastTimeThisDay,
        description:object.description,
        ident:identificator,
        accessStartTime: object.startTime,
        accessEndTime: object.endTime,
    };
    const twoPartEvent = {
      header:object.header,
      startTime:firstTimeNextDay,
      endTime:object.endTime,
      description:object.description,
      ident:identificator,
      id2:undefined,
      additionalId2:undefined,
      accessStartTime:object.startTime,
      accessEndTime:object.endTime,
    };
    if(object.endTime.getHours() === 0){
        [onePartEvent].forEach(element => fillDayPlaceForLongEvent(element));
    }else if(object.endTime < lastPoint){
        [onePartEvent,twoPartEvent].forEach(element => fillDayPlaceForLongEvent(element));
    }else{ 
        eventsArray.forEach((elem,index) => {
            if(elem.id2 !== undefined){
                eventsArray.splice(index,1);
            }
        });
        object.id2 = identificator2;
        twoPartEvent.id2 = identificator2;
        twoPartEvent.additionalId2 = identificator2;
        eventsArray.push(twoPartEvent); 
        fillDayPlaceForLongEvent(onePartEvent);
    }
};

const forHeight = (object, elem) => {
    if(object.startTime.getMinutes() === 15)elem.style.top = '25%';
    if(object.startTime.getMinutes() === 30)elem.style.top = '50%';
    if(object.startTime.getMinutes() === 45)elem.style.top = '75%';

    let timesOfRange = (object.endTime - object.startTime)/1000/60/15;
    elem.style.height = (timesOfRange*24) + '%';
}

const transformHourFormat = (hour) => {
    if(hour === 13) hour = 1;
    if(hour === 14) hour = 2;
    if(hour === 15) hour = 3;
    if(hour === 16) hour = 4;
    if(hour === 17) hour = 5;
    if(hour === 18) hour = 6;
    if(hour === 19) hour = 7;
    if(hour === 20) hour = 8;
    if(hour === 21) hour = 9;
    if(hour === 22) hour = 10;
    if(hour === 23) hour = 11;
    if(hour === 24) hour = 0;
    return hour;
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

export const renderEventObject = (eventsArray) => {
    let tempArr = filterCorrectDays(eventsArray, arrDaysOfWeek[0], arrDaysOfWeek[6]);
    tempArr.forEach(elem => {
        if(elem.startTime.getDate() !== elem.endTime.getDate()){
            generateLongEvent(elem);
        }else fillDayPlace(elem);
    });
}; 
renderEventObject(eventsArray);