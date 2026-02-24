$(document).ready(function() {

  // Al hacer clic en el botón, alternar la clase .destacado en todos los párrafos
  $('#modoLectura').on('click', function() {
    $('p').toggleClass('destacado');
  });

  // Al pasar el ratón sobre un párrafo, añadir clase borde-azul
  $('p').on('mouseenter', function() {
    $(this).addClass('borde-azul');
  });

  // Al retirar el ratón, quitar clase borde-azul
  $('p').on('mouseleave', function() {
    $(this).removeClass('borde-azul');
  });

});