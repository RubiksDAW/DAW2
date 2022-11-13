const time = () => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/London')
        .then(response => response.json())
        .then(function (data) {
            let hora = data.datetime
            const contenedor = document.getElementById("contenedor")
            contenedor.innerHTML = `<p>Hola la hora es ${hora}</p>`
            console.log(hora);
            
        })
}

