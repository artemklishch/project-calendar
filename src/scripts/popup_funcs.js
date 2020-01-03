import { eventsArray } from './storage.js';
import { renderEventObject, clearFunc } from './generate_event_object.js';
import { renderEventOnClick } from './event_on_click.js';
import { renderRedLIne } from './redline.js';


const blockOfDays = document.querySelector('.main__sidebar_days');
const popupBlock = document.querySelector('.popup-layer');
const iconDelete = document.querySelector('.event__btn-delete');
const saveBtn = document.querySelector('.event__btn-save');
const saveBtnForEdit = document.querySelector('.event__btn-save_after_edit');

const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
    saveBtnForEdit.style.display = 'none';
    iconDelete.style.display = 'none';
    saveBtn.style.display = 'block';
    blockOfDays.addEventListener('click', renderEventOnClick);
};
lockWindow.addEventListener('click', funcForLockWindow);


const saveButton = document.querySelector('.event__btn-save');
export const funcForSaveButton = event => {
    event.preventDefault();

    const tempObj = {
        header: undefined,
        startTime: undefined,
        endTime: undefined,
        description: undefined,
        ident: Math.random().toFixed(10),
    };

    const titleInput = document.querySelector('.event__name');
    tempObj.header = titleInput.value;

    const startTimeInput = document.querySelector('.event__date-start');
    const firstStartDate_year = new Date(startTimeInput.value).getFullYear();
    const firstStartDate_month = new Date(startTimeInput.value).getMonth();
    const firstStartDate_date = new Date(startTimeInput.value).getDate();
    const firstStartDate_hours = +document.querySelector('.startTime_place').value.split(':')[0];
    const firstStartDate_minutes = +document.querySelector('.startTime_place').value.split(':')[1];
    tempObj.startTime = new Date(firstStartDate_year, firstStartDate_month,
        firstStartDate_date, firstStartDate_hours, firstStartDate_minutes);


    const endTimeInput = document.querySelector('.event__date-end');
    const firstEndDate_year = new Date(endTimeInput.value).getFullYear();
    const firstEndDate_month = new Date(endTimeInput.value).getMonth();
    const firstEndDate_date = new Date(endTimeInput.value).getDate();
    const firstEndDate_hours = +document.querySelector('.endTime_place').value.split(':')[0];
    const firstEndDate_minutes = +document.querySelector('.endTime_place').value.split(':')[1];
    tempObj.endTime = new Date(firstEndDate_year, firstEndDate_month,
        firstEndDate_date, firstEndDate_hours, firstEndDate_minutes);


    const descriptionInput = document.querySelector('.multiline__text');
    tempObj.description = descriptionInput.value;

    eventsArray.push(tempObj);
    clearFunc();
    renderEventObject(eventsArray);
    popupBlock.style.display = 'none';
    blockOfDays.addEventListener('click', renderEventOnClick);
    renderRedLIne();
};
saveButton.addEventListener('click', funcForSaveButton);