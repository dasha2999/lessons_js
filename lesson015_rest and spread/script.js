// ...rest(остаточный параметр) - собирает кусочки в массив(только в конце)

// function func (...args) {
//     console.log(arguments)
//     console.log(args)
// }
// func(1,2,3)


// ...spread(оператор расширения) - разделения на отдельные элементы массива(в любом месте)

// const arr = [1,2,3,4,5]
// console.log(...arr) - без массива и запятых

// const arr = [1,2,3,4,5]
// console.log([...arr])


// let arr = ['will', 'love']
// let data = ['You', ...arr, 'spread', 'operator']
// console.log(data) - вставка


// let word = 'JavaScript'
// console.log([...word]) - по буквам


// деструктуризация - извлекает значения элемента массива, копируется

// const profile = ['John', 'Doe', 'code.com']
// const firstName = profile[0]
// const lastName = profile[1]
// const website = profile[2] - без деструктуризации

// const profile = ['John', 'Doe', 'code.com']
// const [firstName, lastName, wesite] = profile
// console.log(firstName)
// console.log(lastName)
// console.log(wesite) - с деструктуризацией

// ------------------------------------------

// 1) Используя оператор ... найти максимальное число в массиве.

// let arr = [1,10,5,2,7,9,4,3,6,8]
// function getMax(arr) {
//     return Math.max(...arr)
// }
// console.log(getMax(arr))

// или

// let arr = [1,10,5,2,7,9,4,3,6,8]
// let max = Math.max(...arr)
// console.log(max)


// 2) Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

// const arr = [1,2,3,4,7,8,9,10,50]
// function getRandomElement(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length)
//     return arr[randomIndex]
// }
// console.log(getRandomElement(arr))

// ------------------------------------------

// let width = 300
// let height = 400
// const landscape = true
// if (landscape) {
//     [width,height] = [height,width] - меняем значение
//     console.log(`${width} x ${height}}`) - 400 x 300
// }