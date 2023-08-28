const form = document.querySelector('#form')
const userName = document.querySelector('#username')
const pass1 = document.querySelector('#pass1')
const pass2 = document.querySelector('#pass2')
const email = document.querySelector('#email')
const btn = document.querySelector('#subm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const STRING_PATTERNS = {
    email: /[a-z]/i,
    username: /[a-z]/i,
    password:  /^[a-z0-9]{6,16}$/i
}

function varifyUserName () {
    const userName = userNameInput.value
    return STRING_PATTERNS.username.test(userName)
}

function verifyPass1 () {
    const pass2 = pass1Input.value
    return STRING_PATTERNS.test(pass1)
}

function verifyPass2 () {
    const pass2 = pass2Input.value
    return STRING_PATTERNS.test(pass2)
}

function varifyPasswords () {
    return pass1Input.value === pass2Input.value
}

function varifyEmail () {
    const email = emailInput.value
    return STRING_PATTERNS.email.test(email)
}

function verifyForm () {
    if (!varifyUserName()) {
        console.log('Enter correct user name')
    } else if (!(verifyPass1() && verifyPass2())) {
        console.log('Password should contain letters, digits')
    } else if (!varifyPasswords()) {
        console.log('Passwords are not the same')
    } else if (!varifyEmail()) {
        console.log('Enter correct email')
    } else {
        console.log('OK')
        form.submit()
    }
}

btn.addEventListener('click', varifyUserName)