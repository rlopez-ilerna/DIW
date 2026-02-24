$(document).ready(function() {

  $('#cuadrado').on('click', function() {
    $(this)
      // 1. Mover 200px a la derecha
      .animate({ left: '200px' }, 1000)
      // 2. Reducir opacidad al 50%
      .animate({ opacity: 0.5 }, 1000)
      // 3. Volver a la posición original y recuperar opacidad
      .animate({ left: '0px', opacity: 1 }, 1000);
  });

});