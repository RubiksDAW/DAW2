
let resultados = []

let dos = 0
let tres = 0
let cuatro = 0
let cinco = 0
let seis = 0
let siete = 0
let ocho = 0
let nueve = 0
let diez = 0
let once = 0
let doce = 0


function lanzar() {

    let dado1;
    let dado2;

    for (let i = 0; i < 10; i++) {

        dado1 = Math.floor(Math.random() * 7 + 1);
        dado2 = Math.floor(Math.random() * 7 + 1);

        document.getElementById("dado1").setAttribute('placeholder', dado1)
        document.getElementById("dado2").setAttribute('placeholder', dado2)


        resultados.push(sumar(dado1, dado2))
    }

    contarResultados(resultados)
    resultados = []
    reset()

}

function contarResultados(resultados) {


    for (let i = 0; i < resultados.length; i++) {
        let valor = resultados[i];

        switch (valor) {
            case 2:
                dos++
                break;
            case 3:
                tres++
                break;
            case 4:
                cuatro++
                break;
            case 5:
                cinco++
                break;
            case 6:
                seis++
                break;
            case 7:
                siete++
                break;
            case 8:
                ocho++
                break;
            case 9:
                nueve++
                break;
            case 10:
                diez++
                break;
            case 11:
                once++
                break;
            case 12:
                doce++
                break;

            default:
                break;
        }

    }



    document.getElementById("box").innerHTML = `
    <p>El numero 2 ha salido:  ${dos}</p>
    <p>El numero 3 ha salido:  ${tres}</p>
    <p>El numero 4 ha salido:  ${cuatro}</p>
    <p>El numero 5 ha salido:  ${cinco}</p>
    <p>El numero 6 ha salido:  ${seis}</p>
    <p>El numero 7 ha salido:  ${siete}</p>
    <p>El numero 8 ha salido:  ${ocho}</p>
    <p>El numero 9 ha salido:  ${nueve}</p>
    <p>El numero 10 ha salido:  ${diez}</p>
    <p>El numero 11 ha salido:  ${once}</p>
    <p>El numero 12 ha salido:  ${doce}</p>
    `

}

function sumar(dado1, dado2) {
    let resultado;
    return resultado = dado1 + dado2
}

console.log(resultados);

function reset() {

    dos = 0
    tres = 0
    cuatro = 0
    cinco = 0
    seis = 0
    siete = 0
    ocho = 0
    nueve = 0
    diez = 0
    once = 0
    doce = 0
}