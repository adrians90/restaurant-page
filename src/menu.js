function createMenu() {
    const menu = document.createElement("div")
    menu.classList.add("menu")

    menu.appendChild(
        createMenuItem("Salami", "Tomato sauce, Mozarella, Olives, Italian salami")
    )
    menu.appendChild(
        createMenuItem("Zucchini", "Tomato Sauce, Mozarella, Roasted pumpkin, garlic")
    )
    menu.appendChild(
        createMenuItem("Prosciutto", "Mozarella, Prosciutto, Tomato sauce, Ruccola")
    )
    menu.appendChild(
        createMenuItem("Pepperoni", "Tomato Sauce, Pepperoni, Mozarella, Chilli")
    )
    menu.appendChild(
        createMenuItem("Buratta", "Marinara Sauce, Buratta, Pumpkin seeds, Garlic")
    )

    return menu
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    const foodName = document.createElement("h2")
    foodName.textContent = name

    const foodDescription = document.createElement("p")
    foodDescription.textContent = description

    const foodImage = document.createElement("img")
    foodImage.src = `images/dishes/${name.toLowerCase()}.jpg`
    foodImage.alt = `${name}`

    menuItem.appendChild(foodImage)
    menuItem.appendChild(foodName)
    menuItem.appendChild(foodDescription)

    return menuItem
}

function loadMenu() {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createMenu())
}

export default loadMenu