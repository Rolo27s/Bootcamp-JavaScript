## ![ICO](icons/keyframes.png) Intro
**Información básica que rodea al lenguaje JS**

### ¿Qué es JavaScript?
JavaScript es un lenguaje de programación que se ejecuta en el navegador web entre otros entornos.
El motivo de que JavaScript sea tan popular es porque es el lenguaje que entienden los navegadores web.

### ¿Quien creó JavaScript?
JavaScript fue creado por Brendan Eich en 1995. Brendan Eich fue el creador del lenguaje de programación Mocha, que fue renombrado a LiveScript y finalmente a JavaScript.

### ¿Qué se puede hacer con JavaScript?
JavaScript se puede usar para crear aplicaciones web, aplicaciones móviles, juegos, aplicaciones de escritorio, etc.

### ¿Qué es ECMAScript?
ECMAScript es el estándar que define JavaScript.
Podrías entenderlo como ECMAScript es el lenguaje y JavaScript es el dialecto.

### ¿Qué es Node.JS?
Se trata de un entorno de ejecución de JavaScript, con el que podrás ejecutar JavaScript fuera del navegador web.
Lo más habitual es usar Node.js para crear aplicaciones de servidor.

### Sitios web de referencia en tu aprendizaje
Estos sitios web te van a ser muy útiles para aprender JavaScript:
* Mozilla Developer Network
* W3Schools
* JavaScript.info

## ![ICO](icons/keyframes.png) Hola mundo
Generamos el primer codigo **"Hola mundo"** en JS

## ![ICO](icons/keyframes.png) Variables
**Las variables son contenedores que nos permiten almacenar información**

### Scope (Alcance)
* Global
* Funcion
* Bloque

### Declaracion de variables
Para declarar una variable en JavaSCript, usamos las palabras reservadas var, let o const, seguida del nombre de la variable, o constante, y el valor que queremos asignarle, si queremos inicializarla a la hora de la declaración.
> **Note** <br>
> var nombre = "Pepe"; <br>
> let edad = 32; <br>
> const altura = 1.75;
<br>

### var, let y const
Las variables declaradas con **var** pueden ser reasignadas y redeclaradas. Su alcance es **global** sin importar el ámbito del bloque, pero si se declara dentro de una función, su alcance es local a la función. <br>
Las variables declaradas con **let** pueden ser reasignadas, pero no redeclaradas. Su alcance es siempre local. <br>
La palabra reservada *const* más que una variable es una constante, por tanto, no puede ser reasignada ni redeclarada. <br><br>

Los nombres de las variables deben cumplir las siguientes condiciones:
* No pueden empezar por números
* Debe contener solo letras, números o los símbolos _ y $
* No usar ninguna de [estas palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave)
* Usar la convención camelCase

## ![ICO](icons/keyframes.png) Tipos de datos
Hay 3 tipos de datos: Primitivos, complejos y especiales. <br>

### Primitivos
* String: Tipo texto. Irá declarado entre comillas simples, dobles o backticks. "", '', ``.
* Number: Valor numérico. Positivo, negativo, decimal...
* Boolean: Valor lógico. True or False.

### Complejos
* Object: Colección de propiedades. Usamos notación de punto o corchetes
* Array: Colección de valores. Notación de corchetes.

### Especiales
* Null: Valor nulo. No tiene nada dentro.
* Undefined: No definido. Tampoco tiene nada dentro.


## ![ICO](icons/keyframes.png) Condicionales y Operadores lógicos
* if
* else
* else if 
<br><br>
***Para interactuar con los condicionales, necesitaremos usar:***
* && (and)
* || (or)
* ! (negación)
* == (igual)
* === (estrictamente igual)
* != (diferente)
* !== (estrictamente diferente)
* <, <=, >, >= 
<br><br>

## ![ICO](icons/keyframes.png) Ejercicios I
* EJ_1_holaMundo
* EJ_2_variables
* EJ_3_operacionesBasicas
* EJ_4_comparacionBasica
* EJ_5_arrayBasico
* EJ_6_objetoBasico

## ![ICO](icons/keyframes.png) Funciones
Declaracion de función básica:
> function saludar() { <br>
> &emsp;console.log('Hola'); <br>
> } <br>
Una funcion tiene un scope global si está declarada en el mismo. No si la funcion está dentro de otra función. <br>
<br>

Asignación de una función (función anónima):
> const saludar = function() { <br>
> &emsp;console.log('Hola'); <br>
> } <br>
> <br>
> saludar(); <br>
Esto se conoce como función anónima y es útil cuando queremos usar funciones como parámetro de otra(s) funcion(es). <br>
Al ser una función no declarada estrictamente, solo se la puede llamar después de su declaración (como una variable o constante normal). <br>
<br>

Una función tambien puede recibir como parámetro otras funciones:
> function saludar(fn) { <br>
> &emsp; fn() <br>
> } <br>
> <br>
> function decirHola() { <br>
>  &emsp; console.log('Hola') <br>
> } <br>
> saludar(decirHola) <br>
<br>

Un consejo relacionado con ***clean code*** es que como máximo se pasen 3 parámetros a una función. Si es necesario comunicar más información se usarían objetos, estructuras, arrays...
<br>

## ¿Parámetro o argumento?
* Parámetro: inputs de la función cuando es declarada.
* Argumento: Al llamar a la función, son los inputs que necesita para trabajar.
* La función tambien podrá devolver un valor. En caso de no tener un return, por defecto devolverá *undefined*.
Al ejecutar un return, la función se detiene. Funcionaría similar a un break; dentro de un bucle. <br>
*Las variables declaradas dentro de una función tienen un scope solo dentro de esa función*

## ![ICO](icons/keyframes.png) Funciones flecha
Las funciones flecha no tiene su propio **.this**

### Declaracion de una función flecha
> const saludar = () => { <br>
> &emsp; console.log('Hola'); <br>
> } <br>
> saludar ();
<br>

### Caracteristicas:
* No tienen su propio .this
* No necesitan la palabra reservada function
* No necesitan los parentesis si solo tiene un parametro
* No necesitan las llaves si solo tiene una linea de codigo
* No necesitan la palabra reservada return si solo tiene una linea de codigo

Al desarrollar proyectos usando react nos apoyaremos mucho en el uso de funciones flecha.

## ![ICO](icons/keyframes.png) Ejercicios II
* EJ_7_funcionDoble
* EJ_8_funcionCuadrado
* EJ_9_funcionArea
* EJ_10_funcionParImpar
* EJ_11_funcionArray
* EJ_12_funcionPokemon
* EJ_13_funcionesFlecha

## ![ICO](icons/keyframes.png) Bucles
  while, do while, for, for in, for of 
  <br>
  **for in:** Se utiliza para recorrer las propiedades de un objeto
  <br>
  > const persona = { <br>
  > nombre: 'Pepe', <br>
  > edad: 23, <br>
  > ciudad: 'Madrid' <br>
> } <br>
> <br>
> for (const propiedad in persona) { <br>
 > console.log(propiedad) // nombre, edad, ciudad <br>
 > console.log(persona[propiedad]) // Pepe, 23, Madrid <br>
> } <br>
<br>

**for of:** Se utiliza para recorrer los elementos de un array
<br>
> const frutas = ['manzana', 'pera', 'naranja'] <br>
>  <br>
> for (const fruta of frutas) { <br>
 > console.log(fruta) // manzana, pera, naranja <br>
> } <br>
<br>

## ![ICO](icons/keyframes.png) Métodos de array
forEach, filter, find, map, reduce
<br>
* forEach <br>
  Nos permite recorrer el array y ejecutar una funcion por cada elemento del array.
  <br>
  Recibe como parametro una funcion que se ejecutará por cada elemento del array
  <br>
> const array = [1, 2, 3, 4, 5]; <br>
> <br>
> array.forEach((element) => { <br>
>  console.log(element); // 1, 2, 3, 4, 5 <br>
> }); <br>
<br>

* filter <br>
Todo elemento que cumpla la condicion se añadira a un nuevo array
<br>

> const array = [1, 2, 3, 4, 5]; <br>
> <br>
> const filteredArray = array.filter((element) => { <br>
>  return element > 3; <br>
> }); <br>
> <br>
> console.log(filteredArray); // [4, 5] <br>

<br>

* find <br>
Devuelve el primer elemento que cumpla la condicion que pasaremos en la forma de funcion
<br>

> const array = [1, 2, 3, 4, 5]; <br>
> <br>
> const foundElement = array.find((element) => { <br>
>  return element > 3; <br>
> }); <br>
> <br>
> console.log(foundElement); // 4 <br>

<br>
Si no encuentra ningun elemento que cumpla la condición devolvera *undefined*
<br>

* map <br>
Nos permite transformar los elementos de un array
<br>

> const array = [1, 2, 3, 4, 5]; <br>
> <br>
> const arrayConNumerosDobles = array.map((element) => { <br>
>  return element * 2; <br>
> }); <br>
> <br>
> console.log(arrayConNumerosDobles); // [2, 4, 6, 8, 10] <br>

<br>

* reduce <br>
Nos permite reducir un array a un unico valor
<br>

> const array = [1, 2, 3, 4, 5]; <br>
> <br>
> const sumaDeTodosLosNumeros = array.reduce((acumulador, elemento) => { <br>
>  return acumulador + elemento; <br>
> }); <br>
> <br>
> console.log(sumaDeTodosLosNumeros); // 15 <br>

<br>

## ![ICO](icons/keyframes.png) Ejercicios III
*6 Ejericicios sobre funciones, arrays y bucles*
<br>

## ![ICO](icons/keyframes.png) Evaluacion
