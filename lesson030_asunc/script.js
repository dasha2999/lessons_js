// асинхронный JS

// движок V8 - самый распространенный

// promise - 1.pending(в ожидании чего-то)
// 2.fullfilled(prpmise выполнен успешно) 
// 3.rejected(отклонен, т.е. выполнен с ошибкой)

// const developer = {
//     name: 'Maxim',
//     isJSDev: true
// }


// const promise1 = new Promise((resolve, reject) => {
//     if (developer.isJSDev) {
//        setTimeout(() => {
//         resolve(`${developer.name} является JS разработчиком`)
//        }, 2000);
//     } else {
//         reject(`${developer.name} не является JS разработчиком`)
//     }
// })

// console.log(promise1) // - true


// методы promise - then, catch, finally

// promise1
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((error) => {
//         console.log(error) // поставить false
//     })
//     .finally(() => {
//         console.log('finally') // выполняется в любом случае (true или false)
//     })


// fetch() - возвращает promise, ok(true или false)

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/tods' // - с ошибкой

// function createTodoElement (text) {
//     const todoElement = document.createElement('li')
//     const todoElementAnchor = document.createElement('a')
//     todoElementAnchor.href = '#'
//     todoElementAnchor.textContent = text
//     todoElement.append(todoElementAnchor)
//     return todoElement
// }

// const dataContainer = document.querySelector('#data-container')

// const getAllTodos = () => {
//     const result = fetch(TODOS_URL, {
//         method: 'GET'
//     })

//     result
//     .then((response) => {
//         console.log(response)
//         if (!response.ok) {
//             throw Error('Ошибка доступа') // если есть ошибка
//         }
//         return response.json()
//     })
//     .then((todos) => {
//         todos.forEach((todo) => {
//           const todoHTML = createTodoElement(todo.title)
//           dataContainer.append(todoHTML)
//         })
//         console.log(todos)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// getAllTodos()

// const result = fetch(TODOS_URL, {
//     method: 'GET'
// })


// result
//     .then((response) => {
//         console.log(response)
//         if (!response.ok) {
//             throw Error('Ошибка доступа') // если есть ошибка
//         }
//         return response.json()
//     })
//     .then((todos) => {
//         console.log(todos)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// text() - текст

// result
//     .then((response) => {
//         console.log(response)
//         return response.text()
//     })
//     .then((todos) => {
//         console.log(todos)
//     })


// const promise = new Promise ((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve('OK')
//     } else {
//         reject('NOT OK')
//     }
// })

// promise
//     .then((resp) => {
//         console.log(resp)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

//-------------------------------------------

// Promise.all() - если у всех будет состояние fullfilled, то он => Promise в состояние fullfilled, если есть хотя бы у одного состояние rejected, то вернет 1 Promise  в состояние rejected  и остальные данные учитываться не будут

// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise()
// ])


// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
// const todosIds = [7,8,20,29,58]

// function createTodoElement (text) {
//     const todoElement = document.createElement('li')
//     const todoElementAnchor = document.createElement('a')
//     todoElementAnchor.href = '#'
//     todoElementAnchor.textContent = text
//     todoElement.append(todoElementAnchor)
//     return todoElement
// }

// const dataContainer = document.querySelector('#data-container')

// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((response) => response.json())
//             return Promise.all(dataResults)
//         })
//         .then((todos) => {
//             console.log(todos)
//             todos.forEach((todo) => {
//                 const todoHTML = createTodoElement(todo.title)
//             dataContainer.append(todoHTML)
//             })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// getTodosByIds(todosIds)

//---------------------------------------

// Promise.race() - вернёт самый быстро выполненный Promise независимо от статуса

// Promise.race([
//     new Promise(),
//     new Promise(),
//     new Promise()
// ])


// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//        resolve('promise 1') 
//     }, 1000);
// })

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise 2')
//     }, 2000);
// })

// const p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise 3')
//     }, 500);
// })

// Promise.race([p1, p2, p3])
//     .then((result) => {
//         console.log('result', result)
//     })
//     .catch(() => {
//         console.log('error', error)
//     }) 

//------------------------------------------

// Promise.allSettled() - ждёт завершение всех и возвращает массив результатов с объектами, у объекта 2 свойства: статус и результат

// Promise.allSettled([
//     new Promise()
//     new Promise()
//     new Promise()
// ])

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//        resolve('promise 1') 
//     }, 1000);
// })

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise 2')
//     }, 2000);
// })

// const p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise 3')
//     }, 1500);
// })

// const result = Promise.allSettled([p1,p2,p3])

// result 
// .then((data) => {
//     data.forEach((elem) => {
//         console.log(elem)
//     })
// })

// result 
// .then((data) => {
//     data.forEach({value}) => {
//        value && console.log(value)
//     })
// })


//-------------------------------------------

// Promise.any() - первый успешный Promise среди переданных

//-------------------------------------------

// JSON - (Java Script Object Notation) - декодировать данные, самый популярный формат обмена данными между приложениями

// const hero = {
//     nickname: 'BestHealerEver',
//     level: 7,
//     age: 141,
//     race: 'Gnome',
// }

// console.log(typeof hero) // - object

// // JSON.stringify: obj => json
// let jsonHero = JSON.stringify(hero)

// console.log(typeof jsonHero) // - string
// console.log(jsonHero)

// // JSON.parse: json => obj
// let jsonToObj = JSON.parse(jsonHero)
// console.log(jsonToObj)

