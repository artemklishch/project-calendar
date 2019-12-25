const createButton = document.querySelector('.nav__button');
const popupBlock = document.querySelector('.popup-layer');
export const tempObj = {};

export const funcForCreateButton = () => {
    popupBlock.style.display = 'block';
    tempObj.header = undefined;
    tempObj.startTime = undefined;
    tempObj.endTime = undefined;
    tempObj.description = undefined;
};
createButton.addEventListener('click', funcForCreateButton);
