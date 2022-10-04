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
let ciudades = ["Madrid","Sevilla","París","Munich","Berlin","Roma"]
let capitales = ["Madrid","Roma","Otawa","Atenas"]

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

let comprobarCiudadesNoCapital = (array1,array2) =>{
    array1.filter(elemen => {
      return array2.indexOf(elemen == -1)
    })
}

console.log(comprobarCiudadesNoCapital(ciudades,capitales));

 