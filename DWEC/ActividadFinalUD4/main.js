/**
 * It creates an array of random numbers between 0 and the max number you pass in.
 * @param nMax - number of random numbers to generate
 * @param max - the maximum number that can be generated
 * @returns An array of random numbers.
 */
function creacionNumsRandom(nMax) {
    let arrayNum = []
    for (let i = 0; i < nMax; i++) {
        arrayNum.push(Math.floor(Math.random() * (nMax + 1)));
    }

    return arrayNum;
}

/**
 * It takes an array of numbers, and returns an array of prime numbers from the original array, sorted
 * in ascending order.
 * @param arrayNumeros - array of numbers
 * @returns an array of prime numbers.
 */
function ordenarArrayPrimo(arrayNumeros) {

    let arrayPrimos = []

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (esPrimo(arrayNumeros[i])) {
            arrayPrimos.push(arrayNumeros[i])
        }
    }
    arrayPrimos.sort((a, b) => {
        return a - b
    })

    return arrayPrimos;
}

/**
 * It takes an array of numbers and returns an array of numbers that are not prime, sorted in
 * descending order.
 * @param arrayNumeros - [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
 * @returns an array of numbers that are not prime.
 */
function ordenarArrayNoPrimo(arrayNumeros) {
    let arrayNoPrimos = []

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (!(esPrimo(arrayNumeros[i]))) {
            arrayNoPrimos.push(arrayNumeros[i])
        }
    }

    arrayNoPrimos.sort((a, b) => {
        return b - a
    })
    return arrayNoPrimos
}

/**
 * It takes a number and returns true if it's prime, false if it's not, and undefined if it's 1.
 * @param numero - the number to be checked
 * @returns the number if it is prime.
 */
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    if (numero === 1) {
    } else {
        return numero;
    }
}

/**
 * It takes an array of numbers and counts how many of them are prime and how many are not.
 * @param array - an array of integers.
 */
function contarNumeros(array) {

    let primos = 0;
    let noPrimos = 0;
    for (let i = 0; i < array.length; i++) {
        
        if(esPrimo(array[i])){
            primos++;
        }else{
            noPrimos++;
        }

        
    }

    console.log(`El numero total de numero primos es: ${primos}, y el de no primos es: ${noPrimos}`);
    
}

const comprobarArrays = function (a1, a2) {
    let i = a1.length;
    if (i != a2.length) return false;
 
    while (i--) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  };


// Main

let primerNumero;

do {
    primerNumero =  +prompt("Dame un numero");
    console.log(typeof primerNumero);
} while (isNaN(primerNumero));

let arrNumerosCompleto = creacionNumsRandom(primerNumero);

console.log(`Array numeros completos: ${arrNumerosCompleto}`);

let arrPrimosOrdenados = ordenarArrayPrimo(arrNumerosCompleto);

let arrNoPrimosOrdenados = ordenarArrayNoPrimo(arrNumerosCompleto);

let arrayCompleto = arrPrimosOrdenados.concat(arrNoPrimosOrdenados);

console.log(`Array completo ordenado ${arrayCompleto}`);

let numeroFinal;

do {
    numeroFinal = +prompt("Introduce un numero al array");
} while (isNaN(numeroFinal));

arrNumerosCompleto.push(numeroFinal);

arrPrimosOrdenados = ordenarArrayPrimo(arrNumerosCompleto);

arrNoPrimosOrdenados = ordenarArrayNoPrimo(arrNumerosCompleto);

arrayCompleto = arrPrimosOrdenados.concat(arrNoPrimosOrdenados);

console.log(arrayCompleto);

contarNumeros(arrayCompleto);

let arrayCopiado = arrayCompleto.slice();

console.log(arrayCopiado);

console.log(comprobarArrays(arrayCompleto,arrayCopiado));


