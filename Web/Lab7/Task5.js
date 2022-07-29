function fadeIn(el, speed) {
    el.style.opacity = 0
    step = 1 / speed
    interval = setInterval(function() {
      if (+el.style.opacity >= 1)
        clearInterval(interval)
        
      el.style.opacity = +el.style.opacity + step
    }, speed / 1000)
}

img = document.querySelector('img')
next = document.querySelector('#next')
prev = document.querySelector('#prev')

imagesList = ['first.png', 'Сквидвард.png', '4.png']
num = 0

next.addEventListener('click', function(){
    num++
    if(num >= imagesList.length){
        num = 0
    }
    img.src = imagesList[num]
    fadeIn(img, 100)
})