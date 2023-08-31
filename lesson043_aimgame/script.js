const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const limeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    // делегирование событий
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        console.log(time)
        screens[1].classList.add('up')
    }
})

function startGame () {
    console.log('start')
}

function gecreaseTime () {

}

function setTime () {

}

function finishGame () {

}

function createRandomCircle () {

}

function getRandomColor () {

}

function getRandomNumbers () {

}