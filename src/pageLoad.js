import loadHome from "./home"
import loadMenu from "./menu"
import loadContact from "./contact"

function initHeader() {
    const header = document.createElement("header")
    header.classList.add("header")
    const restName = document.createElement("h1")
    restName.classList.add("rest-name")
    restName.textContent = "Adrian's pizzeria"

    header.appendChild(restName)
    header.appendChild(initNav())
    return header
}

function initNav() {
    const nav = document.createElement("nav")

    const homeBtn = document.createElement("button")
    homeBtn.classList.add("nav-btn")
    homeBtn.textContent = "Home"
    homeBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return
        setActiveBtn(homeBtn)
        loadHome()
    })

    const menuBtn = document.createElement("button")
    menuBtn.classList.add("nav-btn")
    menuBtn.textContent = "Menu"
    menuBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return
        setActiveBtn(menuBtn)
        loadMenu()
    })

    const contactBtn = document.createElement("button")
    contactBtn.classList.add("nav-btn")
    contactBtn.textContent = "Contact"
    contactBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return
        setActiveBtn(contactBtn)
        loadContact()
    })

    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)

    return nav
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".nav-btn")

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active")
        }
    })
    button.classList.add("active")
}

function initMain() {
    const main = document.createElement("main")
    main.classList.add("main")
    main.setAttribute("id", "main")
    return main
}

function initFooter() {
    const footer = document.createElement("footer")
    footer.classList.add("footer")

    const copyright = document.createElement("p")
    copyright.textContent = `Copyright ${new Date().getFullYear()} Adrian Sandu`
    footer.appendChild(copyright)

    return footer
}

function initWebsite() {
    const content = document.getElementById("content")

    content.appendChild(initHeader())
    content.appendChild(initMain())
    content.appendChild(initFooter())

    setActiveBtn(document.querySelector(".nav-btn"))
    loadHome()
}

export default initWebsite