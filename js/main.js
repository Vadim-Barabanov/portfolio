// Burger menu navigation
const navToggle = document.querySelector(".toggle-btn");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

// Change nav background color on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $(".heading");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
