document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav-mobile");

    burger.addEventListener("click", () => {
        nav.classList.toggle("header__nav-mobile--active");
    });
});
