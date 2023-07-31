// JS es de 1 solo hilo

console.log("Este es un primer mensaje")

// setTimeout es para retrasar la funcion que quieres que se haga en web (callback y milisegundos), SOLO SE EJECUTA UNA VEZ
setTimeout(() => console.log("Este conetenido es asincrono"),3000)

console.log("Este es un segundo mensaje")

// setInterval
// setInterval(callback, milisegundos) -> SE PUEDE EJECUTAR CADA x SEGUNDOS

// setInterval(() => console.log("Esto es un intervalo", 2000) );

function alarm(secondsToRing) {
    let seconds = 0
    const clock = setInterval (()=> {
        if (secondsToRing === seconds) {
            console.log("RiiiIIIiiing")
            clearInterval(clock)
        }else{
            console.log(`Seconds: ${seconds}`)
            seconds++
        }
    },1000)
}

console.log(alarm(10))



