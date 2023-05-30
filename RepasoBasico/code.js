// PARTE DE POO. CLASE
class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    verInfo() {
        document.write(`<p>Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}</p>`);
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }

    ladrar() {
        alert("WAW!");
    }

    set setRaza(newRaza) {
        this.raza = newRaza;
    }

    get getRaza() {
        return this.raza;
    }

    verInfo() {
        document.write(`<p>Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}</p>`);
        document.write(`<p>Mi raza es ${this.raza}</p> </br>`);
    }
}



let perro = new Perro("Perro", 5, "rojo", "doberman");

perro.ladrar();
perro.verInfo();

perro.setRaza = "Pastor Aleman";

perro.verInfo();