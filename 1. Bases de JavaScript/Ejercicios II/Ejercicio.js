/* Funcion 1. Crea una función que reciba un número y devuelva el doble de ese número. */
function nPor2(lugar) {
    let sol;
    let num1 = document.getElementById("n1").value;
    let lug = document.getElementById(lugar);
    sol = num1 * 2;
    lug.innerHTML = num1 + '*' + '2' + '=' + sol;
    console.log({ num1: num1 });
}

/* Funcion 1b. Crea una función flecha que reciba un número y devuelva el doble de ese número. */
const nPor2f = (lugar) => {
    let sol;
    let num1 = document.getElementById("n1").value;
    let lug = document.getElementById(lugar);
    sol = num1 * 2;
    lug.innerHTML = num1 + '*' + '2' + '=' + sol;
    console.log({ num1: num1 });
}

/* ---------------------------------------------------- */
/* Funcion 2. Crea una función que reciba un número y devuelva el cuadrado de ese número. */
function nPorN(lugar) {
    let sol;
    let num1 = document.getElementById("n2").value;
    let lug = document.getElementById(lugar);
    sol = num1 * num1;
    lug.innerHTML = num1 + '*' + num1 + '=' + sol;
    console.log({ num2: num1 });
}

/* Funcion 2b. Crea una función flecha que reciba un número y devuelva el cuadrado de ese número. */
const nPorNf = (lugar) => {
    let sol;
    let num1 = document.getElementById("n2").value;
    let lug = document.getElementById(lugar);
    sol = num1 * num1;
    lug.innerHTML = num1 + '*' + num1 + '=' + sol;
    console.log({ num2: num1 });
}

/* ---------------------------------------------------- */
/* Funcion 3. calcula area de rectangulo */
function bPorH(lugar) {
    let sol;
    let num1 = document.getElementById("base").value;
    let num2 = document.getElementById("altura").value;
    let lug = document.getElementById(lugar);
    sol = num1 * num2;
    lug.innerHTML = num1 + '*' + num2 + '=' + sol;
    console.log({ num1: num1, num2: num2 });
}

/* Funcion 3b. calcula area de rectangulo */
const bPorHf = (lugar) => {
    let sol;
    let num1 = document.getElementById("base").value;
    let num2 = document.getElementById("altura").value;
    let lug = document.getElementById(lugar);
    sol = num1 * num2;
    lug.innerHTML = num1 + '*' + num2 + '=' + sol;
    console.log({ num1: num1, num2: num2 });
}

/* ---------------------------------------------------- */
/* Funcion 4. Par o impar */
function parImpar(lugar) {
    let sol;
    let num1 = document.getElementById("n4").value;
    let lug = document.getElementById(lugar);

    if (num1 % 2 == 0)
        sol = "par";
    else
        sol = "impar";

    lug.innerHTML = num1 + ' es ' + sol;
    console.log({ num1: num1 });
}

/* Funcion 4b. Par o impar */
const parImparf = (lugar) => {
    let sol;
    let num1 = document.getElementById("n4").value;
    let lug = document.getElementById(lugar);

    if (num1 % 2 == 0)
        sol = "par";
    else
        sol = "impar";

    lug.innerHTML = num1 + ' es ' + sol;
    console.log({ num1: num1 });
}

/* ---------------------------------------------------- */
/* Funcion 5. array de personas */
function arrayPersonas() {
    const personas = [
        { nombre: 'Juan', edad: 18 },
        { nombre: 'María', edad: 16 },
        { nombre: 'Pedro', edad: 20 },
        { nombre: 'Pablo', edad: 15 },
        { nombre: 'Laura', edad: 19 },
    ];

    /* Declaro e inicio los comparadores de edad */ 
    let menorEdad = personas[0].edad, mayorEdad = personas[0].edad;
    let nombreMenorEdad = personas[0].nombre, nombreMayorEdad = personas[0].nombre;

    let mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
    console.log("Lista de personas mayores de edad:\n");
    console.log(mayoresDeEdad);

    personas.forEach(persona => {
        if (persona.edad < menorEdad) {
            menorEdad = persona.edad;
            nombreMenorEdad = persona.nombre;
        }
            

        if (persona.edad > mayorEdad) {
            mayorEdad = persona.edad;
            nombreMayorEdad = persona.nombre;
        }  
        }
    );

    console.log("Persona con menor edad: " + nombreMenorEdad + ' con ' + menorEdad);

    console.log("Persona con mayor edad: " + nombreMayorEdad + ' con ' + mayorEdad);

    return mayoresDeEdad;
}

/* Convertir la funcion array de personas a funcion flecha es tan simple como esto */
/* const arrayPersonasf = () => {
    // Contenido de la funcion
} */

/* ------------------------------------------------------------ */
/* Funcion que reciba un array de pokemon y muestre por consola */

/* Array de objetos */
let misPokemons = [
    {
        nombre: 'bulbasaur',
        tipo: 'planta'
    },
    {
        nombre: 'squirtle',
        tipo: 'agua'
    },
    {
        nombre: 'charmander',
        tipo: 'fuego'
    }
];

/* Estoy usando una funcion flecha dentro del forEach */
function arrayPokemons(misPokemons) {
    misPokemons.forEach(pokemon => {
        console.log(pokemon.nombre + ' es de tipo ' + pokemon.tipo);
    });
}

/* Escribir la funcion de tipo flecha sería */
/* const arrayPokemonsf = (misPokemons) => {contenido de la funcion} */