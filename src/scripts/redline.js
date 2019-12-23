export const renderRedLIne = () => {

    let rect = document
        .getElementsByClassName('main__sidebar_days')[0]
        .getBoundingClientRect();

    let redLine = document.getElementById('red');
    var minutes = new Date().getMinutes();
    var position = (rect.height / 60) * minutes;

    redLine.style.top = (rect.y + position) + "px";
    redLine.style.left = rect.x + "px";
}

setInterval(renderRedLIne, 60 * 60 * 1000);

renderRedLIne();