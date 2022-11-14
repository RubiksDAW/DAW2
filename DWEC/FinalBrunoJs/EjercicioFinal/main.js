const panelUsuarios = document.getElementById("crud-usuarios")
const form = document.getElementById("crud-form")
const title = document.getElementById("crud-title")
const template = document.getElementById("crud-template")
const fragment = document.createDocumentFragment();

function prueba() {
    event.preventDefault()
    document.body.innerHTML = ""
}

const getAll = async () => {

    try {

        let res = await fetch('https://reqres.in/api/users/')
        let json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText }



        json.data.forEach(elem => {
            //Guardamos los elementos del objeto en sus etiquetas HTML
            let nombre = document.createElement("p")
            nombre.textContent = elem.first_name

            let mail = document.createElement("p")
            mail.textContent = elem.email

            let img = document.createElement("img")
            img.setAttribute("src", elem.avatar)

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

document.addEventListener("click", async e => {
    e.preventDefault()
    if (e.target.className == 'eliminar') {

        let confirmacion = confirm("Estás seguro de que quieres borrar a este usuario?")

        if (confirmacion) {
            try {

                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    }
                }

                let elemento = document.getElementById(`${e.target.id}`)
                let res = await fetch(`https://reqres.in/api/posts/${e.target.id}`, options)
                    .then(() => elemento.parentElement.innerHTML = 'Deleted')
                console.log(res);




                // location.reload()



            } catch (error) {
                console.log(error);
            }
        }

    }

    // console.log(e.target);

})
