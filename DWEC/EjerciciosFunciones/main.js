// Tarea 30
// // Variante 1
// alert("Tarea 30")
// function checkAge(age) {

//     return (age>18)? true: confirm("¿Tienes permiso de tus padres?")
    
// }

// checkAge(12)

// Variante 2

// function checkAge(age) {

//     age >= 18 || confirm("¿Tienes permiso de tus padres?")
//     return true
// }

// checkAge(11)

// Tarea 32

// function min(a,b) {

//     return a<b? a:b
    
// }

// alert(min(31,12))

// Tarea 33 NO ESTA BIEN

function pow(x,n) {

    for (let i = 1; i <= n; i++) {
        x*=x
    }

    return x
    
}

alert(pow(2,5))

