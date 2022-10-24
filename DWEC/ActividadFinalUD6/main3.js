// Ejercicio 2
function Producto_alimenticio(codigo,nombre, precio) {

    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio
    
    this.imprimeDatos = function () {

        console.log(this.codigo);
        console.log(this.nombre);
        console.log(this.precio);

        
    }
}

const producto1 = new Producto_alimenticio(12345,"Piña",23)
const producto2 = new Producto_alimenticio(1243,"Cacahuete",12)
const producto3 = new Producto_alimenticio(432,"Cereales",123)


let carrito = []

carrito.push(producto1)
carrito.push(producto2)
carrito.push(producto3)

for (let index = 0; index < carrito.length; index++) {
    console.log(`Item numero ${index+1}`);
   carrito[index].imprimeDatos()
    
}

Array.prototype.borrar = function (arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  

console.log(Array);












