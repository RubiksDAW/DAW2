function Producto_alimenticio(codigo,nombre, precio) {

    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
    
    imprimeDatos = function () {

        console.log(this.codigo);
        console.log(this.nombre)
        console.log(this.precio);

        
    }
}

alert("Introduzca valores para crear un objeto")

let codigo = prompt("Dame el codigo del producto")
let nombre = prompt("Dame el nombre del producto")
let precio = +prompt("Dame el precio del producto")

const producto1 = new Producto_alimenticio(codigo,nombre,precio)


console.log(producto1);