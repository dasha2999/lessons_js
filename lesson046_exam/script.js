const outputList = document.querySelector('.ingr_out');
const ingrids = document.querySelector('.inridients');


const MAX_INGRIDS_COUNT = 2;


const order = {
    ingridients: [],
};

ingrids.addEventListener('click', (event) => {
    if (event.target.classList.contains('ingridients_button')) {
        newIngrid = event.target.getAttribute('data-ingr');
        if (order.ingridients.length === MAX_INGRIDS_COUNT) {
            order.ingridients.shift();
            outputList.removeChild(outputList.getElementsByTagName('li')[0])
        }
        order.ingridients.push(newIngrid);
        createOrderListItem(newIngrid);
    }
    highlight()
});


function createOrderListItem(text) {
    const orderItem = document.createElement('li');
    orderItem.textContent = text;
    outputList.append(orderItem);
}

function highlight() {
    const buttons = Array.from(ingrids.querySelectorAll('.ingridients_button'))
    buttons.forEach((button) => {
        if (order.ingridients.includes(button.getAttribute('data-ingr'))) {
            button.classList.add('highlight')
        }
    })
}