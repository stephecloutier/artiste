
/*global window*/
(function () {
    "use strict";

    let $icon = document.getElementById("navIconSVG");
    let $nav = document.getElementById("menuList");

    const fToggleNav = function () {
        $icon.classList.toggle("open");
        $nav.classList.toggle("nav--transition");
    }

    const fPageIsLoaded = function () {
        $icon.addEventListener("click", fToggleNav, false);
    };

    // gestion de l'événement "load" pour démarrer le script
    window.addEventListener("load", fPageIsLoaded, false);
}());
