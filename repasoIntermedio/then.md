En JavaScript, el método then se utiliza en las Promesas para encadenar operaciones o acciones que se deben realizar después de que una Promesa se haya resuelto exitosamente. El método then acepta una o dos funciones de devolución de llamada como argumentos: una para el caso de éxito y opcionalmente otra para el caso de rechazo.

La sintaxis básica de then es la siguiente:
```javascript
promesa.then(onFulfilled, onRejected);
```

* onFulfilled: Es una función de devolución de llamada (opcional) que se ejecuta cuando la Promesa se resuelve correctamente. Esta función recibe como argumento el valor con el que se resolvió la Promesa.
* onRejected: Es una función de devolución de llamada (opcional) que se ejecuta cuando la Promesa es rechazada. Esta función recibe como argumento el motivo del rechazo, generalmente un objeto Error que contiene información sobre el error ocurrido.

El método then devuelve una nueva Promesa que representa el resultado de la ejecución de la función de devolución de llamada. Esto permite encadenar múltiples then y realizar operaciones adicionales en cada etapa.

Aquí tienes un ejemplo que ilustra el uso de then en una cadena de Promesas:
```javascript
function obtenerDatos() {
  return new Promise(resolve => {
    setTimeout(() => {
      const datos = { id: 1, nombre: 'Ejemplo' };
      resolve(datos);
    }, 2000);
  });
}

function procesarDatos(datos) {
  return new Promise(resolve => {
    setTimeout(() => {
      const resultado = `Datos procesados: ${datos.nombre.toUpperCase()}`;
      resolve(resultado);
    }, 2000);
  });
}

obtenerDatos()
  .then(datos => {
    console.log('Datos obtenidos:', datos);
    return procesarDatos(datos);
  })
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```
En este ejemplo, la función obtenerDatos devuelve una Promesa que se resuelve después de 2 segundos con un objeto de datos. La función procesarDatos también devuelve una Promesa que se resuelve después de 2 segundos con el resultado del procesamiento de los datos.

Utilizamos then para encadenar las operaciones. En el primer then, imprimimos los datos obtenidos y luego llamamos a procesarDatos con los datos. La Promesa devuelta por procesarDatos se encadena a través de otro then, donde imprimimos el resultado del procesamiento.

Si en cualquiera de las etapas se produce un error, se capturará mediante catch y se imprimirá un mensaje de error correspondiente.

De esta manera, el método then nos permite encadenar acciones en una secuencia lógica y realizar operaciones adicionales después de que una Promesa se haya resuelto correctamente. Esto facilita la escritura de código asíncrono más legible y estructurado.
