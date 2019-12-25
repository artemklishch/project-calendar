function createRedLine() {
    var redLine = document.createElement('div');
    redLine.setAttribute("id", 'red');
    redLine.setAttribute("class", 'redline');

    var redLineBall = document.createElement('div');
    redLineBall.setAttribute('class', 'redline__ball');

    var redLineLine = document.createElement('div');
    redLineLine.setAttribute('class', 'redline__line');

    redLine.appendChild(redLineBall);
    redLine.appendChild(redLineLine);
    return redLine;
}

export const renderRedLIne = () => {

    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const hourDiv = document.querySelector('div[data-day-number="' + day + '"] > ' +
        'div[data-hour-number="' + hour + '"]');

    const hourRect = hourDiv.getClientRects()[0];
    let redLine = document.getElementById('red');

    if (redLine == null) {
        redLine = createRedLine();

    } else {
        redLine.parentNode.removeChild(redLine);
    }

    let position = (hourRect.height / 60) * minutes;
    redLine.style.top = position + "px";
    hourDiv.appendChild(redLine);
}

setInterval(renderRedLIne, 60 * 1000);

renderRedLIne();