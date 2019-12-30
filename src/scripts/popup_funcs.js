import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';
import { renderRedLIne } from './redline.js';
import { funcForCheckIntersectionOfEvents } from './validate.js';


const popupBlock = document.querySelector('#popup');
const blockOfDays = document.querySelector('.main__sidebar_days');

const saveButton = document.querySelector('.event__btn-save');
export const funcForSaveButton = event => {
    event.preventDefault();
    const formDataPopup = [...new FormData(popupBlock)]
        .reduce((acc, [faild, value]) => ({...acc, [faild]: value }), {});
    
    const tempObj = {
        header: formDataPopup.eventName,
        startTime: new Date(formDataPopup.eventDateStart + 'T' + formDataPopup.eventTimeStart + ':' + formDataPopup.eventTimeStartMin + ':00'),
        endTime: new Date(formDataPopup.eventDateEnd + 'T' + formDataPopup.eventTimeEnd + ':' + formDataPopup.eventTimeEndMin + ':00'),
        description: formDataPopup.description,
        ident: Math.random().toFixed(10)
    };
    console.log(tempObj.startTime);
    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    document.querySelector('.popup-layer').style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
    renderRedLIne();
};
saveButton.addEventListener('click', funcForSaveButton);


const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
    document.querySelector('.popup-layer').style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
};
lockWindow.addEventListener('click', funcForLockWindow);







