// Selectores
let parrafo = document.getElementById("parrafo");
let links = document.getElementsByTagName("a");
let selClase = document.querySelector(".selClase");

// Juego con el input para modificar atributos. setAttribute, getAttribute, removeAttribute
const texto = document.getElementById("texto");
const infoTexto = document.getElementById("infoTexto");


// Dos parametros. El primero es el nombre del atributo y el segundo el valor del mismo
texto.setAttribute("type", "range");
// El set modifica o crea atributos. Deben ser atributos válidos.

// El get coge el atributo. El parametro es el nombre del atributo
document.write(`</br>Uso del getAttribute en el input: ` + texto.getAttribute("type"));

document.write(`</br>Uso del removeAttribute en el input y trato de mostrarlo: ` + texto.removeAttribute("type") + texto.getAttribute("type"));

/* 
Listado de atributos globales
contenteditable, dir, hidden, style, tabindex, title

    contentEditable = "true/false"
    dir = "rtl/ltr/auto"
    hidden = "true" Si existe va a estar oculto. Para volver a verlo borrar el atributo hidden.
    tabindex = "0, 1, 2, 3, ...." Ordena el indice de tabs si es que se puede focusear
    title = "Nombre descriptivo de algo"
*/

const titleH1 = document.querySelector("h1");
titleH1.style.color = "red";
titleH1.style.backgroundColor = "yellow";



// ClassList. add, remove, item, contains, replace, toggle
const parPru = document.querySelector(".parPru");

parPru.classList.add("grande");

document.write("<br><br>parPru.classList.item(0)<br>" + parPru.classList.item(0) + "<br>");

document.write(parPru.classList.contains("grande")); // Retorna true o false, segun contenga o no el atributo

parPru.classList.toggle("attToChange"); // Si existe lo quita y si no existe lo pone

parPru.classList.add("attToReplace");

parPru.classList.replace("attToReplace", "attReplaced"); // Si se encontro devuelve true y lo reemplaza. Si no se encontro devuelve false.



// textContent, innerHTML, outerHTML
/*
textContent muestra todo el contenido del texto
innerHTML muestra todo el contenido del html
outerHTML muestra todo el contenido del html incluyendo las etiquetas
*/



// createElements, createDocumentFragment
const contenedor = document.querySelector(".contenedor");

// Creamos un elemento LI que sera item. Los elementos tienen que ir en mayus para que JS lo reconozca.
const itemLI = document.createElement("LI");
console.log(itemLI);

const itemP = document.createElement("P");
console.log(itemP);

const itemA = document.createElement("A");
console.log(itemA);

const textA = document.createTextNode("Links");
console.log(textA);

// Ahora auno todo del final al comienzo
itemA.appendChild(textA);
itemP.appendChild(itemA);
itemLI.appendChild(itemP);
console.log(itemLI);

// Tambien se puede usar ItemA.innerHTML = "Links"; Esto sería un texto simple, mientras que con createTextNode sería un objeto texto.

// CreateDocumentFragment
const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);
}

const contenedor2 = document.querySelector(".contenedor2");
contenedor2.appendChild(fragmento);

