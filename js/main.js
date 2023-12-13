const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
    );
});

// whatsapp btn
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 800) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }

})

// nav bar
$(window).scroll(function () {
    let scr = $(window).scrollTop();
    if (scr > 500) {
        $('.nav__bar').css('backgroundColor', 'var(--nav-bg)');
    }
    else {
        $('.nav__bar').css('backgroundColor', 'transparent');
    }
});