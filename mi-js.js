// let apellido = prompt("Ingresa apellido");
// alert(apellido);

// let edad = prompt("Ingresa edad");
// let años = parseInt(edad);

// let numero = 20;

// let resultado = años + numero;
 
// alert(resultado);


let numero = prompt ("Ingrese un número");
numeroInt = parseInt (numero);


if (numeroInt < 10){
    alert("El número es menor a 10");
}

else if (numeroInt == 10) {
    alert("El número es 10");
} 

else if((numeroInt > 10) && (numeroInt < 50)) {
    alert("El número esta entre 10 y 50");
}

else if (numeroInt == 50) {
    alert("El número es igual a 50");
}

else {
    alert("El número es mayor a 50");
}


