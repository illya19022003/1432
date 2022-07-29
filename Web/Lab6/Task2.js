input = document.querySelectorAll('input')

for(i = 0; i < input.length; i++){
input[i].addEventListener('focus', function(){
    this.parentNode.style.backgroundColor = "royalblue"
})
input[i].addEventListener('blur', function(){
    this.parentNode.style.backgroundColor = "white"
})
}