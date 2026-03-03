$(document).ready(function() {

    $("#miFormulario").submit(function(event) {

        // Limpiar errores anteriores
        $(".error").text("");

        var email = $("#email").val().trim();
        var password = $("#password").val().trim();

        var hayError = false;

        // Validar email vacío
        if (email === "") {
            $("#errorEmail").text("El email no puede estar vacío.");
            hayError = true;
        }

        // Validar contraseña mínima 8 caracteres
        if (password.length < 8) {
            $("#errorPassword").text("La contraseña debe tener al menos 8 caracteres.");
            hayError = true;
        }

        // Si hay error, evitar envío
        if (hayError) {
            event.preventDefault();
        }

    });

});