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

// -----------------------------------

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