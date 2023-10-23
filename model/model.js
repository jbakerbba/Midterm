const menuToggle = document.getElementById("menu-toggle");
const menuButton = document.getElementById("menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

menu.addEventListener("click", () => {
    menu.classList.remove("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        menu.classList.remove("active");
    }
});