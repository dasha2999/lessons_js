// методы строк

// const str = 'JavaScript'
// console.log(str.length) - возращает длину строки



// изменение регистра

// const str = 'Java Script'
// console.log(str.toLowerCase()) - преобразует символы в строке в нижний регистр
// console.log(str.toUpperCase()) - преобразует символы в строке в нижний регистр



// обьединение строк

// const str = 'JavaScript'
// const str2 = 'Hello'
// console.log(str2.concat(' ', str)) - обьединяет две или более строки и возращает одну строку



// доступ к символам

// const str = 'JavaScript'
// console.log(str[5])
// for (let i = 0; i < str.lenght; i++) {
//     console.log(str[1])
// }



// последний символ в строке

// console.log(str[str.length - 1]) 



// поиск строки в строке

// console.log(str.charAt(5)) - возвращает символ по указанному индексу
// console.log(str[5])

// const str = 'JavaScript'

// let result = str.includes('Java') - проверяет содержит ли строка указанную подстроку
// console.log(result)

// let email = 'test@mail.ru'
// let result = mail.includes('@')
// if (mail.includes('@') && mail.includes('.')) {
//     console.log('Выглядит как почта')
// } else {
//     console.log('Это не почта')
// }

// const str = 'Hello'
// console.log(str.lastindexOf('o')) - возвращает индекс первого найденного вхождения указанного значения => 10, индекс последнего вхождения
// console.log(str.indexOf('o')) => 1, индекс первого вхождения
// console.log(str.indexOf('A')) => -1, не нашли

// const str ='Hello'
// console.log(str.startsWith('He')) - true
// console.log(str.endsWith('a')) - false

// const str ='Hello'
// console.log(str.search('Scr')) => 4, индекс начала вхождения искомой строки



// извлечение строк

// const str = 'Hello'
// let result = str.slice(3)
// console.log(result)

// let email = 'test@mail.ru'
// let result = email.slice(4) - новая строка, начиная с индекса
// console.log(result)

// const str = 'Hello'
// console.log(str.substring(2,5))
// console.log(str.substr(2,5)) - устарело



// добавление символов в строку

// const str = 'Hello'
// console.log(str.padEnd(20, '*'))
// console.log(str.padStart(20, '*'))



// замена содержимого

// const str = 'Hello'
// console.log(str.replace('e', '@')) - заменяет первый найденный символ
// console.log(str.replaceAll('l', '1')) - заменяет все символы
// если не нашёл, вернёт исходную строку



// повтор строки

// let newStr = '#'
// console.log(newStr.repeat(5))



// удаление пробелов в строке

// let test = prompt('Enter text')
// console.log(test.trim())



// 1) Перевернуть строку:

// Пример:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// let str = 'world'
// let result = ''
// for (let i = str.length - 1; i >= 0; i--) {
// result += str[i]
// }
// console.log(result)


// 2) Запросить у пользователя имя и фамилию, вывести в консоль fullName пользователя используя метод строк concat

// const Name = prompt('Введите имя')
// let surName = prompt('Введите фамилию')
// console.log(Name.concat(surName))

