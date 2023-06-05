// currying - каррирование функции

// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// sum (2,4,6) // - sum(2)(4)(6)


// const translate = (local, text) => {
//    return function (text) {
//     console.log(`${local} ${text}`)
//    }
// }
// const transleToRu = translate('ru')
// const transleToEn = translate('en')

// transleToRu('Привет')
// transleToRu('Добрый день')
// transleToEn('Hello')
// transleToEn('Good evening')


// translate('ru', 'Привет')
// translate('ru', 'Добрый день')
// translate('ru', 'Добрый вечер')

// translate('en', 'Hello')
// translate('en', 'Good morning')
// translate('en', 'Good evening')


// 1) Написать функцию urlGenerator, 3 параметра (protocol, url, domain).

// function urlGenerator (protocol) {
//     return function (url) {
//         return function (domain){
//             console.log(`${protocol}://${url}.${domain}`)
//         }
//     }
// }

// const test = urlGenerator('http')('gmail')('com')


// partial application - частичное применение

// function discount(discount) {

// }


// settimeout, setInterval - 

// setTimeout(() => {
//     console.log('Через 1 секунду')
// }, 1000);
// console.log('Без тайм-аута') // - 1 раз спустя какое-то время


// setInterval(() => {
//     console.log('Интервал в 1 секунду')
// }, 1000); // - бесконечно спустя какое-то время, можно получить доступ к id


// callback - функция обратного вызова

// function greeting(name) {
//     alert('Hello' + name)
// }

// function processUserInput(callback) {
//     let name = prompt('Please enter your name')
//     callback(name)
// }
// processUserInput(greeting)


// 2) Написать функцию аналог метода map, принимает массив и callback, внутри будет цикл и метод push, возвращает новый массив.

// const arr = [1,2,3,4,5,6]

// function map(arr, callbackFunction) {
//     const result = [] 
//     for (let i = 0; i < arr.length; i++) {
//        result.push(callbackFunction(arr[i], arr))
//     }
//     return result
// }
// const newArr = map(arr, item => item ** 2)
// console.log(newArr)


// let start = Date.now()
// for(let i = 0; i < 1000000; i++) {
// }

// let end = Date.now()
// let diff = end - start
// console.log(diff) - проверка времени исполнения цикла


// арность - количество аргументов функции


// IIFE(Immediately Invoked Function Expretion) - немедленно вызываемая функция

// (function (){

//     let message = "Hello"
//     alert(message) // - Hello
// })()

// ----------------------------------

// 1) Дан массив объектов с пользователями. Используя методы массивов вывести в консоль сообщение: "Users online:  Vadim, Alex, David, John, Alena".

// const users = [
//     {
//         userName: 'Volha',
//         isOnline: false,
//     },
//     {
//         userName: 'Vadim',
//         isOnline: true,
//     },
//     {
//         userName: 'Petr',
//         isOnline: false,
//     },
//     {
//         userName: 'Alex',
//         isOnline: true,
//     },
//     {
//         userName: 'David',
//         isOnline: true,
//     },
//     {
//         userName: 'John',
//         isOnline: true,
//     },
//     {
//         userName: 'Valera',
//         isOnline: false,
//     },
//     {
//         userName: 'Alena',
//         isOnline: true,
//     },
// ];

// const userOnline = users
// .filter(user =>  user.isOnline === true)
// .map(user =>  user.userName)
// .reduce((str, currentName) => str + ',' + currentName
// )

// console.log('Users online:', userOnline)


// 2) Написать функцию, которая при вызове подсчитывает количество своих вызовов, функция должна уметь принимать числовой аргумент для указания текущего количества вызовов.

// function func () {
//     let a = 0
//     return function (b) {
//         if(b === undefined) {
//             return a += 1
//         } else {
//             return a = b
//         }
//     }
// }

// const counter = func()

// console.log(counter()) // - 1
// console.log(counter()) // - 2
// console.log(counter()) // - 3
// console.log(counter(100)) // - 100
// console.log(counter()) // - 101
// console.log(counter(0)) // - 0
// console.log(counter()) // - 1