$(document).ready(function() {

    $("#btnAgregar").click(function() {

        // Capturar valor del input
        var texto = $("#miInput").val();

        // Evitar añadir vacío
        if (texto.trim() !== "") {

            // Añadir nuevo <li> al final de la lista
            $("#miLista").append("<li>" + texto + "</li>");

            // Limpiar el input
            $("#miInput").val("");
        }

    });

});