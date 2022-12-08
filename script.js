hamburger = document.querySelector(".hamburger")
navBar = document.querySelector(".nav-div-two")
navLink = document.querySelectorAll(".nav-link")
mainSection = document.querySelector(".main-section")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
})

mainSection.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navBar.classList.remove("active")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navBar.classList.remove("active")
    })
})

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
  
document.getElementById("defaultOpen").click();