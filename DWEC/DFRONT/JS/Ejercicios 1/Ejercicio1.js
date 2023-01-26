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

// Creamos una variable para guardar las tareas de los programadores
let tareasProgramadores = [];

// Declaramos una variable donde guardaremos un array de todas las horas de las tareas de desarrollo
let horasDesarrollo = [];

// Declaramos una variable donde guardaremos el numero de horas más alto
let maximo = 0;

// En esta variable almacenamos la id de la tarea más larga
let tareaMasLarga;

// Declaramos esta funcion para convertir una string a numero, usando el espacio como valor del metodo split
function convertirString(arr) {
  let espacio = " ";

  let horas = arr.split(espacio);

  return Number(horas[0]);
}

// Declaramos esta funcion para obtener el numero maximo de un array de numeros
function max(arr) {
  let max = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
}

// Recorremos con un primer bucle a nuestros programadores uno por uno
for (let i = 0; i < programadores.length; i++) {
  const tareas = programadores[i].tareas;

  // Guardamos en nuestro array de tareas todas las tareas de los programadores
  tareasProgramadores.push(tareas);

  // Con este segundo bucle recorremos las tareas que hemos ido almacenando en tareas
  for (let u = 0; u < tareas.length; u++) {

    // Almacenamos las horas (ya convertiras en numero de horas) en un array declarado previamente
    horasDesarrollo.push(convertirString(tareas[u].tiempoDesarrollo));

    maximo = max(horasDesarrollo);

    if (
      maximo == convertirString(programadores[i].tareas[u].tiempoDesarrollo)
    ) {
      tareaMasLarga = programadores[i].tareas[u].idTarea;
    }
    
  }
}

console.log("Estas son todas las tareas");
console.log(tareasProgramadores);

console.log("Estas son todas las horas de cada tarea");
console.log(horasDesarrollo);

// De todas las tareas obtenemos la que mayor horas requiere
maximo = max(horasDesarrollo);

console.log(`La id de la tarea mas larga es ${tareaMasLarga}`);


