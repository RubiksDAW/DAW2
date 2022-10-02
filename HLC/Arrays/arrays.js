// -- ARAYS -- //

let personas = [{
    nombre: 'Marco',
    edad: 23,
    fuma: true
}, {
    nombre: 'Cristina',
    edad: 25,
    fuma: true,
}, {
    nombre: 'Luis',
    edad: 27,
    fuma: false
}]

// .push() Nos inserta un nuevo elemento en la ultima posición del array

// .pop() Elimina el ultimo elemento del array

// .shift() Elimina el primer elemento de un array y nos lo devuelve

// .unshift() Inserta un elemento en la primera posición del array ¿y nos lo devuelve?

// .concat() Concatena dos arrys y añade el nuevo array o elemento al final

// .splice(posicionInicioBorrado,numeroElementosBorrar,nuevoElementoInsertar) Nos elimina elementos de un array a partir de los parametros que
//   se le pasen. Si le digo desde la posición dos y solo borras UNO solo borrará la posición 2

// .slice(elementoInicio,elementoFin) elimina desde el elemento inicial que indiquemos hasta el elemento final (No incluido)

// .filter() nos devuelve el mismo array con los elementos filtrados 

//<--Metodos MAP Y FILTER ACLARAR DIFERENCIA-->

//// let noFumadores = personas.filter(elemento => {
////     return elemento.fuma == false;
//// })

//// console.log(noFumadores);

//// .map() nos crea un nuevo array con los valores que hayan cumplido la condición que le hayamos pedido
//// let fumadores = personas.map(elemento =>{
////     return elemento.fuma == true;
//// })

//// console.log(fumadores)

//.forEach() Este metodo recorre todo el array como fi fuera un "for", permite ejecutar un metodo o leer una propiedad por cada elemento del array

personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
})

personas.filter(elemento => {

    return elemento.nombre == 'Marco';

})

console.log(personas);


//// .every() sirve para comprobar si todos los elementos de un array cumplen una condición, de no ser así devuelve false
//// .some() sirve para comprobar si alguno de los elementos del array cumple una condicion, de no ser así devuelve false
//// .find() devuelve el primer elemento encontrado que cumple con la condición especificada.
//// .reverse() le da la vuelta al array y cambia el orden de sus posiciones


//// .sort() ordena el array. Debemos indicar la condicion para ordenar.

//// personas.sort((a,b) => {
//// return a.experiencia - b.experiencia
//// })












