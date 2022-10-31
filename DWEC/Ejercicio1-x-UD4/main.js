// //Tarea 1
// let numeros = [2,22,36,350,12,500];

// numeros.sort((a,b)=>{
//     return a-b
// })

// console.log(numeros);
// //Ahora funciona porque le hemos indicado los parametros para comparar.
// //Alternativa para ordenar de mayor a menor seria

// numeros.sort((a,b)=>{
//     return b -a
// })

// console.log(numeros);

//Tarea 2
// A
let ciudades = ["Madrid", "Sevilla", "París", "Munich", "Berlin", "Roma"]
let capitales = ["Madrid", "Roma", "Otawa", "Atenas"]

// console.log(ciudades);
// // B
// function comprobarCapital(arr1,arr2) {
//     let capitalesComun = ciudades.filter( elem => capitales.indexOf(elem) !== -1)
//     console.log("Las capitales son: "+capitalesComun);
// }

// comprobarCapital(ciudades,capitales)

//C
// let arrayCapitales = [];

// function comprobarCapitalArray(arr1,arr2) {
//     let resultado = arr1.filter( elem => arr2.includes(elem))
//     return resultado;
// }

// console.log(comprobarCapitalArray(ciudades,capitales));

// //D
// console.log("Arrays unidos");
// console.log(ciudades.concat(capitales));

//E

// let comprobarCiudadesNoCapital = (ciudades,capitales) =>{
//   let resultado = []
//     for(let ciudad of ciudades ){
//       if(!capitales.includes(ciudad)){
//         resultado.push(ciudad)
//       }
//     }

//     console.log("Estas no son capitales: "+ resultado);
// }

// console.log(comprobarCiudadesNoCapital(ciudades,capitales));

//Tarea 5 (No se por que intrduce comas entre palabras)

// function carameliza(str){
//   let cadena= str.split("-");
//   let text=[];

//   for (let i = 0; i < cadena.length; i++) {
//       if(i != 0)
//       cadena[i] = cadena[i][0].toUpperCase() + cadena[i].substr(1);
//       text.push(cadena[i]);

//   }


//   alert(text);

// }

// carameliza("hola-como-estas");

// Tarea 6

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function filtrarRango(arr,a,b) {

//   let nuevoArr = arr.map(elemen  => {
//     if(elemen > a && elemen <b){
//       return elemen
//     }
//   })

//   return nuevoArr;

// }

// console.log(filtrarRango(numeros,3,5));

// Tarea 7

// function filtrarRangoEnLugar(arr,a,b) {

//   let nuevoArr = arr.filter(elemen  => {
//     if(elemen > a && elemen <b){
//       return elemen
//     }
//   })

//   return nuevoArr


// }

// console.log(filtrarRangoEnLugar(numeros,2,7));

//Tarea 8 

// function decreciente(arr) {

//   arr.sort((a, b) => {
//     if (a > b) {
//       return -1
//     } else if (a < b) {
//       return 1
//     } else {
//       return 0
//     }
//   })

// }

// decreciente(numeros)

// console.log(numeros);

//Tarea 9

// let numerosDesordenados = [2, 4, 1, 10, 8, 5, 7]
// function copiaOrdenada(arr) {

//   let copiaArr = arr.sort((a, b) => {
//     return a - b
//   })

//   return copiaArr

// }

// let arrayOrdenado = copiaOrdenada(numerosDesordenados)

// console.log(arrayOrdenado);

// Tarea 10 LO HE DEJADO SIN HACER

// String.prototype.calcula = function (cadena) {
//   return +(+cadena);
// };


// Tarea 11

let numerosRepetidos = [1, 1, 4, 3, 2, 2, 5, 5, 3, 9];
// console.log(numerosRepetidos);
// function eliminarDuplicados(arr) {
//   let result = arr.filter((item,index)=>{
//     return arr.indexOf(item) == index;
//   })

//   return result
// }

// let arraySinDuplicados = eliminarDuplicados(numerosRepetidos);

// console.log(arraySinDuplicados);

//Tarea 12

// function unique(arr) {
//   let data = new Set(arr);

//   let result = [...data];

//   return result
// }

// let arraySinDuplicadosSet = unique(numerosRepetidos)

// console.log(arraySinDuplicadosSet);

// Tarea 13

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectareas"];

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {

//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);

//   }
//   return Array.from(map.values());
// }

// console.log(aclean(arr));

// Tarea 14

let fecha = new Date(2012,1,20,3,12)

console.log(fecha);

// Tarea 15

function getWeekDay(fecha) {

    switch (fecha.getDay()) {
      case 0:
        console.log("MO");
        break;
      case 1:
        console.log("TU");
        break;
      case 2:
        console.log("WE");
        break;
      case 3:
        console.log("TH");
        break;
    
      case 4:
        console.log("FR");
        break;
    
      case 5:
        console.log("SA");
        break;
      case 6:
        console.log("SU");
        break;
    
      default:
        break;
    }
}

getWeekDay(fecha);

// Tarea 16

function getLocalDate(fecha) {

    switch (fecha.getDay()+1) {
      case 1:
        console.log("MO");
        break;
      case 2:
        console.log("TU");
        break;
      case 3:
        console.log("WE");
        break;
      case 4:
        console.log("TH");
        break;    
      case 5:
        console.log("FR");
        break;
      case 6:
        console.log("SA");
        break;
      case 7:
        console.log("SU");
        break;
    
      default:
        break;
    }
}

getLocalDate(fecha)

// Tarea 17

function getDateAgo(date,days) {
  let fecha = new Date(date)

  fecha.setDate(date.getDate() - days)

  return fecha.getDate();
}

console.log(getDateAgo(new Date(),2));

// Tarea 18

function getLastDayOfMonth(year,month) {

  let date = new Date(year,month+1,0)
  return date.getDate()
  
}

console.log(getLastDayOfMonth(2022,4));

// Tarea 19

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert(getSecondsToday());

// Tarea 20 

function getSecondsToTomorrow() {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let segundosEnUnDia = (hora * 60 + minutos) * 60 + segundos;
  let totalSegundos = 86400;

  return totalSegundos - segundosEnUnDia;
}

// Tarea 21 

// Tarea 22 