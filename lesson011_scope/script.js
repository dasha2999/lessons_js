// scope - область видимости

// {
//     блок
// }


// if (true) {
//     let a = 2
// } else {
//     const b = 4
// }
// console.log(a) - ошибка
// console.log(b) - ошибка


// var - не имеет блочной области видимости, функциональная есть
// if (true) {
//   var a = 2
// }
// console.log(a) - 2


// for (let i = 0; i <= 1; i++) {
//     var a = 10
// }
// console.log(a)


// let a = 10
// function test(params) {
//    console.log(a) - 10
// }
// test ()
// console.log(a) - ошибка


// function run () {
//     var message = 'Беги'
//     console.log(message)
// }
// run()
// console.log(message) - ошибка


// function greeting (text) {
//     console.log(text)
// }
// greeting('Hello') - выводит
// greeting('Привет') - выводит


// if (true) {
//     let a = 2
//     console.log(a) - 2
// }

