let pwd_pin = 1234;
let numIntentos = 3;

for (let i = 0; i < numIntentos; i++) {
    var pin = prompt("Introduce el PIN (4 Digitos) " + (i+1) + "/" + numIntentos + ": ");
    
    /* Controlo que se ingresen exactamente 4 digitos */
    while (pin.length != 4) {
        alert("Ingrese 4 digitos!");
        pin = prompt("Introduce el PIN: ");
    }

    /* Agrego la condicion de que si era el pin avisar y salir */
    if (pin == pwd_pin) {
        alert("Eso fue correcto!");
        break;
    }
}

if (pin != pwd_pin)
    alert("Lo siento, eso estaba mal.");