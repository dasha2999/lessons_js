//-------------------------------

// 1) Определите класс Person со следующими свойствами:

// Конструктор, который принимает 4 аргумента: firstName (по умолчанию «Джон», если не задано), lastName (по умолчанию «Доу», если не задано), возраст (по умолчанию 0, если не задано) и пол (по умолчанию «Мужской», если не задано). Они должны быть сохранены в this.firstName, this.lastName, this.age и this.gender соответственно.
// Значения по умолчанию не определяйте в аргументах функции.
// Метод sayFullName, который не принимает аргументов и возвращает полное имя (например, «Джон Доу»).Метод класса/статический greetExtraTerrestrials, который принимает один параметр raceName и возвращает «Добро пожаловать на планету Земля, raceName». Например, если название расы «Марсиане», то следует сказать «Добро пожаловать на планету Земля, Марсиане». Для создания класса используйте синтаксис ES6. 

// class Person {
//     constructor (firstName, lastName, age, gender) {
//         this.firstName = firstName || 'John'
//         this.lastName = lastName || 'Doe'
//         this.age= age || 0
//         this.gender = gender || 'Men'
//     }
//     sayFullName () {
//         return `${this.firstName} ${this.lastName}`
//     }
//     static greetExtraTerrestrials (raceName) {
//         return `Добро пожаловать на планету Земля, ${raceName}`
//     }
// }

// const p1 = new Person ()
// console.log(p1.sayFullName())
// console.log(p1)
// console.log(Person.greetExtraTerrestrials('Марсианин'))


// в предыдущую папку(убрать кнопку)

// const allElements = document.querySelectorAll('*')
// console.log(allElements)

// allElements.forEach((element) => {
//     element.addEventListener('click', () => {
//         alert(`Всплытие: ${element.tagName}`)
//     })

    // погружение или перехват: {caprure: true} или true...3 аргумент в addEventListener, по умолчанию false
//     element.addEventListener('click', () => {
//         alert(`Погружение: ${element.tagName}`)
//     }, true)
// })

// const username = document.getElementById('username')
// const submit = document.getElementById('subm')
// const form = document.getElementById('form')

// submit.addEventListener('click', (event) => {
// event.preventDefault ()

// if (isNaN(username.value)) {
//     console.log('OK!')
// } else {
//     console.log('NOT OK!')
// }
// })

// username.addEventListener('input', ({target}) => {
//     console.log(target.value.length)
//     if (target.value.length > 6) {
//         submit.disaebled = false
        
//     }
// })


//--------------------------------

// 1) Напишите функцию, которая принимает букву и возвращает ее положение в алфавите.Алфавит английский
// Пример:
// Ввод => "а"
// Вывод => "Позиция алфавита: 1"

// function getLetterPosition (letter) {

// index of
// findIndex
// цикл
// if

// let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// const position = alphabet.findIndex((str) => {
//     str.toLowerCase() === letter.toLowerCase()
// })

// return `Позиция алфавита: ${position}`
// }

// console.log(getLetterPosition('d'))


// 2) Расширение функциональности встроенных классов. Расширьте встроенный класс Array следующими методами: square(), cube(), average(), sum(), even() и odd().

// Объяснение:
// square() должна возвращать копию массива, содержащего все значения в квадрате.
// cube() должен возвращать копию массива, содержащего все значения в кубе.
// average() должен возвращать среднее значение всех значений массива
// sum() должна возвращать сумму всех значений массива
// even() должен возвращать массив всех четных чисел
// odd() должен возвращать массив всех нечетных чисел.
// Примечание: исходный массив менять нельзя ни в коем случае!

// const numbers = [1,2,3,4,5]

// Array.prototype.square = function () {
//     return this.map((num) => {
//         return num ** 2
//     })
// }

// Array.prototype.cube = function () {
//     return this.map((num) => {
//         return num * num * num
//     })
// }

// Array.prototype.average = function () {
//     return this.reduce((acc, currentNumber) => acc + currentNumber, 0) / this.length
// }

// Array.prototype.sum = function () {
//     return this.reduce((acc, currentNumber) => acc + currentNumber, 0) 
// }

// Array.prototype.even = function () {
//     return this.filter(num => num % 2 === 0)
// }

// Array.prototype.odd = function () {
//     return this.filter(num => num % 2 !== 0)
// }

// console.log(numbers.square())
// console.log(numbers.cube())
// console.log(numbers.average())
// console.log(numbers.sum())
// console.log(numbers.even())
// console.log(numbers.odd())


// 3) Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.

