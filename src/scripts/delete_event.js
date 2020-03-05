import { funcForMakeMarkValuableFalse, funcForMakeDataIdEmpty } from './edit_event.js';
import { dataId } from './edit_event.js';
import { setItem, getItem } from './storage.js';
import { renderEventObject } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';
import { onClearValidateMessages, onMakeMarkOnValidateTextFalse } from './validate.js';
import { getEventList, deleteEvent } from './eventsGateway.js'

const deleteBasket = document.querySelector('.event__btn-delete');
const popupBlock = document.querySelector('.popup-layer');

export const funcForDeleteEvene = () => {
    const eventsArray = getItem('arrayOfEvents') || [];
    const currentObject = eventsArray.find(elem => elem._id === dataId);
    deleteEvent(currentObject.id)
        .then(() => getEventList())
        .then(eventsArray => {
            setItem('arrayOfEvents', eventsArray);
            renderEventObject();
            funcForMakeMarkValuableFalse();
            funcForMakeDataIdEmpty();
            renderRedLIne(); 
            onClearValidateMessages();
            onMakeMarkOnValidateTextFalse();
        });
    popupBlock.style.display = 'none';
    deleteBasket.style.display = 'none'; 
};
deleteBasket.addEventListener('click', funcForDeleteEvene);