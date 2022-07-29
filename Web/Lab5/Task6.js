table = document.querySelector('table')
m = 15, n = 10

td = ''
for(i = 0; i < m; i++){
    td += `<td id="t${i}"></td>`
}
for(i = 0; i < n; i++){
    table.innerHTML += `<tr id="${i}">${td}</tr>`
}

placeList = document.querySelectorAll('td')

for(i = 0; i < placeList.length; i++){
    placeList[i].addEventListener('click', function(){
        if(this.style.backgroundColor == "red"){
            this.style.backgroundColor = "green"
        }
        else{
            this.style.backgroundColor = "red"
        }
    })
}