import { indexOfElement, markVariable } from './edit_event.js';
import { funcForMakeindexOfElementNull, funcForMakeMarkVariableNull } from './edit_event.js';
import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';

const deleteBasket = document.querySelector('.event__btn-delete');
const popupBlock = document.querySelector('.popup-layer');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');

export const funcForDeleteEvene = () => {
    if(markVariable === 1){
        eventsArray.splice(indexOfElement,1);
        eventsArray.splice(indexOfElement-1,1);
    }else eventsArray.splice(indexOfElement,1);
    funcForMakeindexOfElementNull();
    clearFunc();
    renderEventObject(eventsArray);
    funcForMakeMarkVariableNull();
    popupBlock.style.display = 'none';
    saveBtnForEdit.style.display = 'none';
    renderRedLIne();
};
deleteBasket.addEventListener('click', funcForDeleteEvene);