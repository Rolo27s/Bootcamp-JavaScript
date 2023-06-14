/*
true - Lo logra
false - No lo logra

F, cantidad de funciones nuevas que escribe Ricardo cada dia
R, las que borra
D, numero de dias del plazo de entrega
T, cantidad de funciones totales que espera el cliente que realice Ricardo
*/

export function willRicardoMakeItAndNotBeFired(D, T, F, R) {
    const functionsPerDay = F - R;
    const functionsDone = functionsPerDay * D;

    return functionsDone >= T;
}