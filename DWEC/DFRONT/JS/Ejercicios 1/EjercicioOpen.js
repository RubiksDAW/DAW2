let jugador = {
    fuerza: 1,
    incrementarFuerza: function () {
        this.fuerza = this.fuerza +1
    },
    mostrarFuerza: function () {
        console.log(this.fuerza)
    }
}

jugador.incrementarFuerza()
jugador.incrementarFuerza()
jugador.mostrarFuerza()