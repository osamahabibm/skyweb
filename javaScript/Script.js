
$(document).ready(function () {
    // Navbar Scroll
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    // Typed with Span
    var typed = new Typed(".element", {
        strings: ["SkyWeb", "تطوير ويب", "تصميم ويب"],
        smartBackspace: true,
        typeSpeed: 100,
        baceSpeed: 100,
        loop: false,
        loopCount: Infinity,
        startDelay: 1000
    });

    // small nav

    let navbarmoblie = document.querySelector(".navbar");
    document.querySelector('#menu-btn').onclick = () => {
        navbarmoblie.classList.toggle("active");
    }

    // tab
    const currentlocation = location.href;
    const menuItem = document.querySelectorAll('a')
    const menulength = menuItem.length;
    for (let i = 0; i < menulength; i++) {
        if (menuItem[i].href === currentlocation) {
            menuItem[i].className = "active";
        }
    }


});


