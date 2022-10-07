let participantes = []
let participante;
do {
    participante = prompt("Introduce participante")
    if (participante == "") {
        break
    }
    participantes.push(participante)
} while (participante != "");



function sorteo(part) {

    let random = Math.floor(Math.random() * (participantes.length + 1))

    let pringado = part[random]

    alert(`Le toca pagar el bocata a ${pringado}`)
}


sorteo(participantes)