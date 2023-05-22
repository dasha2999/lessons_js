// functions - функции


// function declaration - простое обьявление функции

// function greeting (параметры) {
    // тело функции
    // блок кода, который будет выполняться при вызове функции
//     console.log('Hello from function')
// } 
// greeting(аргументы)


// function greeting (text) {
//     console.log( `${text} from function`)
// } 


// greeting('Hi')
// greeting('Hello')
// greeting('Good morning')
// greeting('Привет')
// greeting('Здраствуйте')


// function sum (a,b) {
//     const result = a + b
//     console.log(result)

//     return result
//     console.log('После return')
// }

// const resultFunc = sum(2,8)
// const resultFunc = sum(2,800)
// const resultFunc = sum(20,77)
// const resultFunc = sum(27,8)
// console.log(resultFunc)



// function expression - функциональное выражение

// функция с именем
// function func2 () {
//     console.log('Hello')
// }
// func2() - можно перед функцией

// функция анонимная
// const func = function (test) {
//     console.log(test)
//     console.log('Hello from function expression')
// }
// func('test') - нельзя перед функцией

// let userName = 'Дарья'
// let userSurname = 'Чуйкова'
// function getFullName(firstName, secondName) {
//     console.log(`Добро пожаловать, ${firstName} ${secondName}`)
// }
// getFullName(username, userSurname)
// console.log(firstName) - будет ошибка, параметры функции доступны только внутри функции

// console.log(func) - type of = function

// ----------------------------------------

// функция - обьект первого класса
// функции можно присваивать переменным
// функции можно передавать как аргументы другим функциям
// функции можно возвращать из других функций
 
// -----------------------------------------

// let a = 5
// let b = 15

// function sum (a,b) {
    // console.log(arguments) - псевдомассив, у него нет методов массива, есть индексы и длина, на этом сходство с массивом заканчивается

    // внешнюю переменную а - не меняет, а меняет внутреннюю
    // a += 5

    // console.log(a + b) 
// }
// sum(a,b)



// arrow function - стрелочная функция

// const func1 = () => {
//     console.log('Hello from arrow function')
// }
// func1() 

// const func1 = a => console.log('Hello from arrow function', a)
// func1(10) - нельзя перед функцией


// Задачи function


// 1) Написать функцию-валидатор числа, которая принимает строку и возвращает true, если эта строка может быть числом, false - если не может.

// const validationNumber = (str) => {
//     const isNumber = Number(str)

// ----------------------------------------
//     // const isNumber = +str
//     // const isNumber = parseInt(str)
//     // const isNumber = parseFloat(str)
// -----------------------------------------

//     if (!!isNumber) {
//         return true
//     } else {
//         return false
//     }
// }
// validationNumber('12345')


// 2) Написать функцию, которая вычисляет среднее арифметическое за год (нужно передавать оценки за 4 четверти).

// function getAverage (num1, num2, num3, num4) {
//    let result = (num1 + num2 + num3 + num4) / 4
//    console.log(result)
//    return result
// }
// getAverage(6,8,9,6)


// 3) Написать функцию, которая вычисляет процент побед. Функция принимает количество побед и поражений, и возвращает процент.

// const getPercent = function (wins, losses) {
// const allGames = wins + losses
// const winsPercent = (wins / allGames) * 100
// const lossesPercent = (losses / allGames) * 100
// const message = `Процент побед: ${winsPercent.toFixed(2)}%  и процент поражений ${lossesPercent.toFixed(2)}%`
// return message
// }
// getPercent(16,9)


// 4) Необходимо создать функцию getSumOfNumbers. Она будет считать сумму от 0 до переданного числа. Выберите любой из 3 типов при создании функции.
// getSumOfNumbers принимает в себя 2 параметра: number и type.
// Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10).
// Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”. Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа, пустая строка “” - все числа. По умолчанию параметр type должен быть равен odd.

// Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return.

// Возможные результаты функции getSumOfNumbers:
// 1. number = 10, type = ‘odd’. Возвращает 25.
// 2. number = 10, type = ‘even’. Возвращает 30.
// 3. number = 10, type = ‘’. Возвращает 55.

// const getSumOfNumbers = (number, type = 'odd') => {
//    let sum = 0
//    for (let i = 0; i <= number; i++) {
//        const isEven = i % 2 === 0 
//        const isOdd = !isEven  
//        if (!type) {
//          sum += i
//        } else if (isEven && type === 'even') { 
//          sum += i
//        } else if (isOdd && type === 'odd') { 
//          sum += i
//        }
//    }
//    return sum
// }
// console.log(getSumOfNumbers (10, ''))

// ------------------------------------------------


// 1) Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию от нескольких чисел от 2 до 9.

// function geTable (number) {
//     for (let i = 1; i <= 9; i++) {
//        console.log(`${number} x ${i} = ${number * i}`)
//     }
// }
// console.log('/n')
// geTable(2)
// geTable(3)
// geTable(4)
// geTable(5)
// geTable(6)
// geTable(7)
// geTable(8)
// geTable(9)


// 2) Написать функцию для генерации случайного массива заданной длины. Функция принимает длину массива. Функция возвращает получившийся массив.

// function getRandomArray (length) {
//     const arr = []
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     console.log(arr)
//     return arr
// }
// getRandomArray(10)
// getRandomArray(15)
// getRandomArray(20)



// 3) Написать функцию, которая возводит переданное число в указанную степень. Функция возвращает результат.

// function getPow (num, pow) {
//     console.log(Math.pow(num, pow))
//     return Math.pow(num, pow)
// }
// getPow(2, 3)
// getPow(2, 4)
// getPow(2, 5)


// 4) Сколько аргументов у функции (вернуть сообщение "Количество аргументов: число"): 
// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

// function getArgumentsCount () {
//     console.log(arguments.length)
//     return `Количество аргументов : ${arguments.length}`
// }

// getArgumentsCount(1, 2, 3)
// getArgumentsCount(1, 2, 3, 10)


// 5) Если не можешь уснуть, считай овец...

// Задача:
// Учитывая неотрицательное целое число, например 3, верните строку с бормотанием: «1 овца... 2 овцы... 3 овцы...». Ввод всегда будет действительным, т. е. без отрицательных целых чисел (проверка только на 0)

// function getCountSheeps (number) {
//     if (number === 0) {
//       return ''
//     }
//     const arr = []
//     for(let i = 0; i < number; i++) {
//         arr.push(`${i} sheep...`)
//     }
//     console.log(arr.join(''))
//     return arr.join('')
// }
// getCountSheeps(5)
// getCountSheeps(10)


// 6) Сокращение имени из двух слов
// Напишите функцию для преобразования имени в инициалы.

// На выходе должны быть две заглавные буквы с точкой, разделяющей их.

// Это должно выглядеть так:
// Sam Harris => S.H
// patrick feeney => P.F

// function getAbbrName (name) {
//     const arr = name.split(' ')
//     console.log(`${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`)
//     return `${arr[0][0].toUpperCase()}.arr[1][0].toUpperCase()}`
// }
// getAbbrName('Валентин Игоревич')
// getAbbrName('patrick feeney')



// function test () {
//     const result = 10
//     return result - вернет 10(без этой строки - underfined)
// }

// function test (a, b, c) {
//     return a + b + c
// }
// const res = test (2, 5)

// let a = 7
// let b = 5
// const users = ['Vanya, Petya']

// function changeName (users) {
//      users[0] = 'Dasha'
// }
// changeName(users)
// console.log(users)

// function sum (a, b) {
//     a *= 2 
//     console.log(a + b)
//     return a + b
// }