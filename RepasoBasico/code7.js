// Libreria MATH

let numero = Math.sqrt(25);
document.write(`Raiz cuadrada de 25 = ` + numero + `</br>`);

numero = Math.cbrt(27);
document.write(`Raiz cubica de 27 = ` + numero + `</br>`);

let arrayNum = [3, 14, 543, 23, 47, 78];
let numMax = Math.max(3, 14, 543, 23, 47, 78);
document.write(`El numero maximo del array es ${numMax} </br >`);

let numMin = Math.min(3, 14, 543, 23, 47, 78);
document.write(`El numero minimo del array es ${numMin} </br >`);

let numRand = Math.random() * 100;
document.write(`Un numero random entre el 0 y el 100 es el ${numRand} </br>`);

let numRandRed = Math.round(numRand);
document.write(`Ese numero redondeado es ${numRandRed} </br>`);

// Math floor se usa para estadísticas ya que el uso de random + round es impreciso al querer usar estadisticas
let numFloor = Math.floor((Math.random()*99)+1);
document.write(`Un numero random entre el 0 y el 100 con Floor ${numFloor} </br>`);