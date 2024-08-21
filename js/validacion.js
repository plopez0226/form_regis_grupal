function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("regBtn").addEventListener("click", function() {
        // Se detecta el boton de registro
        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const password1 = document.getElementById("password1").value.trim();
        const password2 = document.getElementById("password2").value.trim();
        const terminos = document.getElementById("terminos").checked;

        // Validar que ningún campo esté vacío
        if (!nombre || !apellido || !email || !password1 || !password2) {
            showAlertError("Ningún campo puede estar vacío.");
            return;
        }

        // Validar que la contraseña tenga al menos 6 caracteres
        if (password1.length < 6) {
            showAlertError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password1 !== password2) {
            showAlertError("Las contraseñas no coinciden.");
            return;
        }

        // Validar que se haya marcado el checkbox
        if (!terminos) {
            showAlertError("Debes aceptar los términos y condiciones.");
            return;
        }

        // Si todas las validaciones se cumplen, se llama a la función de éxito
        showAlertSuccess("Registro exitoso.");
});
})