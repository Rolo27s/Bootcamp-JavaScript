let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");

    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar sin pagar por la promocion de las 2 AM");
            free = true;
        } else {
            alert(`Son las ${time}:00. La entrada cuesta 15 USD con una copa`);
        }
    } else {
        alert("Lo siento, no puedes pasar.")
    }
}

validarCliente(23);
validarCliente(00);
validarCliente(01);
validarCliente(02);
validarCliente(03);
validarCliente(04);