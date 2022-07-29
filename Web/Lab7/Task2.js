table = document.querySelector('table')

color = ''
tableText = ''
for(i = 0; i < 8; i++){
    tableText += '<tr>'
    for(j = 0; j < 8; j++){
        tableText += '<td></td>'
    }
    tableText += '</tr>'
}
table.innerHTML = tableText

td = document.querySelectorAll('#main td')

for(i = 0; i < td.length; i++){
    td[i].addEventListener('click', function () {
        this.style.backgroundColor = color
    })
}

colors = document.querySelectorAll('#colors td')
for(i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', function () {
        for(j = 0; j < colors.length; j++){
            colors[j].style.border = '1px solid black'
        }
        this.style.border = '2px solid white'
        color = this.style.backgroundColor
    })
}