// Ejercicio 4:

// Crea una copia y ordena este array por Nombre seguido de Edad y por último Apellido.

let personas = [
  { nombre: "Juanma", apellido: "Cano", edad: 22 },
  { nombre: "Juanma", apellido: "Armario", edad: 45 },
  { nombre: "David", apellido: "Quiñones", edad: 18 },
  { nombre: "Alberto", apellido: "Rus", edad: 18 },
  { nombre: "Alberto", apellido: "Rus", edad: 24 },
  { nombre: "Alberto", apellido: "Rodriguez", edad: 80 },
];

let personasOrdenadas = personas.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    if (a.apellido < b.apellido) return -1;
    if (a.apellido > b.apellido) return 1;
    return 0;
  });

console.log(personasOrdenadas)
