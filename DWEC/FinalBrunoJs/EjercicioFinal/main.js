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

        console.log(json.data);

        json.data.forEach(elem => {
            //Guardamos los elementos del objeto en sus etiquetas HTML
            let nombre = document.createElement("p")
            nombre.textContent = elem.first_name

            let mail = document.createElement("p")
            mail.textContent = elem.email

            let img = document.createElement("img")
            img.setAttribute("src",elem.avatar)

            let id = elem.id
            
            let eliminar = document.createElement("button")
            let editar = document.createElement("button")

            eliminar.textContent = "Eliminar"
            editar.textContent = "Editar"
            
            let marco = document.createElement("div")
            marco.setAttribute("class", "marco")
            marco.append(nombre)
            marco.append(mail)
            marco.append(img)
            marco.append(eliminar)
            marco.append(editar)

            panelUsuarios.append(marco)
            console.log(nombre);
            console.log(mail);
            console.log(img);

            //   panelUsuarios.append(nombre)
            //   panelUsuarios.append(mail)
            //   panelUsuarios.append(img)

        }

        
        )

    } catch (error) {
        console.log(error);
    }
}



document.addEventListener("DOMContentLoaded", getAll)

