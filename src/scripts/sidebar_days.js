const sidebarDaysBlock = document.querySelector('.main__sidebar_days');
export const sidebarDays = () => {
    let tempArrOfPoints = [];
    for(let i = 0; i < 24; i++){
        let tempStr = `
        <div class="main__sidebar_days_line">
            <div class="main__sidebar_days_place"></div>
            <div class="main__sidebar_days_place"></div>
            <div class="main__sidebar_days_place"></div>
            <div class="main__sidebar_days_place"></div>
            <div class="main__sidebar_days_place"></div>
            <div class="main__sidebar_days_place"></div>
            <div class="main__sidebar_days_place"></div>
        </div>
        `;
        tempArrOfPoints.push(tempStr);
    }
    const stringOfHTML = tempArrOfPoints.join('');
    sidebarDaysBlock.innerHTML = stringOfHTML;
};
sidebarDays();