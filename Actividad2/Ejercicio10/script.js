$(function() {

    $("#cargar").click(function() {

        $("#lista-usuarios").empty();

        $.get("https://jsonplaceholder.typicode.com/users", function(data) {

            $.each(data, function(index, usuario) {

                $("#lista-usuarios").append(
                    "<li>" + usuario.name + "</li>"
                );

            });

        });

    });

});