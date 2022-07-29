// Task1
button1 = document.getElementById('buttonTask1')
table1 = document.getElementById('task1')

let mm = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
         'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
let day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

button1.addEventListener('click', function(){
    data = new Date()
    table1.innerHTML =  `Дата: ${data.getDate()} ${mm[data.getMonth()]} ${data.getFullYear()}<br>`+
                        `День: ${day[data.getDay()]}<br>`+
                        `Час: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
})

// Task2
button2 = document.getElementById('buttonTask2')
table2 = document.getElementById('task2')

button2.addEventListener('click', function(){
    dayTizhna = day[data.getDay()]
    if(day[data.getDay()] == 0){
        dayTizhna = 7
    }
    table2.innerHTML =  `Номер дня: ${data.getDay()}<br>`+
                        `Назва дня: ${dayTizhna}`
})

// Task3
button3 = document.getElementById('buttonTask3')
table3 = document.getElementById('task3')
input3 = document.getElementById('inputTask3')

button3.addEventListener('click', function(){
    newDate = new Date()
    newDate.setDate(newDate.getDate() - input3.value)
    table3.innerHTML = `Дата ${input3.value} днiв назад: ${newDate.getDate()} `+
                        `${mm[newDate.getMonth()]} ${newDate.getFullYear()}`
})

// Task4
inputYear = document.getElementById('inputTask4Y')
inputMonth = document.getElementById('inputTask4M')
button4 = document.getElementById('buttonTask4')
table4 = document.getElementById('task4')

button4.addEventListener('click', function(){
    newDate = new Date(inputYear.value, inputMonth.value)
    newDate.setDate(newDate.getDate()-1)
    table4.innerHTML = `Останнiй день мiсяця: ${day[newDate.getDay()]}`
})

// Task5
button5 = document.getElementById('buttonTask5')
table5 = document.getElementById('task5')

button5.addEventListener('click', function(){
    date = new Date()
    seconds = date.getSeconds() + date.getMinutes()*60 + date.getHours()*3600
    table5.innerHTML =  `Секунд вiд початку дня: ${seconds}<br>`+
                        `Секунд до наступного дня: ${86400 - seconds}`
})

// Task6
button6 = document.getElementById('buttonTask6')
table6 = document.getElementById('task6')
input6 = document.getElementById('inputTask6')

button6.addEventListener('click', function(){
    year = +input6.value
    century = Math.round((year+49)/100)
    if(Math.round((year-1)/100) != century){
        x = 1
    }
    else x = 2
    m = Math.round((year+499)/1000)

    table6.innerHTML =  `${x} половина ${century} столiття<br>`+
                        `${m} тисячолiття`
})

// Task7
button7 = document.getElementById('buttonTask7')
table7 = document.getElementById('task7')

button7.addEventListener('click', function(){

    values1 = document.getElementById('inputTask7')
    values2 = document.getElementById('inputTask7date2')
    values1 = values1.value.split('.')
    values2 = values2.value.split('.')
    date1 = new Date(values1[2], values1[1], values1[0])
    date2 = new Date(values2[2], values2[1], values2[0])

    if(date1.getFullYear() < 0){
        date2.setFullYear(date2.getFullYear() + date1.getFullYear()*(-1))
        date1.setFullYear(date1.getFullYear() + date1.getFullYear()*(-1))
    }
    
    time = date2.getFullYear() - date1.getFullYear()
    if(date2 < date1.setFullYear(date2.getFullYear())){
        time -= 1
    }

    table7.innerHTML = `Повних рокiв: ${time}`
})
