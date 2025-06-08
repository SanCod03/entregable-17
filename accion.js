//Implementarán scripts en JavaScript para validaciones de formularios y manejo deeventos.



// Validación de formulario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    alert('Formulario enviado correctamente.');
    return true;
}


