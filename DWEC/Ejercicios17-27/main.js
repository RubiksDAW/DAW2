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

// let minNum = prompt("Dame el numero minimo");
// let maxNum = prompt("Dame el numero maximo");

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

for (let index = 2; index <= 10; index++) {
    
    if(index % 2 == 0)
    alert(index)
    
}

// Tarea 23 
let index = 2
while (index <= 10) {
    if(index % 2 == 0){
        alert(index)
    }
    index++;
}

// Tarea 24 



