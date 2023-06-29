// const card = document.querySelector('.card')
// console.log(card)
// console.log('innerHTML',card.innerHTML)
// console.log('outerHTML',card.outerHTML)

// включая скрытые элементы
// console.log('textContent',card.textContent)

// только видимых элементов
// console.log('innerText',card.innerText)

// изменили содержимое
// card.textContent = 'New text'

// card.innerHTML = '<h2> Header from JS </h2>'

// createElement() - создание элемента
// const newDiv = document.createElement('div')

// newDiv.textContent = 'Text from new div from JS'

// // append() - добавление в конец узла
// card.append(newDiv)

// // prepend() - добавление в начало узла
// card.prepend(newDiv)

// // before() - добавление перед узлом
// card.before(newDiv)

// // after() - добавление после узла
// card.after(newDiv)

// // replaceWith() - замена узла
// card.replaceWith(newDiv)

// function createElem (content) {
//     const newElem = document.createElement('div')
//     newElem.textContent = content
//     return newElem
// }

// card.before(createElem('Text from function'))

// вставляет элемент
// card.insertAdjacentElement('afterbegin', '<p> Hello from JS </p>')

// после начала, разбивает по тегам
// card.insertAdjacentHTML('afterbegin', '<p> Hello from afterbegin </p>')

// после конца, разбивает по тегам
// card.insertAdjacentHTML('afterend', '<p> Hello from afterend</p>')

// перед началом, вставляется как текст
// card.insertAdjacentText('beforebegin','<p> Hello from beforebegin </p>')

// перед концом, вставляется как текст
// card.insertAdjacentText('beforeend', '<p> Hello from beforeend </p>')

// const liveLis = document.getElementsByClassName('.list_item')
// const deadLis = document.querySelectorAll('.list_item')

// document.getElementsByClassName('list_item')[2].remove

// console.log(liveLis)
// console.log(deadLis)
// console.log(deadLis[2].textContent)

// function show () {
//     const currentCollection = document.querySelectorAll('.list_item')
//     console.log(currentCollection)
//     console.log(currentCollection[2].textContent)
// }

// show() // - 3

// const lis = document.querySelectorAll('.list_item')
// lis[2].remove() // - удалится 3
// console.log(lis[1]) // -  с 0
// console.log(lis) // - 5

// hasAttribute() - true или false
// console.log(card.hasAttribute('name')) // - false
// console.log(card.hasAttribute('class')) // - true

// getAttribute() - получаем значение атрибута
// console.log(card.getAttribute('class')) // - card

// setAttribute() - добавляет атрибут со значением
// console.log(card.setAttribute('name', 'from_Js'))

// attributes -  получить список атрибутов
// console.log(card.attributes)

// перезаписался класс
// card.className = 'active'

// add() - добавляет
// card.classList.add('active')
// card.classList.add('new')
// card.classList.add('test')

// remove() - удаляет
// card.classList.remove('test')

// console.log(card.classList)

// contains() - проверка на наличие класса (true или false)
// console.log(card.cardList.contains('new')) // - true
// console.log(card.cardList.contains('test')) // - false

// toggle() - если класса нет - добавит, а если есть - удалит
// card.classList.toggle(test2)
// card.classList.toggle(test2)
// card.classList.toggle(test2)

// const btn = document.querySelector('.btn')

// onclick - клик
// btn.onclick = function () {
//     btn.classList.toggle('test')
//     console.log('Click happend')
// }

// ondblclick - двойной клик
// btn.ondblclick = function () {
//     console.log('Dblclick happend')
// }

// onmousemove - движение мышки
// btn.onmousemove = function () {
//     console.log('Mouseclick happend')
// }

// onmouseenter - движение мышки в кнопке
// btn.onmouseenter = function () {
//     console.log('Mouseclick happend')
// }

// onmouseleave - движение мышки за кнопкой
// btn.onmouseleave = function () {
//     console.log('Mouseclick happend')
// }


// function clickHandler (event) {
//     btn.classList.toggle('test')
//     console.log('Click happend')
//     console.log(event.target.innerText)
// }

// function secondClickHandler () {
//     console.log('Another click happend')
// }

// btn.addEventListener('click', clickHandler)

// // removeEventListener() - удаление
// btn.removeEventListener('click', clickHandler)

// btn.addEventListener('click', secondClickHandler)

// btn.addEventListener('click', function () {
//         btn.classList.toggle('test')
//         console.log('Click happend')
// })

// btn.addEventListener('click', function () {
//     console.log('Another click happend')
// })

// document.body.addEventListener('keydown', (event) => {
//     console.log(event.code)
//     console.log(event.key)
//     console.log(event.keyCode)
// })

// document.body.addEventListener('keyup', (event) => {
//     console.log(event.code)
//     console.log(event.key)
//     console.log(event.keyCode)
// })

// document.body.addEventListener('wheel', (event) => {
//     console.log(event)
// })


// const input = document.querySelector('.inp')
// input.oninput = function () {
//     this.textContent = this.value
//     console.log(this.textContent)
// }

// input.onchange = function () {
//     this.textContent = this.value
//     console.log(this.textContent)
// }

//-----------------------------------------------

// Вам дан HTML код. Необходимо создать такую же структуру HTML-элемента через JavaScript и добавить итоговый элемент внутрь тега body. Решите задачу двумя способами:
// 1. через innerHTML
// 2. через document.createElement().

// <form class="create-user-form">
//     <label>
//         Имя
//         <input type="text" name="userName" placeHolder="Введите ваше имя">
//     </label>
//     <label>
//         Имя
//         <input type="password" name="password" placeHolder="Придумайте пароль">
//     </label>
//     <button type="submit">
//         Подтвердить
//     </button>
// </form>


// 1.

// document.body.innerHTML = 
// `<form class="create-user-form">
// <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше
// имя">
// </label>
// <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте
// Пароль">
// </label>
// <button type="submit">
//     Подтвердить
// </button>
// </form>`

// 2.

// const createInputWithLabel = (label, inputType, inputName, inputPlaceholder) => {
//    создаём label
//     const labelContainer = document.createElement('label')
//     labelContainer.innerText = label
//    создаём input
//     const inputElement = document.createElement('input')
//     inputElement.type = inputType
//     inputElement.name = inputName
//     inputElement.placeholder = inputPlaceholder
//     // в label поместили input
//     labelContainer.append(inputElement)
//     // вернули label с input-ом
//     return labelContainer
// }

// создаём форму
// const formContainer = document.createElement('form')
// formContainer.className = 'create-user-form'

// создаём 2 label: для имени пользователя и пароля
// const userNameLabel = createInputWithLabel('Имя', 'text', 'userName', 'Введите ваше имя')
// const passwordLabel = createInputWithLabel('Пароль', 'password', 'password', 'Придумайте пароль')

// создаём кнопку подтверждения
// const confirmButton = document.createElement('button')
// confirmButton.type = 'submit'
// confirmButton.innerText = 'Подтвердить'

// добавляем label и button в форму
// formContainer.append(userNameLabel, passwordLabel, confirmButton)

// выводим форму на странице
// document.body.prepend(formContainer)


