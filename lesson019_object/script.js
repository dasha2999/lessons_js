// object - обьект

// const person = {
//       firstName: 'Андрей',
//       lastName: 'Сидоров',
//       age: 35,
//     speak: function () {
//         console.log('Person can speak')
//     },
//     walk () {
//         console.log('Person can walk')
//     },
//     hobbies: ['Рисование', 'Спорт', 'Шахматы']
// }

// person.city = 'Gomel' // -  можно добавить
// person.firstName = 'Егор' // - можно поменять
// delete person.hobbies

// console.log(person.firstName)
// console.log(person['lastName'])
// console.log(person)
// person.speak()
// console.log(typeof person) // - обьект


// let obj1 = new Object({name: 'David', lasName: 'Duchovny'}) // -  конструктор обьекта

// let obj2 = Object.create({}) 
// obj2.name = 'David'
// obj2.lastName = 'Duchovny'

// console.log(obj1)
// console.log(obj2)

// ------------------------------------------

// 1) Создать обьект "книга". У книги есть: название, авторы (массив строк), год, описание и опубликована ли она. Метод: бронирование книги с сообщением "Эту книгу можно забронировать".

// const book = {
//     title: 'Harry Potter',
//     authors: ['Joanne Rowling'],
//     year: '2001',
//     description: '-',
//     published: true,
//     reserve () {
//         console.log('Эту книгу можно забронировать')
//     }
// }
// book.reserve()
// console.log(book)

// ------------------------------------------


// const obj = {
//     userName: 'Jonh',
//     age: 20
// }

// for (const key in obj) {
//     console.log(key) // - John, 20
//     console.log(obj[key]) // - userName, age
// }


// const obj = {
//     userName: 'Jonh',
//     age: 20
// }

// const obj1 = {
//     city: 'Gomel',
//     street: 'Sovetskaya'
// }

// const obj2 = {}
// Object.assign(obj2, obj, obj1)
// console.log(obj2)

// - если где-то есть одинаковые поля (userName, age...), то будет взято последнее поле


// function test () {
//     console.log('From func')
// }

// test.a = 10
// console.log(typeof test) // - function
// console.log(test.a) // - 10

// test.func = () => {
//      console.log('from arrow func')
// }
// test.func() // - from arrow func
// console.log(test.a) // - 10


// hasOwnProperty - проверить есть ли ключ в обьекте, если ключ это функция - назывется метод
// const obj = {
//     myProperty: 1000
// }
// console.log(obj.hasOwnProperty('myProperty')) // - true
// console.log(obj.hasOwnProperty('myProperty2')) // - false


// const user = {
//     firstName: 'David',
//     lastName: 'Doe',
//     bio: {
//      birth: '20.08.1984',
//      age: 37,
//      hasWork: true,
//      isMarried: false
//     },
//     address: {
//         city: {
//             cityName: 'Gomel',
//             index: 246000
//         }
//     }
// }
// console.log(user.address.city.cityName) // - Gomel

// // - проверка на ошибку
// console.log(user.address?.city?.cityName) // - если нет, то undefined


// const user = {
//     firstName: 'David',
//     lastName: 'Doe',
//     bio: {
//      birth: '20.08.1984',
//      age: 37,
//      hasWork: true,
//      isMarried: false
//     },
//     address: {
//         city: {
//             cityName: 'Gomel',
//             index: 246000
//         }
//     }
// }

// const keys = Object.keys(user)  // - массив ключей обьекта

// const values = Object.values(user) // - массив значений

// const entries = Object.entries(user)  // - массив с массивами, где каждый вложенный массив это пара ключ: значение

// console.log(keys)
// console.log(values) 
// console.log(entries)


// const cat = {
//     name: 'Борис',
//     age: 8
// }

// for (const key in cat) {
//     console.log(`${key} - ${cat[key]}`)
// }

// узнать длину обьекта - по длине массива ключей

// деструктуризация массива
// const arr = [2,4,6,7,9,10,3,5]
// const [first, second, third,,, six] = arr

// console.log(first) // -2
// console.log(second) // - 4
// console.log(third) // - 6
// console.log(six) // - 10


// деструктуризация обьекта
// const obj = {
//    firstName: 'Max',
//    lastName: 'Doe',
//    age: 23
// }

// const { firstName, lastName, age} = obj

// console.log(firstName) // - Max
// console.log(lastName) // - Doe
// console.log(age) // - 23


// const obj = {
//     firstName: 'David',
//     lastName: 'Doe',
//     bio: {
//      birth: '20.08.1984',
//      age: 37,
//      hasWork: true,
//      isMarried: false
//     }
// }

// const { birth, age, hasWork, isMarried } = obj.bio
// const {firstName, bio: {age}} = obj


// this -  глобальный обьект window

// const user = {
//     userName: 'Alex',
//     birth: 2000,
//     getName () {
//         return this.userName
//     },
//     getAge () {
//         const currentYear = new Date().getFullYear()
//         return currentYear - this.birth
//     },
//     getAllInfo () {
//         const age = this.getAge()
//         const user = this.getName()
//         console.log(`Пользователь ${user}, Возраст: ${age}`)
//     }
// }
// console.log(user.getName()) // - Alex
// console.log(user.getAge()) // - 23
// user.getAllInfo() // - Пользователь Alex, Возраст: 23

// const user2 = {
//     userName: 'David'
// }

// // call, apply, bind - методы привязки контента

// const user2name = user.getName.call(user2)
// console.log('user2name:', user2name)

//-------------------------------------------

// у стрелочной функции нет своего this - undefined, можно опускать круглые скобки если один аргумент, можно убирать фигурные скобки если сразу идёт return (возврат), нет псевдомассива arguments

//-------------------------------------------


// const mainHero = {
//     fullName: 'SpiderMan',
//     health: 60,
//     strength: 10
// }

// const badHero = {
//     fullName: 'Joker',
//     health: 55,
//     strength: 8
// }

// function printHeroInfo (extraInfo = '') {
//     console.log('this', this)
//     console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, доп: ${extraInfo}`)
// }

// // call(контекст, аргумет1, аргумент2 ... аргументN) - принимает контекст 
// printHeroInfo.call(mainHero, 'Роль: хороший')

// // apply(контекст, [аргумент1б аргумент2 ... агрументN]) - принимает контекст и остальные массивы
// printHeroInfo.apply(badHero, ['Роль: плохой'])


// let user = {
//     firstName: 'Вася'
// }

// let user2 ={
//     firstName: 'Петя'
// }

// function func () {
//     console.log(this.firstName)
// }

// // bind - возвращает новую функцию с привязанным контекстом
// let funcUser = func.bind(user)
// let funcUser2 = func.bind(user2)

// funcUser()
// funcUser2()

// стрелка берёт this из соседней области видимости
// let group = {
//     title: 'Frontend 31',
//     students: ['john', 'Peter', 'Alice'],
//     showList () {
//         this.students.forEach((student) => { console.log(this.title + ' : ' + student)
//       })
//     }
// }
// group.showList()


//-------------------------------------------

// const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };

// const persons = [person1, person2, person3, person4];

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 }
// ];

// 1) Вывести в консоль 'its valid' если во всех объектах поле a > b, иначе вывести 'its invalid'.

// const isValid = arr.every((obj) => {
//     return obj.a > obj.b
// })
// console.log(
//     arr.every(obj => obj.a > obj.b) ? 'its valid' : 'its invalid'
// )


// 2) На основе массива arr, создать массив объектов у которых поле b возведено в квадрат.

// const newArr = arr.map((obj) => {
//     return {
//         a: obj.a,
//         b: obj.b ** 2
//     }
// })

// console.log(newArr)


// 3) С помощью метода/методов взять все поля a и b и последовательно поместить их в массив пример: [2,1,5,12,95,7].

// const result = arr.reduce((acc, obj) => {
//      acc.push(obj.a, obj.b)
//      return acc
// },[])
// console.log(result)

// или

// const result2 = arr.reduce((acc, {a,b}) => [...acc, a, b], [])
// console.log(result2)


// 4) С помощью метода/методов массива пробежать по массиву persons и каждую секунду выводить сообщения из массива tech.

// function getTime() {
//     let time = 0
//     return () => {
//         time += 1000
//         return time
//     }
// }

// const next = getTime()

// persons.forEach((person) => {
//     person.tech.forEach((techName) => {
//       setTimeout(() => {
//         console.log(`${person.name} can ${techName} `)
//       }, next())  
//     })
// })


//-------------------------------------------

// const person = {
//     name: 'Mr. John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML','CSS','JS'],
//    becomeProgrammer : becomeProgrammer,
//    beOlder: beOlder,
//    becomeMister: becomeMister
// };
 
 
// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG','BUILD','RUN'],
//    becomeProgrammer : becomeProgrammer,
//    beOlder: beOlder,
//    becomeMister: becomeMister
// };
 
 
// // 5) Объектам типа person создать метод become a programmer который переключает свойство isProgrammer объекта в true (если оно еще не true)

// function becomeProgrammer () {
//     this.isProgrammer = this.isProgrammer || true
//     console.log(this)
// }

// person2.becomeProgrammer()


// 6) Объектам типа person создать метод beOlder() который делает возраст person больше на 1

// function beOlder () {
//     this.age++
//     console.log(this)
// }

// person2.beOlder()
// person2.beOlder()
// person2.beOlder()


// 7) Создать метод becomeMister который добавляет в person.name "Mr. " перед именем если там еще нет "Mr. "

// function becomeMister () {
//     if (this.name.split(' ').includes('Mr. ') === false) {
//         this.name = 'Mr' + this.name
//         console.log(this)
//     }

// }
// person.becomeMister()
// person2.becomeMister()

//-------------------------------------------

// Object.preventExtensions()

// const obj = {
//     firstName : 'John',
//     language: 'en',
//     _age: 30
// }

// Object.preventExtensions(obj) // - нельзя ничего добавить

// obj.city = 'Gomel'
// obj.postCode = 246000
// console.log(obj)
// console.log(Object.isExtensible(obj)) // - false

//-------------------------------------------

// Object.freeze() // - нельзя удалить, нельзя изменить, нельзя добавить

// const obj = {
//     firstName : 'John',
//     language: 'en',
//     _age: 30
// }

// Object.freeze(obj)

// obj.city = 'Gomel'
// obj.postCode = 246000
// delete obj.language
// obj.firstName = 'David'

// console.log(obj)
// console.log(Object.isFrozen(obj)) // - true

//-------------------------------------------

// Object.seal() // - нельзя добавить, нельзя удалить, но можно добавить

// const obj = {
//     firstName : 'John',
//     language: 'en',
//     _age: 30
// }

// obj.city = 'Gomel'
// obj.postCode = 246000
// delete obj.language
// obj.firstName = 'David'

// Object.seal(obj)

// console.log(obj)
// console.log(Object.isSealed(obj)) // - true

//-------------------------------------------

//сеттеры, геттеры

// Object.defineProperty(obj, 'age', {
//     get () { // - сработает при вызове
//         return this._age
//     },
//     set (value) { // - сработает при записи obj.age = 50
//         this._age = value
//     }
// })

// obj.age = 50

// console.log(obj)
// console.log(obj.age) // - 30, 50(из-за obj.age)
// console.log(Object.getOwnPropertyDescriptors(obj))

//-------------------------------------------

// Object.defineProperty(obj, 'city' , {
//     value: 'Boston',
//     enumerable: true
// })

// for (const key in obj) {
//     console.log(key)
// }

// console.log(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))


// const flower = {
//    name: 'Rose',
//    color: 'Purple'
// }

// Object.defineProperties(flower, {
//     name: {
//         writable: false,
//         configurable: false
//     },
//     color: {
//         enumerable: false
//     }
// })

// дескрипторы: 
// writable, enumerable, configurable


// console.log(Object.getOwnPropertyDescriptors(flower)) // - информация про все элементы
// console.log(Object.getOwnPropertyDescriptor(flower, 'name')) // - информация по определенному элементу


// const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };

//-------------------------------------------

// new - конструктор, оператор, имя с большой буквы

// function Person (name, age) {
//     this.name = name
//     this.age = age
//     this.sayHi = function () {
//     console.log('Меня зовут: ' + this.name)
// }
// }

// const person1 = new Person('Vadim', 40)
// const person2 = new Person('Kolya', 20)
// const person3 = new Person('Sarah', 18)
// const person4 = new Person('Egor', 55)

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)

// person1.sayHi()
// person2.sayHi()
// person3.sayHi()
// person4.sayHi()

//-------------------------------------------


// 1) Написать функцию, которая проверяет является ли переданная строка палиндромом(наоборот).

// const isPalindrome = (str) => {
//     return str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? true : false
// }

// console.log(isPalindrome('Мадам')) // - true
// console.log(isPalindrome('Привет')) // - false



// 2) Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.

// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.


// const car = {
//     proizvoditel: 'BMW',
//     model: 'X6',
//     year: 2020,
//     speed: 50,
//     getCarInfo () {
//         return `Марка ${this.proizvoditel} Модель: ${this.model} Год: ${this.year} Скорость: ${this.speed}}`
//     },
//     getTime (dist) {
//         return dist / this.speed
//     }
// }


// 3) Вам необходимо создать функцию, которая будет работать с объектами. Назовите ее handleObject. handleObject принимает в себя 3 параметра:

// 1. obj. Объект, с которым будет работать функция
// 2. key. ключ объекта
// 3. action. Действие, которое мы будем совершать над объектом

// Параметр action может быть 4-мя значениями:
// 1. 'get'. Если action равен 'get', то функция handleObject должна вернуть значение ключа key в объекте obj.
// 2. 'add'. Если action равен 'add', то функция handleObject должна добавить новый ключ key в объект object и присвоить значение пустой строки ''. Также из функции необходимо возвратить обновленный объект obj.
// 3. 'delete'. Если action равен 'delete', то функция handleObject должна удалить свойство key из объекта obj и возвратить обновленный объект.
// 4.Если action равен любому другому значению, то функция handleObject должна возвратить объект obj.


// const handleObjects = (obj, key, action) => {
//    switch (action) {
//       case 'get':
//         return obj[key]
//       case 'add' :
//         obj[key] = ''
//         return obj
//       case 'delete' :
//         delete obj[key]
//         return obj
//       default:
//         return obj
//    }
// }


// const student = {
// name: 'Maxim',
// programmingLanguage: 'JavaScript',
// }

// const result = handleObjects(student, 'programmingLanguage', 'delete');
// console.log('result', result);


// 4) Напишите функцию isEmptyObj(), которая проверяет пуст объект или нет. Если объект пуст, функция вернет true, если в объекте есть хотя бы одно поле, функция вернет false.

// const test = {
//     name: 'Valera',
//     age: 20
// }


// function isEmptyObj (obj) {
//        return !Object.keys(obj).length ? true : false
// }

// console.log(isEmptyObj(test))


// 5) Создать функцию конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц.


// function Book (author, bookName, pageAmount)
// {
//         this.author = author
//         this.bookName = bookName
//         this.pageAmount = pageAmount   
// }

// const books = [
//     new Book ('Толстой', 'Война и мир', 400),
//     new Book ('Роулинг', 'Гарри Поттер', 650),
//     new Book ('Кинг', 'Под куполом', 700),
//     new Book ('Булгаков', 'Мастер и Маргарита', 400),
//     new Book ('Толкиен', 'Властелин Колец', 600),
//     new Book ('Чехов', 'Вишневый сад', 200),
//     new Book ('Тургенев', 'Отцы и дети', 300),
//     new Book ('Пушкин', 'Евгений Онегин', 500)
// ]

// function getBiggerBook (booksArr) {
//     let maxIndex = 0
//     let maxObjValue = booksArr[maxIndex].pageAmount
//     for (let i = 0; i < booksArr.length; i++){
//        if (booksArr[i].pageAmount > maxObjValue) {
//            maxObjValue = booksArr[i].pageAmount
//            maxIndex = i
//        }
//     }
//     return booksArr[maxIndex]
// }

// console.log(getBiggerBook(books))

// или

// const maxObj = books.reduce((acc, currentObj) => {
//     return acc.pageAmount > currentObj.pageAmount ? acc : currentObj
// }) 
// console.log(maxObj)