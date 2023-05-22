// loops
// while,for(for in, for on), while, do while

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }


// let start =10
// let end = 20

// while(start < end) {
//      console.log(start)
//      start++
// }


// do(start < end) {
//     console.log(start)
//     start++
// }


// 1) Запросите у пользователя радиус окружности и выведите площадь такой окружности.

// const PI = 3.14
// let radius =+prompt('Enter circle radius')
// let result = PI * (radius ** 2)
// console.log(`Площадь окружности с радиусом ${radius} равна ${result}`)


// 2) Пользователь вводит свой текущий возраст, вывести на экран сколько лет ему будет до 2030 года. 
// Например, вводим 14. Вывод: «в 2018 будет 15», «в 2019 будет 16», «в 2020 будет 17» и т.д.

// let currentAge = prompt('Enter your current age')
// const maxYear = 2030
// let currentYear = 2023

// while (currentYear <= maxYear) {
//     console.log(`В ${currentYear} вам будет ${currentAge}`)
//     currentYear ++
//     currentAge ++
// }


// 3) Сделать цикл который выводит нечетные числа от 40 до 140

// let start = 40
// let end = 140

// while (start <= end) {
//     if (start % 2 !== 0) {
//         console.log(start)
//     }
//     start ++
// }


// 4) Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let otric = 0
// let poloj = 0
// let zero = 0

// for (let i = 1; i <= 10; i++) {
//     let userNumber = +prompt('Введите число')
//     if (userNumber < 0) {
//         otric++
//     } else if (userNumber > 0 ) {
//         poloj++
//     } else {
//         zero ++
//     }
// }

// console.log(`Положительных - ${poloj}
// Отрицательных - ${otric} 
// Нулей - ${zero}`)


// 5) Вывести # столько раз, сколько указал пользователь (цикл while)

// const SYM = '#'
// let resultString = ''
// let i = 1
// let userNumber = +prompt('Введите число')

// while (i <= userNumber) {
//     resultString += SYM
//     i++
// }
// console.log(resultString)

