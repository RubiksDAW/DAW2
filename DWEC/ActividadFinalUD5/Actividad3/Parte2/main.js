/**
 * It takes the value of the input with the id "base" and the value of the input with the id
 * "exponente" and then it multiplies the base by itself exponente times.
 * </code>
 */
function calcular() {
    
    let base = window.parent.document.getElementById("base").value;
    let exponente = window.parent.document.getElementById("exponente").value
    let resultado = base ** exponente
    console.log(base,exponente);
    document.getElementById("salida").setAttribute('placeholder',resultado)
    
}