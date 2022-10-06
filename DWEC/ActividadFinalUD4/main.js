

/**
 * It creates an array of random numbers between 0 and the max number you pass in.
 * @param nMax - number of random numbers to generate
 * @param max - the maximum number that can be generated
 * @returns An array of random numbers.
 */
function creacionNumsRandom(nMax) {
    let arrayNum = []
    for (let i = 0; i <= nMax; i++) {

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
        
        if(esPrimo(arrayNumeros[i])){
            arrayPrimos.push(arrayNumeros[i])
        }
        
    }

    arrayPrimos.sort((a,b)=>{
        return a - b
    })

    return arrayPrimos;
}

function ordenarArrayNoPrimo(arrayNumeros) {
    let arrayNoPrimos = []

    for (let i = 0; i < arrayNumeros.length; i++) {
        
        if(!(esPrimo(arrayNumeros[i]))){
            arrayNoPrimos.push(arrayNumeros[i])
        }
        
    }

    arrayNoPrimos.sort((a,b)=>{
        return b - a
    })

    return arrayNoPrimos

}

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


// Main

let arrNumerosCompleto = creacionNumsRandom(5,5);

console.log(`Array numeros completos: ${arrNumerosCompleto}`);

let arrPrimosOrdenados = ordenarArrayPrimo(arrNumerosCompleto)

console.log(`Array numeros primos ordenados: ${arrPrimosOrdenados}`);

let arrNoPrimosOrdenados = ordenarArrayNoPrimo(arrNumerosCompleto)

console.log(`Array numeros completos: ${arrNumerosCompleto}`);
console.log(`Array numeros NO primos ordenados: ${arrNoPrimosOrdenados}`);

let arrayCompleto = arrPrimosOrdenados.concat(arrNoPrimosOrdenados)

console.log(`Array completo ordenado ${arrayCompleto}`);

