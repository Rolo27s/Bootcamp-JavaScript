/*
METODOS DE CADENAS DE TEXTO
https://www.w3schools.com/js/js_strings.asp
https://www.w3schools.com/js/js_string_methods.asp
https://www.w3schools.com/js/js_string_search.asp
https://www.w3schools.com/js/js_string_templates.asp
https://www.w3schools.com/jsref/jsref_obj_string.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

let cadena = "cadena de prueba";

// BUSCAR EN CADENAS
// -------------------------------------------------------------------------------------------------
// concat() - concatena cadenas de texto y retorna la concatenacion
document.write(`<h2>Concat()</h2>`)

let resultado = cadena.concat(" hola"); // Retorno: cadena de prueba hola
document.write(resultado + `</br>`);

// -------------------------------------------------------------------------------------------------
// startsWith() - Mira si la cadena comienza con el argumento. Devuelve true o false.
document.write(`<h2>startsWith()</h2>`)

resultado = cadena.startsWith("cadena");
document.write(resultado + `</br>`); // true

resultado = cadena.startsWith("cadenar");
document.write(resultado + `</br>`); // false

resultado = cadena.startsWith("caden");
document.write(resultado + `</br>`); // true

resultado = cadena.startsWith("cad");
document.write(resultado + `</br>`); // true

resultado = cadena.startsWith("cas");
document.write(resultado + `</br>`); // false

// -------------------------------------------------------------------------------------------------
// endWith() - Lo contrario. Mira si la cadena termina con el argumento. Devuelve true o false.
document.write(`<h2>endsWith()</h2>`)

resultado = cadena.endsWith("cadena");
document.write(resultado + `</br>`); // false

resultado = cadena.endsWith("prueba");
document.write(resultado + `</br>`); // true

resultado = cadena.endsWith("eba");
document.write(resultado + `</br>`); // true

resultado = cadena.endsWith("erba");
document.write(resultado + `</br>`); // false


// -------------------------------------------------------------------------------------------------
// includes() - Una cadena que contiene al argumento. Devuelve true o false
document.write(`<h2>includes()</h2>`)

resultado = cadena.includes("cadena");
document.write(resultado + `</br>`); // true

resultado = cadena.includes("cadenote");
document.write(resultado + `</br>`); // false

resultado = cadena.includes("cadena de");
document.write(resultado + `</br>`); // true

resultado = cadena.includes("cadena de oro");
document.write(resultado + `</br>`); // false

resultado = cadena.includes("cad");
document.write(resultado + `</br>`); // true

resultado = cadena.includes("de");
document.write(resultado + `</br>`); // true

// -------------------------------------------------------------------------------------------------
// indexOf() - Funciona similar al includes pero en lugar de retornar true o false, retorna la posicion donde se encontro ese trozo de cadena. Comienza desde el principio de la cadena.
document.write(`<h2>indexOf()</h2>`)

resultado = cadena.indexOf("cadena");
document.write(resultado + `</br>`); // 0

resultado = cadena.indexOf("cada");
document.write(resultado + `</br>`); // -1. No existe esa cadena de texto.

resultado = cadena.indexOf("ena");
document.write(resultado + `</br>`); // 3

resultado = cadena.indexOf("de pr");
document.write(resultado + `</br>`); // 7

// -------------------------------------------------------------------------------------------------
// lastIndexOf() - Funciona similar al includes pero en lugar de retornar true o false, retorna la posicion donde se encontro ese trozo de cadena. Comienza desde el final de la cadena.
document.write(`<h2>lastIndexOf()</h2>`)

resultado = cadena.indexOf("de");
document.write(resultado + `</br>`); // 2

resultado = cadena.lastIndexOf("de");
document.write(resultado + `</br>`); // 7



// RELLENAR CADENAS
// -------------------------------------------------------------------------------------------------
//padStart(num char, "De que lo relleno") - Rellena un string con un tamaño de N (arg 1), con lo que venga en arg 2.
//padEnd(N, "char"); Lo mismo pero al final del string
document.write(`<h2>padStart() y padEnd()</h2>`)

let string2 = "Manolo";

resultado2 = string2.padStart(10, "X");
document.write(resultado2 + `</br>`); // XXXXManolo

resultado2 = string2.padEnd(10, "X");
document.write(resultado2 + `</br>`); // ManoloXXXX


// -------------------------------------------------------------------------------------------------
//repeat() - repite la cadena un numero determinado. Vale 0. Menos de 0 da error de rango.
document.write(`<h2>repeat()</h2>`)

resultado2 = string2.repeat(3);

document.write(resultado2 + `</br>`); // ManoloManoloManolo



// MODIFICAR CADENAS
/** Otros metodos para transformar cadenas:
 * split() - Divide la cadena en un array de string. Divididos según el divisor que se ponga */
let string3 = "hola, ¿Como estas?. Creo que, al ser lunes, estaras mal."

document.write(`<h2>split()</h2>`)
let resultado3 = string3.split(",");
document.write(resultado3[0] + `</br>`);
document.write(resultado3[1] + `</br>`);
document.write(resultado3[2] + `</br>`);
document.write(resultado3[3] + `</br>`);
document.write(resultado3[4] + `</br>`);

/* substring */
document.write(`<h2>Más métodos de modificación ...()</h2>`);

let cad4 = "ABCDEFG";
let resSubstring = cad4.substring(0,2); // AB. Se indica donde se empieza y donde se acaba. La ultima posicion no se incluye en el return. Matemáticamente sería así: [x,y)
document.write(resSubstring + `</br>`);

// a mayus o a minus
resSubstring = cad4.toLowerCase();
document.write(resSubstring + `</br>`);

resSubstring = cad4.toUpperCase();
document.write(resSubstring + `</br>`);

// toString combierte el tipo de variable a string
let numInt = 1234;
resNum = numInt.toString();
document.write(resNum + `</br>`);

//trim() elimina los espacios en blanco
let stringConEspacios = "       oinwbegopwine     ";
let resTrim = stringConEspacios.trim();
document.write(resTrim + `</br>`);

// tambien tenemos trimStart() y trimEnd()