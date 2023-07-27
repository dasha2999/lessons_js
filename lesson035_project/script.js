const button = document.querySelector('.btn')
const wrapper = document.querySelector('.wrapper')

const USERS_URL = 'https://reqres.in/api/users?page=1'


button.addEventListener('click', () => {
    fetch(USERS_URL)
        .then((response) => response.json()
        )
        .then((jsonData) => {
            jsonData.data.forEach((user) => wrapper.append(createCard(user)))
        })
})

function createCard({ avatar, first_name, last_name }) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card');

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img_wrapper');

    const ava = document.createElement('img');
    ava.src = avatar;

    imgWrapper.append(ava);

    const firstName = document.createElement('div');
    firstName.textContent = first_name;

    const lastName = document.createElement('div');
    lastName.textContent = last_name;
    
    cardWrapper.append(imgWrapper, firstName, lastName);
    return cardWrapper;
}