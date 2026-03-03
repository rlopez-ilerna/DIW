$(document).ready(function() {

    // Mostrar solo el primer bloque al inicio
    $(".contenido").hide().eq(0).show();

    $(".tab").click(function() {

        // Quitar clase activa a todos
        $(".tab").removeClass("activa");

        // Activar pestaña actual
        $(this).addClass("activa");

        // Obtener índice desde data-tab
        var indice = $(this).data("tab");

        // Ocultar todos y mostrar solo el correspondiente
        $(".contenido")
            .hide()
            .eq(indice)
            .show();
    });

});