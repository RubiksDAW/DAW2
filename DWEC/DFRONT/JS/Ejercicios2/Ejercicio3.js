// // Ejercicio 3:

// // Tomando 2 fechas en formato DD/MM/YYYY calculad la cantidad de días entre ambas.

// const fechaInicio = new Date('10/12/2023');
// const fechaFin = new Date('13/12/2024');
// const a = "10/12/2023"
// const b = "15/12/2023"

// function calcularDiferencia(arg1, arg2) {
//     let fecha1 = new Date(arg1).toLocaleDateString();
//     let fecha2 = new Date(arg2).toLocaleDateString();
//     let diferencia = Date.parse(fecha2) - Date.parse(fecha1);

//     console.log(fecha1);
//     console.log(fecha2);

//     let diferenciaEnDias = diferencia / 1000 / 60 / 60 / 24
//     return diferenciaEnDias

// }

// console.log(calcularDiferencia(b,a));
// let fecha1 = new Date("02-12-2023").toLocaleDateString('es-ES')
// let fecha2 = new Date("12-12-2023").toLocaleDateString('es-ES')

// console.log(Date.parse(fecha1))
// console.log(Date.parse(fecha2))

// IDEA: pasar la fecha en el formato especificado y descomponerla para posteriormente asignar los valores al objeto date con metodos como setDay()

// let fecha1 = new Date();
// let fecha2 = new Date();

// let fechaFormato1 = "20/12/2023";
// let fechaDesglosada1 = fechaFormato1.split("/");

// let fechaFormato2 = "24/12/2023";
// let fechaDesglosada2 = fechaFormato2.split("/");

// console.log(fechaDesglosada1);
// console.log(
//   fecha1.setDate(Number(fechaDesglosada1[0])),
//   fecha1.setMonth(Number(fechaDesglosada1[1] - 1)),
//   fecha1.setFullYear(fechaDesglosada1[2])
// );
// console.log(
//   fecha2.setDate(Number(fechaDesglosada2[0])),
//   fecha2.setMonth(Number(fechaDesglosada2[1] - 1)),
//   fecha2.setFullYear(fechaDesglosada2[2])
// );

// console.log(fecha1);
// console.log(fecha2);

// let diferencia = fecha2.getTime() - fecha1.getTime();

// let diferenciaEnDias = diferencia / 1000 / 60 / 60 / 24;

// console.log(diferenciaEnDias);

function calcularDiferenciaDias(fechaA, fechaB) {

  let fechaFinDesglosada = fechaA.split("/");
  let fechaFin = new Date();
  fechaFin.setDate(Number(fechaFinDesglosada[0])),
    fechaFin.setMonth(Number(fechaFinDesglosada[1] - 1)),
    fechaFin.setFullYear(fechaFinDesglosada[2]);

  let fechaInicioDesglosada = fechaB.split("/");
  let fechaInicio = new Date();
  fechaInicio.setDate(Number(fechaInicioDesglosada[0])),
    fechaInicio.setMonth(Number(fechaInicioDesglosada[1] - 1)),
    fechaInicio.setFullYear(fechaInicioDesglosada[2]);

    let diferencia = fechaFin.getTime() - fechaInicio.getTime()
    let diferenciaEnDias = diferencia / 1000 / 60 / 60 / 24
    
    return Math.abs(Math.round(diferenciaEnDias))
}

console.log(calcularDiferenciaDias("25/03/2023", "25/04/2023"))

// calcularTiempoTranscurrid(fechaFin,fechaInicio)

// FECHAS EN JAVASCRIPT

// Con new Date() declaramos una nueva fecha, la cual muestra la hora actual del sistema.

// Si pasamos una cadena como parametro esta cadena se convierte el texto con formato YYY/MM/DD o HH:MM:SS a una fecha.

// const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
// const mesesAnyo = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","noviembre","Diciembre"];

// let fechaActual = new Date();

// console.log(fechaActual);

// let str = "4/12/2023";

// let fechaStr = new Date(str)

// console.log(fechaStr)

// // Extraemos el año de la fecha facilitada por str

// let anyoStr = fechaStr.getFullYear()

// console.log(`El año de la fecha facilitada es ${anyoStr}`)

// // Extraemos el día de la fecha facilitada por str
// // Este metodo solo funciona de forma correcta si el formato es YYYY/MM/DD
// let diaStr = fechaStr.getDay();

// console.log(`El día de la fecha facilitada es ${diasSemana[diaStr]}`)

// const fechaFormateada = fechaStr.toLocaleDateString()

// console.log(fechaFormateada)

// const dia = Number(fechaFormateada.split("/")[0])
// const mes = Number(fechaFormateada.split("/")[1])
// const anyo = Number(fechaFormateada.split("/")[2])

// console.log(dia);
// console.log(mes);
// console.log(anyo);
