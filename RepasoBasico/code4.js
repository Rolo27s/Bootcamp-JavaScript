/* 
Tienda de moviles
Hay 3 modelos disponibles.
* Desarrollar atributos para los moviles
    - color
    - peso
    - resolucion de pantalla
    - resolucion de camara
    - Ram
* Desarrollar metodos para los moviles
    - Encender
    - Reiniciar
    - Apagar
    - Tomar foto
    - Grabar
*/
/* Las convenciones son:
Mayuscula la primera letra de la clase y minuscula tanto metodos como atributos. Siempre usando estilo camelCase */

class Movil {
    constructor(color, peso, resPant, resCam, ram) {
        this.color = color;
        this.peso = peso;
        this.resPant = resPant;
        this.resCam = resCam;
        this.ram = ram;
        this.estado = false; //false será apagago y true encendido
    }

    encenderApagar() {
        if(this.estado == false) {
            alert("Bienvenido a tu terminal movil.");
            this.estado = true;
        } else {
            alert("Apagando dispositivo.");
            this.estado = false;
        }
    }

    reiniciar() {
        if(this.estado == true) {
            alert("Reiniciando el terminal.");
        } else {
            alert("Mensaje de error en reiniciar: 'El movil esta apagado'");
        }
    }

    tomarFoto() {
        if(this.estado == true) {
            alert(`Se tomo una foto a resolucion de ${this.resCam}`);
        } else {
            alert("Mensaje de error en tomar foto: 'El movil esta apagado'");
        }
    }

    grabar() {
        if (this.estado == true) {
            alert(`Se grabo un video a resolucion de ${this.resCam}`);
        } else {
            alert("Mensaje de error en grabar: 'El movil esta apagado'");
        }
    }

    mostrarInfo() {
        return `<div>
        Color: ${this.color} </br>
        Peso: ${this.peso} </br>
        Resolucion de pantalla: ${this.resPant} </br>
        Resolucion de camara: ${this.resCam} </br>
        Ram: ${this.ram} </br>
        </div></br>`;
    }

}

let info;

// Instanciacion de 3 objetos de clase Movil
const movil1 = new Movil("rojo", 150, 5, 1080, 1);
info = movil1.mostrarInfo();
document.write(info);
/* 
//Probando los metodos
movil1.encenderApagar();
movil1.tomarFoto();
movil1.grabar();
movil1.reiniciar();
movil1.encenderApagar(); */

const movil2 = new Movil("azul", 160, 5.1, 1080, 2);
info = movil2.mostrarInfo();
document.write(info);

const movil3 = new Movil("verde", 120, 4.1, 2048, 4);
info = movil3.mostrarInfo();
document.write(info);


// Clase que hereda de Movil
class MovilGamaAlta extends Movil {
    constructor(color, peso, resPant, resCam, ram, resCam2) {
        super(color, peso, resPant, resCam, ram);
        this.resCam2 = resCam2;
    }
}