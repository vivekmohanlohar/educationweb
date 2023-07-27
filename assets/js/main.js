const hamburger = document.querySelector(".hamburger")
const primaryNav = document.querySelector(".primary-navigation")


hamburger.addEventListener('click', ()=>{
    primaryNav.classList.toggle("open")
    hamburger.classList.toggle("close")
})