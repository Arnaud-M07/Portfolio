// // // // // // // // // // // // // //
// // // // // HEADER // // // // // // //
// // // // // // // // // // // // // //

// Fonction - Masquer le header au scroll
function masquerHeaderAuScroll() {
    let prevScrollPos = window.scrollY;
    let header = document.querySelector('.header-hide');
    let navbar = document.querySelector('.navbar');
    let scrollThresholdNavbar = 300; // Ajuster la distance de déclenchement pour la navbar
    let scrollThresholdBackground = 100; // Ajuster la distance de déclenchement pour le background

    window.onscroll = function () {
        let currentScrollPos = window.scrollY;

        if (currentScrollPos > scrollThresholdNavbar) {
            if (prevScrollPos > currentScrollPos) {
                navbar.classList.remove('header-show');
            } else {
                navbar.classList.add('header-show');
            }
        } else {
            navbar.classList.remove('header-show');
        }

        if (currentScrollPos > scrollThresholdBackground) {
            if (prevScrollPos > currentScrollPos) {
                header.classList.remove('header-show');
                header.style.backgroundColor = 'rgba(20, 20, 20, 0.3)'; // Modifier la couleur de fond
                header.style.backdropFilter = 'blur(10px)'; // Modifier le filtre de fond
            } else {
                header.classList.add('header-show');
                header.style.backgroundColor = 'transparent'; // Réinitialiser la couleur de fond
                header.style.backdropFilter = 'none'; // Réinitialiser le filtre de fond
            }
        } else {
            header.classList.remove('header-show');
            header.style.backgroundColor = 'transparent'; // Réinitialiser la couleur de fond
            header.style.backdropFilter = 'none'; // Réinitialiser le filtre de fond
        }

        prevScrollPos = currentScrollPos;
    };
}

//  ??????
document.addEventListener("DOMContentLoaded", function () {
    masquerHeaderAuScroll();
});


// // // // // // // // // // // // // //
// // // // // HERO BANNER // // // // //
// // // // // // // // // // // // // //

// Animated heading 
// creative / designer / developer
document.addEventListener("DOMContentLoaded", function () {
    var animatedHeading1 = document.getElementById('animated-heading-1');
    var animatedHeading2 = document.getElementById('animated-heading-2');
    var animatedHeading3 = document.getElementById('animated-heading-3');
    // Ajoutez une classe pour déclencher l'animation
    animatedHeading1.classList.add('slide-in');
    animatedHeading2.classList.add('slide-in');
    animatedHeading3.classList.add('slide-in');
});
// &
document.addEventListener("DOMContentLoaded", function () {
    var h1Span = document.querySelector('h1 span');
    // Ajouter la classe 'visible' après un délai de 3 secondes
    setTimeout(function () {
        h1Span.parentElement.classList.add('visible');
    }, 1300); // Délai de 1300 ms (1.3 secondes)
});


// Background fade out 
document.addEventListener("DOMContentLoaded", function () {
    var heroBanner = document.querySelector('.hero-banner');
    var fadeStart = heroBanner.offsetTop + heroBanner.offsetHeight / 4;
    var fadeUntil = heroBanner.offsetTop + heroBanner.offsetHeight / 1.5;

    function updateOpacity() {
        var scroll = window.scrollY;
        var opacity = 0;

        if (scroll > fadeStart && scroll < fadeUntil) {
            opacity = (scroll - fadeStart) / (fadeUntil - fadeStart);
        } else if (scroll >= fadeUntil) {
            opacity = 1;
        }

        heroBanner.style.background = `linear-gradient(rgba(20, 20, 20, ${opacity}), rgba(20, 20, 20, ${opacity})), url('./public/assets/img/hero-bg.jpg')`;
        heroBanner.style.backgroundSize = 'cover';
    }

    updateOpacity();

    window.addEventListener('scroll', updateOpacity);
});



// // // // // // // // // // // // // //
// // // // // SKILLS // // // // // // //
// // // // // // // // // // // // // //


// Mouse Effetct
var box = document.getElementById('box');
var canvas = document.getElementById('canvas');
var boxSize = 100;
var speed = 0.08; // Facteur de vitesse pour le mouvement fluide

var currentX = 0;
var currentY = 0;

function moveBox(e) {
    var canvasRect = canvas.getBoundingClientRect();

    var targetX = e.clientX - canvasRect.left - boxSize / 2;
    var targetY = e.clientY - canvasRect.top - boxSize / 2;

    // Interpolation pour rendre le mouvement plus fluide
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    requestAnimationFrame(function () {
        box.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)';
    });
}

window.addEventListener('mousemove', moveBox);
