inputList = document.querySelectorAll('input')
button = document.querySelector('#button1')
answer = document.querySelector('#answer')
count = document.querySelector('#count')
textList = [['11', '12', '16', '7'], ['30', '35', '25', '10'], ['56', '42', '48', '52'], ['25', '30', '20', '35'],
            ['5', '8', '4', '6'], ['12', '8', '16', '18'], ['21', '27', '12', '18'], ['8', '10', '12', '18'],
            ['48', '49', '56', '42'], ['48', '49', '56', '42']]
answerList = ['12', '25', '56', '30', '6', '16', '27', '12', '48', '49']
questionList = ['3 × 4 = ?', '5 × 5 = ?', '7 × 8 = ?', '6 × 5 = ?', '2 × 3 = ?',
                '4 × 4 = ?', '3 × 9 = ?', '2 × 6 = ?', '8 × 6 = ?', '7 × 7 = ?']
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

        document.getElementById('span1').innerHTML = textList[num][0]
        document.getElementById('span2').innerHTML = textList[num][1]
        document.getElementById('span3').innerHTML = textList[num][2]
        document.getElementById('span4').innerHTML = textList[num][3]

        inputList[0].value = textList[num][0]
        inputList[1].value = textList[num][1]
        inputList[2].value = textList[num][2]
        inputList[3].value = textList[num][3]

        inputList[0].checked = false
        inputList[1].checked = false
        inputList[2].checked = false
        inputList[3].checked = false

        answer.innerHTML = ``

        for (i = 0; i < inputList.length; i++)
            inputList[i].addEventListener('input', function () {
                if (flag == true) {
                    if (this.value == answerList[num]) {
                        rightSum++
                        answer.style = `color: green;`
                        answer.innerHTML = `Правильно!`
                    } else{
                        answer.style = `color: red;`
                        answer.innerHTML = `Помилка,  <span style='color: white'>Правильна вiдповiдь «${answerList[num]}»</span>`
                    }
                    flag = false
                }
                count.innerHTML = `Загальний рахунок ${rightSum/10*100}% (${rightSum} правильних вiдповiдей з ${answerList.length})`
            })
    }
})
button.click()
