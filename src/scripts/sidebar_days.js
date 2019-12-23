const sidebarDaysBlock = document.querySelector('.main__sidebar_days');


const generateDayPlace = () => {
    let tempArrOfDays = [];
    for(let i = 0; i < 7; i++){
        let tempStr = `
            <div class="main__sidebar_days_place" data-day-number="${i}"></div>
        `;
        tempArrOfDays.push(tempStr);
    }
    return tempArrOfDays.join('');
};


export const sidebarDays = () => {
    let tempArrOfPoints = [];
    let tempArrOfDays = generateDayPlace();
    for(let i = 0; i < 24; i++){
        let tempStr = `
        <div class="main__sidebar_days_line" data-hour="${i}">
            ${tempArrOfDays}
        </div>
        `;
        tempArrOfPoints.push(tempStr);
    }
    const stringOfHTML = tempArrOfPoints.join('');
    sidebarDaysBlock.innerHTML = stringOfHTML;
};
sidebarDays();