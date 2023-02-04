/* Array de objetos */
let pokemon = [
    {
        nombre: 'bulbasaur',
        tipo: 'planta'
    },
    {
        nombre: 'squirtle',
        tipo: 'agua'
    },
    {
        nombre: 'charmander',
        tipo: 'fuego'
    }
];

for (let i = 0; i < pokemon.length; i++){
    
    if (pokemon[i].tipo == "fuego") {
        console.log (pokemon[i].nombre + " es de tipo fuego!");
    } else {
        console.log (pokemon[i].nombre + ` es de tipo ${pokemon[i].tipo}...`);
    }
}