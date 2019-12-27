import { indexOfElement, addintionalIndexOfElem } from './edit_event.js';
import { funcToMakeMarkNull } from './edit_event.js';
import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderRedLIne } from './redline.js';

const deleteBasket = document.querySelector('.event__btn-delete');
const popupBlock = document.querySelector('.popup-layer');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');

export const funcForDeleteEvene = () => {
    eventsArray.splice(indexOfElement,1);

    clearFunc();
    renderEventObject(eventsArray);
    popupBlock.style.display = 'none';
    saveBtnForEdit.style.display = 'none';
    renderRedLIne();
    funcToMakeMarkNull();
};
deleteBasket.addEventListener('click', funcForDeleteEvene);