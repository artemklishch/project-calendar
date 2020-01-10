import { indexOfElement, markValuable } from './edit_event.js';
import { funcForMakeindexOfElementNull, funcForMakeMarkValuableNull } from './edit_event.js';
import { setItem, getItem } from './storage.js';
import { renderEventObject } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';
import { onClearValidateMessages, onMakeMarkValuavle4Null } from './validate.js';

const deleteBasket = document.querySelector('.event__btn-delete');
const popupBlock = document.querySelector('.popup-layer');

export const funcForDeleteEvene = () => {
    if(markValuable !== 0){
        eventsArray.splice(indexOfElement,1);
        eventsArray.splice(indexOfElement-1,1);
    }else eventsArray.splice(indexOfElement,1);
    funcForMakeindexOfElementNull();
    renderEventObject();
    popupBlock.style.display = 'none';
    deleteBasket.style.display = 'none';
    funcForMakeMarkValuableNull();
    renderRedLIne(); 
    onClearValidateMessages();
    onMakeMarkValuavle4Null();
};
deleteBasket.addEventListener('click', funcForDeleteEvene);