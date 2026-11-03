const menuButton = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".nav-bar");

function toggleMenu() {
    const isOpen = navBar.classList.toggle("active");

    if (isOpen) {
        menuButton.innerHTML = '<img src="Pictures/close.svg" alt="">';
        document.body.style.overflow = "hidden";
    } else {
        menuButton.textContent = "☰";
        document.body.style.overflow = "";
    }
}

menuButton.addEventListener("click", toggleMenu);