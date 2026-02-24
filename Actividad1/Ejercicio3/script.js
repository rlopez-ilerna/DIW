$(document).ready(function() {

    $("#btnAgregar").click(function() {

        // 1️⃣ Capturar valor del input
        var texto = $("#miInput").val();

        // Evitar añadir vacío
        if (texto.trim() !== "") {

            // 2️⃣ Añadir nuevo <li> al final de la lista
            $("#miLista").append("<li>" + texto + "</li>");

            // 3️⃣ Limpiar el input
            $("#miInput").val("");
        }

    });

});