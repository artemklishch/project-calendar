const popupBlock = document.querySelector('.popup-layer');

const lockWindow = document.querySelector('.popup__btn-close');
export const funcForLockWindow = () => {
    popupBlock.style.display = 'none';
};
lockWindow.addEventListener('click', funcForLockWindow);

const titleInput = document.querySelector('.event__name');
export const addTitleFunc = event => {
     
};
titleInput.addEventListener('input', addTitleFunc);