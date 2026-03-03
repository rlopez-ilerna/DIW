$(function() {

    $("#mover").click(function() {

        $("#cuadrado")
            .animate({ left: "350px" }, 800)
            .animate({ top: "150px" }, 800)
            .animate({ left: "0px" }, 800);

    });

});