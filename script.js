let toggle = document.getElementById('toggle')
let navBar = document.getElementById('navbar')
const navLinks = document.querySelector('.nav-links')
toggle.addEventListener("click",  ()=> {
    navLinks.classList.toggle("mobile-menu");
   

});
window.onscroll = () => {
    navBar.classList.remove("active");
    toggle.classList.remove("active");
}
window.onclick = function (event) {
    if (event.target.id !== 'toggle' && event.target.id !== 'navbar') {
        navBar.classList.remove("active");
        toggle.classList.remove("active");
    }
}