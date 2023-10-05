document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Captura los valores de los campos de usuario y contraseña
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;
    
    // Expresión regular para validar solo letras en el usuario
    var letrasPattern = /^[A-Za-z]+$/;
    
    // Validación del usuario y contraseña
    if (!usuario.match(letrasPattern) || usuario.length < 5 || usuario.length > 10) {
        alert('El usuario debe contener solo letras y tener entre 5 y 10 caracteres.');
        event.preventDefault(); // Evita que el formulario se envíe
        return;
    }

    if (contraseña.length < 8 || contraseña.length > 20) {
        alert('La contraseña debe tener entre 8 y 20 caracteres.');
        event.preventDefault(); // Evita que el formulario se envíe
        return;
    }
});
