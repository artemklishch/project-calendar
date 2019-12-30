import { indexOfElement, markValuable } from './edit_event.js';
import { funcForMakeindexOfElementNull, funcForMakeMarkValuableNull } from './edit_event.js';
import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';


const deleteBasket = document.querySelector('.event__btn-delete');
const popupBlock = document.querySelector('.popup-layer');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');

export const funcForDeleteEvene = () => {
    if(markValuable !== 0){
        eventsArray.splice(indexOfElement,1);
        eventsArray.splice(indexOfElement-1,1);
    }else eventsArray.splice(indexOfElement,1);
    funcForMakeindexOfElementNull();

    clearFunc();
    renderEventObject(eventsArray);
    popupBlock.style.display = 'none';
    saveBtnForEdit.style.display = 'none';
    funcForMakeMarkValuableNull();
    renderRedLIne();
};   
deleteBasket.addEventListener('click', funcForDeleteEvene);