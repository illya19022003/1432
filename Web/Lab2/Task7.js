tabel = document.getElementById("tabel")
button = document.getElementById("button")
textArea = document.getElementById("textArea")
button.addEventListener('click', function(){
    tabel.innerHTML += `<tr><td>${textArea.value.match(/[A-Za-z]+ /)}</td>`+
                   `<td>${textArea.value.match(/ +[A-Za-z]+\n/)}</td>`+
                   `<td>${textArea.value.match(/Female|Male/)}</td>`+
                   `<td>${textArea.value.match(/[0-9]+ +[A-Za-z ]+\n/)}<br>${textArea.value.match(/[A-Za-z ]+, +[A-Z]+ +[0-9]+\n/)}</td>`+
                   `<td>${textArea.value.match(/\d{2}-\d{2}-\d{4}/)[0]}</td>`+
                   `<td>${textArea.value.match(/\n+[a-z]+\n/)}</td>`+
                   `<td>${textArea.value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/)}</td>`+
                   `<td>${textArea.value.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)}</td></tr>`
    textArea.value = ""
})
