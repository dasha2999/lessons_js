// recursion - рекурсия(когда функция вызывает сама себя внутри себя)


// function factorial(x) {
//     if (x < 0) return
//     if (x === 0) return 1
//     return x * factorial(x - 1)
// }
// console.log(factorial(3)) - 6

// рекурсия подходит для массивов


// ---------------------------------------------

// 1) Используя рекурсию, написать функцию, которая будет суммировать числа от 1 до n.

// function sum (num) {
//     if (num === 0) {
//      return 0
//     } else {
//     return num + sum(num - 1)
//     }
// }
// console.log(sum(5)) - 15


// 2) Реализуйте функцию sum, используя цикл вместо рекурсии.

// function sum (num) {
//     let sum = 0  
//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(sum(5))


// 3) Используя рекурсию, написать функцию, которая считает сумму массива чисел.

// function sumArr(arr, sum = 0) {
//     if(arr.length) {
//        return sumArr(arr, sum + arr.pop())
//     } else {
//        return sum
//     }
// }
// console.log(sumArr([1,2,3,4,5])) - 15

// ---------------------------------------------