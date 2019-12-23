// import { eventsArray } from './storage.js';

// const fileOfHoures = document.querySelectorAll('.main__sidebar_days_line');


// const fillDayPlaceForLongEvent = (dayObject) => {
//     let dayOfWeek = new Date(dayObject.startTime).getDay();

//     let startTimeHour = new Date(dayObject.accessStartTime).getHours();
//     startTimeHour = transformHourFormat(startTimeHour);
//     let startTimeMinutes = new Date(dayObject.startTime).getMinutes();
    
//     let endTimeHour = new Date(dayObject.accessEndTime).getHours();
//     endTimeHour = transformHourFormat(endTimeHour);
//     let endTimeMinutes = new Date(dayObject.endTime).getMinutes();
    
//     if(startTimeMinutes !== 0) {
//         startTimeHour += `:${startTimeMinutes}`; 
//     }
//     if(endTimeMinutes !== 0) {
//         endTimeHour += `:${endTimeMinutes}`; 
//     }
    
//     let certainLine = [...fileOfHoures]
//         .find((elem,index) => index === new Date(dayObject.startTime).getHours());
//     let certainDay = [...certainLine.children]
//         .find((elem,index) => index === dayOfWeek);
    
//     const divElem = document.createElement('div');
//     const h7Elem = document.createElement('h7');
//     dayObject.header ? h7Elem.innerHTML = dayObject.header : h7Elem.innerHTML = "without of header";
//     const pElem = document.createElement('p');
//     pElem.innerHTML = `${startTimeHour} PM - ${endTimeHour} AM`;
//     divElem.classList.add('main__sidebar_day_object');
//     forHeight(dayObject, divElem);
//     divElem.append(h7Elem, pElem);
//     certainDay.append(divElem); 
   
// };

// const generateLongEvent = (object) => {
//     const year = new Date(object.startTime).getFullYear();
//     const month = new Date(object.startTime).getMonth();
//     const date = new Date(object.startTime).getDate();
//     const lastTimeThisDay = new Date(year,month,date,24,0);
//     const firstTimeNextDay = new Date(year,month,date+1,0,0);
//     const identificator = Math.random().toFixed(10);
//     const onePartEvent = {
//         header:object.header,
//         startTime:object.startTime,
//         endTime:lastTimeThisDay,
//         description:object.description,
//         id:identificator,
//         accessStartTime: object.startTime,
//         accessEndTime: object.endTime,
//     };
//     const twoPartEvent = {
//         header:object.header,
//         startTime:firstTimeNextDay,
//         endTime:object.endTime,
//         description:object.description,
//         id:identificator,
//         accessStartTime: object.startTime,
//         accessEndTime: object.endTime,
//     };
//     [onePartEvent,twoPartEvent].forEach(element => fillDayPlaceForLongEvent(element));
//     eventsArray.push(onePartEvent, twoPartEvent);
// };

// const forHeight = (object, elem) => {
//     if(object.startTime.getMinutes() === 15)elem.style.top = '25%';
//     if(object.startTime.getMinutes() === 30)elem.style.top = '50%';
//     if(object.startTime.getMinutes() === 45)elem.style.top = '75%';

//     let timesOfRange = (object.endTime - object.startTime)/1000/60/15;
//     elem.style.height = (timesOfRange*25) + '%';
// }

// const transformHourFormat = (hour) => {
//     if(hour === 13) hour = 1;
//     if(hour === 14) hour = 2;
//     if(hour === 15) hour = 3;
//     if(hour === 16) hour = 4;
//     if(hour === 17) hour = 5;
//     if(hour === 18) hour = 6;
//     if(hour === 19) hour = 7;
//     if(hour === 20) hour = 8;
//     if(hour === 21) hour = 9;
//     if(hour === 22) hour = 10;
//     if(hour === 23) hour = 11;
//     if(hour === 24) hour = 0;
//     return hour;
// };

// const fillDayPlace = (dayObject) => {
//     let dayOfWeek = new Date(dayObject.startTime).getDay();

//     let startTimeHour = new Date(dayObject.startTime).getHours();
//     startTimeHour = transformHourFormat(startTimeHour);
//     let startTimeMinutes = new Date(dayObject.startTime).getMinutes();
    
//     let endTimeHour = new Date(dayObject.endTime).getHours();
//     endTimeHour = transformHourFormat(endTimeHour);
//     let endTimeMinutes = new Date(dayObject.endTime).getMinutes();
    
//     if(startTimeMinutes !== 0) {
//         startTimeHour += `:${startTimeMinutes}`; 
//     }
//     if(endTimeMinutes !== 0) {
//         endTimeHour += `:${endTimeMinutes}`; 
//     }
   
//     let certainLine = [...fileOfHoures]
//         .find((elem,index) => index === new Date(dayObject.startTime).getHours());
//     let certainDay = [...certainLine.children]
//         .find((elem,index) => index === dayOfWeek);
//     let tempNum = 12;
//     let tempVal;
//     [...fileOfHoures].forEach(() => {
//         if(new Date(dayObject.startTime).getHours() <= tempNum && new Date(dayObject.endTime).getHours() <= tempNum){
//             tempVal = `${startTimeHour} - ${endTimeHour} AM`;
//         }
//         if(new Date(dayObject.startTime).getHours() <= tempNum && new Date(dayObject.endTime).getHours() > tempNum){
//             tempVal = `${startTimeHour} AM - ${endTimeHour} PM`;
//         }
//         if(new Date(dayObject.startTime).getHours() > tempNum){
//             tempVal = `${startTimeHour} - ${endTimeHour} PM`;
//         }
//     });
    
//     const divElem = document.createElement('div');
//     const h7Elem = document.createElement('h7');
//     dayObject.header ? h7Elem.innerHTML = dayObject.header : h7Elem.innerHTML = "without of header";
//     const pElem = document.createElement('p');
//     pElem.innerHTML = tempVal;
//     divElem.classList.add('main__sidebar_day_object');
//     forHeight(dayObject, divElem);
//     divElem.append(h7Elem, pElem);
//     certainDay.append(divElem); 
   
// };

// export const renderEventObject = (eventsArray) => {    
//     eventsArray.forEach(elem => {
//         if(elem.startTime.getDate() !== elem.endTime.getDate()){
//             generateLongEvent(elem);
//         }else fillDayPlace(elem);
//     });
// }; 
// renderEventObject(eventsArray);






import { eventsArray } from './storage.js';

const fileOfHoures = document.querySelectorAll('.main__sidebar_days_line');


const fillDayPlaceForLongEvent = (dayObject) => {
    let certainHour = new Date(dayObject.startTime).getHours();

    let startTimeHour = new Date(dayObject.accessStartTime).getHours();
    startTimeHour = transformHourFormat(startTimeHour);
    let startTimeMinutes = new Date(dayObject.startTime).getMinutes();
    
    let endTimeHour = new Date(dayObject.accessEndTime).getHours();
    endTimeHour = transformHourFormat(endTimeHour);
    let endTimeMinutes = new Date(dayObject.endTime).getMinutes();
    
    if(startTimeMinutes !== 0) {
        startTimeHour += `:${startTimeMinutes}`; 
    }
    if(endTimeMinutes !== 0) {
        endTimeHour += `:${endTimeMinutes}`; 
    }
    
    let certainLine = [...fileOfHoures]
        .find((elem,index) => index === new Date(dayObject.startTime).getDay());
    let certainDay = [...certainLine.children]
        .find((elem,index) => index === certainHour);
    
    const divElem = document.createElement('div');
    const h7Elem = document.createElement('h7');
    dayObject.header ? h7Elem.innerHTML = dayObject.header : h7Elem.innerHTML = "without of header";
    const pElem = document.createElement('p');
    pElem.innerHTML = `${startTimeHour} PM - ${endTimeHour} AM`;
    divElem.classList.add('main__sidebar_day_object');
    forHeight(dayObject, divElem);
    divElem.append(h7Elem, pElem);
    certainDay.append(divElem); 
   
};

const generateLongEvent = (object) => {
    const year = new Date(object.startTime).getFullYear();
    const month = new Date(object.startTime).getMonth();
    const date = new Date(object.startTime).getDate();
    const lastTimeThisDay = new Date(year,month,date,24,0);
    const firstTimeNextDay = new Date(year,month,date+1,0,0);
    const identificator = Math.random().toFixed(10);
    const onePartEvent = {
        header:object.header,
        startTime:object.startTime,
        endTime:lastTimeThisDay,
        description:object.description,
        id:identificator,
        accessStartTime: object.startTime,
        accessEndTime: object.endTime,
    };
    const twoPartEvent = {
        header:object.header,
        startTime:firstTimeNextDay,
        endTime:object.endTime,
        description:object.description,
        id:identificator,
        accessStartTime: object.startTime,
        accessEndTime: object.endTime,
    };
    [onePartEvent,twoPartEvent].forEach(element => fillDayPlaceForLongEvent(element));
    eventsArray.push(onePartEvent, twoPartEvent);
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
   
    let certainLine = [...fileOfHoures]
        .find((elem,index) => index === new Date(dayObject.startTime).getDay());
    let certainDay = [...certainLine.children]
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
    forHeight(dayObject, divElem);
    divElem.append(h7Elem, pElem);
    certainDay.append(divElem); 
   
};

export const renderEventObject = (eventsArray) => {    
    eventsArray.forEach(elem => {
        if(elem.startTime.getDate() !== elem.endTime.getDate()){
            generateLongEvent(elem);
        }else fillDayPlace(elem);
    });
}; 
renderEventObject(eventsArray);