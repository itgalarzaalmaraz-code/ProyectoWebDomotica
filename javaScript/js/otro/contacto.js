(function () {
  'use strict'

  // Obtener el formulario
  const form = document.querySelector('#contactForm')

  form.addEventListener('submit', function (event) {
    // Si el formulario no es válido según los atributos HTML (required, pattern, etc.)
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      // Aquí entraría la lógica de envío real (AJAX/Fetch)
      event.preventDefault()
      alert('¡Mensaje enviado con éxito! Un técnico se contactará pronto.')
    }

    form.classList.add('was-validated')
  }, false)

  // Validación extra: No permitir números en el campo Nombre
  const nameInput = document.querySelector('#userName')
  nameInput.addEventListener('input', function() {
    this.value = this.value.replace(/[0-9]/g, '')
  })
})()