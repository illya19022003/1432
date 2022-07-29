table = document.querySelector('table')

arr = []
cube0 = '<td style="background-color: darkblue;"></td>'
cube1 = '<td style="background-color: white;"></td>'
arr.push(cube0)
arr.push(cube1)

function onInput(){
    textArr = document.querySelector('textarea').value.split('')
    text = '<tr>'
    for(i = 0; i < textArr.length; i++){
        if(textArr[i] == '0' || textArr[i] == '1')
        text += arr[textArr[i]]
        if(textArr[i] == '\n'){
            text += '</tr><tr>'
        }
    }
    text += '</tr>'
    table.innerHTML = text
}