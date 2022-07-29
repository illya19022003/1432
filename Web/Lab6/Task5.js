sWidth = document.querySelector('#sWidth')
sHeight = document.querySelector('#sHeight')
sRotate = document.querySelector('#sRotate')
cube = document.querySelector('div')

function onWidth(){
    width = document.querySelector('#width').value
    sWidth.innerHTML = width
    cube.style.width = width + 'px'
}
function onHeight(){
    height = document.querySelector('#height').value
    sHeight.innerHTML = height
    cube.style.height = height + 'px'

}
function onRotate(){
    rotate = document.querySelector('#rotate').value
    sRotate.innerHTML = rotate
    cube.style.rotate = rotate + 'deg'
}