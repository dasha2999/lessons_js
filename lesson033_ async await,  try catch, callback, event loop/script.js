// const USERS_URL = 'https://fakestoreapi.com/users'
// const USER_CART = 'https://fakestoreapi.com/carts/user'
// const PRODUCTS = 'https://fakestoreapi.com/products'

// const getData = () => {
//     fetch (USERS_URL)
//         .then ((response) => response.json())
//         .then ((users) => {
//             console.log(users)
//             const firstUserId = users[0]?.id
//             fetch(`${USER_CART}/${firstUserId}`)
//                .then ((response) => response.json ())
//                .then ((carts) => {
//                 console.log(carts)
//                 const productsIDs = carts.reduce((acc, currentCart) => {
//                     return [... acc, ...currentCart.products]
//                 }, [])
//                 console.log(productsIDs)
//                 const productsRequests = productsIDs.map(({productId}) => fetch(`${PRODUCTS}/${productId}`))
//                 Promise.all(productsRequests)
//                     .then((response) => {
//                         const dataResults = response.map((data) => data.json())
//                         return Promise.all(dataResults)
//                     })
//                     .then((goods) => {
//                         console.log(goods)
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     })
//                })
//                .catch((error) => {
//                 console.log(error)
//                })
//         })
//         .catch ((error) => {
//             console.log(error)
//         })
// }

// getData()


// async/await
// try catch finally

// когда вы написали async функция вернет promise
// const getCartByUserId = async () => {
//     try {
     // получаем пользователей
//     const response = await fetch(USERS_URL)
//     if (response.ok) {
//         throw new Error('Ошибка получения пользователей')
//     }
//     const users = await response.json()

    //    взяли ID пользователя из массива users
//     const firstUserId = users[0]?.id

    // получаем заказы пользователя по ID
//     const cartResponse = await fetch(`${USER_CART}/${firstUserId}`)
//     if(!cartResponse.ok) {
//         throw new Error('Ошибка получения данных корзин пользователей')
//     }
//     const firstUserCarts = await cartResponse.json()
//     console.log(firstUserCarts)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log('finally')
//     }

// }

// const promise = getCartByUserId()

// console.log(promise)

//-------------------------------------------

// вывести  в консоль имена пользователей

// fetch('https://reqres.in/api/users?page=1')
//     .then ((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then ((result) => {
//         console.log(result.data)
//         result.data.forEach((user) => {
//             console.log(user.first_name)
//         })
//     })
//     .catch ((error)=> {
//         console.log(error)
//     })


// примеры функций с async
// async function getData () {

// }

// const getNewData = async () => {
    // const resp = await fetch('url')
    // resp.map()
// }


// callback
// const TODOS = 'https://jsonplaceholder.typicode.com/todos/1'

// const getToDo = (callback) => {
//     fetch(TODOS)
//         .then((response) => {
//             return response.json()
//         })
//         .then((todo) => {
//             callback(todo)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// getToDo((todoItem) => {
//     console.log(todoItem)
    // callback hell
    // getSecondToDo((todoItem) => {
    //     console.log(todoItem)
    //     getThirdToDo((todoItem) => {
    //         console.log(todoItem)
    //     })
    // })
// })

// setTimeout(() => {
//     console.log('from settimeout')
// },1000)


// Event loop - событийный цикл, бесконечный цикл в котором движок ожидает задачи, он выполняет их и снова ждет, у него есть свой порядок выполнения и свои правила

// у движка есть сущность Call Stack - стэк вызовов, первый вошёл => последний вышел
// Принципы: 
// 1) Добавить в стэк
// 2) Запустить код
// 3) Удалить из стэка

// function sayHello(name) {
//     console.log(`Hello ${name}`)
// }

// console.log('start')
// sayHello('John')
// sayHello('David')

// setTimeout, setInterval - web API или API браузера
// setTimeout(() => {
//     sayHello('Marta')
// }, 0);

// console.log('End')

// Callback queue - очередь вызовов, первый вошёл => первый вышел


// начинаем
// в промисе
// заканчиваем
// возвращаем из промиса
// 1 сек timeout
// timeout ждёт дольше

// console.log('Начинаем')

// setTimeout(() => {
//     console.log('1 сек timeout')
// }, 1000);

// const pr = new Promise((resolve) => {
//     console.log('В промисе')

//     resolve('Возвращаем из промиса')
// })

// setTimeout(() => {
//     console.log('timeout ждёт дольше')
// }, 2000);

// pr.then((res) => {
//     console.log(res)
// })

// console.log('Заканчиваем')

// есть более приоритетная очередь, microtasks queue - очередь микрозадач

// микрозадача - код, который находится в then, catch, finally

// Порядок вызовов event loop:
// 1) Выполняется макрозадача - самая главная макрозадача это выполнять код от начала до конца, когда код дойдёт до последней строки макрозадача будет выполнена
// 2) Вызвать всё, что есть в очереди микрозадач т.е после выполнения всего кода, движок идёт проверять очередь микрозадач, если там есть задачи, они по порядку удаляются, добавляются в стэк вызовов, вызываются и удаляются
// 3) Удалить всё, что есть в очереди вызовов т.е в Callback queue

