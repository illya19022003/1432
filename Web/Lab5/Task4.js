inputList = document.querySelectorAll('input')
text = document.querySelector('div')

for(i = 0; i < inputList.length; i++){
    inputList[i].addEventListener('input', function(){
        textList = ''
        for(i = 0; i < inputList.length; i++){
            if(inputList[i].checked){
                textList += document.querySelector(`.${inputList[i].id}`).innerHTML + ' '
            }
        }
        text.innerHTML = textList
    })
}
