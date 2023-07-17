const number = document.querySelector('.counter')
const btnDec = document.querySelector('.dec')
const btnReset = document.querySelector('.reset')
const btnInc = document.querySelector('.inc')

let counter = 0

number.textContent = counter

function setCounterColor () {
    if (counter > 0) {
       number.classList.add('higher')
    } else if (counter === 0) {
    if (number.classList.contains('higher')){
        number.classList.remove('higher')
       } else {
        number.classList.remove('lower')
       }
    } else {
        number.classList.add('lower')
    }
}

btnDec.addEventListener('click', () => {
    number.textContent = --counter
    setCounterColor()
})

btnInc.addEventListener('click', () => {
    number.textContent = ++counter
    setCounterColor()
})

btnReset.addEventListener('click', () => {
    counter = 0
    number.textContent = counter
})

const buttons = [btnDec, btnInc, btnReset]

buttons.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('hovered')
    })
})

buttons.forEach((btn) => {
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hovered')
    })
})


// btnDec.addEventListener('mouseover', () => {
//     btnDec.classList.add('hovered')
// })

// btnInc.addEventListener('mouseover', () => {
//     btnInc.classList.add('hovered')
// })

// btnReset.addEventListener('mouseover', () => {
//     btnReset.classList.add('hovered')
// })


// btnDec.addEventListener('mouseleave', () => {
//     btnDec.classList.add('hovered')
// })

// btnInc.addEventListener('mouseleave', () => {
//     btnInc.classList.add('hovered')
// })

// btnReset.addEventListener('mouseleave', () => {
//     btnReset.classList.add('hovered')
// })

