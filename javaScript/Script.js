
$(document).ready(function () {
   // Navbar Scroll
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    // Typed with Span
    var typed = new Typed(".element", {
        strings: ["اسامة ايهاب حبيب", "مطور ويب", "مصمم", "رجل اعمال"],
        smartBackspace: true,
        typeSpeed: 100,
        baceSpeed: 100,
        loop: false,
        loopCount: Infinity,
        startDelay: 1000
    });


});

let navbarmoblie = document.querySelector(".navbar");
document.querySelector('#menu-btn').onclick = () => {
    navbarmoblie.classList.toggle("active");
}