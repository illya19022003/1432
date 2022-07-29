buttons = document.querySelectorAll('button')
goods = document.querySelectorAll('span')

for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        document.querySelector(`span#${this.id}`).innerHTML = 1 + +document.querySelector(`span#${this.id}`).innerHTML
    })
}