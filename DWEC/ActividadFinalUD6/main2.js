/**
 * The function creates a new row in the table, and then creates a new cell for each property of the
 * object, and then adds the property to the cell.
 * @param marca - String
 * @param modelo - "Fiesta"
 * @param color - "red"
 * @param anio - year
 */
function Vehiculo(marca, modelo, color, anio) {

    let tabla = document.getElementById("tabla")
    let nuevoElemento = document.createElement('tr')


    this.marca = marca;

    let marcaTabla = document.createElement('th')
    marcaTabla.textContent = this.marca
    nuevoElemento.append(marcaTabla)

    this.modelo = modelo;
    let modeloTabla = document.createElement('th')
    modeloTabla.textContent = this.modelo
    nuevoElemento.append(modeloTabla)


    this.color = color;
    let colorTabla = document.createElement('th')
    colorTabla.textContent = this.color
    nuevoElemento.append(colorTabla)

    this.anio = anio;

    let anioTabla = document.createElement('th')
    anioTabla.textContent = this.anio
    nuevoElemento.append(anioTabla)

    tabla.append(nuevoElemento)
}

// Creamos unos cuantos objetos para ver que se añaden directamente a la tabla
const prueba = new Vehiculo("Masserati", "Beiron", "Azul", 1993)
const prueba2 = new Vehiculo("Renault", "Clio", "Verde", 2000)
const prueba3 = new Vehiculo("BMW", "A3", "Rosa", 2020)





let body = document.getElementById("body").innerHTML
console.log(body);


