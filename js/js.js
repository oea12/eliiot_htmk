$(function() {
    $('.button').on('click', function (event) {
    if (event) event.preventDefault()
    var $form = $( this ).parent( 'form' );
    register($form)
    })
});
  
  function register($form) {
    var email = $form.find( 'input[type="email"]' );
    if( email.val().trim() === '' ) {
      $form.parent( '.cta' ).find( '.cta-message' ).html( 'Introduce un email válido' );
      return;
    }
    if( !validateEmail( email.val() ) ) {
      $form.parent( '.cta' ).find( '.cta-message' ).html( 'El email introducido no es válido' );
      return;
    }
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
      success: function (data) {
        console.log( data );
        if (data.result === 'success') {
            $form.parent( '.cta' ).find( '.cta-message' ).html( '¡Gracias, tu petición de suscripción fue completada!' );
        } else {
            $form.parent( '.cta' ).find( '.cta-message' ).html( '¡Gracias, tus registros se han actualizado!' );
        }
      }
    })
  };

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }