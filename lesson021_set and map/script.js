// set(множество) - коллекция уникальные значения любого типа, можно положить что угодно 

// коллекция уникальных значений
// const uniq = new Set ()

// uniq.add(2)
// uniq.add('test')
// uniq.add(true)
// uniq.add([1,2,3])
// uniq.add({fullName: 'David', age: 23})
// uniq.delete('test')

// uniq.forEach((elem) => {
//     console.log(elem)
// })

// for(const value of uniq) => {
//     console.log(value)
// })

// узнать длину
// console.log(uniq.size) // - 4

// проверить на наличие - has
// console.log(uniq.has('test')) // - false
// console.log(uniq.has(2)) // - true

// очистить
// uniq.clear()

// console.log(uniq)

//-------------------------------------------

// map - коллекция для хранения любого типа данных в виде пар 
// при добавлении пары по ключу, который есть - значение будет перезаписано
// const collection = new Map ()

// const person = {
//     age: 20,
//     fullName: 'John'
// }

// collection.set(1, 'value 1 like a number')
// collection.set('1', 'value 1 like a string')
// collection.set({}, person)
// collection.set(person, 'person obj')
// collection.set([], 'array')
// collection.set(null, undefined)
// collection.set(undefined, null)

// collection.set(true) // - undefined

// collection.delete(null)

// collection.forEach((key, value) => {
//     console.log(`Значение: ${key} ключ: ${value}`)
// });

// for (const [key, value] of collection) {
//    console.log(`Ключ: ${key} значение: ${value}`) 
// }

// console.log(collection.get(person)) // - person obj
// console.log(collection.has(1)) // - true
// console.log(collection.size) // - 7

// очистить
// collection.clear()
// console.log(collection)

//-------------------------------------------

// regular expressions (регулярные выражения) - специальные шаблоны, которые используют для поиска и обработки текста

// const pattern = /\w+l{2}\w+/
// или
// const pattern1 = new RegExp('hello', g)

// const str = 'hello world hello'
// console.log(pattern.test(str)) // - вернет true или false (здесь true)
// console.log(pattern.exec(str)) // - вернет массив со строкой и дополнительной информацией

//проверка email-адреса
// const pattern = /^[a-aA-Zo-9._%+-]+@[a-zA-Zo-9._-]+\.[a-zA-Z]{2,}$/


// let str2 = 'The quick brown fox jumps over the lazy dog'
// const pattern2 = /the/gi

// // вернёт массив совпадений
// let result = str2.match(pattern2)
// console.log(result)


// let str = 'Привет мир!'
// const pattern = /мир/

// let str2 = 'Hello world'

// // возвращает новую, измененную строку
// let newstr = str.replace(pattern, 'земля')

// let res = str2.replace(/\w+$/, 'home')
// console.log(res)

// console.log('Исходная строка', str)
// console.log('Новая строка', newstr)


// const str3 = 'hello world hello'
// const res2 = str3.replaceAll(/\w+l{2}\w+/, 'bye')
// console.log(res2)

//----------------------------------------------

// 1)

// const str = 'First, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not rise the bus. I like to go to school at 13.00. It rains. I do not like rains. I eat lunch. I eat a sandwich and a apple'

// console.log(str.replace('apple', 'poteto').replaceAll(/\.s/g, '!').replace(/\.$/,'!'))

// 2) Состоит ли строка только из букв, true или false

// const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
// const pattern = /^[A-Z]+$/i
// const pattern = /[A-Z]+/gi
// console.log(pattern.test(text))

//-----------------------------------------------

// паттерны проектирования 

// Singleston
// class Person {
//     constructor (name) {
//         if (Person.instance) {
//           return Person.instance
//         }
//         this.name = name
//         Person.instance = this
//     }
//     run () {
//         console.log(`${this.name} runs`)
//     }
// }

// const p1 = new Person ('Oleg')
// const p2 = new Person ('Valerchik')

// p1.run()
// p2.run()

// console.log(p1 === p2)

// Factory
// class Transport {
//     constructor(type, width, height) {
//         this.type = type
//         this.width = width
//         this.height = height
//     }
//     transport (to) {
//         console.log(`you delivery to ${to} by ${this.type}`)
//     }
// }

// // super class
// class Logistics {
//     constructorTransport (type) {
//         if (type === 'sea') {
//             return new Transport (type, 300, 200)
//       } else {
//             return new Transport (type, 150, 40)
//         }
//     }
// }

// const fabricLogistics = new Logistics ()
// const fura = fabricLogistics.constructorTransport('ground')
// const ship = fabricLogistics.constructorTransport(sea)
// fura.transport('Minsk')
// ship.transport('Mogilev')


// abstract factory
// class WaterTransport {
//     consctructor (type, speed, displacement) {
//         this.type = type
//         this.speed = speed
//         this.displacement = displacement
//     }
//     transport (to) {
//         console.log(`You delivery to ${to} by ${this.type} with ${this.speed} sea miles`)
//     }
// }

// class WaterTransport {
//     consctructor (type, speed, wheels) {
//         this.type = type
//         this.speed = speed
//         this.wheels = wheels
//     }
//     transport (to) {
//         console.log(`You delivery to ${to} by ${this.type} with ${this.speed} kmph`)
//     }
// }

// function getWaterTypeTransport (type) {
//     if (type === 'sea') {
//         return new WaterTransport (type, 100, 300)
//     } else if (type === 'river') {
//         return new WaterTransport (type, 200, 400)
//     }
// }

// function getGroundTypeTransport () {
//     if (type === 'asphalt') {
//         return new GroundTransport (type, 120, 8)
//     } else if (type === 'sand') {
//         return new GroundTransport (type, 40, 6)
//     }
// }

// function transportProducer (type) {
//     return type === 'water' ? getWaterTypeTransport : getGroundTypeTransport
// }

// const waterFactory= transportProducer('water')
// const groundFactory = transportProducer('ground')

// const ship = waterFactory('sea')
// const lodka = waterFactory('river')

// ship.transport('Gomel')
// lodka.transport('Dobrush')

// const fura = groundFactory('asphalt')
// const buggie = groundFactory('sand')

// fura.transport('Eremino')
// buggie.transport('Selmash')

// proxy - заместитель
// class Person {
//     constructor (name) {
//         this.name = name
//     }
//     walk (to) {
//       console.log(`${this.name} walks to ${to}`)
//     }
//     sleep (hours) {
//         console.log (`${this.name} sleeps ${hours} hours`)
//     }
// }

// class HumanProxy {
//     constructor (human) {
//         this.human = human
//     }
//     walk (to) {
//         if (to === 'bar') {
//             console.log('he does not go anywhere!')
//         } else {
//             this.human.walk(to)
//         }
//     }
//     sleeps(hours) {}
// }
// const proxiedHuman = new HumanProxy (new Person('Oleg'))
// proxiedHuman.walk('bar')
// proxiedHuman.walk('home')

//-----------------------------------------------

// 1) Создайте функцию с именем removeVomels, которая принимает строковый аргумент и возвращает ту же строку с всеми удаленными глассными (глассные являются "a","e","i","o","u")

// const vowels = ['a', 'e', 'i', 'o', 'u']
// const word = 'drake'

// function removeVomels () {
//      let result = ''
//      for (const letter of str) {
//         if (!vowelsArr.includes(letter)) {
//             result += letter
//         }
//      }
//      return letter
// }

// console.log(removeVomels(word, vowels))



// const res = [...word].reduce((acc, currentLetter) => {
//     if(!vowels.includes(currentLetter))
// })


// 2) Давайте постоим калькулятор. Объект Calculator со следующими методами:
// Calculator.add()
// Calculator.substract()
// Calculator.multiply()
// Calculator.divide()

// Каждый метод ожидает два аргумента, например:
// Calculator.add(1,4) должен вернуть 5.

// Ожидается, что в качестве аргументов будут передаваться только целые числа и метод деления должен возвращать "ложь" при попытке деления на ноль.

// const Calculator = {
//     add (a, b) {
//         return a + b
//     },
//     subsctract (a, b) {
//         return a - b
//     },
//     multiply (a, b) {
//         return a * b
//     },
//     divide (a, b) {
//         return b === 0 ? false : a / b
//     }
// }

// console.log(Calculator.add(1,4))
// console.log(Calculator.subsctract(1,4))
// console.log(Calculator.multiply(1,4))
// console.log(Calculator.divide(1,4))
// console.log(Calculator.divide(1,0))


// 3) Создать класс Timer, инстакс которого запускает таймер и выводит в консоль прошедшее время в секундах (1,2,3,4,5 и т.д ), инстакс должен обладать методами .start() и .stop(),  которые запускают и останавливают таймер, а также методом .reset(), который сбрасывает таймер на 0. С помощью Timer  вы должны создать несколько таймеров и убедиться в том, что они работают независимо друг от друга. Останавливайте таймер через некоторое время после запуска с помощью setTimeout()

// class Timer {
//     constructor () {
//         this.counter = 0
//         this.timerIDs = []
//     }
//     start () {
//     const timerID = setInterval (() => {
//         this.counter += 1
//         console.log(this.counter)
//     }, 1000)
//     this.timerIDs.push(timerID)
//     }
//     stop () {
//         clearInterval (this.timerIDs[0])
//         this.timerIDs = []
//     }
//     reset () {
//         this.counter = 0
//     }
// }

// const timer1 = new Timer ()
// console.log(timer1)

// setTimeout (() => {
//     timer1.stop ()
// },5000)

// setTimeout (() => {
//     timer1.start ()
// },7000)

// setTimeout(() => {
//     timer1.start ()
// }, 12000);


// 4) Создайте функцию с именем noRepeat(), которая принимает строковый аргумент и возвращает строку из одной буквы первого неповторяющегося символа по всей строке.

// function noRepeat (str) {
//     for (const letter of str) {
//         if (str.indexOf(letter) === str.lastIndexOf(letter)) {
//            return letter
//         }
//     }
// }

// console.log(noRepeat('testing'))