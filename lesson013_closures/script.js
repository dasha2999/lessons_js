// closures - замыкания

// function func1 () {
//     let a = 2
//     return function () {
//     console.log(a)
//     }
// }
// const useFunc = func1()
// console.log(useFunc) - функция 
// useFunc() - 2


// function sayHello() {
//     const message = 'Привет'
//     return function(name) {
//        console.log(message + ' ' + name)
//     }
// }
// const davidSayHello = sayHello()
// davidSayHello('David')
// davidSayHello('Anna')
// davidSayHello('Migel')


// function count() {
//     let count = 0
//     return function() {
//        console.log(count += 1)
//     }
// }
// const counter = count()
// counter() - 1
// counter() - 2
// counter() - 3
// counter() - 4
// counter() - 5
// counter() - 6
// counter() - 7
// counter() - 8
// counter() - 9
// counter() - 10


// ------------------------------------------

// 1) Написать функцию, которая при каждом вызове возвращает попеременно true => false => true ...

// const switcher = () => {
//    let status = true 
//    function changeStatus () {
//     console.log(status)
//     status = !status
//     return status
//    } 
//    return changeStatus
// }
// const useSwitch = switcher()
// useSwitch() - true
// useSwitch() - false
// useSwitch() - true
// useSwitch() - false
// useSwitch() - true
// useSwitch() - false

// ------------------------------------------


// const sayHi = () => {
//     let greet = 'Hi'
//     function say (userName) {
//         console.log(`${greet}, ${userName}`)
//     }
//     return say
// }
// const useSayHi = sayHi()
// useSayHi('John')
// useSayHi('Martin')


// function sum (a,b) {
//     console.log(a + b)
// }
// sum(2,3) - чистая функция(которая не вызывает побочных эффектов, при вводе одинаковых аргументов выдаёт одинаковый результат)


// function sum (a,b) {
//     console.log(a + b + Math.random())
// }
// sum(2,3) - нечистая функция


// function sum (a,b) {
//   return a + b
// }
// sum(2,3) - чистая функция

// нечистая функция - разные результаты, которые изменяют внешний вид, вывод которого зависит от внешнего или глобального изменения