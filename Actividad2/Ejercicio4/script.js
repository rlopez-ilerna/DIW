$(document).ready(function() {

    // Guardamos la posición inicial del menú
    var posicionMenu = $("#menu").offset().top;

    $(window).scroll(function() {

        var scrollActual = $(window).scrollTop();

        if (scrollActual >= posicionMenu) {
            $("#menu").addClass("sticky");
        } else {
            $("#menu").removeClass("sticky");
        }

    });

});