// // Tarea 17

// let age = prompt("¿Que edad tienes?");

// if(age <= 14 || age >= 90){
//     alert("No estás en el rango 14-90 años")
// }else{
//     alert("Si estás en el rango")
// }

// // Tarea 17 2.0

// let edad = prompt("Dime tu edad")

// if(!(edad <= 14 || edad >= 90)){
//     alert("Si estás en el rango")
// }else{
//     alert("No estás en el rango")
// }

// Tarea 19

// let sesion = prompt("¿Quién eres?");
// let pass = "TheMaster";
// let adminPass;
// if(sesion == "Admin"){
//     adminPass = prompt("Dime la contraseña");
//         adminPass == "TheMaster" ? alert("Bienvenido") : alert("Contraseña incorrecta")
// }else if(sesion == "" || sesion == null ){
//     alert("Cancelado")
// }else{
//     alert("No te conozco")
// }

// Tarea 20 

// let num1 = prompt("Dame el primer numero");
// let num2 = prompt("Dame el segundo numero");
// let minNum = num1 < num2 ? num1: num2;
// let maxNum = num1 > num2 ? num1 : num2;

// for (let index = minNum; index <= maxNum; index++) {

//     if(index % 8 == 0){
//        alert(index) 
//     }
       
// }

// Tarea 21
// let a = 2;
// let b = 2;
// let opcion;


// alert(`Estos son nuestros valores ${a} y ${b}`);

// do {

// console.log("---------------");
// console.log("Pulse 1 - Sumar");
// console.log("Pulse 2 - Restar");
// console.log("Pulse 3 - Multiplicar");
// console.log("Pulse 4 - Dividir");
// console.log("Pulse 5 - Obtener el modulo");
// console.log("Pulse 6 - Salir");

// opcion = +prompt("Que quieres hacer")

// switch (opcion) {
//     case 1:
//         console.log(a + b);
//         break;
//     case 2:
//         console.log(a - b);
//         break;
//     case 3:
//         console.log(a * b);
//         break;
//     case 4:
//         console.log(a / b);
//         break;
//     case 5:
//         console.log(a % b);
//         break;
//     case 6:
//         console.log("Adiós");
//         break;

//     default:
//         break;
// }

// } while (opcion != 6);

// Tarea 22

// for (let index = 2; index <= 10; index++) {
    
//     if(index % 2 == 0)
//     alert(index)
    
// }

// // Tarea 23 
// let index = 2
// while (index <= 10) {
//     if(index % 2 == 0){
//         alert(index)
//     }
//     index++;
// }

// Tarea 24 

// function esNarciso(numero) {

//     let numeroComoCadena = numero.toString();

//     let longitud = numeroComoCadena.length;

//     let suma = 0;

//     for (let i = 0; i < longitud; i++) {

//         let cifra = parseInt(numeroComoCadena[i]);
//         let numeroElevado = cifra ** longitud;
//         suma = suma + numeroElevado;
        
//     }

//     if(suma === numero){
//         return console.log(`${numero} SI es NARCISO`);("Es narciso")
//     }else{
//         return console.log(`${numero} NO es NARCISO`);
//     }
    
// }

// for (let i = 0; i < 1000; i++) {

//     esNarciso(i)
    
// }

// Tarea 25
// let numeroIngresado;
// do {

//    numeroIngresado = prompt("Ingresa un numero mayor que 100") 
//    console.log(numeroIngresado);

// } while (numeroIngresado < 100 && numeroIngresado != null && numeroIngresado != "");

// Tarea 26

/**Los números primos son aquellos que solo son divisibles entre ellos mismos y el 1, es decir, 
 * que si intentamos dividirlos por cualquier otro número, el resultado no es entero */

// function esPrimo(numero) {
  
//     for (let i = 2; i < numero; i++) {
    
//       if (numero % i === 0) {
//         return false;
//       }
  
//     }
  
//     if (numero === 1) {
//       console.log("1 NO es un numero primo");
//     } else {
//       console.log(`${numero} SI es un numero primo.`);
//     }
  
//     console.log("-------------------------------------");

//   }

//   for (let i = 2; i < 100; i++) {
//     esPrimo(i)
    
//   }

// Tarea 27

let a = +prompt('a?', '');

switch (a) {

    case 0:
        alert(0)
        break;
    case 1:
        alert(1)
        break;
    case 2:
        
    case 3:
        alert("2,3")
        break;

    default:
        break;
}







