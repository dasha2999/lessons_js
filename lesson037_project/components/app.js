import { JSBlock } from "./js-block.js" 
import { TimerBlock } from "./timer-block.js"
import { JS_CREATION_DATE } from "../constans/settings.js"

export class App {
    #jsBlock
    #timerBlock
    
    constructor () {
        this.#jsBlock = new JSBlock()
        this.#timerBlock = new TimerBlock(JS_CREATION_DATE)
    }

    // метод run, будет запускать наш проект и будет добавлять нужные элементы в DOM

    run () {
        const JSBlockHTML = this.#jsBlock.render()
        const timerBlockHTML = this.#timerBlock.render()
        document.body.append(JSBlockHTML, timerBlockHTML)
    }
}