var a = document.getElementById('n1')
var b = document.getElementById('n2')
var text = document.getElementById('div1')
var buttonVar = document.getElementById('button1')
buttonVar.addEventListener('click', function(){
    sum = +a.value + +b.value
    text.innerHTML = "Розвязок: " + sum
})