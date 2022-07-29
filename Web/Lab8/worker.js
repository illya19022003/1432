function simpleNums(from, to){
    start = 0
    nums = ''
    for(i = from; i <= to; i++){
        sum = 0
        for(j = 1; j <= i; j++){
            if(i%j == 0){
                sum++
            }
        }
        if(sum == 2 && i < to){
            finish = window.performance.now()
            nums += i + ` (${finish - start}), `
            start = window.performance.now()
        }
    }
    return nums
}
onmessage = function(event){
    flag = event.data.flag
    primes = simpleNums(event.data.from, event.data.to)
    postMessage(primes)
}