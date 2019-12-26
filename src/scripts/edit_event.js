const blockOfDays = document.querySelector('.main__sidebar_days');

export const funcForEditEvent = event => {
    const blockOfEvent = event.target;
    console.log(blockOfEvent);
};
blockOfDays.addEventListener('click', funcForEditEvent);