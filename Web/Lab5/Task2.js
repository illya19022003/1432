input = document.querySelector('input')
button = document.querySelector('#button1')
checkButton = document.querySelector('#checkButton')
answer = document.querySelector('#answer')
count = document.querySelector('#count')

answerList = [12, 25, 56, 30, 6, 16, 27, 12, 48, 49]
questionList = ['3 × 4 = ', '5 × 5 = ', '7 × 8 = ', '6 × 5 = ', '2 × 3 = ',
                '4 × 4 = ', '3 × 9 = ', '2 × 6 = ', '8 × 6 = ', '7 × 7 = ']
num = -1
flag = false
rightSum = 0
count.innerHTML = `Загальний рахунок ${rightSum/10*100}% (${rightSum} правильних вiдповiдей з ${answerList.length})`

button.addEventListener('click', function () {
    if (flag == false && num < questionList.length - 1) {
        if (num < questionList.length) {
            num++
        }
        flag = true
        
        document.getElementById('span').innerHTML = questionList[num]

        answer.innerHTML = ``
        input.value = ``

        checkButton.addEventListener('click', function(){
            if(+input.value){
                if(input.value == answerList[num]){
                    rightSum++
                    answer.style = `color: green;`
                    answer.innerHTML = `Правильно!`
                }
                else{
                    answer.style = `color: red;`
                    answer.innerHTML = `Помилка,  <span style='color: white'>Правильна вiдповiдь «${answerList[num]}»</span>`
                }
                flag = false
                count.innerHTML = `Загальний рахунок ${rightSum/10*100}% (${rightSum} правильних вiдповiдей з ${answerList.length})`
            }
            else{
                alert('Введiть цiле число!')
            }
        })
    }
})
button.click()
