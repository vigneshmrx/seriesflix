const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".the-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".the-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
})