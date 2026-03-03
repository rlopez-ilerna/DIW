$(document).ready(function() {

    // Boton abrir modal
    $("#btnAbrir").click(function() {
        $("#overlay").fadeIn(300);
        $("#modal").fadeIn(300);
    });

    // Cerrar al hacer clic en botón cerrar
    $("#btnCerrar").click(function() {
        $("#modal").fadeOut(300);
        $("#overlay").fadeOut(300);
    });

    // Cerrar al hacer clic en el overlay
    $("#overlay").click(function() {
        $("#modal").fadeOut(300);
        $("#overlay").fadeOut(300);
    });

});