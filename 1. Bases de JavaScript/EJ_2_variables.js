/* Declaro las constantes, variables, ... */
/* String */
const nombre = "Francisco Jose";
/* number */
let edad = 33;
/* Boolean */
const mayorDeEdad = true;
/* Object */
let direccion = {
    calle: 'Pensacola',
    numero: 28
};
/* Array */
let coloresFavoritos = ['Azul', 'Negro', 'Blanco', 'Oro'];
let lenguajesFavoritos = ['JavaScript', 'Python', 'Cpp', 'Java'];
/* Asignacion desde array */
let mejorLenguaje = lenguajesFavoritos[0];
let peorLenguaje = lenguajesFavoritos[3];


/* -- Genera elementos en el DOM -- */
function addElement(myInfo) {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode(myInfo);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

/* Llamo a las variables que quiero agregar al DOM */
addElement ("Nombre: " + nombre);
addElement ("Edad: " + edad);
addElement ("Mayor de edad?: " + mayorDeEdad);
addElement ("Direccion: " + direccion.calle + " " + direccion.numero);
addElement ("Colores favoritos: " + coloresFavoritos);
addElement ("Lenguajes favoritos: " + lenguajesFavoritos);
addElement ("Mejor lenguaje: " + mejorLenguaje);
addElement ("Peor lenguaje: " + peorLenguaje);