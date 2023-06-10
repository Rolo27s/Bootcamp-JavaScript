// Problema de cofla
document.write(`<p class="coflaTitle">Problema de cofla</p>`);
let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let comprar = confirm(`El alto es ${alto}, el ancho es ${ancho}`);

if(comprar) {
    alert("Compra realizada");
} else {
    alert("Compra cancelada");
}

// Otros ejemplos
const youtubeURL = "https://youtube.com";
window.open(youtubeURL);
// Tambien podemos cerrar ventanas con .close
// El metodo closed devuelve true or false y está preguntando si una ventana esta cerrada

// LOCATION
const href = window.location.href;
document.write(href);

document.write(`</br></br>`);