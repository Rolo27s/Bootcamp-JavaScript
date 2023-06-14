/*
La NASA nos ha contratado y como empresa llevaremos a cabo nuestro primer robot a Marte.

Nuestro robot se mueve 1 metro en cada dirección con el comando
    - Izquierda (L)
    - Derecha (R)
    - Arriba (U)
    - Abajo (D)

La NASA prepara una lista de indicaciones para el movimiento del robot desde la base de 
carga en el ejemplo marcado como punto 0.

Sin embargo, están preocupados porque en caso de una emergencia el robot puede regresar a 
tiempo a la base de carga y quieren que evaluemos el número de movimiento en un
simulador, y les digamos la cantidad de instrucciones máximas que deberíamos enviar al
robot cuando se encuentre en su punto mas lejano para que pueda regresar a la base.

Calcule el numero de instrucciones maximo que debería enviarse al robot para que en algún punto 
del recorrido vuelva a la base

Complete la funcion
*/

let listOfMovements = ['R', 'R', 'U', 'U'];

export function maxInstructions(movements) {
    // Inicia en el origen (0,0)
    let x = 0, y = 0;
    let max = 0;

    movements.forEach(mov => {
        if (mov == 'L') x--;
        if (mov == 'R') x++;
        if (mov == 'D') y--;
        if (mov == 'U') y++;

        let current = Math.abs(x) + Math.abs(y); // Necesitamos del absolute porque estamos midiendo el modulo de los vectores.
        if (current > max) max = current;
    });

    return max;
}