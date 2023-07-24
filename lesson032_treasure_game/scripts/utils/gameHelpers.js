import { hints } from "../constants/hints.js";
import { generateTreasureCoords } from "./generateTreasureCoords.js";
import { getDistanceToTreasure } from "./getDistanceToTreasure.js";


const hint = document.getElementById('hint')
const treasureMap = document.querySelector('[alt="map"]')

let treasureCoords = generateTreasureCoords(treasureMap, 50);

function startNewGame () {
    // удаляем окно из DOM  с помощью метода remove
    document.getElementsByClassName('popup')[0].remove()
    // генерируем новые координаты клада
    treasureCoords = generateTreasureCoords(treasureMap, 50);
    // добавляем слушателя события обратно
    treasureMap.addEventListener('click', mapClickHandler)  
}

function openPopUp () {
    const mapWrapper = document.getElementById('map_wrapper')
    // создаем div для окна
    const popup = document.createElement('div')
    popup.classList.add('popup')
    popup.style.left = treasureCoords.x + 'px'
    popup.style.top = treasureCoords.y + 'px'

    // создаем button для запуска новой игры в окне
    const btnNewGame = document.createElement('button')
    btnNewGame.textContent = 'Start new game'
    btnNewGame.classList.add('start')
    btnNewGame.addEventListener('click', startNewGame)

    // добавляем сообщение в окно
    const winMessage = document.createElement('span')
    winMessage.textContent = 'YOU WON!'

    // добавляем на страницу
    popup.append(winMessage)
    popup.append(btnNewGame)
    mapWrapper.append(popup)
}
function endGame () {
    // удаляем слушателя события
    treasureMap.removeEventListener('click', mapClickHandler)
    openPopUp ()
}


export function mapClickHandler ({ offsetX, offsetY }) {
    // в аргументах функции применили деструктуризацию, координаты клика пользователя из объекта события (event)
    const userClickCoords = {
        x: offsetX,
        y: offsetY
    };

    generateHint (getDistanceToTreasure (userClickCoords, treasureCoords), hint)

    getDistanceToTreasure (userClickCoords, treasureCoords)
}

function removePreviousClass (elem) {
    // проверяем если ли у элемента класс и если есть удаляем его, cls - сокращенно class
    hints.forEach((cls) => {
       if (elem.classList.contains(cls)) {
          elem.classList.remove(cls)
       }
    })
}

function makeHint (hintName, elem) {
    elem.classList.add(hintName)
    elem.textContent = hintName
}

function generateHint (distance, element) {
    removePreviousClass(element)

    if (distance < 10) {
        makeHint ('hot', element)
        endGame()
    } else if (distance < 50) {
        makeHint ('warm', element)
    } else if (distance < 100) {
        makeHint ('medium', element)
    } else if (distance < 150) {
        makeHint ('cold', element)
    } else if (distance < 200) {
        makeHint ('winter', element)
    }
} 