function initHome() {
    const home = document.createElement("div")
    home.classList.add("home")

    

    home.appendChild(createParagraph("Try the best pizza in London!"))
    
    home.appendChild(createParagraph("Order online on Deliveroo or visit us on site"))
    return home
}

function createParagraph(text) {
    const paragraph = document.createElement("p")
    paragraph.textContent = text
    return paragraph
}

function loadHome() {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(initHome())
}

export default loadHome