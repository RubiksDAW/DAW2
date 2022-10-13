
let resultados = []



function lanzar() {

    let dado1;
    let dado2;

    for (let i = 0; i < 10; i++) {

        dado1 = Math.floor(Math.random() * 7 + 0);
        dado2 = Math.floor(Math.random() * 7 + 0);

        document.getElementById("dado1").setAttribute('placeholder', dado1)
        document.getElementById("dado2").setAttribute('placeholder', dado2)


        resultados.push(sumar(dado1, dado2))
    }

}

function contarResultados(resultados) {
    for (let i = 0; i < resultados.length; i++) {
        let valor = resultados[i];

        switch (valor) {
            case 2:
                
                break;
        
            default:
                break;
        }
        
    }
}

function sumar(dado1, dado2) {
    let resultado;
    return resultado = dado1 + dado2
}

console.log(resultados);