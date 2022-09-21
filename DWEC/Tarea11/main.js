// Tarea 11

let respuesta = prompt("¿Cual es el nombre oficial de JavaScript?")

if (respuesta.toUpperCase() == "ECMASCRIPT") {
    alert("CORRECTO");
} else {
    alert("INCORRECTO");
}

// Tarea 12

let numero = prompt("Dame un numero");

if (numero > 0) {
    alert(1)
} else if (numero < 0) {
    alert(-1)
} else if (numero == 0) {
    alert(0)
}

// Tarea 13

let result;
let a = 1;
let b = 1;
result = (a + b < 4) ? "Debajo" : "Encima";

// Tarea 14 

let message;
let login = "Director";

message = (login == "Empleado") ? "Hola" : (login == "Director") ? "Felicidades" : (login == '') ? "Sin sesión" : '';

alert(message)