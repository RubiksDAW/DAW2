"Use strict";

let programadores = [
  {
    nombre: "Juan",
    id: 1,
    tareas: [
      {
        nombreTarea: "Tarea 1.1",
        idTarea: 1.1,
        tiempoDesarrollo: "25 horas",
      },
      {
        nombreTarea: "Tarea 1.2",
        idTarea: 1.2,
        tiempoDesarrollo: "10 horas",
      },
      {
        nombreTarea: "Tarea 1.3",
        idTarea: 1.3,
        tiempoDesarrollo: "2 horas",
      },
      {
        nombreTarea: "Tarea 1.4",
        idTarea: 1.4,
        tiempoDesarrollo: "2.5 horas",
      },
    ],
  },
  {
    nombre: "Lucia",
    id: 2,
    tareas: [
      { nombreTarea: "Tarea 2.1", idTarea: 2.1, tiempoDesarrollo: "5 horas" },
      { nombreTarea: "Tarea 2.2", idTarea: 2.2, tiempoDesarrollo: "1 hora" },
      {
        nombreTarea: "Tarea 2.3",
        idTarea: 2.3,
        tiempoDesarrollo: "26 horas",
      },
      {
        nombreTarea: "Tarea 2.4",
        idTarea: 2.4,
        tiempoDesarrollo: "3.75 horas",
      },
    ],
  },
  {
    nombre: "David",
    id: 3,
    tareas: [
      { nombreTarea: "Tarea 3.1", idTarea: 3.1, tiempoDesarrollo: "7 horas" },
      {
        nombreTarea: "Tarea 3.2",
        idTarea: 3.2,
        tiempoDesarrollo: "6 horas",
      },
      {
        nombreTarea: "Tarea 3.3",
        idTarea: 3.3,
        tiempoDesarrollo: "9 horas",
      },
      {
        nombreTarea: "Tarea 3.4",
        idTarea: 3.4,
        tiempoDesarrollo: "2.5 horas",
      },
    ],
  },
  {
    nombre: "Manuel",
    id: 4,
    tareas: [
      { nombreTarea: "Tarea 4.1", idTarea: 4.1, tiempoDesarrollo: "7 horas" },
      {
        nombreTarea: "Tarea 4.2",
        idTarea: 4.2,
        tiempoDesarrollo: "16 horas",
      },
      {
        nombreTarea: "Tarea 4.3",
        idTarea: 4.3,
        tiempoDesarrollo: "29 horas",
      },
      {
        nombreTarea: "Tarea 4.4",
        idTarea: 4.4,
        tiempoDesarrollo: "2.5 horas",
      },
    ],
  },
];

// // Primera solución

// // Declaramos una variable donde guardaremos un array de todas las horas de las tareas de desarrollo
// let horasDesarrollo = [];

// // Recorremos con un primer bucle a nuestros programadores uno por uno

// Declaramos esta funcion para convertir una string a numero, usando el espacio como valor del metodo split
function convertirString(arr) {
  let espacio = " ";

  let horas = arr.split(espacio);

  return Number(horas[0]);
}

// for (let i = 0; i < programadores.length; i++) {
//   const tareas = programadores[i].tareas;

//   //   Con este segundo bucle recorremos las tareas que hemos ido almacenando en tareas
//   for (let u = 0; u < tareas.length; u++) {
//     // Guardamos en la variable hora la cadena de texto en la que se indican las horas de desarrollo convertida a numero entero
//     // suponemos que el formato es siempre el mismo " XX horas".
//     const hora = convertirString(tareas[u].tiempoDesarrollo);

//     if (hora > 25) {
//       horasDesarrollo.push(tareas[u]);
//     }
//   }
// }

// console.log(horasDesarrollo);

// Segunda solución

// Creamos una variable donde almacenamos las tareas superiores a 25 horas
// IMPORTANTE --> Estos metodos no modifican el array original, nos devulven una copia
const tareas = programadores.map((programador) => {
  // // Con map() nos devuelve los programadores cuyas tareas filtradas superen mas de 25 horas
  return programador.tareas.filter((tarea) => {
    // // Hacemos uso del metodo convertirString() para pasar a enteros las cadenas de texto que representan las horas
    return convertirString(tarea.tiempoDesarrollo) > 25;
  });

  // // Si quisieramos simplificarlo a una linea se veria de la siguiente forma
  // // return programador.tareas.filter((tarea) => convertirString(tarea.tiempoDesarrollo) > 25);
});

// De esta forma limpiamos el array que nos devuelve el filter con elementos vacíos.
let tareasComplejas = tareas.filter((tarea) => tarea.length > 0);

// Aquí se mostrara un array con elementos vacios ya que no han cumplido la condición
console.log(tareas);

// Aquí ya se han filtrado esos elementos vacios y solo se mostraran aquellas tareas que han cumplido la condición.
console.log(tareasComplejas);
