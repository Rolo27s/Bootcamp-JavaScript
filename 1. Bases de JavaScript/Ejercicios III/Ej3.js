const reverseString = (palabra) => {
    return palabra.split('').reverse().join('');
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