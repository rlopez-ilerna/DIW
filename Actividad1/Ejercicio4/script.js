$(document).ready(function() {

  function validarFormulario() {
    const nombre = $('#nombre').val().trim();
    const email = $('#email').val().trim();
    let emailValido = true;

    // Mostrar error si el email no tiene "@"
    if (email !== '' && !email.includes('@')) {
      $('#emailError').text('El email debe contener "@"');
      emailValido = false;
    } else {
      $('#emailError').text('');
    }

    // Activar botón solo si ambos campos tienen contenido y email válido
    $('#enviar').prop('disabled', !(nombre !== '' && email !== '' && emailValido));
  }

  // Validar mientras se escribe
  $('#nombre, #email').on('input', validarFormulario);

  // Evitar envío real del formulario
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado correctamente!');
  });

});