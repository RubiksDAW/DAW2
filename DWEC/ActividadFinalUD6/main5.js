// Ejercicio 5 del taller final de la unidad 6

class Vehiculo {
    constructor(nombre, matricula) {
        this.nombre = nombre;
        this.matricula = matricula;
    }
}

class Furgoneta extends Vehiculo{
    constructor(nombre,matricula,pasajeros) {
        super(nombre,matricula)
        this.pasajeros = pasajeros;
    }
}

class Todoterreno extends Vehiculo{
    constructor(nombre,matricula,traccion) {
        super(nombre,matricula)
        this.traccion = traccion;
    }
}

let coche1 = new Furgoneta("Renault","34FKC",3)
let coche2 = new Todoterreno("VOLVO", "30KJD",true)

console.log(coche1);
console.log(coche2);

// Ejercicio 6 del taller final de la unidad 6

class Persona {

    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles(){

        return `El nombre es: ${this.nombre}, la edad: ${this.edad} y el genero es: ${this.genero}`

    }

}

class Estudiante extends Persona{

    constructor(nombre,edad,genero,curso,grupo) {
        super(nombre,edad,genero)
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar(){

        console.log(`Esto es un registro realizado por ${this.nombre}`);
    }

    obtDetalles(){

        return `El nombre es: ${this.nombre}, la edad: ${this.edad} y el genero es: ${this.genero}`

    }

}

class Profesor extends Persona{

    constructor(nombre,edad,genero,asignatura,nivel) {
        super(nombre,edad,genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar(){

        console.log(`Esto es el metodo asignar realizado por ${this.nombre}`);
    }

    obtDetalles(){

        return `El nombre es: ${this.nombre}, la edad: ${this.edad} y el genero es: ${this.genero}`

    }

}

let persona = new Persona("Manuel", 12, "Femenino");
let persona2 = new  Estudiante("Maria",23,"Masculino","Segundo","B")
let persona3 = new Profesor("Bruno",40,"Masculino","DWEC","Alto")

console.log(persona);
console.log(persona.obtDetalles());
console.log(persona2);
console.log(persona2.obtDetalles());
console.log(persona3);
console.log(persona3.asignar());




