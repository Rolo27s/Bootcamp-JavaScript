/* 
Enunciado.
Cofla suspendio 2 asignaturas.
Deberá enviar un formulario de registro para el examen
    - Formulario: nombre completo, email y asignatura
    - Validar todo
    - Enviar al servidor de manera limpia
*/

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if(validarCampos()) {
        alert("Informacion enviada con exito");
    } else {
        alert("Error. No se han podido validar los campos");
    }
});

// Funcion para validar campos
function validarCampos() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const asignatura = document.getElementById("asignatura").value;

    // Expresión regular para validar el formato del email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar que los campos no estén vacíos y cumplan con las reglas establecidas
    if (nombre.trim() === '' || apellidos.trim() === '' || email.trim() === '' || asignatura === '0' || !emailRegex.test(email)) {
        alert('Por favor, complete todos los campos correctamente.');
        return false;
    }

    return true;
}