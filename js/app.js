const header = document.querySelector(".nav");
const links = document.querySelectorAll(".toggleMenu");
const menu = document.querySelector("#openSidebar");
const close = document.querySelector("#close");

window.addEventListener("scroll", function () {
   header.classList.toggle("sticky", window.scrollY > 0);
});

const hideSidebar = () => {
   document.querySelector(".nav__list").classList.toggle("show");
   console.log("Hello");
};

menu.addEventListener("click", hideSidebar);
close.addEventListener("click", hideSidebar);


links.forEach(function (link) {
   link.addEventListener("click", hideSidebar);
})
