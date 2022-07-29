left = document.querySelector('#left')
right = document.querySelector('#right')
switchButton = document.querySelectorAll('button')

flag = false
switchButton[0].addEventListener('click', function(){
    if(flag == false){
        right.innerHTML = left.innerHTML
        left.innerHTML = ''
        flag = true
    }
})
switchButton[1].addEventListener('click', function(){
    if(flag == true){
        left.innerHTML = right.innerHTML
        right.innerHTML = ''
        flag = false
    }
})