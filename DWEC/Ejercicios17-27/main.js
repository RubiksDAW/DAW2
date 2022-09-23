// // Tarea 17
// alert("Ejercicio 17")
// let age = prompt("¿Que edad tienes?");

// if(age <= 14 || age >= 90){
//     alert("No estás en el rango 14-90 años")
// }else{
//     alert("Si estás en el rango")
// }

// // Tarea 17 2.0
// alert("Ejercicio 17 2.0")
// let edad = prompt("Dime tu edad")

// if(!(edad <= 14 || edad >= 90)){
//     alert("Si estás en el rango")
// }else{
//     alert("No estás en el rango")
// }

// // Tarea 19

// alert("Ejercicio 19")
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

// // Tarea 20 
// alert("Ejercicio 20")
// let num1 = prompt("Dame el primer numero");
// let num2 = prompt("Dame el segundo numero");
// let minNum = num1 < num2 ? num1: num2;
// let maxNum = num1 > num2 ? num1 : num2;

// for (let index = minNum; index <= maxNum; index++) {

//     if(index % 8 == 0){
//        alert(index) 
//     }
       
// }

// // Tarea 21
// alert("Ejercicio 21")
// let a = 2;
// let x = 2;
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
//         console.log(a + x);
//         break;
//     case 2:
//         console.log(a - x);
//         break;
//     case 3:
//         console.log(a * x);
//         break;
//     case 4:
//         console.log(a / x);
//         break;
//     case 5:
//         console.log(a % x);
//         break;
//     case 6:
//         console.log("Adiós");
//         break;

//     default:
//         break;
// }

// } while (opcion != 6);

// // Tarea 22
// alert("Ejercicio 22")
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

// // Tarea 24 
// alert("Ejercicio 24")
// /** 
//  * Un numero narcisista es aquel cuya suma de sus digitos elevados al numero de de cifras que lo componen es IGUAL al numero en si 
//  * 
//  * Ejemplo: 3^3 + 7^3 + 1^3 = 27 + 343 + 1 = 371 
//  * 
//  * Ejemplo 2: 9^5 + 3^5 + 0^5 + 8^5 + 4^s5 = 59049 + 243 + 0 + 32768 + 1024 = 93084*/

// function esNarciso(numero) {

//     // Esto lo hacemos para poder contar el numero de cifras que componen el numero y así averiguar 
//     // la cifra a la que debemos elevar todos sus numeros.
    
//     let numeroACadena = numero.toString();s

//     let longitud = numeroACadena.length;

//     let suma = 0;

//     for (let i = 0; i < longitud; i++) {
//         // Pasamos a inty guardamos en cifra cada una de las posiciones de nuestro numeroACadena.
//         let cifra = parseInt(numeroACadena[i]);
//         // acumulamos en suma estos numeros elevados sumados entre si 
//         let numeroElevado = cifra ** longitud;
//         suma = suma + numeroElevado;
        
//     }
    
//     if(suma === numero){
//         return console.log(`${numero} SI es NARCISO`);
//     }else{
//         return console.log(`${numero} NO lo es`);
//     }
    
// }

// for (let i = 0; i < 1000; i++) {

//     esNarciso(i)
    
// }

// Tarea 25
alert("Ejercicio 25")
let numeroIngresado;
do {

   numeroIngresado = prompt("Ingresa un numero mayor que 100") 
   console.log(numeroIngresado);

} while (numeroIngresado < 100 && numeroIngresado != null && numeroIngresado != "");

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
// // Recorremos con un bucle for del numero 2 al 100 (Obviando el numero 1 ya que los primos son solo divisibles por 1 y por si mismo)
//   for (let i = 2; i < 100; i++) {

//     esPrimo(i)
    
//   }

// // Tarea 27
// alert("Ejercicio 27")
// let b = +prompt('b?', '');

// switch (b) {

//     case 0:
//         alert(0)
//         break;
//     case 1:
//         alert(1)
//         break;
//     case 2:
        
//     case 3:
//         alert("2,3")
//         break;

//     default:
//         break;
// }







