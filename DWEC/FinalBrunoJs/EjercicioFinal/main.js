
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

        console.log(res.status);
        console.log(json);

        Object.entries(json.data).forEach(elem => {

            console.log(elem);

            console.log(template);
            template.getElementsByClassName("nombre").textContent = elem[1].first_name;
            template.getElementsByClassName("correo").textContent = elem[1].email;
            template.getElementsByClassName("img").textContent = elem[1].avatar;

            let clone = document.importNode(template, true)

            fragment.appendChild(clone)

        })

        panelUsuarios.appendChild(fragment)



    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", getAll)

