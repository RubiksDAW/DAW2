
const table = document.getElementsByClassName("crud-table")
const form = document.getElementsByClassName("crud-form")
const title = document.getElementsByClassName("crud-title")
const template = document.getElementById("crud-template")
const fragment = document.createDocumentFragment();


const getAll = async () => {

    try {

        let res = await fetch('https://reqres.in/api/users/')
        let json = await res.json();

        if(!res.ok)throw {status:res.status, statusText: res.statusText}
        console.log(json);
    
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded",getAll)

