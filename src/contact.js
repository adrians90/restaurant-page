function createContact() {
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const phoneNo = document.createElement("p")
    phoneNo.textContent = "Phone number: 02012 345 679"

    const address = document.createElement("p")
    address.textContent = "Address: 123 Main Street, Some City"

    contact.appendChild(phoneNo)
    contact.appendChild(address)

    return contact
}

function loadContact() {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createContact())
}

export default loadContact