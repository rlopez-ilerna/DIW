$(document).ready(function() {

  // Al pulsar un botón "Comprar"
  $('.comprar').on('click', function() {
    // $(this) -> el botón pulsado
    // .siblings('h3') -> selecciona el h3 hermano del botón dentro del mismo contenedor
    $(this).siblings('h3').css('color', 'green');
  });

});