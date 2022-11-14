hamburger = document.querySelector(".hamburger")
navBar = document.querySelector(".nav-div-two")
navLink = document.querySelectorAll(".nav-link")
mainSection = document.querySelector(".main-section")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
})

mainSection.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navBar.classList.remove("active")
    })
})
