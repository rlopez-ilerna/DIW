$(document).ready(function() {

    // Evento click en el botón
    $("#toggleBtn").click(function() {
        $("#miDiv").slideToggle(500); 
    });

    // Evento mouseenter
    $("#miDiv").mouseenter(function() {
        $(this).css("font-size", "24px");
    });

    // Volver al tamaño normal cuando el ratón se quite
    $("#miDiv").mouseleave(function() {
        $(this).css("font-size", "16px");
    });

});