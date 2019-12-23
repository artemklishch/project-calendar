import { eventsArray } from './storage.js';
import { arrDaysOfWeek } from './current_week.js';


const fileOfHoures = document.querySelectorAll('.main__sidebar_days_line');
const placesOfDays = document.querySelectorAll('.main__sidebar_days_place'); 


const fillDayPlace = (dayObject) => {
    let startTimeHour = new Date(dayObject.startTime).getHours();
    let startTimeMinutes = new Date(dayObject.startTime).getMinutes();
    let dayOfWeek = new Date(dayObject.startTime).getDay();
    
    let endTimeHour = new Date(dayObject.endTime).getHours();

    let certainLine = [...fileOfHoures]
        .find((elem,index) => index === startTimeHour);
    
    let certainDay = [...certainLine.children]
        .find((elem,index) => index === dayOfWeek);
    
    let tempNum = 12;
    
    let tempVal;
    [...fileOfHoures].forEach(() => {
        if(startTimeHour <= tempNum && endTimeHour <= tempNum){
            tempVal = `${startTimeHour} - ${endTimeHour} AM`;
        }
        if(startTimeHour <= tempNum && endTimeHour > tempNum){
            tempVal = `${startTimeHour} AM - ${endTimeHour} PM`;
        }
        if(startTimeHour > tempNum){
            tempVal = `${startTimeHour} - ${endTimeHour} PM`;
        }
    });
    certainDay.innerHTML = `
        <div class="main__sidebar_day_object">
            <h7>${dayObject.header}</h7>
            <p>${tempVal}</p>
        </div>
    `;
};


export const renderEventObject = (eventsArray) => {
    
   
   
   
   
   

}; 
renderEventObject(eventsArray);