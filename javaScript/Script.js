
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



    // small nav
    let navbarmoblie = document.querySelector(".navbar");
    document.querySelector('#menu-btn').onclick = () => {
        navbarmoblie.classList.toggle("active");
    }

    // tab activee
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

      // Typed with Span en
      var typed_en = new Typed(".element-en", {
        strings: ["SkyWeb", "web development", "web design"],
        smartBackspace: true,
        typeSpeed: 100,
        baceSpeed: 100,
        loop: true,
        loopCount: Infinity,
          startDelay: 1000,
    });

    

});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

    // Typed with Span ar
    var typed_ar = new Typed(".element-ar", {
        strings: ["SkyWeb", "تطوير ويب", "تصميم ويب"],
        smartBackspace: true,
        typeSpeed: 100,
        baceSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000,
    });


  

