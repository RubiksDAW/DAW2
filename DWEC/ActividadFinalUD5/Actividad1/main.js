let valor ;

let ventana = () => {
    window.open("nueva.html","nuevaVentana","height=300, width=600");
}



function moverIzquierda() {
    valor = window.opener.document.getElementById("size").value;
    window.moveBy(-valor,0)
    
}

function moverDerecha() {
    valor = window.opener.document.getElementById("size").value;
    window.moveBy(valor,0)
    console.log(valor);
}