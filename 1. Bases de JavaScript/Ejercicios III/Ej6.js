/* Funcion que recibe array de strings y devuelva el array ordenado alfabeticamente */
const nombres = [
    "Juan",
    "María",
    "Pedro",
    "Laura",
    "Pablo",
    "Sara",
    "Antonio",
    "Isabel",
    "Javier",
    "Cristina",
    "Manuel",
    "Eva",
    "David",
    "Marta",
    "Jorge",
    "Lucía",
    "Angel",
    "Ana",
    "Francisco",
    "Rosa"
];

const getOrdenarNombres = (array) => {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

console.log(getOrdenarNombres(nombres));

/* Devolver el array sin duplicados y ordenados de menor a mayor */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const getOptimizeNumbers = (num) => {
    const numGood = [];
    let z = 0;

    for (let i = 0; i < num.length; i++) {
        let duplicate = 0;
        for (let j = i+1; j < num.length; j++) {
            if (num[i] == num[j]) {
                duplicate = 1;
            }
        }
        if (duplicate == 0) {
            numGood[z] = num[i];
            z++;
        }
    }
    return numGood;
}
console.log(getOptimizeNumbers(numbers));

/* Dado el siguiente array de objetos crea una funcion que devuelva un array sin los objetos duplicados */

const users = [
    {
        name: 'Juan',
        age: 25,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
        name: 'María',
        age: 30,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {
        name: 'Pedro',
        age: 20,
        city: 'Madrid',
        hobbies: ['fútbol', 'programar'],
    },
    {
        name: 'Laura',
        age: 35,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {
        name: 'Pablo',
        age: 27,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
        name: 'Juan',
        age: 25,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
        name: 'María',
        age: 30,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {
        name: 'Pedro',
        age: 20,
        city: 'Madrid',
        hobbies: ['fútbol', 'programar'],
    },
    {
        name: 'Laura',
        age: 35,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar'],
    },
    {
        name: 'Pablo',
        age: 35,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar'],
    },
];
/* No tengo ni idea de por que ni como funciona esta funcion... pero funciona... Chat GPT es dios. Pensar otra solucion mas humana para este problema. */
function removeDuplicatesGPTPLUSULTRA(array) {
    const seen = {};
    const result = array.reduce((acc, current) => {
        if (!seen[JSON.stringify(current)]) {
            seen[JSON.stringify(current)] = true;
            acc.push(current);
        }
        return acc;
    }, []);
    return result;
}
console.log(removeDuplicatesGPTPLUSULTRA(users));

/* Otra solucion de chatGPT mas entendible sería esta */
function removeDuplicatesGPTok(arr) {
    let unique = [];
    arr.forEach(obj => {
        let duplicated = false;
        unique.forEach(uniqueObj => {
            if (JSON.stringify(uniqueObj) === JSON.stringify(obj)) {
                duplicated = true;
                return;
            }
            /* 
            Un poco de teoria sobre JSON.stringify:
            JSON.stringify(value[, replacer[, space]])
            
            value: el objeto o valor que se desea convertir en una cadena JSON.

            replacer (opcional): una función o un array de propiedades que se utilizan para filtrar las propiedades del objeto que se van a incluir en la cadena JSON.

            space (opcional): un número o una cadena que especifica el número de espacios que se utilizan para la formateo de la cadena JSON.

            La función devuelve una cadena JSON representando el valor dado. La cadena JSON se puede utilizar para transmitir datos entre un servidor y una aplicación web o para almacenar datos en un archivo.
            */
        });
        if (!duplicated) {
            unique.push(obj);
        }
    });
    return unique;
}
console.log(removeDuplicatesGPTok(users));