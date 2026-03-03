$(document).ready(function() {

    $(".filtros button").click(function() {

        var filtro = $(this).data("filtro");

        if (filtro === "todos") {

            $(".item").fadeIn(300);

        } else {

            $(".item").each(function() {

                if ($(this).data("categoria") === filtro) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }

            });

        }

    });

});