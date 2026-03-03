$(document).ready(function() {

    // Agregar elementos
    $("#btnAgregar").click(function() {

        var texto = $("#miInput").val();

        if (texto.trim() !== "") {

            // Añadimos el botón eliminar dentro del <li>
            $("#miLista").append(
                "<li>" + texto + 
                " <button class='btnEliminar'>Eliminar</button></li>"
            );

            $("#miInput").val("");
        }

    });

    // Delegación de eventos para eliminar elementos dinámicos
    $("#miLista").on("click", ".btnEliminar", function() {

        // "this" es el botón presionado
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });

    });

});