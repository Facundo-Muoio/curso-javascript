// let apellido = prompt("Ingresa apellido");
// alert(apellido);

// let edad = prompt("Ingresa edad");
// let años = parseInt(edad);

// let numero = 20;

// let resultado = años + numero;
 
// alert(resultado);


// let numero = prompt ("Ingrese un número");
// numeroInt = parseInt (numero);


// if (numeroInt < 10){
//     alert("El número es menor a 10");
// }

// else if (numeroInt == 10) {
//     alert("El número es 10");
// } 

// else if((numeroInt > 10) && (numeroInt < 50)) {
//     alert("El número esta entre 10 y 50");
// }

// else if (numeroInt == 50) {
//     alert("El número es igual a 50");
// }

// else {
//     alert("El número es mayor a 50");
// }


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));

// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     console.log (ingresarNumero + " x " + i + " = " + resultado);
// }

let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingese su apellido") ;

if ((nombre == "") && (apellido != "")) {
    nombre = prompt ("Ingrese un nombre porfavor");
        
    while (nombre && apellido != "") {
    
        let mes = prompt ("Si ya tiene un turno puede cerrar nuetro sistema en caso contrario: Eliga el mes que desea obtener turno. El mismo debe ser escrito como en el siguiente ejemplo; Enero o enero. El horario del turno será otrogado por nuestro sistema de manera automática");
        
        if ((mes == "Enero") || (mes == "enero")) {
            let dia = prompt ("Eliga el día de enero que desee para su turno.");
            
            if (dia > 31) {
                alert ("Enero contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Febrero") || (mes == "febrero")) {
            let dia = prompt ("Eliga el día de Febrero que desee para su turno.");
            
            if (dia > 28) {
                alert ("Febrero contiene solo 28 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Marzo") || (mes == "marzo")) {
            let dia = prompt ("Eliga el día de Marzo que desee para su turno.");
    
            if (dia > 31) {
                alert ("Marzo contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Abril") || (mes == "abril")) {
            let dia = prompt ("Eliga el día de Abril que desee para su turno.");
    
            if (dia > 30) {
                alert ("Abril contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Mayo") || (mes == "mayo")) {
            let dia = prompt ("Eliga el día de Mayo que desee para su turno.");
    
            if (dia > 31) {
                alert ("Mayo contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Junio") || (mes == "junio")) {
            let dia = prompt ("Eliga el día de Junio que desee para su turno.");
    
            if (dia > 30) {
                alert ("Junio contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Julio") || (mes == "julio")) {
            let dia = prompt ("Eliga el día de Julio que desee para su turno.");
    
            if (dia > 31) {
                alert ("Julio contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Agosto") || (mes == "agosto")) {
            let dia = prompt ("Eliga el día de Agosto que desee para su turno.");
    
            if (dia > 31) {
                alert ("Agosto contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
                
    
        else  if ((mes == "Septiembre") || (mes == "septiembre")) {
            let dia = prompt ("Eliga el día de Septiembre que desee para su turno.");
    
            if (dia > 30) {
                alert ("Septiembre contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Octubre") || (mes == "octubre")) {
            let dia = prompt ("Eliga el día de Octubre que desee para su turno.");
    
            if (dia > 31) {
                alert ("Octubre contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Noviembre") || (mes == "noviembre")) {
            let dia = prompt ("Eliga el día de Noviembre que desee para su turno.");
    
            if (dia > 30) {
                alert ("Noviembre contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Diciembre") || (mes == "diciembre")) {
            let dia = prompt ("Eliga el día de Diciembre que desee para su turno.");
    
            if (dia > 31) {
                alert ("Diciembre contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else {
            alert ("No ingreso ningún mes válido, porfavor introduzca el nombre del mes que desea para su turno."); 
        }
      
        }
    
}

else if ((nombre != "") && (apellido == "")) {
    apellido = prompt ("Ingrese un apellido porfavor");
  
           
    while (nombre && apellido != "") {
    
        let mes = prompt ("Si ya tiene un turno puede cerrar nuetro sistema en caso contrario: Eliga el mes que desea obtener turno. El mismo debe ser escrito como en el siguiente ejemplo; Enero o enero. El horario del turno será otrogado por nuestro sistema de manera automática");
        
        if ((mes == "Enero") || (mes == "enero")) {
            let dia = prompt ("Eliga el día de enero que desee para su turno.");
            
            if (dia > 31) {
                alert ("Enero contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Febrero") || (mes == "febrero")) {
            let dia = prompt ("Eliga el día de Febrero que desee para su turno.");
            
            if (dia > 28) {
                alert ("Febrero contiene solo 28 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Marzo") || (mes == "marzo")) {
            let dia = prompt ("Eliga el día de Marzo que desee para su turno.");
    
            if (dia > 31) {
                alert ("Marzo contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Abril") || (mes == "abril")) {
            let dia = prompt ("Eliga el día de Abril que desee para su turno.");
    
            if (dia > 30) {
                alert ("Abril contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Mayo") || (mes == "mayo")) {
            let dia = prompt ("Eliga el día de Mayo que desee para su turno.");
    
            if (dia > 31) {
                alert ("Mayo contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Junio") || (mes == "junio")) {
            let dia = prompt ("Eliga el día de Junio que desee para su turno.");
    
            if (dia > 30) {
                alert ("Junio contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Julio") || (mes == "julio")) {
            let dia = prompt ("Eliga el día de Julio que desee para su turno.");
    
            if (dia > 31) {
                alert ("Julio contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Agosto") || (mes == "agosto")) {
            let dia = prompt ("Eliga el día de Agosto que desee para su turno.");
    
            if (dia > 31) {
                alert ("Agosto contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
                
    
        else  if ((mes == "Septiembre") || (mes == "septiembre")) {
            let dia = prompt ("Eliga el día de Septiembre que desee para su turno.");
    
            if (dia > 30) {
                alert ("Septiembre contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Octubre") || (mes == "octubre")) {
            let dia = prompt ("Eliga el día de Octubre que desee para su turno.");
    
            if (dia > 31) {
                alert ("Octubre contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Noviembre") || (mes == "noviembre")) {
            let dia = prompt ("Eliga el día de Noviembre que desee para su turno.");
    
            if (dia > 30) {
                alert ("Noviembre contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Diciembre") || (mes == "diciembre")) {
            let dia = prompt ("Eliga el día de Diciembre que desee para su turno.");
    
            if (dia > 31) {
                alert ("Diciembre contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else {
            alert ("No ingreso ningún mes válido, porfavor introduzca el nombre del mes que desea para su turno."); 
        }
      
        }
            

}
        

else if ((nombre == "") && (apellido == "")) {
    nombre = prompt ("Ingrese un nombre porfavor");
    apellido = prompt ("Ingrese un apellido porfavor");

    while (nombre && apellido != "") {
    
        let mes = prompt ("Si ya tiene un turno puede cerrar nuetro sistema en caso contrario: Eliga el mes que desea obtener turno. El mismo debe ser escrito como en el siguiente ejemplo; Enero o enero. El horario del turno será otrogado por nuestro sistema de manera automática");
        
        if ((mes == "Enero") || (mes == "enero")) {
            let dia = prompt ("Eliga el día de enero que desee para su turno.");
            
            if (dia > 31) {
                alert ("Enero contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Febrero") || (mes == "febrero")) {
            let dia = prompt ("Eliga el día de Febrero que desee para su turno.");
            
            if (dia > 28) {
                alert ("Febrero contiene solo 28 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Marzo") || (mes == "marzo")) {
            let dia = prompt ("Eliga el día de Marzo que desee para su turno.");
    
            if (dia > 31) {
                alert ("Marzo contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Abril") || (mes == "abril")) {
            let dia = prompt ("Eliga el día de Abril que desee para su turno.");
    
            if (dia > 30) {
                alert ("Abril contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Mayo") || (mes == "mayo")) {
            let dia = prompt ("Eliga el día de Mayo que desee para su turno.");
    
            if (dia > 31) {
                alert ("Mayo contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Junio") || (mes == "junio")) {
            let dia = prompt ("Eliga el día de Junio que desee para su turno.");
    
            if (dia > 30) {
                alert ("Junio contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Julio") || (mes == "julio")) {
            let dia = prompt ("Eliga el día de Julio que desee para su turno.");
    
            if (dia > 31) {
                alert ("Julio contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Agosto") || (mes == "agosto")) {
            let dia = prompt ("Eliga el día de Agosto que desee para su turno.");
    
            if (dia > 31) {
                alert ("Agosto contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
                
    
        else  if ((mes == "Septiembre") || (mes == "septiembre")) {
            let dia = prompt ("Eliga el día de Septiembre que desee para su turno.");
    
            if (dia > 30) {
                alert ("Septiembre contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Octubre") || (mes == "octubre")) {
            let dia = prompt ("Eliga el día de Octubre que desee para su turno.");
    
            if (dia > 31) {
                alert ("Octubre contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else  if ((mes == "Noviembre") || (mes == "noviembre")) {
            let dia = prompt ("Eliga el día de Noviembre que desee para su turno.");
    
            if (dia > 30) {
                alert ("Noviembre contiene solo 30 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
        
        else  if ((mes == "Diciembre") || (mes == "diciembre")) {
            let dia = prompt ("Eliga el día de Diciembre que desee para su turno.");
    
            if (dia > 31) {
                alert ("Diciembre contiene solo 31 días, porfavor ingrese un día válido. Gracias!");
            }
    
            else {
                alert ("Su turno fue sacado con éxito para el día " + dia + " del mes de " + mes + " a las 10:00 am " + ". Gracias!");
            }
        }
    
        else {
            alert ("No ingreso ningún mes válido, porfavor introduzca el nombre del mes que desea para su turno."); 
        }
      
        }

}









