// METODOS DE ARRAYS
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// TRANSFORMADORES DE ARRAYS
let nombres = ["pedro", "maría", "jorge"];
document.write("Array inicial: " + nombres + `</br>`);
document.write(`</br>`);

// POP elimina el ultimo elemento del array y lo devuelve.
let resultado = nombres.pop();
document.write(`<b>POP</b></br>`);
document.write("Retorna: " + resultado + `</br>`);
document.write("Array modificado: " + nombres + `</br>`);
document.write(`</br>`);

// SHIFT elimina el primer elemento del array y lo devuelve
nombres = ["pedro", "maría", "jorge"];
document.write(`<b>SHIFT</b></br>`);
resultado = nombres.shift();
document.write("Retorna: " + resultado + `</br>`);
document.write("Array modificado: " + nombres + `</br>`);
document.write(`</br>`);

// PUSH agrega un elemento al array al final. Devuelve la cantidad de elementos que contiene el array.
nombres = ["pedro", "maría", "jorge"];
document.write(`<b>PUSH</b></br>`);
resultado = nombres.push("juancito");
document.write("Retorna: " + resultado + `</br>`);
document.write("Array modificado: " + nombres + `</br>`);
document.write(`</br>`);

// REVERSE. Invierte el orden del array. Devuelve el propio array invertido.
nombres = ["pedro", "maría", "jorge"];
document.write(`<b>REVERSE</b></br>`);
resultado = nombres.reverse();
document.write("Retorna: " + resultado + `</br>`);
document.write("Array modificado: " + nombres + `</br>`);
document.write(`</br>`);

// UNSHIFT() Agrega uno o mas elementos al inicio del array y devuelve la cantidad de elementos que contiene el array
nombres = ["pedro", "maría", "jorge"];
document.write(`<b>UNSHIFT</b></br>`);
resultado = nombres.unshift("jaimito", "antonio");
document.write("Retorna: " + resultado + `</br>`);
document.write("Array modificado: " + nombres + `</br>`);
document.write(`</br>`);

// SORT. Ordena el array.
nombres = ["pedro", "maría", "jorge"];
document.write(`<b>SORT</b></br>`);
resultado = nombres.sort();
document.write("Retorna: " + resultado + `</br>`);
document.write("Array modificado: " + nombres + `</br>`);
document.write(`</br>`);

// SPLICE. Elimina elementos del array. Si es necesario inserta elementos. Devuelve el elemento eliminado.
nombres = ["pedro", "maría", "jorge"];
document.write(`<b>SPLICE</b></br>`);
resultado = nombres.splice(1, 1, "paola"); // Estoy eliminando desde la posicion 1, un elemento y en esa posicion estoy insertando a paola.
document.write("Retorna: " + resultado + `</br>`);
document.write("Array modificado: " + nombres + `</br>`);
document.write(`</br>`);

// ACCESORES DE ARRAYS

let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];

// JOIN no modifica el array original. Guarda el array en una cadena de texto.
document.write(`<b>JOIN</b></br>`);
resultado = numeros.join(" - "); // La diferencia entre JOIN y toString es que podemos decirle como separar los elementos del array
document.write("Retorna string: " + resultado + `</br>`);
document.write("Array original: " + numeros + `</br>`);
document.write(`</br>`);

// SLICE. Devuelve una parte del array. Es como el substring pero en arrays.
numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write(`<b>SLICE</b></br>`);
resultado = numeros.slice(1, 3); // El elemento de cierre no se incluye
document.write("Retorna: " + resultado + `</br>`);
document.write("Array original: " + numeros + `</br>`);
document.write(`</br>`);

// Otros metodos vistos en cadenas como toString, indexOf, lastIndexOf, includes... funcionan igual 

// REPETICION

// FILTER. Le podemos dar una condicion al array nuevo
document.write(`<b>FILTER</b></br>`);
resultado = numeros.filter(
    (numero) => numero.length > 5
);
document.write("Retorna: " + resultado + `</br>`);
document.write("Array original: " + numeros + `</br>`);
document.write(`</br>`);

// FOREACH
document.write(`<b>FOREACH</b></br>`);
resultado = numeros.forEach(
    (numero) => { document.write(numero + `</br>`) }
);
document.write("Retorna: " + resultado + `</br>`);
document.write("Array original: " + numeros + `</br>`);
document.write(`</br>`);