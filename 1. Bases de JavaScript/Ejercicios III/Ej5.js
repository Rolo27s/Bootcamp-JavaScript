/* JSON */
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
];

/* Funcion que devuelve los nombres de users que viven en Madrid */
const getNameMadrid = (_users) => {
    const n = _users.length;
    let nameMadrid = [];
    let j=0;

    for (let i = 0; i < n; i++) {
        if (_users[i].city === 'Madrid') {
            nameMadrid[j] = _users[i].name;
            j++;
        }
    }
    console.log("Viven en madrid");
    console.log(nameMadrid);
}

getNameMadrid(users);

/* devuelve array con personas mayores de 25 años */
const getNameMayores25 = (_users) => {
    const n = _users.length;
    let NameMayores25 = [];
    let j = 0;

    for (let i = 0; i < n; i++) {
        if (_users[i].age > 25) {
            NameMayores25[j] = _users[i].name;
            j++;
        }
    }
    console.log("Son mayores de 25 años");
    console.log(NameMayores25);
}

getNameMayores25(users);

/* Encuentra la primera persona que le guste programar */
const getNamePrimeraProgramar = (_users) => {
    for (const element of _users) {
        if (Array.isArray(element.hobbies) && element.hobbies.includes("programar")) {
            console.log(element.name + " es la primera persona encontrada que le gusta programar");
            return element.name;
        }
    }
};

getNamePrimeraProgramar(users);

/* devuelve array con las suma de las edades de todas las personas */
const getSumaEdades = (_users) => {
    const n = _users.length;
    let total = 0;

    for (let i = 0; i < n; i++) {
        total += _users[i].age;
    }
    console.log("Suma de todas las edades: " + total + " años");
}

getSumaEdades(users);

/* Modifica el JSON para tener otro objeto que solo tenga las propiedades city y hobby */
const simpleUsers = users.map(user => {
    const {name, age, ...newUser} = user;
    return newUser;
});

console.log(simpleUsers);