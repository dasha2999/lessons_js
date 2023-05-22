// numbers


// метод toString
// const num = 4894
// const result = num.toString - возвращает число в виде строки


// метод toFixed
// let a = 10
// let b = 3
// const result = a / b
// console.log(result)
// console.log('type, typeof result')
// console.log(result.toFixed(3)) - возвращает строку с числом, записанным с указанным количеством десятичных знаков


// преобразование переменных в числа

// метод Number()
// let str = '1234'
// console.log(Number(str))

// метод parseInt() -  целое число, только первые числа

// let str = '1234'
// console.log(parseInt(str))

// метод parseFloat() - число с дробной частью

// let str = '1234'
// console.log(parseFloat(str))


// метод isInteger
// console.log(Number.isInteger(177)) - true
// console.log(Number.isInteger('177')) - false
// console.log(Number.isInteger('177.9')) - true


// метод Number.isFinite()
// console.log(Number.isFinite(177)) - true
// console.log(Number.isFinite('177')) - true
// console.log(Number.isFinite('177.9')) - true
// console.log(isFinite('177')) - true, неявное преобразование

// let test = prompt('Enter value')
// isFinite(test) ? console.log('OK') : console.log('NOT OK')
// Number.isFinite(test) ? console.log('OK') : console.log('NOT OK')



// Math

// основные методы Math


// округление
// const num = 4.82
// console.log(Math.ceil(num)) - в большую сторону, 5
// console.log(Math.floor(num)) - в меньшую сторону, 5
// console.log(Math.round(num)) - 5, округляет по правилам математики
// console.log(Math.trunc(num)) - 4, убирает дробную часть



// возведение в степень, аналог **
// const num = 3
// console.log(Math.pow(num,3)) - 2 аргумента, один вводим,  второй степень


// вычисление корня
// const num = 16
// console.log(Math.sqrt(16)) - корень из числа


// опредение знака числа
// console.log(Math.sigh(2)) - положительное, 1
// console.log(Math.sigh(-2)) - отрицательное, -1
// console.log(Math.sigh(0)) - 0
// console.log(Math.sigh(-0)) - -0
// console.log(Math.sigh(' ')) - строка, 0
// console.log(Math.sigh('123')) - неявное преобразование к числу, 1
// console.log(Math.sigh('fkdf')) - неявное преобразование к числу, NaN


// максимальное и минимальное значение
// console.log(Math.max(1,6,7,8,4,35,75,99)) 
// console.log(Math.min(1,6,7,8,4,-35,75,99)) 


// генерация случайного числа, от 0 до 1
// console.log(Math.random())


// генерация случайного цвета
// const randomColor = Math.floor(Math.random() * 16777215).toString(16)
// background.style.backgroundColor = `#${randomColor}`
// console.log('#' + randomColor)


// генерация случайного пароля
// console.log(Math.random().toString(36).slice(2))
