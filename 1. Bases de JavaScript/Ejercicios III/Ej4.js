/* Crea una funcion que reciba un array de string y lo muestre por consola */
const likes0 = [];
const likes1 = ["Juan"];
const likes2 = ["Juan", "Maria"];
const likes3 = ["Juan", "Maria", "Pedro"];
const likes4 = ["Juan", "Maria", "Pedro", "Chema"];

const getLikes = (_likes) => {
    let opc = _likes.length;
    
    switch (opc) {
        case 0:
            {
                console.log("Nadie ha dado like");
                break;
            }
        case 1:
            {
                console.log(_likes[0] + " ha dado like");
                break;
            }
        case 2:
            {
                console.log(_likes[0] + " y " + _likes[1] + " han dado like");
                break;
            }
        case 3:
            {
                console.log(_likes[0] + ", " + _likes[1] + " y " + _likes[2] + " han dado like");
                break;
            }
        default:
            {
                console.log(_likes[0] + ", " + _likes[1] + " y " + (opc-2) + " personas más han dado like");
            }
    }
}

getLikes(likes0);
getLikes(likes1);
getLikes(likes2);
getLikes(likes3);
getLikes(likes4);