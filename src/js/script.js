// 'use strict';
//
// $(document).ready(function () {
// 	$('#navIcon').click(function () {
// 		$(this).toggleClass('open');
// 	});
// });


/*global window*/
(function () {
    "use strict";

    let $icon = document.getElementById("navIcon");

    const fToggleNav = function () {
        $icon.classList.toggle("open");
    }

    const fPageIsLoaded = function () {
        $icon.addEventListener("click", fToggleNav, false);
    };

    // gestion de l'événement "load" pour démarrer le script
    window.addEventListener("load", fPageIsLoaded, false);
}());
