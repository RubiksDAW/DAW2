// Ejercicio 4
function Factura(cliente,elementos,info){
    this.cliente = cliente;
    this.elementos = elementos;
    this.info = info;
}
function Cliente(nombre, direccion, telefono, nif) {

    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;

}

function Elemento(descripcion,cantidad,precio){
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;

}


function Info(base = 0, iva=0.21, total=0, metodoPago="contado"){

    this.base = base;
    this.iva = iva;
    this.total = total;
    this.metodoPago = metodoPago;

}

function Empresa(nombre,direccion,telefono,cif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this. cif = cif;

}
let clie = new Cliente("Alejandro","aledelarosa@gmail.com",676886768,"3023442Q");

let elem1 = new Elemento("coche electrico",1,3000);

let elem2 = new Elemento("moto electrica",2,1500);

let info = new Info()

console.log(info);



let facturaPrueba = new Factura(clie,[elem1,elem2],info)

console.log(facturaPrueba);




console.log(Factura);



console.log(Factura);
Factura.prototype.calcularIVA = function calcularIVA() {
    let precioArticulos = 0;

    for (let i = 0; i < this.elementos.length; i++) {
        const element = this.elementos[i].precio;
        precioArticulos += element
        
    }

    let precioIVA = precioArticulos * this.info.iva + precioArticulos;

    Object.defineProperty(Factura,"precioConIVA", Factura,precioIVA);

    
}

console.log(Factura);

Factura.prototype.mostrarIVA = function mostrarIVA() {
    let precioArticulos = 0;

    for (let i = 0; i < this.elementos.length; i++) {
        const element = this.elementos[i].precio;
        precioArticulos += element
        
    }

    let precioIVA = precioArticulos * this.info.iva + precioArticulos;
   
    console.log(`El precio total de la compra ha sido de ${precioIVA} euros`);
    return precioIVA;
}

facturaPrueba.calcularIVA();

let precioFinal = facturaPrueba.mostrarIVA()

console.log(precioFinal);

facturaPrueba.precioIVA = precioFinal

console.log(facturaPrueba);


