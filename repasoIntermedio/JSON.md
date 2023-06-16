```javascript
// Objeto JavaScript
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'México'
};

// Convertir objeto a formato JSON
const jsonPersona = JSON.stringify(persona);
console.log(jsonPersona);
// Salida: {"nombre":"Juan","edad":30,"ciudad":"México"}

// Convertir formato JSON a objeto
const objetoPersona = JSON.parse(jsonPersona);
console.log(objetoPersona);
// Salida: { nombre: 'Juan', edad: 30, ciudad: 'México' }
```
En este ejemplo, tenemos un objeto JavaScript llamado persona que contiene información sobre una persona, como su nombre, edad y ciudad.

Para convertir este objeto en una cadena de texto en formato JSON, utilizamos el método stringify de JSON. Este método toma un objeto JavaScript y lo convierte en una representación de cadena de texto en formato JSON. En el ejemplo, convertimos el objeto persona en la variable jsonPersona.

Al imprimir jsonPersona, verás que la salida es una cadena de texto que representa el objeto en formato JSON.

Para convertir una cadena de texto en formato JSON de vuelta a un objeto JavaScript, utilizamos el método parse de JSON. Este método toma una cadena de texto en formato JSON y la convierte en un objeto JavaScript. En el ejemplo, convertimos jsonPersona en la variable objetoPersona.

Al imprimir objetoPersona, verás que la salida es un objeto JavaScript que representa la información original de la persona.

De esta manera, los métodos stringify y parse de JSON te permiten convertir objetos JavaScript en formato JSON y viceversa, lo cual es útil para el intercambio de datos entre diferentes sistemas o para almacenar y recuperar datos en el formato JSON.
