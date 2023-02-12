const reverseString = (palabra) => {
    return palabra.split('').reverse().join('');

    /* 
    split(): este método divide un string en un array de subcadenas basadas en un separador especificado. En este caso, el separador es la cadena vacía (''), lo que significa que cada carácter del string original será un elemento en el nuevo array.

    reverse(): este método invierte el orden de los elementos en un array. Cuando se aplica a nuestro nuevo array de caracteres, también invierte el orden de los caracteres en el string.

    join(): este método une todos los elementos de un array en una sola cadena, utilizando un separador especificado. En este caso, el separador es la cadena vacía (''), lo que significa que los caracteres se unirán sin separación. 
    */
}

const comprobarPalindromo = (comprPalabra) => {
    comprPalabra = comprPalabra.toLowerCase();
    if (reverseString(comprPalabra) === comprPalabra) {
        console.log(comprPalabra + " es palindromo");
    }
    else {
        console.log(comprPalabra + " NO es palindromo");
    }
}

comprobarPalindromo("Jimena");
comprobarPalindromo("Sometemos");
comprobarPalindromo("Anilina");
comprobarPalindromo("Somos o n o somos");

console.log("\nAhora un array de strings:\n");

const arrayDePalabras = ["Jimena", "Sometemos", "Anilina", "Somos o n o somos"];

for (let i = 0; i < arrayDePalabras.length; i++) {
    comprobarPalindromo(arrayDePalabras[i]);
}