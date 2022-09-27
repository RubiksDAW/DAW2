let sumaTotal = 0;
let numero;

function suma(numero) {
    
    sumaTotal = +numero + sumaTotal;
    console.log(`Sumatorio = ${sumaTotal}`);

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
    
    let auxiliar = numero;
    for (let i = 2; i <= numero; i++) {
        if(auxiliar % i == 0){
            auxiliar = auxiliar / i
            alert(i)
            i--;
        }
    }
}

// Main 

do {

    numero = +prompt("Dame un numero")
    while(isNaN(numero)){
        alert("Dame un numero")
        numero =+prompt("Dame un numero, no una cadena")

    }
    if(numero == ""){
        break;
    }

    console.log(numero);
    suma(numero);

} while (numero != null);

if (esPrimo(sumaTotal)) {
    console.log("Es primo");
} else {
    descomponer(sumaTotal)
}