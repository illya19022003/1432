button = document.querySelector('button')
area = document.querySelector('div')
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function move(){
    console.log(button.style.top)
    button.style.top = randomInteger(0, area.clientHeight - 42) + "px"
    button.style.left = randomInteger(0, area.clientWidth - 100) + "px"
}