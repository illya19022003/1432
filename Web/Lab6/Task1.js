tables = document.querySelectorAll('td')

for(i = 0; i < tables.length; i++){
    tables[i].addEventListener('click', function(){
        if(this.style.opacity != 0.5){
            this.style.opacity = '.5'
            this.style.filter = 'grayscale(100%)'
        }
        else{
            this.style.opacity = '1'
            this.style.filter = 'grayscale(0%)'
        }
    })
}