cube = document.querySelector('#cube')
area = document.querySelector('#main')
text = document.querySelector('span')

cube.onmousedown = function(event) {

  let shiftX = event.clientX - cube.getBoundingClientRect().left
  let shiftY = event.clientY - cube.getBoundingClientRect().top

  function moveAt(pageX, pageY) {
    cube.hidden = true
    let elementBellow = document.elementFromPoint(pageX, pageY)
    cube.hidden = false
    if(elementBellow.id == 'main'){
    console.log(elementBellow)
    cube.style.left = pageX - 320 - shiftX + 'px'
    cube.style.top = pageY - 100 - shiftY + 'px'
    }
    else{
      cube.onmouseup()
    }
  }
  
  function onMouseMove(event) {
      moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)
  
  cube.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove)
    cube.onmouseup = null
  }
}