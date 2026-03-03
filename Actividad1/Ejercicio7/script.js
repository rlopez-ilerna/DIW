$(document).ready(function() {

  $('#cuadrado').on('click', function() {
    $(this)
      // Mover 200px a la derecha
      .animate({ left: '200px' }, 1000)
      // Reducir opacidad al 50%
      .animate({ opacity: 0.5 }, 1000)
      // Volver a la posición original y recuperar opacidad
      .animate({ left: '0px', opacity: 1 }, 1000);
  });

});