//a y b Crear constructor. Crear propiedades: marca, modelo, color y año fabricación.
function Vehiculo(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

//f Crear el método mostrarDatos.
Vehiculo.prototype.mostrarDatos = function () {
    
    console.log(this.marca);
    console.log(this.modelo);
    console.log(this.color);
    console.log(this.anio);
    //    // Preguntar Bruno
    //     for (const property in Vehiculo) {

    //       console.log(`${property}: ${Vehiculo[property]}`);
    //         //¿Esto no deberia recorrer las propiedades del objeto?
    //     }
}


//g Crear un método que tenga argumentos acelerar(velocidad). Mostrará por pantalla que el coche ha
// acelerado a la velocidad pasada.
Vehiculo.prototype.acelerar = function (velocidad) {

    console.log(`Este coche va a ${velocidad}km/h`);

}

//h Crear un método con función interna arrancar. Mostrará por pantalla que el coche de marca _,
// modelo_, de color_ ha arrancado.

Vehiculo.prototype.arrancar = function () {
    // DEBEMOS HACER REFERENCIA CON THIS A LAS INSTANCIAS DEL OBJETO CREADO A PARTIR DEL CONSTRUCTOR (Hace referencia al scope global)
    console.log(`El vehiculo de la marca ${this.marca}, ${this.modelo}, ${this.color} ha arrancado`);
}

//i Asignar una nueva propiedad cilindrada.

Vehiculo.prototype.cilindrada = "120";

//j Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_, modelo_, color_ha parado)

Vehiculo.prototype.arrancar = function () {
    console.log(`El vehiculo de la marca ${this.marca}, ${this.modelo}, ${this.color} ha parado`);
}


//c Instanciar dos objetos.
const Mercedes = new Vehiculo("Mercedes-Benz", "Clase-C", "Negro", 2022);
const Renault = new Vehiculo("Renault", "Clio", "Rojo", 1993);

//d Mostrar por pantalla una propiedad con notación por puntos. Objeto 1 - marca.
console.log(Mercedes.modelo);

//e Mostrar por pantalla una propiedad con notación por corchetes. Objeto 2 - color. NO FUNCIONA, ¿POR QUÉ?
// console.log(Mercedes[modelo]);


// Prueba de los metodos

console.log("MOSTRAMOS TODOS LOS DATOS");
Mercedes.mostrarDatos()
Mercedes.acelerar(120)
Mercedes.arrancar()


//k Realizar las siguientes modificaciones en el Objeto 1 : la propiedad marca no podrá ser eliminadas,
// la propiedad modelo tendrá como valor por defecto ‘xx’ y no podrá ser modificado y los métodos
// no serán enumerables.

// Creamos un metodo que establecerá por defecto el modelo de nuestro vehiculo 

Mercedes.modelo = "xx"


Object.freeze(Mercedes) // Hacemos uso del metodo freeze de Object para congelar una instancia 

console.log("--------------");

// l. Borrar la propiedad marca, modificar la propiedad modelo y volver a mostrar los datos de Objeto 1

console.log(delete Mercedes.marca);

console.log(Mercedes.marca);


console.log(Mercedes.modelo);

// m Muestra todas las propiedades de Objeto1 utilizando: for in , Object.hasOwnPropertyNames(),
// Object.keys().
console.log("Imprimimos con un for in las propiedades");
for (const key in Mercedes) {
    if (Object.hasOwnProperty.call(Mercedes, key)) {
        const element = Mercedes[key];
        console.log(element);
    }
}




