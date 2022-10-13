function calcular() {
    
    let base = window.parent.document.getElementById("base").value;
    let exponente = window.parent.document.getElementById("exponente").value
    let resultado = base ** exponente
    console.log(base,exponente);
    document.getElementById("salida").setAttribute('placeholder',resultado)
    
}