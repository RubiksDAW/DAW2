const panelUsuarios = document.getElementById("crud-usuarios")
const form = document.getElementById("crud-form")
const title = document.getElementById("crud-title")
const template = document.getElementById("crud-template")
const fragment = document.createDocumentFragment();


const getAll = async () => {

    try {

        let res = await fetch('https://reqres.in/api/users/')
        let json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText }

        json.data.forEach(elem => {
            //Guardamos los elementos del objeto en sus etiquetas HTML
            let nombre = document.createElement("p")
            nombre.textContent = elem.first_name
            nombre.setAttribute("id","pNombre")

            let mail = document.createElement("p")
            mail.setAttribute("id","pMail")
            mail.textContent = elem.email

            let img = document.createElement("img")
            img.setAttribute("src", elem.avatar)
            img.setAttribute("id","pImg")

            let id = elem.id

            let eliminar = document.createElement("button")
            let editar = document.createElement("button")

            eliminar.textContent = "Eliminar"
            eliminar.setAttribute("id", elem.id)
            eliminar.setAttribute("class", "eliminar")

            editar.setAttribute("id", elem.id)
            editar.textContent = "Editar"
            editar.setAttribute("class", "editar")


            let marco = document.createElement("div")
            marco.setAttribute("class", "marco")
            marco.append(nombre)
            marco.append(mail)
            marco.append(img)
            marco.append(eliminar)
            marco.append(editar)

            panelUsuarios.append(marco)


            //   panelUsuarios.append(nombre)
            //   panelUsuarios.append(mail)
            //   panelUsuarios.append(img)

        })

        console.log(json.data);

    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", getAll)

document.addEventListener('submit', async e => {


    if (e.target === form) {
        e.preventDefault()

        if (!e.target.id.value) {

            console.log(e.target.nombre.value);
            try {

                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({

                        nombre: e.target.nombre.value,
                        nombre: e.target.correo.value,
                        nombre: e.target.imagen.value

                    })
                }

                let res = await fetch('https://reqres.in/api/users/', options)
                let json = await res.json();
                console.log(json.id);

                // Modelamos los datos para mostrarlos

                let nombre = document.createElement("p")
                nombre.textContent = e.target.nombre.value
                
                let mail = document.createElement("p")
                mail.textContent = e.target.correo.value

                let img = document.createElement("img")
                img.setAttribute("src", e.target.imagen.value)

                let id = json.id

                let eliminar = document.createElement("button")
                let editar = document.createElement("button")

                eliminar.textContent = "Eliminar"
                eliminar.setAttribute("id", id)
                eliminar.setAttribute("class", "eliminar")

                editar.setAttribute("id", id)
                editar.textContent = "Editar"
                editar.setAttribute("class", "editar")


                let marco = document.createElement("div")
                marco.setAttribute("class", "marco")
                marco.append(nombre)
                marco.append(mail)
                marco.append(img)
                marco.append(eliminar)
                marco.append(editar)

                panelUsuarios.append(marco)

                // location.reload()

            } catch (error) {
                console.log(error);
            }
        }
    }

})

document.addEventListener("click", async e => {
    // e.preventDefault()
    if (e.target.className == 'eliminar') {

        let confirmacion = confirm("Estás seguro de que quieres borrar a este usuario?")

        if (confirmacion) {
            try {

                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                let elemento = document.getElementById(`${e.target.id}`)
                let res = await fetch(`https://reqres.in/api/users/${e.target.id}`, options)

                    .then(() => elemento.parentElement.innerHTML = 'Deleted')

                console.log(res);

                // location.reload()

            } catch (error) {
                console.log(error);
            }
        }

    } 
    
    if(e.target.className == 'editar'){
        document.getElementById("crud-title").textContent = 'Editar Usuario';
        // e.parentElement.name = form[0].value 
        e.target.parentElement.children[0].textContent = form[0].value
        e.target.parentElement.children[1].textContent = form[1].value
        e.target.parentElement.children[2].src = form[2].value

        console.log(e.target.parentElement);
        console.log();
        
    }

    // console.log(e.target);

})
