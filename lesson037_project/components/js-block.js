 export class JSBlock {
    #container
    
    constructor () {
        this.#container = document.createElement('div')
        this.#container.className = 'js-block'
    }
    
    render () {
        const mainTitle = document.createElement('h1')
        mainTitle.className = 'main-title'
        mainTitle.textContent = 'JavaScript' 

        const JSImageHTML = document.createElement('img')
        JSImageHTML.className = 'js-image'
        JSImageHTML.src = './assets/js_2.png'

        const foundedText = document.createElement('p')
        foundedText.className = 'founded-text'
        foundedText.textContent = 'С момента создания JS прошло:'

        this.#container.append(mainTitle, JSImageHTML, foundedText)

        return this.#container
    }
}