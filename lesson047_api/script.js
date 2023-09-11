const BASE_URL = 'https://64ff37f5f8b9eeca9e29d52a.mockapi.io/'

const USERS ='users'

// получить массив пользователей
// fetch(`${BASE_URL}${USERS}`)
//     .then((resp) => {
//          console.log(resp)
//          return resp.json()
//     })
//     .then((users) => {
//         console.log(users)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const newUser = {
    name: 'David',
    avatar: ''
}

fetch(`${BASE_URL}${USERS}`, {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(newUser)
})
.then((resp) => {
         console.log(resp)
         return resp.json()
})
.then((data) => {
        console.log(data)
})
.catch((error) => {
        console.log(error)
})