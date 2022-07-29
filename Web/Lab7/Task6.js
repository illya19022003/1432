figures = document.querySelectorAll('.figures')
area = document.querySelector('#area')
figure = ''

for(i = 0; i < figures.length; i++){
    figures[i].addEventListener('click', function(){
        figure = this.id
    })
}

area.addEventListener('click', function(event){
    y = event.clientY-35
    x = event.clientX-125
    while(x+100 < 100){
        x++
    }
    while(x+150 > 500){
        x--
    }
    while(y+10 < 10){
        y++
    }
    while(y+50 > 400){
        y--
    }
    area.innerHTML += `<div id="${figure}" style="top: ${y}px; left: ${x}px"></div>`
})
