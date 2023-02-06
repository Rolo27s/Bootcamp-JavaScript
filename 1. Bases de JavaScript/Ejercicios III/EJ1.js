const nombres = ["Marta Delgado Sebastián", "Lorenza Farré Clemente", "Judith Sainz Tejedor", "Yago Marti Adadia", "Santos Viña - Millán", "María Jesús Infante Estevez", "Josefina Pareja Zaragoza", "Álvaro Camino Bermudez", "Alonso Saavedra Solana", "Jose Ramón Acero Bru", "Custodio Sala Plana", "Violeta Caro Pinto", "Nacho Valencia Sevilla", "Rolando Reig Matas", "Flor del Vallejo", "Nazario Vilanova Coll", "Galo Hurtado Almeida", "Concha Franco Sainz", "Imelda de Baquero", "Amílcar Ballester Calzada"];

console.log("Array de nombres completo");
console.log(nombres);

/* funcion que filtra los nombres que empiecen por A o a */
const filtroA = (nombres) => {
    const Astart = nombres.filter(letra => (letra[0] == 'A' || letra[0] == 'a'));
    
    /* 
    Otra idea que hace lo mismo:
    const nombresQueComienzanConA = nombres.filter(nombre => nombre.charAt(0).toLowerCase() === 'a');
    */

    console.log(Astart);
return Astart;
}

console.log("Array de nombres que empiezan por A");
filtroA(nombres);