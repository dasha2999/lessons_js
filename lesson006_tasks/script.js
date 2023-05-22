// 1) Написать программу, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

// const num = 1357
// const numToStr = String(num)
// let sum = 0

// for (let i = 0; i < numToStr.length; i++) {
// sum += +numToStr[i]
// }

// console.log(sum)



// 2) Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

// const str = 'aaa@bbb@ccc'
// console.log(str.replaceAll('@', '!'))



// 3) Запросить у пользователя ввести строку, посчитать сколько в этой строке заглавных букв.

// let str = prompt('Введите строку')
// let count = 0

// for (let i= 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase()) {
//     count++
//     }
// }

// console.log(count)



// 4) Запросить число с дробной частью, проверить правильность ввода (наличие символа ".")

// let str = prompt{'Введите число с дробной частью'}
// let num = 2.34
// let result = str.includes('.')
// console.log(result)



// 5) Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

// const str = 'я учу javascript!'
// console.log(str.lenght)



// 6) Написать программу, которая переводит в верхний регистр первый символ переданной строки

// const str = 'javascript'
// const result = str[0].toUpperCase() + str.slice(1)
// console.log(result)



// 7) Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

// const correctAnswer = 6

// for (;;) {
//     let userAnswer = +prompt('Сколько будет 2 + 2 * 2')
//     if(userAnswer === correctAnswer) {
//         console.log('Вы молодец!')
//         break
//     }
// }