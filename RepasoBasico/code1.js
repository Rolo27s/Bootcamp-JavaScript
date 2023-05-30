let MontoRoberto = 1.5;
let MontoPedro = 1.7;
let MontoCofla = 3;

let nombreHelado = ["Palito de helado de agua", "Palito de helado de crema", "Palito de helado marca heladix", "Palito de helado marca heladovich", "Palito de helado marca helardo", "Potecito de helado con confites", "Pote de 1/4 KG"];
let precio = [0.6, 1, 1.6, 1.7, 1.8, 2.9, 2.9];
let montoCalc = 0;

let cont=0;

let persona = prompt("Hola. Quien eres?\n" +
        " 1. Roberto\n" +
        " 2. Pedro\n" +
        " 3. Cofla\n"
    );

document.write(`</br>`);

if (persona < 1 || persona > 3) {
    alert("Disculpa, no puedo atenderte")
} else {
    if (persona == 1) {
        document.write(`Que tal Roberto! Tienes ${MontoRoberto} USD`);
        montoCalc = MontoRoberto;
    } else if (persona == 2) {
        document.write(`Que tal Pedro! Tienes ${MontoPedro} USD`);
        montoCalc = MontoPedro;
    } else {
        document.write(`Que tal Cofla! Tienes ${MontoCofla} USD`);
        montoCalc = MontoCofla;
    }

    document.write(`</br>`);

    for(let i=0; precio[i] <= montoCalc; i++) {
        cont++;
    }

    
    document.write(`El articulo más caro que puedes comprar es el ${nombreHelado[cont-1]}`);
    document.write(`</br>`);
    document.write(`Tu vuelta son ${montoCalc - precio[cont-1]} USD`);
    document.write(`</br>`);
}