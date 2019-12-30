const createButton = document.querySelector('.nav__button');
const popupBlock = document.querySelector('.popup-layer');
const saveBtn = document.querySelector('.event__btn-save');

export const funcForTimeOptions = () => {
    const hours = document.querySelectorAll('.hours');
    let hourArr = [];
    for (let i = 0; i <= 24; i++) {
        let temp = `
        <option class="opt-hr">${i}</option>
        `;
        hourArr.push(temp);
    }
    [...hours].forEach(elem => elem.innerHTML = hourArr.join(''));
    const minutes = document.querySelectorAll('.minutes');
    let minArr = [];
    let counterMin = '00';
    while (counterMin < 60) {
        let temp = `
        <option class="opt-min">${counterMin}</option>
        `;
        minArr.push(temp);
        counterMin = parseInt(counterMin) + 15;
    }
    [...minutes].forEach(elem => elem.innerHTML = minArr.join(''));
};


export const funcForCreateButton = () => {
    funcForTimeOptions();
    const startHour = new Date().getHours();
    const endHour = startHour + 1;
    const startHours = document.querySelectorAll('.event__time-start > .opt-hr');
    [...startHours].forEach(elem => {
        if (elem.innerHTML === startHour.toString()) {
            elem.parentNode.value = startHour.toString();
        }
    });
    const endHours = document.querySelectorAll('.event__time-end > .opt-hr');
    [...endHours].forEach(elem => {
        if (elem.innerHTML === endHour.toString()) {
            elem.parentNode.value = endHour.toString();
        }
    });
    popupBlock.style.display = 'block';
    saveBtn.style.display = 'block';

    const myDate = document.querySelectorAll('.specialDate');
    const today = new Date();
    [...myDate].forEach(elem => elem.value = today.toISOString().substr(0, 10));
};
createButton.addEventListener('click', funcForCreateButton);