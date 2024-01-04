// // // // // // // // // // // // // //
// // // // // HEADER // // // // // // //
// // // // // // // // // // // // // //

// Fonction - Masquer le header au scroll
function masquerHeaderAuScroll() {
    let prevScrollPos = window.scrollY;
    let header = document.querySelector('.header-hide');
    let scrollThreshold = 500; // Ajuster la distance de déclenchement

    window.onscroll = function () {
        let currentScrollPos = window.scrollY;

        if (currentScrollPos > scrollThreshold) {
            if (prevScrollPos > currentScrollPos) {
                header.classList.remove('header-show');
            } else {
                header.classList.add('header-show');
            }
        } else {
            header.classList.remove('header-show');
        }

        prevScrollPos = currentScrollPos;
    };
}

//  ??????
document.addEventListener("DOMContentLoaded", function () {
    masquerHeaderAuScroll();
});