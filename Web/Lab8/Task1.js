buttonStart = document.querySelector('#start')
buttonStop = document.querySelector('#stop')
text = document.querySelector('textarea')
message = document.querySelector('#message')

buttonStart.addEventListener('click', function(){
    text.value = ''
    message.innerHTML = 'Пошук простих чисел...'
    fromNum = +document.querySelector('#from').value
    toNum = +document.querySelector('#to').value
    worker = new Worker('worker.js')
    worker.onmessage = receivedWorkerMessage
    worker.postMessage({
        from: fromNum,
        to: toNum,
    })
    function receivedWorkerMessage(event){
        primes = event.data
        text.value = primes
        message.innerHTML = 'Пошук завершено'
    }
})
buttonStop.addEventListener('click', function (){
    worker.terminate()
    worker = null
    message.innerHTML = 'Пошук зупинено'
})
