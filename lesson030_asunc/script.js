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

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/tods' // - с ошибкой

function createTodoElement (text) {
    const todoElement = document.createElement('li')
    const todoElementAnchor = document.createElement('a')
    todoElementAnchor.href = '#'
    todoElementAnchor.textContent = text
    todoElement.append(todoElementAnchor)
    return todoElement
}

const dataContainer = document.querySelector('#data-container')

const getAllTodos = () => {
    const result = fetch(TODOS_URL, {
        method: 'GET'
    })

    result
    .then((response) => {
        console.log(response)
        if (!response.ok) {
            throw Error('Ошибка доступа') // если есть ошибка
        }
        return response.json()
    })
    .then((todos) => {
        todos.forEach((todo) => {
          const todoHTML = createTodoElement(todo.title)
          dataContainer.append(todoHTML)
        })
        console.log(todos)
    })
    .catch((error) => {
        console.log(error)
    })
}

getAllTodos()

// const result = fetch(TODOS_URL, {
//     method: 'GET'
// })

// json(Java Script Object Notation) - декодировать данные, самый популярный формат обмена данными между приложениями

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