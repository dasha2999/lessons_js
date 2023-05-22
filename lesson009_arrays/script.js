// arrays (массивы)


// создание массива с помощью литерала
// const arr = [1, 2, '3', 4, true, [], Hello]



// создание массива с помощью конструктора Array()
// const arr2 = new Array() - в скобках длина



// создание массива с помощью конструктора Array.of()
// const arr3 = Array.of('one', 'two') - в скобках аргументы



// создание массива с помощью конструктора Array.from()
// const arr4 = Array.from('Hello') - один аргумент



// console.log(arr)
// console.log(typeof arr) - object


// ссылочный тип данных
// let arr1 = [1,2,3]
// let arr2 = [1,2,3]
// const arr3 = arr1 
// arr3 [3] = 4

// console.log(arr1 === arr2) - false
// console.log(arr1 === arr3) - true

// console.log(arr1) - равны
// console.log(arr3) - равны


// const arrCopy = []

// for (let i = 0; i < arr1.length; i++) {
//     arrCopy[i] = arr1[i]
// }
// console.log(arrCopy === arr1)


// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']

// for (let i = 0; i < movies.length; i++)
// console.log(movies[i])



// проверка на массив
// console.log(Array.isArray(movies)) - один аргумент, true или false



// удаление элемента из массива
// delete movies[1] - js начинает счёт с 0
// console.log(movies)



// методы массива

// split() - метод строки, возвращает массив
// const str = 'я учу JavaScript'
// let result = str.split('') - каждая буква как элемент массива
// let result = str.split(' ') - каждое слова через пробел
// let result = str.split()
// console.log(result)


// let result = str.split(' ').reverse().join(' ') - опциональная цепочка


// .push() - добавляет новый элемент в конце, возвращает новую длину массива
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrPush = movies.push('Форсаж', 'Человек Паук')
// console.log(arrPush)
// console.log(movies)


// .pop() - удаляет элемент в конце массива, уменьшает длину массива и возвращает удалённое им значение
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrPop = movies.pop()
// console.log(arr.Pop)
// console.log(movies)


// .shift() - удаляет первый элемент массива, уменьшает длину массива и возвращает удалённый элемент и уменьшает индекс всех последующих элементовы на единицу
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrShift = movies.shift()
// console.log(arr.Shift)
// console.log(movies)


// .unshift() - добавляет один или более элементов в начале массива и возвращает новую длину массива
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrUnshift = movies.unshift('Один Дома')
// console.log(arr.Unshift)
// console.log(movies)


// .concat() - создаёт и возвращает новый массив
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrConcat = movies.concat('Семейка Аддамс')
// console.log(arr.Concat)
// console.log(movies)


// .join() - возращает новую строку, содержащую элементы массива
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrJoin = movies.join('')
// console.log(arr.Join)
// console.log(movies)


// .slice(start,end) - копирует элементы из массива start (включительно) до end (не включительно), если нет аргументов копирует весь массив, возвращает новый массив, отрицательные индексы отсчитываются с конца массива
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrSlice = movies.slice('1,2')
// console.log(arr.Slice)
// console.log(movies === arrSlice) - false


// .indexOf() - возвращает индекс искомого элемента массива, возвращается -1 если элемент не найден
// lastindexOf() - последние вхождения
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrIndexof = movies.indexOf('Железный человек')
// console.log(arr.Indexof)
// console.log(movies)


// .includes() - определяет, содержит ли массив указанный элемент, true или false
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrIncludes = movies.includes('')
// console.log(arr.Includes)
// console.log(movies)


// .reverse() - меняет исходный массив, обращает порядок следования элементов, переворачивает
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrReverse = movies.reverse('')
// console.log(arr.Reverse)
// console.log(movies === arrReverse) - true


// .at() - возвращает элемент по индексу, отрицательное считает с конца
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// let arrAt = movies.at('-1')
// console.log(arr.At)
// console.log(movies)


// .fill() - если вызвать на массиве с данными, то он их перезапишет, мутирует исходный массив
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// const filledArr = new Array(5).fill(2)
// console.log(movies)
// console.log(filledArr)


// .splice() - если без аргумента будет новый пустой массив, первый аргумент - индекс с которого удалять, удаляет из исходного и возвращает новый массив с удаленными элементами, второй аргумент - количество элементов для удаления
// const movies = ['Гарри Поттер', 'Властелин Колец', 'Мстители']
// for (let i = 0; i < movies.length; i++)
// const splicedArr = movies.splice(2,3,'Хоббит','Халк')
// console.log(movies)
// console.log(splicedArr)


// .flat() - уменьшает вложенность массива, на количество указанных уровней, по умолчанию 1, если мы не знаем количество уровней - Infinity
// const arr = [
//     [2,4,6],
//     [1,3,5],
//     [7,9,11,13]
// ]
// const flatArr = arr.flat() - уровни
// console.log(flatArr)


// .toString() - возвращает строку, где элементы разделены ","
// const arr = [2,3,4,5]
// const arrToString = arr.toString()
// console.log(arr)
// console.log(arrToString)



// циклы и массивы. копирование

// for...of
// const arr = [1,2,3,4,5,6,7,8,9]
// for (let element of arr) {
//     console.log(element)
// }

// const str = 'JavaScript'
// for (const letter of str) {
//     console.log(letter)
// }


// Задачи Arrays

// 1) Дан массив:

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// Преобразовать массив в строку методом массивов.

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// let str = fruits.join(' and ')
// console.log(str)


// 2) Дан массив [3,6,12,10,51] - вывести все числа в обратном порядке.

// const arr = [3,6,12,10,51]
// let arrReverse = arr.reverse(' ')
// console.log(arrReverse)
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }


// 3) Пользователь вводит число. Создать массив из 5-ти одинаковых чисел введенных пользователем.

// let value = +prompt('Введите значение для заполнения массива')
// const arr = new Array(5).fill(value)
// console.log(arr)


// 4) Создать массив из 10 любых чисел, вывести среднее арифметическое всех чисел в массиве.

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// let srArifm = sum / arr.length
// console.log(srArifm)


// 5) Дан массив [2,-4,10,5,1,-20,3,-8]. Создать новый массив, где каждый элемент равен противоположному элементу оригинального массива.

// const arr = [2,-4,10,5,1,-20,3,-8]
// const resultArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         resultArr.push(Math.abs(arr[i]))
//     } else if (arr[i] > 0) {
//         resultArr.push(arr[i] * -1 )
//     } else {
//         resultArr.push(arr[i])
//     }
// }
// console.log(resultArr)


// 6) Сформировать массив длиной 10 элементов. Автоматически заполнить этот массив чередующимися нулями и единицами, начиная с нуля.

// let arr = []

// for (let i = 0; i < 10; i++) {
//     i % 2 === 0 ? arr.push(0) : arr.push(1)
// }
// console.log(arr)


// 7) Сформировать массив длиной 8, внутри массива должны быть только те числа, которые делятся нацело на 4.

// const arr = []
// const MAX_LENGTH = 8

// for (let i = 0; i++) {
//     if (i % 4 === 0) {
//         arr.push(i)
//     }
//     if (arr.length === MAX_LENGTH) {
//         break;
//     }
// }
// console.log(arr)


// 8) С помощью цикла создать массив длиной 8, где каждый элемент равен квадрату своего номера(индекса) в массиве.

// const arr = []
// const MAX_LENGTH = 8
// const square = 2

// for (let i = 0; i < MAX_LENGTH; i++) {
//     arr.push(Math.pow(i,2))
// }
// console.log(arr)


// 9) Создать массив из 10 случайных чисел. Вывести количество четных чисел.

// const arr = []
// const MAX_LENGTH = 10
// let count = 0

// for (let i =0; i < MAX_LENGTH; i++) {
//    arr[i] = Number((Math.random() * 10).toFixed(0))
//     if(arr[i] % 2 === 0) {
//         count++
//     }
// }
// console.log(count)
// console.log(arr)


// 10) Создать массив из 10 чисел и вывести наибольшее число.

// const arr = [2,4,6,8,16,5,7,9,11,10]
// let maxNumber = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//         maxNumber = arr[i]
//     }
// }
// console.log(maxNumber)


// 11) Создать массив из 10 марок автомобилей, проверить есть ли в нём марка, которую введет пользователь
// Результат вывести в консоль.

// const cars = ['Opel', 'Ford', 'BMW', 'Audi', 'Mazda','Lada','Reno','Renault','Porsh','Toyota']
// let answer = prompt('Введите марку машины')
// cars.includes(answer) ? console.log('Такая марка есть') : console.log('Такой марки нет')

// ------------------------------------------

// console.log(!!null) - false
// console.log(!!"") - false
// console.log(!!1) - true

// console.log(+true) - 1
// console.log(!"John") - false
// console.log(3 + 4 + "5") - 75

// ------------------------------------------


// 1) Дан массив ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']. Переставить 'Janett', 'Mike' в начало массива

// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']
// const copiedArr = arr.slice(arr.indexOf('Janett', 'Mike'))
// arr.splice(0,0,copiedArr)
// arr.pop()
// arr.pop()
// console.log(arr.flat())



// 2) Дан массив ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'].  Заменить 'Dan', 'David' на 'Bob', 'Oliver'

// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']
// arr.splice(1,2,'Bob', 'Oliver')
// console.log(arr)


// 3) Дан массив ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']. Перевернуть массив и заменить первые 3 элемента на 'Robert' 

// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']
// let arrReverse = arr.reverse().splice(0,3,'Robert','Robert','Robert') 
// ----------------------------------------
// arr.reserve().fill('Robert',0,3)
// ----------------------------------------
// console.log(arr)



// 4) Дан первый массив ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']. Дан второй массив ['Bob', 'Oliver', 'Robert', 'Daniel']. Скопировать все элелемнты начиная с 'Oliver' и вставить их в конец первого массива.

// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']
// const newarr = ['Bob', 'Oliver', 'Robert', 'Daniel']
// const slicedArr = newarr.slice(newarr.indexOf('Oliver'))
// const resultArr = arr.concat(slicedArr)
// console.log(resultArr)



// 5) Дан первый массив ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'].  Дан второй массив ['Bob', 'Oliver', 'Robert', 'Daniel']. Из второго массива скопировать 'Robert' и вставить меджу 'David' и 'Lambert'

// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']
// const newarr = ['Bob', 'Oliver', 'Robert', 'Daniel']
// const indexRobert = newarr.indexOf('Robert')
// const indexLambert = arr.indexOf('Lambert')
// const copiedElement = newarr.slice(indexRobert, indexRobert + 1)
// arr.splice(indexLambert, 0, copiedElement.join())
// console.log(arr)