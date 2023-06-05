// .copyWithin() - копирует элементы массива, заменяя определенные, длина массива не меняется

// const colors = ['Green', 'Red', 'Blue', 'Yellow']
// colors.copyWithin(2,0) - Green, Red, Green, Red
// console.log(colors) - длина массива не меняется


// .every() - проверяет массив все ли элементы подходят под условие(каждое), возвращает true или false

// const users = [
//     { name: 'Анна', online: true},   
//     { name: 'Михаил', online: true},   
//     { name: 'Саша', online: true},   
// ]

// const isAllUsersOnline = users.every((user) => {
//     console.log(user)
//     return user.online
// })

// console.log(isAllUsersOnline) // - true


// const arr = [2,5,6.8,7,10,4,-23]
// const result = arr.every((num) => {
// return num > 0
// })
// console.log(arr)


// .some() - проверяет массив подходит ли под условие хотя бы 1 элемент

// const users = [
//     { name: 'Анна', online: false},   
//     { name: 'Михаил', online: true},   
//     { name: 'Саша', online: false},   
// ]

// const isSomeOnline = users.some((user) => {
//     return user.online
// })
// console.log(isSomeOnline) // - true


// .find() - ищет элемент который подходит под условие и возвращает его

// const num = [1,2,4,5,6,3,8]
// const result = num.find((element) => {
//     return elememt === 8
// })
// console.log(result) // - 8


// .findIndex() - возвращает индекс

// const num = [1,2,4,5,6,3,8]
// const result = num.findIndex((elem) => {
//     return elem === 2
// })
// console.log(result) // - 4


// .sort() - сортирует исходный массив, мутирует исходный массив

// const num = [1,2,4,5,6,3,8]
// const result = num.sort()
// console.log(num)
// console.log(result) - мутирует

// const num = [1,2,4,5,6,3,8]
// const result = num.sort((a,b) => {
//     return b - a
// })
// console.log(num) - сортировка по убыванию


// .forEach() - ничего не возвращает, пробегает по массиву, можно использовать вместо цикла for, underfined

// const num = [1,2,4,5,6,3,8]
// const result = num.forEach((num) => {
//     const square = num * num
//     console.log('Квадрат числа равен: ' + square)
//     return num * num
// })
// console.log(result)


// .map() - трансформирует исходный массив и возвращает новый 

// const num = [1,2,4,5,6,3,8]
// const result = num.map((num) => {
//     return num * num
// })
// console.log('result',result)
// console.log('num',num)


// .filter() - фильтрует новый массив не трогая исходный

// const languages = ['Java', 'TypeScript', 'C#', 'JavaScript']
// const jLanguages = languages.filter((language) => {
//     return language.startsWith('J')
// })
// console.log(jLanguages)
// console.log(languages)


// .reduce() - 

// const num = [1,2,3,4,5,6,7,8,9]
// const sum = num.reduce((currentSum, currentNumber) => {
//     console.log(currentSum)
//     return currentSum + currentNumber
// }, 0)
// console.log('Сумма: ', sum)


// const students = [
//     {studentName: 'Гриша', raiting: 5},
//     {studentName: 'Миша', raiting: 7},
//     {studentName: 'Петя', raiting: 15},
//     {studentName: 'Вася', raiting: 1},
//     {studentName: 'Георгий', raiting: 10},
// ]

// const result = students.reduceRight((acc, currentStudent, index, arr) => {
//    const sum = acc + currentStudent.raiting
//    if (index === arr.length - 1) {
//      return sum / arr.length
//    } else {
//      return sum
//    }
// }, 0)
// console.log(result) // - 30

// -------------------------------------

// 1) Спросить у пользователя 5 чисел, ПОСЛЕ ввода всех чисел, проверить все ли из них преобразуемы в число (могут быть числами).

// const arr = []
// for (let i = 0; i < 5; i++) {
//     arr.push(prompt('Введите число'))
// }
// const result = arr.every((str) => {
//       return !isNaN(str) && str !== null && str !== ''
// })
// console.log(result)


// 2) Создать функцию, которая принимаем имя человека и возвращает 'Hello' если длина имени меньше 5, и 'Hi' если больше.

// const greet = (userName) => {userName.length > 5 ? `Hi $[userName]` : `Hello $[userName]`}
// console.log(greet('Гриша'))



// 3) Создать случайный массив чисел длиной 10. На основе оригинального массива создать массив чисел которые являются четными и делятся на 4.

// function getRandomArray () {
//     const arr = []
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }
// const randomArr = getRandomArray()
// console.log(randomArr)

// const filteredArr = randomArr.filter((number) =>{
//     return number % 4 === 0
// })
// console.log(filteredArr)




// 4) Дан массив случайных чисел, просуммировать только четные числа этого массива.

// function getRandomArray () {
//     const arr = []
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }
// const randomArr = getRandomArray()
// console.log(randomArr)

// const result = randomArr.reduce((sum, currentNumber) =>{
//     return currentNumber % 2 === 0 ? sum + currentNumber : sum
// }, 0)
// console.log(result)


// 5) Создать массив имен длиной больше 5, выяснить есть ли в массиве "Семен" (без метода includes).

// const names = ['Александр', 'Сергей','Семен','Артём','Дмитрий','Валентин']

// const isSemen1 = names.some((name) => {
//     return name === 'Семен'
// })

// // или

// const isSemen = names.some(name => name === 'Семен')
// console.log(isSemen)


// 6) Есть массив мужских имен, трансформировать массив в 'Mr. ИМЯ'.

// const names = ['Александр', 'Сергей','Семен','Артём','Дмитрий','Валентин']

// const misters = names.map((name) => {
//     return `Mr. ${name}`
// })
// console.log(misters)

// ----------------------------------------


// foreach

// 1) Дан массив с названиями методов массивов. Необходимо вывести в консоль сообщения "Метод ИМЯ_МЕТОДА" для каждого метода массива.

// const methods = [
//     'push()',
//     'pop()',
//     'shift()',
//     'unshift()',
//     'slice()',
//     'splice()',
//     'foreach()',
//     'map()',
//     'find()',
//     'findIndex()',
// ];

// methods.forEach((methodName) => {
//    console.log(`Метод: ${methodName}`) 
// })



// find

// 2) Вам дан массив computers с объектами. Найдите в массиве объект "MacBook Pro 16" и выведите его в консоль.

// const computers = [
//     {
//         name: 'MacBook Pro 13',
//         price: 4000
//     },
//     {
//         name: 'MacBook Pro 14',
//         price: 5000
//     },
//     {
//         name: 'MacBook Pro 16',
//         price: 7000
//     },
// ];

// const mackbook = computers.find((obj) =>{
// return obj.name === 'MacBook Pro 16'
// })
// console.log(mackbook) // - { name: 'MacBook Pro 16', price: 7000 }


// some

// 3) Дан массив чисел arrayNumbers. Необходимо создать переменную isMoreThenHundred, которая будет true или false в зависимости от того, если в нем хотя бы одно число строго больше 100.

// const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];

// const isMoreThenHundred = arrayNumbers.some((number) => {
//     return number > 100
// })
// console.log(isMoreThenHundred) // - => true



// sort

// 4) Дан массив чисел arrayNumbers. Необходимо отсортировать массив в порядке убывания.

// const arrayNumbers = [10, -2, -3, 0, 1, 30, 25];

// arrayNumbers.sort((a,b) => {
//     return b - a
// })
// console.log(arrayNumbers) // - [30,25,10,1,0,-2,-3]


// filter

// 5) Дан массив имен names. Необходимо создать переменную filteredNames и отфильтровать массив так, чтобы в нем остались только те имена, длина окторых больше либо равна 5.

// const names = ['Александр', 'Ян', 'Оля ', 'Вячеслав', 'Маша', 'Анатолий'];

// const filteredNames = names.filter((name) =>{
//     return name.length >= 5
// })


// console.log(filteredNames) // => ['Александр','Вячеслав', 'Анатолий']


// reduce

// 6) Дан массив чисел arrayNumbers:
// 1. Создайте переменную sum, которая будет содержать сумму всех элементов массива
// 2. Создайте переменную average, которая будет содержать среднее арифметическое чисел из массива (результат округлить до целых)

// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sum = arrayNumbers.reduce((sum, currentNumber) => {
//     return sum + currentNumber
// },0)

// const average = arrayNumbers.reduce((sum,currentNumber, index, arr) =>{
//     const total = sum + currentNumber
//     if (index === arr.length - 1) {
//        return total / arr.length
//     } else  {
//        return total
//     }
// })

// console.log(sum); // => 45
// console.log(average); // => 5


// 7) Представьте, что у вас есть друг Алексей, который является владельцем кофейни. Он хочет сделать сайт для этой кофейни, чтобы люди могли заказывать доставку кофе на дом. Самая главная функция, которую хочет видеть Алексей, это поиск кофе по названию.
// Ваш друг просит вас помочь ему с разработкой сайта.
// Изначально у вас есть массив coffees, в котором хранятся все виды кофе, которые есть в кофейне у Алексея. Напитки распределены в порядке популярности среди клиентов. Т.е. кофе “Latte” - самый популярный.

// С помощью функции prompt вам необходимо запрашивать название кофе. Передайте в prompt сообщение “Поиск кофе по названию:”. Сохраните значение, которое ввел пользователь в переменную coffeeName.
// Если введенное пользователем название кофе существует, то отобразите сообщение с помощью alert “Держите ваш любимый кофе coffee. Он number-й по популярности в нашей кофейне.”, где coffee - название найденного кофе, number - номер найденного кофе в массиве coffees. Если же кофе не был найден, то отобразите сообщение “К сожалению, такого вида кофе нет в наличии”.

// Условия:
// 1. Название кофе должно быть регистронезависимым. Т.е. если пользователь напечатает “lATte”, то должен показаться результат с кофе “Latte”.
// 2. Необходимо использовать findIndex.

// const coffees = ['Latte', 'Cappuccino', 'Americano'];

// let favouriteCoffeeName = prompt('Поиск кофе по названию')

// favouriteCoffeeName = favouriteCoffeeName.trim().toLocaleLowerCase()

// const favouriteCoffeeIndex = coffees.findIndex((coffee) => {
//     return coffee.toLocaleLowerCase() === favouriteCoffeeIndex
// })

// const favouriteCoffee = coffees[favouriteCoffeeIndex]
// if (favouriteCoffee) {
//     alert(`Держите ваш любимый кофе ${favouriteCoffee}. Он ${favouriteCoffeeIndex + 1} по популярности в нашей кофейне`)
// } else {
//     alert('К сожалению, такого вида кофе нет в наличии')
// }



// 8) Вы разработали главную функциональность, которую хотел видеть Алексей на своем сайте. Он говорит вам большое спасибо, потому что благодаря сайту в кофейне увеличилось количество продаж. Теперь Алексей захотел поднять цену на кофе, чтобы прибыли было еще больше.

// У вас изначально есть 2 массива: coffees (хранит названия кофе) и prices (хранит цены на кофе). Индексы для названий кофе и цен взаимосвязаны. Т.е. “Latte” стоит 1.5 евро, “Cappuccino” - 1 евро, и т.д.

// Вам необходимо создать новый массив updatedPrices, который будет содержать те же числа из массива prices, но только увеличенные на 0.5.
// После подъема цен вам необходимо уведомить об этом клиентов кофейни, поэтому выведите для каждого типа кофе сообщение через alert “Кофе name сейчас стоит price евро”, где name - название кофе, а price - обновленная цена на кофе.

// Условия:
// 1. Необходимо использовать методы массивов map и forEach.

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// const updatePrices = price.map((price) =>{
//     return place + 0.5
// })

// coffees.forEach((coffee, index) => {
//     alert(`Кофе ${coffee} сейчас стоит ;${updatePrices[index]} евро`)
// })


// 9) Последнее, что хочет видеть Алексей на своем сайте - это система оценок работы кофейни. Владельцу необходимо знать мнение клиентов, чтобы исправлять недочеты в своей работе. Для начала вам необходимо создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни. Также создайте функцию askClientToGiveEstimation, которая должна выводить сообщение “Как вы оцениваете нашу кофейню от 1 до 10?” через prompt. Конечный результат, который введет пользователь, должен быть типом данных number. Если было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations, иначе же никаких действий не совершайте.

// Для добавления оценок вызовите функцию askClientToGiveEstimation 5 раз.

// Рекомендуется это сделать через цикл for.

// После того, как оценки будут добавлены, вам необходимо посчитать положительные и отрицательных оценки. Положительной оценкой является число больше 5, отрицательной - число, меньшее за 5 либо равное 5. Выведите через alert сообщение “Всего положительных оценок: goodEstimations; Всего отрицательных оценок:
// notGoodEstimations”, где goodEstimations - количество положительных оценок, а notGoodEstimations - количество отрицательных оценок.

// Условия:
// 1. В решение должен быть использован метод массивов filter.

// const clientsEstimations = []
// function askClientsToGiveEstimation() {
//     const clientsEstimationString = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
//     const clientsEstimation = Number(clientsEstimationString.trim()) 
//     if(clientsEstimation >= 1 && clientsEstimation <= 10) {
//         clientsEstimations.push(clientsEstimation)
//     }
// }
// for (let i = 0; i < 5; i++) {
//     askClientsToGiveEstimation()
// }

// const good = clientsEstimations.filter((estimation) => {
//     return estimation > 5
// })

// const notGood = clientsEstimations.filter((estimation) => {
//     return estimation <= 5
// })

// console.log(`Всего положительных оценок: ${good.length} Всего отрицательных оценок: ${notGood.length}`)


// 10) Вам дан массив чисел. 

// Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат:
// 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// Решить через метод reduce и foreach.
// Для данного массива numbers сумма кубов должна равняться 1158411.

// forEach()
// const numbers = [10, 4, 100, -5, 54, 2];

// let sum = 0

// numbers.forEach((num) => {
//     sum += num ** 3
// })
// console.log(sum)

// reduce()
// const numbers = [10, 4, 100, -5, 54, 2];

// const result = numbers.reduce((sum, currentNumber) => {
//     return sum + currentNumber ** 3
// })
// // console.log(result)


// 11) Вам дан массив, элементами которого являются массивы.

// Вам необходимо сделать из элементов вложенных массивов один массив. Итоговый результат должен выглядеть следующим образом: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].

// Условия:
// 1. Нельзя использовать метод массивов flat.
// 2. Необходимо, чтобы в решении использовался метод concat либо spread-оператор.

// const matrix = [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ],
// ];

// const flatArray = matrix.reduce((acc,array) => {
//     return (...arr, ...array)
// []})
// console.log(flatArray)

// 12) Вам необходимо создать функцию giveJobToStudent, которая будет добавлять новое свойство в объект и выводить информацию в модальном окне. Она принимает в себя 2 параметра:
// 1. student - объект, содержащий информацию о студенте.
// 2. jobName - название новой работы студента.
// Функция giveJobToStudent выводит в модальное окно сообщение “Поздравляем! У студента fullName появилась новая работа! Теперь он jobName”, где fullName - это имя студента, а jobName - название новой работы студента. Функция giveJobToStudent должна возвращать новый объект студента, в котором будут все ключи из объекта student и также появится новый ключ job со значением параметра jobName.

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// }

// function giveJobToStudent(student, jobName) {
//     console.log(`Поздравляем! У
//         студента $[student.fullName] появилась новая работа! Теперь он ${jobName}`)
//         return {
//             ...student,
//             job: jobName
//         }
// }

// const uptadedStudent = giveJobToStudent(student, 'веб-разработчик')
// console.log(uptadedStudent)


// 13) Написать функцию аналог метода push, функция принимает массив и элемент.

// const arr = [1,2,3,4,5,6]

// function push (arr, value) {
//     arr[arr.length] = value
//     return arr.length
// }
// const result = push(arr,7)
// console.log(result)
// console.log(arr)