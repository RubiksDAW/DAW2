let sumaTotal = 0;
let numero;

function suma(numero) {

    sumaTotal = +numero + sumaTotal
    console.log(sumaTotal);
}

function esPrimo(numero) {

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    if (numero === 1) {
        console.log("1 NO es un numero primo");
    } else {
        return numero
    }

}

function descomponer(numero) {
// hacer el bucle a la inversa restando a partir del numero que se le pasa como parametro, -- si el resto es 0 se imprime sino pasamos al siguiente.
   for (let i = 1; i <= numero; i++) {
        if(numero % i == 0){
            console.log();
        }
   }

    
}

do {

    numero = prompt("Dame un numero")
    suma(numero)

} while (numero != null);

if(esPrimo(sumaTotal)){
    console.log("Es primo");
}else{
    descomponer(sumaTotal)
}