// BOM - Brouser Object Model
// DOM - Document Object Model (дерево состоит из узлов)
// API - Application Programming Interface

// function test () {
//     console.log('test')
// }
// console.log(window)

// test ()
// alert ()

// console.log(navigator)

// console.log(location) // - адресная строка

// console.log(screen) // - экран

// console.log(document) или console.log(window.document) // - HTML

// .referrer(), .readyState(), .URL()
// console.log(document.referrer) // - статистика, откуда пришёл
// console.log(document.readyState) // - на сколько готово
// console.log(document.URL) 

// document.write('Hello world from JS') // - текст на странице

// document.title('Title from JS') // в HTML остался нетронутым

// document.bgColor = 'red' // - меняет цвет страницы, не используется

// console.log(document.body)
// console.log(document.head) // - title измененный

// .querySelector(), .guerySelectorAll()
// const items = document.querySelectorAll('.item')
// const items = document.querySelector('.list')
// console.log(items)
// console.log(items.length) // - длина

// .getElementById()
// const header = document.getElementById('header') // - с маленькой буквы
// console.log(header)

// .getElementsByClassName()
// const elements = document.getElementsByClassName('list_item')
// console.log(elements)

// .getElementsByTagName()
// const tagNames = document.getElementsByTagName('li')
// console.log(tagNames)

// .getElementsByName()
// const byName = document.getElementsByName()
// console.log(byName)

// const el = document.querySelector('.level-3')
// const elAncenstor = el.closest('.level-1') // - ближайший
// console.log(elAncenstor)

// const lev1 = document.querySelector('.level-1')
// const lev2 = document.querySelector('.level-2')
// console.log(lev2.contains(lev1)) // - false
// console.log(lev1.contains(lev2)) // - true

// const list = document.querySelector('.list')
// console.log(list)
// console.log(list.children)
// console.log(list.parentElement)
// console.log(list.previousElementSubling)
// console.log(list.nextElementSubling)

// list.style.color = 'orange'
// console.log(list.style)

// list.style.fontSize = '24px'
// console.log(list.fontSize)

// [...list.children].forEach((elem) => {
//     console.log[elem]
// })

// console.log(header.innerHTML) // - всё внутри, включая HTML
// console.log(header.outerHTML) // - всё внутри, включая себя и HTML
// console.log(header.textContent) // - только текст

