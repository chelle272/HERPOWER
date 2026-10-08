// =========================================
// HERPOWER
// Main JavaScript
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Mobile Navigation
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

}


// Close mobile menu when a link is clicked
if (navLinks) {

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });

    });

}