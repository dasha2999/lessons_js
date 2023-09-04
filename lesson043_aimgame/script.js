const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const challengeList = document.querySelector('#challenge-list')
const restartBtn = document.querySelector('#restart')

let diff
let time = 0;
let score = 0;
let intervalID
let missClicks = 0
let minCircleSize 
let maxCircleSize

const COLORS = ['#EC53B0', '#0E21A0', '#FF9B50', '#DB005B', '#1A5D1A']

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});


challengeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('challenge-btn')) {
        diff = event.target.getAttribute('data-diff');
        console.log(time);
        screens[1].classList.add('up');
        console.log(diff); 
    }
});


timeList.addEventListener('click', (event) => {
    // делегирование событий
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        console.log(time);
        screens[2].classList.add('up');
        startGame(); 
    }
});




board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    } else {
        missClicks++
    }
})

restartBtn.addEventListener('click', () => {
    score = 0
    missClicks = 0
    screens[0].classList.remove('up')
    screens[1].classList.remove('up')
    screens[2].classList.remove('up')
    timeEl.parentNode.classList.remove('hide')
    board.innerHTML = ''
    restartBtn.classList.add('hide')
})

function startGame () {
    if (diff === 'easy') {
        minCircleSize = 40
        maxCircleSize = 60
    } else if (diff === 'medium') {
        minCircleSize = 20
        maxCircleSize = 40
    } else {
        minCircleSize = 10
        maxCircleSize = 20
    }
    intervalID = setInterval(gecreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function gecreaseTime () {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime (value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame () {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h2><span class="primary">Счёт:</span>${score}</h2>
    <h2><span class="miss">Мимо:</span>${missClicks}</h2>
    <h2><span class="primary">Точность:</span>${(score / (score + missClicks) * 100).toFixed(2)}%</h2>`
    clearInterval(intervalID)
    restartBtn.classList.remove('hide')
}

function createRandomCircle () {
    const circle = document.createElement('div')
    const size = getRandomNumber(minCircleSize, maxCircleSize)
    const { width, height } = board.getBoundingClientRect()
    const posX = getRandomNumber(0, width - size)
    const posY = getRandomNumber(0, height - size)
    const circleColor = getRandomColor()
    circle.classList.add('circle')
    circle.style.backgroundColor = circleColor
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${posX}px`
    circle.style.top = `${posY}px`
    board.append(circle)
}

function getRandomColor () {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}


function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

// чит
// function WINNER() {
//     function circleKiller () {
//         const circle = document.querySelector('.circle')
//         if (circle) {
//             circle.click()
//         }
//     }
//     setInterval(circleKiller,100)
// }

