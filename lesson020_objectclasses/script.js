// class - класс

// instance - экземпляр

// class User {

//      #birthyear = 2002

//     // - инициализация полей
//     constructor (name, age) {
//        this.name = name
//        this.age = age
//     }
//     sayHi () {
//         console.log(`${this.name} say hi`)
//     }
//     showBirth () {
//         console.log(`${this.#birthyear}`)
//     }
// }

// const user1 = new User('John', 20)
// console.log(user1) // - John, 20
// console.log(user1.name) // - John
// console.log(user1.age) // -  20
// user1.sayHi() // - John say hi
// user1.showBirth() // - 2002
// console.log(user1.#birthyear) // - SyntaxError
// console.log(user1.birthyear) // - undefined

// // - наследование
// const date = new Date() 
// console.log(date)


// # (SyntaxError) - делает приватным, по умолчанию все поля публичные (public) 


// class User {
//     static initialValue = {
//         name: 'Alex',
//         age: 19
//     }
//     constructor (name,age) {
//         this.name = name || User.initialValue.name
//         this.age = age || User.initialValue.age
//     }
//     sayHi() {
//         console.log(`${this.name} say hi`)
//     }
// }

// const user1 = new User()
// console.log(user1) // - Alex, 19
// console.log(user1.initialValue) // - undefined
// console.log(user1.#initialValue) // - SyntaxError


// class User {
//     static #MAX_INSTANCES = 2
//     static #instances = 0
//     name
//     constructor (name) {
//         User.#instances++
//         if(User.#instances > User.#MAX_INSTANCES) {
//             console.log('Невозможно создать экземпляр класса User')
//         }
//         this.name = name
//     }

//     static isUser (user) {
//         return user instanceof User
//     }
// }

// const player1 = new User('Зидана')
// new User('Месси')
// new User('Роналдо')
// new User('Рауль')

// const isUser = User.isUser(player1)
// console.log(isUser) // - true


// class Person {
//     constructor (name, age) {
//       this.name = name
//       this.age = age
//     }
//     walk () {
//         console.log(`${this.name} can walk`)
//     }
// }

// class Programmer extends Person {
//     constructor (expYears, ...params) {
//         // super надо писать первым, инициализация родителя
//         super(...params)
//         this.expYears = expYears
//     }
//     code () { 
//        console.log(`${this.name} can write code`)
//     }
// }

// const pr1 = new Programmer('2', 'Peter', 35)
// pr1.code() // - Peter cam write code
// pr1.walk() // - Peter can walk (extends)

// console.log(pr1)


// function Auto (brand, color) {
//     this.brand = brand
//     this.color = color
//     this.drive = function () {
//         console.log(`${this.brand} can drive`)
//     }
//     }

// const bmw = new Auto ('BMW', 'black')
// const nissan = new Auto ('Nissan', 'white')

// bmw.drive() // - BMW can drive
// nissan.drive() // - Nissan can drive

// console.log(bmw.drive === nissan.drive) // - false

// - принцип ООП - наследование
// Auto.prototype.drive = function () {
//     console.log(`${this.brand} can drive`)
// }

// bmw.drive() // - BMW can drive
// nissan.drive() // - Nissan can drive

// console.log(bmw.drive === nissan.drive) // - true


// принципы ООП:
// 1. Наследование
// 2. Инкапсуляция
// 3. Абстракция
// 4. Полиморфизм

// полиморфизм - одно действие несколько реализаций
// class Animal {
//     constructor (name) {
//         this.name = name
//     }
//     makeSound () {}
// }

// class Dog extends Animal {
//     constructor (name) {
//         super(name) 
//     }
//     makeSound () {
//         console.log('Гав-гав')
//     }
// }

// class Horse extends Animal {
//     constructor (name) {
//         super(name) 
//     }
//     makeSound () {
//         console.log('Иго-го')
//     }
// }


// абстракция
// class footballPlayer{
//     constructor (name, club) {
//         this.name = name
//         this.club = club
//     }
//     shot () {}
//     pass () {}
//     celebrate () {}
// }

// class GK extends footballPlayer {
//     constructor (name, club) {
//     super(name, club)
//     }
//     shot () {
//         console.log('Не очень сильный удар')
//     }
//     pass () {
//         console.log('Вообще не умею')
//     }
//     celebrate () {
//         console.log('Ну так себе')
//     }
// }

//-----------------------------------------------

// 1) Вам дана функция-конструктор, с помощью которой можно создавать экземпляры объектов. Ваша задача состоит в том, чтобы переписать данную функцию на класс (class).

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     };
//     this.setNewStatus = function (newStatus) {
//         this.status = newStatus;
//     };

// }
// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);

// class Student {
//     constructor (name,age) {
//     this.name = name
//     this.age = age
//     this.technologies = []
//     this.status = 'Junior'
//     }
//     setTechnologies (technologies) {
//         this.technologies = [
//          ...this.technologies,
//          ...technologies,
//         ];
//     }
//     setNewStatus (newStatus) {
//         this.status = newStatus;
//     }
// }

// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);


// 2) Ваша компания создает внутренний продукт для облегчения контроля за ростом своих разработчиков. Вам поручили задачу реализовать такой продукт.
// Для начала вам необходимо создать класс Developer, конструктор которого будет принимать 3 параметра:
// 1. fullName - имя разработчика
// 2. age - возраст разработчика
// 3. position - текущая позиция разработчика в компании (например, Junior, Middle, Senior.Инициализируйте все параметры при помощи this. Также создайте внутри конструктора поле technologies, которое по умолчанию будет равно пустому массиву. Кроме этого в классе Developer вам необходимо создать 2 метода:
// 1. code - метод, у которого тело изначально пустое (в фигурных скобках ничего нет)
// 2. learnNewTechnology - данный метод принимает в себя 1 параметр technology, который должен добавляться в конец массива technologies.После проделанных действий у вас должен получиться шаблон Developer, благодаря которому вы будете создавать дочерние классы. Вам сейчас необходимо создать 3 дочерних класса от класса Developer:

// 1. JuniorDeveloper. Конструктор данного класса принимает 2 параметра: fullName и age. Вызовите конструктор родительского класса и передайте туда эти 2 параметра. В качестве 3-го у нас выступает position. Вам необходимо его указать по умолчанию. Напишите значение “Junior” в качестве 3-го параметра вызова родительского конструктора. Кроме этого переопределить метод code, чтобы он выводил в консоль строку “Junior разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript'

// 2. MiddleDeveloper. Проделайте ту же самую работу в конструкторе, что и JuniorDeveloper. Только на место position передавайте значение “Middle”. Метод code у класса MiddleDeveloper должен выводить в консоль строку “Middle разработчик пишет код...”. Массив technologies должен содержать следующие
// технологии: 'HTML', 'CSS', 'JavaScript', ‘React’ 

// 3. SeniorDeveloper. Проделайте ту же самую работу в конструкторе, что и JuniorDeveloper. Только на место position передавайте значение “Senior”. Метод code у класса SeniorDeveloper должен выводить в консоль строку “Senior разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’, ‘NodeJS’.Примечание: когда вы переопределите метод code в дочерних классах, то вы используете принцип Полиморфизм. Тестируйте написанные классы с помощью этого кода:

// class Developer {
//     constructor (fullName, age, position) {
//         this.fullName = fullName
//         this.age = age
//         this.position = position
//         this.technologies = []
//     }
//     code () {}
//     learnNewTechnology (technology) {
//         this.technologies.push(technology)
//     }
// }

// class JuniorDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, 'Junior') 
//         this.technologies = ['HTML', 'CSS', 'JavaScript']
//     }
//     code () {
//         console.log('Junior разработчик пишет код...')
//     }
// }
// class MiddleDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, 'Middle') 
//         this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
//     }
//     code () {
//         console.log('Middle разработчик пишет код...')
//     }
// }
// class SeniorDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, 'Senior') 
//         this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
//     }
//     code () {
//         console.log('Senior разработчик пишет код...')
//     }
// }

// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
// const middleDeveloper = new MiddleDeveloper('Игорь', 25)
// const seniorDeveloper = new SeniorDeveloper('Максим', 30)

// juniorDeveloper.code(); // Junior разработчик пишет код...
// middleDeveloper.code(); // Middle разработчик пишет код…
// seniorDeveloper.code(); // Senior разработчик пишет код...

// console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); // 'Анастасия', 20, 'Junior'

// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); // 'Игорь', 25, 'Middle'

// console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); // 'Максим', 30, 'Senior'


// 3) Создать класс Device который создает объекты с полем isSwitchedOn (булево) и методом .switch() оторый переключает флаг isSwitchedOn с true на false и наоборот. Создать класс Smartphone, который принимает model и price и создает объект с этими полями. У созданного объекта в прототипе должен быть метод .callSmbd(string) оторый выводит в консоль сообщение "you are calling ${string}". Этот метод работает только если девайс isSwitchedOn === true, иначе вывести сообщение "your device is switched off, you can't call anyone".

// class Device {
//    constructor () {
//        this.isSwitchedOn = false
//    }
//    switch () {
//     this.isSwitchedOn = !this.isSwitchedOn
//    }
// }

// class Smartphone extends Device{
//     constructor (model, price) {
//         super ()
//         this.model = model
//         this.price = price
//     }
//     #battery = 100
//     callSomebody (name) {
//         if (this.isSwitchedOn && this.#battery > 0) {
//             this.#battery -= 20
//             if (this.#battery === 0) {
//                 this.isSwitchedOn = false
//             }
//             console.log(`You are calling to ${name}`)
//         } else {
//             console.log('Your device is switched off, you cant call anyone')
//         }
//     }
//     charge () {
//        setTimeout (() => {
//         this.#battery = 100
//         this.isSwitchedOn = true
//         console.log(this)
//        },2000)  
//     }
// }

// const honor = new Smartphone('Honor P30 Lite', 250)

// honor.switch()
// honor.callSomebody('John')
// honor.callSomebody('John')
// honor.callSomebody('John')
// honor.callSomebody('John')
// honor.callSomebody('John')
// honor.callSomebody('John')

// honor.charge()
// setTimeout (() => {
//     honor.callSomebody('David')
// },3000)

