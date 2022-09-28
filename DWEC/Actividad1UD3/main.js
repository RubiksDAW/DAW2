// Corregimos los saltos de linea para no dejar los corchetes con un salto
// Añadimos punto y coma al final de las sentencias por buenas practicas
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
// El return lo sacamos del bucle para que devuelva el resultado una sola vez
    return result;
}
// Declaramos las variables de forma separada para mayor claridad.
// Añadimos un espacio entre los parametros
let x = prompt("x?", '');
let n = prompt("n", '');

// Dividimos las lineas de alert() en dos para mayor claridad
if (n < 0) {
    alert(`Power ${n} is not supported,
     please enter a integer number greater than zero`);
} else {
    alert( pow(x, n) );
}


