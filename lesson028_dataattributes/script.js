// const check = document.getElementById('check')
// const button = document.getElementById('btn')

// button.addEventListener('click', function () {
//     console.group('IT WORKS')
//     console.log(check.getAttribute('type')) // значение аттрибута,checkbox
//     console.log(check.hasAttribute('type')) // проверить наличие,true
//     check.setAttribute('type', 'radio') // установить (название,значение)
// })

// check.addEventListener('click', function () {
//     button.disabled = !button.disabled
//     if (check.checked) {
//     console.log('ITS CHECKED')
//     } else {
//         console.log('ITS NOT CHECKED')
//     }
// })

// const list = document.getElementById('list')

// const goods = [
//     {
//         name: 'socks',
//         price: 3
//     },

//     {
//         name: 'skirt',
//         price: 7
//     },

//     {
//         name: 'phone',
//         price: 30
//     },

//     {
//         name: 'dress',
//         price: 15
//     },

//     {
//         name: 'shoes',
//         price: 12
//     }
// ]

// function createElement (goodsName, goodsPrice) {
//     const elem = document.createElement('li')
//     elem.textContent = goodsName
//     elem.setAttribute('data-price', goodsPrice)
//     return elem
// }

// goods.forEach(({name, price}) => {
//     list.append(createElement(name, price))
// })

// list.addEventListener('click', function (event) {
//     console.log(event.target.getAttribute('data-price'))
//     console.log(event.target.dataset.price)
// })


// debug

// let sum = 0;
// const numberOfElements = 10
// for (let i = 1; i < numberOfElements; i++) {
//     sum += i
// }

// const theHalfOfSum = sum / 2
// console.log('the half of sum', theHalfOfSum)


// const developerName = 'Maxim'
// const programmingLanguage = 'JavaScript'

// const programmingLanguages = {
//     javaScript: 'javaScript',
//     nodeJS: 'NodeJS'
// }

// if (programmingLanguage === programmingLanguages.javaScript) {
//     console.log(`${developerName} является Front-end разработчиком`)
// } else if (programmingLanguage === programmingLanguages.nodeJS) {
//     console.log(`${developerName} является Back-end разработчиком`)
// } else {
//     console.log(`Язык программирования у ${developerName} неопределен`)
// }

