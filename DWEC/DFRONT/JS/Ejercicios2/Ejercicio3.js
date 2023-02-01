// Ejercicio 3:

// Tomando 2 fechas en formato DD/MM/YYYY calculad la cantidad de días entre ambas. 

const fechaInicio = new Date('10/12/2023');
const fechaFin = new Date('13/12/2024');

// No he sabido como utilizar las fechas de forma correcta. REVISAR 
function calcularTiempoTranscurrid(fecha1, fecha2) {
    const diasFecha1 = Date.parse(fecha1.getFullYear());
    const diasFecha2 = Date.parse(fecha2.getFullYear());

    console.log(diasFecha1)
    console.log(diasFecha2)

    return diasFecha1 - diasFecha2
}

calcularTiempoTranscurrid(fechaFin,fechaInicio)