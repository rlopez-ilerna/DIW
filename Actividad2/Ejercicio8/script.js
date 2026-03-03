$(function() {

    var calificacionFija = 0;

    $(".estrella").hover(function() {

        var index = $(this).index();

        $(".estrella").removeClass("activa");
        $(this).addClass("activa").prevAll().addClass("activa");

    }, function() {

        $(".estrella").removeClass("activa");

        if (calificacionFija > 0) {
            $(".estrella").eq(calificacionFija - 1)
                .addClass("activa")
                .prevAll().addClass("activa");
        }

    });

    $(".estrella").click(function() {
        calificacionFija = $(this).index() + 1;
    });

});