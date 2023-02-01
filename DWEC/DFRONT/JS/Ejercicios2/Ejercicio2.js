const arrayObjetos = [
  { nombre: "Juanma", apellido1: "Cano" },
  { nombre: "David", apellido1: "Quiñones" },
  { nombre: "Alejandro", apellido1: "De la Rosa" },
];

// Primera solución. Hacemos una función que itere uno por uno los elementos del array que pasamos como argunmento
// y guardamos el valor de la propiedad que pasamos tambien como argumento en un array "resultados". Por ultimo retornamos el valor
// de resultado. 

function retornar(propiedad, arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i][propiedad];
    resultado.push(elemento);
  }

  return resultado;
}
// Guardamos en prueba los valores obtenido de ejecutar la funcion
const prueba = retornar("apellido1", arrayObjetos);

console.log(prueba);


// Segunda solución. En este caso la funcióntendrá igualmente dos parametros, propiedad a buscar y arr en el que buscarlas.
// por último la función retornará un nuevo array con la propiedad de cada elemento del array. 

function retornarValores(propiedad, arr) {
  return arr.map((element) => element[propiedad]);
}

const nombres = retornarValores("apellido1", arrayObjetos);

console.log(nombres);
