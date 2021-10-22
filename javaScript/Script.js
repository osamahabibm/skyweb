
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
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // small nav

    let navbarmoblie = document.querySelector(".navbar");
    document.querySelector('#menu-btn').onclick = () => {
        navbarmoblie.classList.toggle("active");
    }

    // tab
    var btncontainer = document.getElementById("navItems");
    var btns = btncontainer.getElementsByClassName("btn")
    for (var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', function () {
            var current = document.getElementsByClassName("activee");
            current[0].className = current[0].className.replace(" activee");
            this.className += " activee";
        });
    }
  
    // navbar onscroll
    window.onscroll = () => {
        navbarmoblie.classList.remove("active");
    }

    
    

});


