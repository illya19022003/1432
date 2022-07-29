td = document.querySelectorAll('td')
body = document.querySelector('body')

desc = ['Сквидвард', 'Микки']

myDiv = document.createElement('div')

for(i = 0; i < td.length; i++){
    td[i].onmouseover = function(){
        this.insertBefore(myDiv, td.firstChild)
        myDiv.innerHTML = desc[this.id]
    }
    td[i].onmouseout = function(){
        this.removeChild(myDiv)
    }
}

onmousemove = function(event){
    myDiv.style.top = event.clientY - 50 + 'px'
    myDiv.style.left = event.clientX + 'px'
}