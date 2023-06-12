const boton1 = document.getElementById("boton1");

// Event handlers. Ya no se usa porque da mucho problemas
/* boton1.onclick = ()=> {
    alert("Hola");
} */

// Se usan los event listeners. 2 parametros: tipo de evento y funcion a ejecutar.
boton1.addEventListener("click", saludar);

// Para usar funciones en los event listeners, deben estar declaradas como funciones comunes. No valen funciones flecha. No se admiten parámetros en este caso.
// Solo se le puede pasar un parametro 'event' o 'e' que servirá para reconocer el objeto que tiene asociado el evento.
function saludar() {
    alert("Hola");
}

// Usando el parametro  'e' podemos acceder a todas las propiedades del objeto boton2, como por ejemplo e.target
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", (e)=> {
    console.log(e);
});

// En los eventos de mouse, primero se ejecuta el box especifico y luego el genérico. Va de concreto a global. Por defecto event bubbling.
// Si le damos el parametro true al contenedor global, invertimos el orden. Habría que ir caso a caso añadiendo true a cada box si tenemos más de 2. Es como un z-index de CSS pero con eventos.

