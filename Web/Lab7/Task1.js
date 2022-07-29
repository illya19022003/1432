defDiv = document.querySelector('#default')
newDiv = document.querySelector('#new')

function onInput(){
    numOfBlocks = document.querySelector('select')
    for (i = 0; i < numOfBlocks.value; i++) {
        defDiv.innerHTML += `<div class="blocks" style="height: 50px; width: ${Math.random() * (300 - 50) + 50}px; background-color: darkcyan"></div>`
    }
    numOfBlocks.disabled = true
    blocks = document.querySelectorAll('.blocks')
    newBlocks = []
    for(i = 0; i < blocks.length; i++){
        blocks[i].addEventListener('click', function () {
            newDiv.innerHTML += this.outerHTML
            newBlocks.push(this)
            console.log(newBlocks)
            this.outerHTML = ''
            if(defDiv.innerHTML == 0){
                flag = 'правильно'
                for(i = 1; i < newBlocks.length; i++){
                    a = +newBlocks[i].style.width.replace('px', '')
                    b = +newBlocks[i-1].style.width.replace('px', '')
                    if(a < b){
                        flag = 'неправильно'
                        document.querySelector('span').style.color = 'red'
                        break
                    }
                }
                document.querySelector('span').innerHTML = flag
            }
        })
    }
}