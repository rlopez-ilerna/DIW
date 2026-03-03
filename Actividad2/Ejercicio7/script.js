$(document).ready(function() {

    $("h3").click(function() {

        var respuestaActual = $(this).next(".respuesta");

        // Si la respuesta clickeada ya está visible, la cerramos
        if (respuestaActual.is(":visible")) {
            respuestaActual.slideUp();
        } else {

            // Cerramos todas
            $(".respuesta").slideUp();

            // Abrimos solo la correspondiente
            respuestaActual.slideDown();
        }

    });

});