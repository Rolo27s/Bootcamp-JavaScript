// [asistencia, nota sobre 10, trabajos]
const materia = {
    fisica: [90, 6, 75, "fisica"],
    matematicas: [84, 8, 50, "matematicas"],
    logica: [90, 7, 85, "logica"],
    bbdd: [35, 2, 40, "bbdd"],
    programacion: [65, 4, 75, "programacion"],
    entornos: [90, 8, 80, "entornos"]
}

// Para aprobar se necesita 90% asistencia, 7/10 de nota y 75% de trabajos

const matAprobada = () => {
    for (m in materia) {
        let asis = materia[m][0];
        let nota = materia[m][1];
        let trab = materia[m][2];

        if (asis >= 90 && nota >= 7 && trab >= 75) {
            console.log(materia[m][3]);
            console.log("%c  Aprobado", "color:green");
            console.log(``);
        } else {
            console.log(materia[m][3]);
            console.log("%c  Suspenso", "color:red");
            // informe sobre porque esta suspenso
            if (asis < 90) console.log("  falta de asistencia");
            if (nota < 7) console.log("  baja nota");
            if (trab < 75) console.log("  faltan trabajos");
            console.log(``);
        }
    }
}

matAprobada();

console.log("Planing de estudio mensual");

// Tareas diarias
let estudio1 = "Primera tanda de estudio";
let descanso = "Descanso de 10 min";
let estudio2 = "Segunda tanda de estudio";
let comer = "Comer";
let deporte = "Hacer deporte";
let tareas = "Otras tareas";


let dia = 1;
// 4 semanas por mes
for (let i = 1; i <= 4; i++) {
    console.group("Semana " + i);

    //semana 1
    if (dia <= 7 && i == 1) {
        while (dia <= 7) {
            console.groupCollapsed("  Dia " + dia);
            console.log(estudio1);
            console.log(descanso);
            console.log(estudio2);
            console.log(comer);
            console.log(deporte);
            console.log(tareas);
            console.groupEnd();
            dia++;
        }
    }

    //semana 2
    if (dia > 7 && dia <= 14 && i == 2) {
        while (dia <= 14) {
            console.groupCollapsed("  Dia " + dia);
            console.log(estudio1);
            console.log(descanso);
            console.log(estudio2);
            console.log(comer);
            console.log(deporte);
            console.log(tareas);
            console.groupEnd();
            dia++;
        }
    }

    //semana 3
    if (dia > 14 && dia <= 21 && i == 3) {
        while (dia <= 21) {
            console.groupCollapsed("  Dia " + dia);
            console.log(estudio1);
            console.log(descanso);
            console.log(estudio2);
            console.log(comer);
            console.log(deporte);
            console.log(tareas);
            console.groupEnd();
            dia++;
        }
    }

    //semana 4
    if (dia > 21 && dia <= 28 && i == 4) {
        while (dia <= 28) {
            console.groupCollapsed("  Dia " + dia);
            console.log(estudio1);
            console.log(descanso);
            console.log(estudio2);
            console.log(comer);
            console.log(deporte);
            console.log(tareas);
            console.groupEnd();
            dia++;
        }
    }
    console.groupEnd();
}

// Reseteo dias para el proximo mes
dia = 1;