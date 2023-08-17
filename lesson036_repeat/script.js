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

//------------------------------------------------


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

//--------------------------------------------------


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

//-------------------------------------------------


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


// let a = null + undefined
// console.log(a) // - NaN


// let b = 15 + null
// console.log(b) // - 15


// let c = 15 + undefined
// console.log(c) // - NaN


// console.log(100 * 'aaa') // - NaN


// console.log(this) // - window


//---------------------------------------------

// 1) Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

// const arr = [2,3,7,9,11,-13,15,17]

// function getMnAndMax (arr) {
//     const max = Math.max(...arr)
//     const min = Math.min(...arr)
//     return {
//         max,
//         min
//     }
// }
// console.log(getMnAndMax(arr))


// 2) Рекурсия:
// Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

// function sum(number) {
//     let str = `${number}`
//     if (str.length === 1) {
//         return +str
//     }
//     return +str[0] + sum(str.slice(1))
// }

// console.log(sum(1357))


// 3) Вам поручили задачу на проекте. Необходимо разработать словарь, в который можно добавлять слова с их описанием, удалять слова и получать их.Для начала создайте класс Dictionary. Его конструктор принимает 1 параметр name. Инициализируйте данное значение при помощи this. Также в конструкторе должно объявляться поле words, которое по умолчанию должно быть пустым объектом.

// Вам необходимо в класс Dictionary добавить 4 метода:
// 1. add. Данный метод добавляет новое слово в словарь. Он принимает в себя 2 параметра: word - слово (тип данных строка) description - описание слова (тип данных строка). Присвойте объекту words по ключу word (этот параметр передали в метод add) значение объекта, в котором будут храниться данные о слове и его описание.

// Если слово уже существует в объекте words, то не нужно перезаписывать слово, которое уже было сохранено ранее.

// 2. remove. Данный метод удаляет слово из словаря. Он принимает в себя ключ по которому нужно удалить объект слова из объекта words.

// 3. get. Данный метод получает слово из словаря. Он принимает в себя ключ из объекта words. Из метода необходимо возвратить найденный объект слова по переданному параметру ключа.

// 4. showAllWords. Данный метод не принимает в себя никаких параметров. Его задача состоит в том, чтобы вывести все слова, которые есть в объекте words, в консоль в формате “word - description” (word - само слово, description - описание слова).

// Для тестирования написанного класса используйте данный код:
// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые
// сервисы и сайты или поддерживает и дополняет существующие');
// dictionary.remove('JavaScript');
// dictionary.showAllWords();

// class Dictionary {
//     constructor (name) {
//         this.name = name
//         this.words = []
//     }
//     add(word, description) {
//         if(!this.words[word]) {
//         this.words[word] = {
//             word,
//             description
//         }
//         }
//     }
//     remove(word) {
//         delete this.words[word]
//     }
//     get(word) {
//         return this.words[word]
//     }
//     showAllWords() {
//         Object.values(this.words).forEach((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`)
//         })
//     }
// }

// const dictionary = new Dictionary('Толковый словарь')
// dictionary.add('JavaScript', 'популярный язык программирования')
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
// dictionary.remove('JavaScript');
// dictionary.showAllWords();
// console.log(dictionary)


// 4) Представьте, что вас как веб-разработчика попросили разработать веб-платформу, которая будет отслеживать прогресс студентов в обучении веб-разработке. Для начала вам необходимо создать объект student, в котором будут 3 свойства:

// 1. stack. Массив из строк, где каждая строка - это технология. Изначально, массив stack должен быть равен [‘HTML’].

// 2. level. Тип данных number. level отвечает за текущий уровень студента и изначально равен 1.

// 3. improveLevel. Функция, которая сначала увеличивает значение свойства level у студента на единицу. Если level равен 2-м, то вам необходимо добавить в конец массива stack значение ‘CSS’, если 3-м - добавляете в конец stack значение ‘JavaScript’, 4-м - ‘React’, 5-ти - ‘NodeJS’. Если значение level стало больше 5-ти, то вам необходимо вывести в модальном окне через alert сообщение “Студент выучил все технологии!”. Также функция improveLevel должна возвращать в самом конце обновленный объект student.

// В итоге значение свойства stack после выполнения кода ниже должно быть равно:
// ["HTML", "CSS", "JavaScript", "React", "NodeJS"].

// student
// .improveLevel()
// .improveLevel()
// .improveLevel()
// .improveLevel()
// .improveLevel()

// Примечание: цепочка из подряд идущих функций impoveLevel работает так, потому что improveLevel возвращает объект student, а у объекта student есть метод impoveLevel.

// Посмотрите на пример:
// const student = {
// improveLevel() {
// return this;
// }
// };
// student
// .improveLevel()
// .improveLevel()

// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel() {
//         this.level += 1
//         if (this.level === 2) {
//             this.stack.push('CSS')
//         } else if (this.level === 3) {
//             this.stack.push('JavaScript')
//         } else if (this.level === 4) {
//             this.stack.push('React')
//         } else if (this.level === 3) {
//             this.stack.push('NodeJS')
//         } else {
//             console.log('Студент выучил все технологии!')
//         }
//         return this
//     }
// }

// student
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()

//---------------------------------------------------


// console.log(typeOf('1' + 2)) // - string

// console.log(typeof('Vasya'.toUpperCase().length.toString())) // - string

// const s1 = ['a', 'b', 'c']
// const s2 = ['d', 'e', 'f']

// const result = s1.concat(s2).join('+')

// console.log(result) // - a+b+c+d+e+f

// function test () {
//     console.log('1')
//     setTimeout(() => console.log('2'), 0)
//     setTimeout(() => console.log('3'), 0)
//     console.log('4')
// }
// test() // - 1,4,2,3

// function test () {
//     console.log('1')
//     setTimeout(() => console.log('2'), 1)
//     setTimeout(() => console.log('3'), 0)
//     console.log('4')
// }
// test() // 1,4,3,2

// var o = {
//     name: 'John',
//     getName: function () {
//         console.log(this.name)
//     }
// }

// o.getName()

// var getName = o.getName

// getName() // - John, ничего (Window)


// rest, spread
// ... 
// ... (rest) => []


// const arr = ['John', 'David', 'Petya']

// const [a,b,c] = arr

// console.log(a) // - John
// console.log(b) // - David
// console.log(c) // - Petya


// const arr = ['John', 'David', 'Petya']

// const [a,b,c,d = 'Maxim'] = arr

// console.log(d) // - Maxim


// const arr = ['John', 'David', 'Petya']

// arr[10] = 'Anton'

// console.log(arr) // - 11

// null, undefined, empty

// const obj = {
//     name: 'John',
//     age: 22,
//     city: 'Homel',
//     country: 'Belarus'
// }

// дескрипторы
// console.log(Object.getOwnPropertyDescriptors(obj))

// const obj2 = new Object ({name: 'David', age: 33})

// console.log(typeof obj2.age) // - number

// const obj3 = new Object.assign(ob1, obj2)

// console.log(obj3)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const {age, city, test} = obj

// console.log(age) // - 22
// console.log(city) // - Homel
// console.log(test) // - undefined

// let object = {
//     lastname: 'John'
// }

// function getName () {
//     console.log(this.lastname)
// }

// function getName2 (obj) {
//     console.log(obj.lastname)
// }

// getName() // - undefined 
// object.getName() // - error
// getName2(object) // - John


// function Developer (name, age, city) {
//     this.name = name
//     this.age = age
//     this.city = city
// }

// const dev1 = new Developer('John', 20, 'Minsk')
// const dev2= Developer('David', 30, 'Grodno')

// console.log(dev1) // - выведет
// console.log(dev2) // - undefined

// const user = {
//     name: 'John',
//     age: 3,
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// user.sayHello() // - Hello, my name is John

// методы функции
// bind - вернет функцию
// call - привяжет контект и будет вызван ''
// apply - привяжет контект и будет вызван []


// function test (y) {
//     return this.x + y
// }

// const objX = {
//     x: 10
// }

// console.log(test.call(objX, '2')) // - 102


// function test (y) {
//     return this.x + y
// }

// const objX = {
//     x: 10
// }

// console.log(test.apply(objX, '2')) // - 12

// function test (y) {
//     return this.x + y
// }

// const objX = {
//     x: 10
// }

// console.log(test.bind(objX, 2)) // - function
// console.log(test.bind(objX, 2)()) // - 12


// function some () {
//     let a = 10
// }

// some.b = 20

// console.log(some.b) // - 20

// функция это специальный вид объекта

// function add (a,b,c) {
//     return a + b + c
// }

// add(3,4,6)

// add(3)(4)(6)

// function curAdd (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

