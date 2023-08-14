// Повторение

// 1) Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном. Массив, который возвращает функция [1,4,6,74].

// const numbers = [1,1,1,4,4,5,1,6,6,74,74,74,3]

// function repeatedNumbers () {
//     const res = []
//     numbers.forEach((num) => {
//         if (numbers.indexOf(num) !== numbers.lastIndexOf(num)) {
//             if (!res.includes(num)) {
//                 res.push(num)
//             }
//         }        
//     })
//     return res
// }

// console.log(repeatedNumbers())


// 2) Создайте функцию, принимающую в качестве входных данных имя, город и штат, чтобы приветствовать человека. Обратите внимание, что имя будет массивом, состоящим из одного или нескольких значений, которые должны быть соединены вместе с одним пробелом между каждым.
// Пример: welcome(['John', 'Smith'], 'Phoenix', 'Arizona') => Hello, John Smith! Welcome to Phoenix, Arizona!

// function welcome (name, city, state) {
//     return `Hello, ${name.join(' ')}! Welcome ${city}, ${state}!`
// }
// console.log(welcome(['John', 'Smith'], 'Phoenix', 'Arizona'))


// 3) Что, если нам нужно, чтобы длина слов, разделенных пробелом, была добавлена ​​в конце того же слова и возвращена в виде массива?

// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" --> ["you 3", "will 4", "win 3"]

// Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленного к каждому элементу. Примечание: cтрока будет содержать как минимум один элемент; слова всегда будут разделены пробелом.

// function addLength (str) {
//     const arrFromString = str.split(' ')
//     const result = arrFromString.map((word) => `${word} ${word.length}`)
//     return result
// }

// console.log(addLength('you will win'))


// 4) Имеется массив объектов. Получите из этого массива объект, где name "Bob" и сохраните это в какой - либо переменной.

// let users = [
//     {
//         name: "John",
//         age: 30
//     },
//     {
//         name: "Bob",
//         age: 21
//     },
//     {
//         name: "Anna",
//         age: 19
//     }
// ]

// const userBob = users.find((obj) => obj.name === 'Bob')

// console.log(userBob)

//----------------------------------------------


// 8 типов данных:

// 1) number
// 2) string
// 3) undefined
// 4) null
// 5) symbol
// 6) BigInt
// 7) object
// 8) boolean

// console.log(a)
// let a = 2

// const c = []

// console.log(b)
// var b = 4

// console.log(typeof []) // - object

// const test = () => {
// }
// console.log(typeof test) // - function

// console.log(typeof undefined) // - undefined
// console.log(typeof null) // - object

// всегда false Boolean():

// ''
// 0
// undefined
// null
// false
// NaN


// let num1 = 3
// let num2 = new Number(3)

// console.log('num1', num1)
// console.log('num2', num2)
// console.log(num1 === num2) // - false

// == - приведение типа
// === - проверяет на идентичность, значение и тип

// ! - не
// !! = Boolean() - идентично

// parseInt() - заберет целое число
// parseFloat() - заберет число с точкой

// NaN - бессмысленное действие с числом

// console.log((10 / 0) * 2) // - infinity

// console.log((10 / 0) + 'test') // - infinitytest

// console.log((10 / 0) + 1) // - infinity

// console.log(2 + 3 + '1') // 51

// if () {
// если правда выполнится эта часть
// } else {
// если неправда выполнится эта часть
// }

// условие ? что-то если правда: что-то если ложь

// while (condition) {
// }

// do {
// } while (condition)

// for (let i = 0; i < 10; i++(--)) {
    // continue - пропустит текущую итерацию
    // break - полностью прекратит дальнейшее выполнение
// }

// for (const iterator of object) {
// } // - массивы, строки, map, set

// for (const key in object) { 
// } // - объекты

// == - сравнение
// === - сравнение
// != - не
// && - или
// = - присваивание
// % - деление
// += - прибавить и присвоить
// -= - отнять и присвоить

// let a = 20
// switch (a) {
//     case 10:
//         console.log('1')
//         break;
//     case 20:
//         console.log('2')
//     case 30:
//         console.log('3')
//     default:
//         console.log('0')
// } // - 2, 3, 0 

// `
// hello, ${}
// `

// 'string'


// let test = 'string'

// console.log(test.split('')) // - по буквам
// console.log(test.split(' ')) - пробел
// console.log(test.indexOf('s'))
// console.log(test.split('').reverse().jpin(''))

// split
// indexOf
// replace
// replaceAll
// toUpperCase, toLowerCase
// slice
// trim


// Math

// let num1 = 3.14834803
// console.log(num4.toFixed(3))

// toFixed
// random
// pow
// floor
// ceil
// sqrt
// round
// trunc
// max
// min
// abs


// Date 


// function test () {
//     declaration
// }

// const test2 = function () {
//     anonim
// }

// нет псевдомассива arguments
// const test3 = () {
//     arrow
// }


// const arr = [] // - литерал, индексы начинаются с 0

// push => добавляет и возращает length
// pop => удаляет удаленный элемент
// shift => удаляет 
// unshift => добавляет
// indexOf
// lastIndexOf
// includes 
// reverse
// flat
// fill
// concat
// findIndex
// join
// split - метод строки
// filter
// forEach
// map
// some
// every
// splice
// find
// slice
// reduce
// sort
// with
// toSpliced
// toReversed
// toSorted

// Array.isArray() - проверка на массив

// замыкания связывают данные с функцией
// function outer () {
//     let counter = 1
//     function inner () {
//         counter += 1
//         console.log(counter)
//     }
//     return inner 
// }

// const useCounter = outer()

// области видимости
// глобальная

// useCounter()
// useCounter()
// useCounter()
// useCounter()
// useCounter()
// useCounter()
// useCounter()
// useCounter()
// useCounter()
// useCounter()


// Массив букв английского алфавита, штук 5. При каждом вызове внутренняя функция собирает строку из букв по порядку.

// function outer() {
//     const arr = ['a', 'b', 'c', 'd', 'e']
//     let ind = 0
//     let alphabet = ''
//     function inner() {
//         alphabet += arr[ind]
//         ind++
//         return {
//             alphabet,
//             ind
//         }
//     }
//     return inner
// }

// const useCounter = outer()

// console.log(useCounter())
// console.log(useCounter())
// console.log(useCounter())
// console.log(useCounter())
// console.log(useCounter())


// function test5(a = 2, b = 4) {
//     return a * b
// }

// console.log(test5(5)) // - 20

// test5() // - если нет return - undefined


// function test5(a, b) {
//     return a * b
// }

// console.log(test5(5)) // - NaN

// function test5(a) {
//     const maxValue = Math.max(1,2,3)
//     return a + maxValue
// }
// console.log(test5(5,10))