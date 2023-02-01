// Ejercicio 3:

// Tomando 2 fechas en formato DD/MM/YYYY calculad la cantidad de días entre ambas. 

const fechaInicio = new Date('10/12/2023');
const fechaFin = new Date('13/12/2024');

function daysBetween(date1, date2) {
    // Convert both dates to milliseconds
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();
    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1Ms - date2Ms);
    // Convert back to days and return
    return Math.round(differenceMs / (1000 * 60 * 60 * 24));
  }

const tiempoTranscurrido = daysBetween(fechaInicio, fechaFin)

console.log(tiempoTranscurrido)