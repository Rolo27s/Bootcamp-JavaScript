```javascript
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Simulando éxito o error en la obtención de datos

      if (exito) {
        const datos = { id: 1, nombre: 'Ejemplo' };
        resolve(datos); // Resuelve la Promesa con los datos obtenidos
      } else {
        reject(new Error('Error al obtener los datos.')); // Rechaza la Promesa con un error
      }
    }, 2000);
  });
}

async function miFuncion() {
  console.log('Inicio de la función');

  try {
    const resultado = await obtenerDatos();
    console.log('Datos obtenidos:', resultado);
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('Fin de la función');
}

miFuncion();
```
En este ejemplo, tenemos una función obtenerDatos que devuelve una Promesa. Dentro de esta Promesa, simulamos una tarea asíncrona utilizando setTimeout para esperar 2 segundos antes de resolverla o rechazarla.

Si la tarea es exitosa, resolvemos la Promesa con un objeto que contiene los datos obtenidos. En caso de error, rechazamos la Promesa con un objeto Error que describe el problema.

En la función miFuncion, declaramos async para poder utilizar await. Dentro de miFuncion, usamos await para esperar a que la Promesa devuelta por obtenerDatos se resuelva o sea rechazada.

Utilizamos un bloque try-catch para capturar posibles errores. Si la Promesa se resuelve correctamente, imprimimos los datos obtenidos. Si la Promesa es rechazada, capturamos el error y lo imprimimos en la consola.

Al ejecutar miFuncion, si la tarea asíncrona es exitosa, verás que se imprime "Inicio de la función", luego hay una pausa de 2 segundos y finalmente se imprime "Datos obtenidos: { id: 1, nombre: 'Ejemplo' }" y "Fin de la función".

Si la tarea asíncrona falla, se imprimirá el mensaje de error correspondiente en lugar de los datos.

De esta manera, puedes utilizar resolve y reject para controlar el flujo de una Promesa y manejar los errores de manera adecuada al utilizar await y async.
