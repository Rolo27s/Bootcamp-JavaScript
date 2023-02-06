let pwd_pin = 1234;

while (pin != pwd_pin && pin != "salir") {
    var pin = prompt("Puedes escribir 'salir'\nIntroduce el PIN (4 Digitos): ");
    
    /* Controlo que se ingresen exactamente 4 digitos */
    while (pin.length != 4 && pin != "salir") {
        alert("Ingrese 4 digitos!");
        pin = prompt("Puedes escribir 'salir'\nIntroduce el PIN (4 Digitos): ");
    }

    /* Agrego la condicion de que si era el pin avisar y salir */
    if (pin == pwd_pin) {
        alert("Eso fue correcto!");
        break;
    }
}

if (pin == "salir")
    alert("Saliste del programa. Hasta otra!");