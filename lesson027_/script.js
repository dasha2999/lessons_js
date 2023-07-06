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

submit.addEventListener('click', (event) => {
event.preventDefault ()

if (isNaN(username.value)) {
    console.log('OK!')
} else {
    console.log('NOT OK!')
}
})

username.addEventListener('input', ({target}) => {
    console.log(target.value.length)
    if (target.value.length > 6) {
        submit.disaebled = false
        
    }
})