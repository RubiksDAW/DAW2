function calcular() {
    let frame = window.top.frames[0]
    let base = frame.document.getElementById("base").value;
    let exponente = frame.document.getElementById("exponente").value
    let resultado = base ** exponente

    document.getElementById("salida").setAttribute('placeholder',resultado)
    
}