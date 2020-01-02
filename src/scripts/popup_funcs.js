import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';
import { renderRedLIne } from './redline.js';


const popupBlock = document.querySelector('#popup');

export const funcForSaveButton = event => {
    event.preventDefault();

    const formDataPopup = [...new FormData(popupBlock)]
        .reduce((acc, [faild, value]) => ({...acc, [faild]: value }), {});
    console.log(formDataPopup);

    let startHour = parseInt(formDataPopup.eventTimeStart);
    if (startHour < 10) {
        startHour = '0' + '' + startHour;
    }

    let endHour = parseInt(formDataPopup.eventTimeEnd);
    if (endHour < 10) {
        endHour = '0' + '' + endHour;
    }

    const tempObj = {
        header: formDataPopup.eventName,
        startTime: new Date(formDataPopup.eventDateStart + 'T' + startHour + ':' + formDataPopup.eventTimeStartMin + ':00'),
        endTime: new Date(formDataPopup.eventDateEnd + 'T' + endHour + ':' + formDataPopup.eventTimeEndMin + ':00'),
        description: formDataPopup.description,
        ident: Math.random().toFixed(10)
    };
    console.log(tempObj);

    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    document.querySelector('.popup-layer').style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
    renderRedLIne();
};








const blockOfDays = document.querySelector('.main__sidebar_days');


const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {

    document.querySelector('.popup-layer').style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
};
lockWindow.addEventListener('click', funcForLockWindow);


const saveButton = document.querySelector('.event__btn-save');

saveButton.addEventListener('click', funcForSaveButton);