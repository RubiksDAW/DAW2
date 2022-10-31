// Ejercicio 4

function Cliente(nombre,telefono,factura){
    this.nombre = nombre
    this.telefono = telefono
    this.factura = factura
}

function factura(nombre,telefono,factura){
    this.cliente =  new Cliente(nombre,telefono,factura)

}

let prueba = new factura("Manuel",12345,"Pruebafactura")

console.log(prueba);