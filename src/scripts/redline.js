export const renderRedLIne = () => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const hourDiv = document.querySelector('div[data-day-number="' + day + '"] > ' +
        'div[data-hour-number="' + hour + '"]');

    const hourRect = hourDiv.getClientRects()[0];
    let redLine = document.getElementById('red');
    let position = (hourRect.height / 60) * minutes;

    redLine.style.top = position + "px";
    redLine.parentNode.removeChild(redLine);
    hourDiv.appendChild(redLine);
}

setInterval(renderRedLIne, 60 * 1000);

renderRedLIne();