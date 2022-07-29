cube = document.querySelector('div')
x = document.querySelector('#x')
y = document.querySelector('#y')

cube.onmousemove = function(event){
    let shiftX = event.clientX - cube.getBoundingClientRect().left
    let shiftY = event.clientY - cube.getBoundingClientRect().top
    x.innerHTML = shiftX
    y.innerHTML = Math.floor(shiftY)
}