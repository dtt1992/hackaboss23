// Haremos un juego, el ordenador elegirá un número entre el 1 y el 10.
// Y te preguntará el número un máximo de 3 veces: si aciertas tu ganas, si después de 3 intentos no aciertas, pierdes.

let numeroPc = Math.floor(Math.random() * 10)
let numeroJugador = null

console.log(numeroPc)
let intentos = 4

do {
    numeroJugador = prompt("Escribe un numero del 1 al 100")
} while (numeroJugador === numeroPc){
    if (intentos != 0 ) {

        if (numeroJugador < numeroPc) {
            prompt("Tu numero es menor al del PC, sigue probando")
            intentos--
        }
        if (numeroJugador > numeroPc) {
            prompt("Tu numero es mayor al del PC, sigue probando")
            intentos--
        }
        }else{
            alert(`Has perdido!! El numero del Pc era ${numeroPc}`)
        }

}

 



