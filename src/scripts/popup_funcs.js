import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';
import { renderRedLIne } from './redline.js';


const popupBlock = document.querySelector('#popup');

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