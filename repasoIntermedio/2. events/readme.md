## Eventos de teclado

input.addEventListener("keydown", (e)=>{
    console.log("Una tecla fue presionada");
});

input.addEventListener("keypress", (e)=>{
    console.log("Una tecla fue presionada y soltada");
});

input.addEventListener("keyup", (e)=>{
    console.log("Una tecla fue soltada");
});

## Eventos de la interfaz
    - error
    - load
    - beforeunload
    - unload
    - resize
    - scroll
    - select

## Timers
El set reciben dos parametros: La funcion a ejecutar y el tiempo en ms para saber cada cuanto ejecutarla

    - setTimeout() - Ejecuta una vez tras x segundos
    - setInterval() - Ejecuta la funcion hasta el infinito
    - clearTimeout()
    - clearInterval()

https://www.w3schools.com/js/js_events.asp