/* 
Escribimos en consola:
    npm init -y
    npm install standard -D
    npm install vitest -D
    El nombre de la carpeta de testing es exactamente ese porque es el que coge por defecto vitest
*/

// Usando vitest

import { test, expect } from 'vitest'
import { maxInstructions } from '../1';

// Test para comprobar los movimientos para volver desde el punto mas alejado
test('maxInstructions', () => {
    expect(
        maxInstructions(['R', 'R', 'U', 'U'])
    ).toBe(4);

    expect(
        maxInstructions(['R', 'R', 'U', 'L'])
    ).toBe(3);

    expect(
        maxInstructions(['L', 'L', 'L', 'L', 'L'])
    ).toBe(5);

    expect(
        maxInstructions(['R', 'U', 'L', 'D'])
    ).toBe(2);
});

// Usamos en consola el comando npm run test para cargar el test