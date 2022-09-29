// Ejercicio 3

function cadenaAlterna(cadena) {
    let nuevaCadena = "";
    let longitud = cadena.length;
    
    for (let i = 0; i < longitud; i++) {

        if(i % 2 == 0){
            nuevaCadena += cadena[i].toUpperCase();
        }else{
            nuevaCadena += cadena[i].toLowerCase();
        }

    }
    return nuevaCadena;

}

console.log(cadenaAlterna("hola"));

// Ejercicio 4 

function comprobarPalabra(cadena, palabra) {

    if (cadena.indexOf(palabra,0) >= 0) {
        alert("si contiene la palabra")
    } else {
        alert("no contine la palabra")
    }

}

console.log(comprobarPalabra("El zorro morro", "morro"));

// Ejercicio 4 version larga

function comprobarPalabras(cadena, ...palabras) {

    for (let  palabra of palabras) {

        if (cadena.indexOf(palabra,0) >= 0) {
            alert("si contiene la palabra")
        } else {
            alert("no contine la palabra")
        }

    }

}

console.log(comprobarPalabras("El zorro morro", "morro","zorro","El"));

// Ejercicio 5 

function truncar(texto, longitud) {

    let palabras = texto.split(' ');
    let nuevoTexto = [];
    console.log(palabras);

    for (let i = 0; i < palabras.length; i++) {

        if (palabras[i].length >= longitud) {

            nuevoTexto.push(palabras[i].substring(0, longitud ) + "...");
            

        } else {

            nuevoTexto.push(palabras[i]);
        }

    }

    return nuevoTexto.join(' ');


}

console.log(truncar("mamarracho el que lo lea", 3));

// Ejercicio 6

function extraerValor(str) {
    let nuevaStr = "";
    for (let i = 0; i < str.length; i++) {
        
        if(str[i] == '€' || str[i] == '.'){
            nuevaStr += ''
        }else{
            nuevaStr += str[i]
        }
        
    }
    
    return nuevaStr;
    
}

console.log(extraerValor("€120."));


 // SOLUCION MÁS OPTIMA
// function extraerValorPlus(str) {

   
//     return str.replace(/[€.]/g, '')
    
// }


