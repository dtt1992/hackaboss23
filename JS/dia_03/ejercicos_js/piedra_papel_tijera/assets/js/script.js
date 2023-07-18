// Juego de Piedra || Papel || Tijera

// Parte para que el navegador escoja un numero random que se traduce a un indice dentro de la array
const gameOptions = ["piedra", "papel", "tijera", "lagarto","spock"]

const pc_index = parseInt(Math.random()*gameOptions.length)

const pc_game = gameOptions[pc_index]


// Parte para que el usuario escoja una opcion 
const opciones = "Elige una de las 3 opciones:  0 = Piedra || 1 = Papel || 2 = Tijera ||  3 = Lagarto ||  4 = Spock"

let user_game = ""
// while ( user_game !== "piedra" && user_game !== "papel" && user_game !== "tijera") {
//     console.log(`Usuario escogio: ${user_game}`)
//     reglas() 
// }

while ( !gameOptions.includes(user_game) ){
    user_game = prompt(opciones).toLowerCase()
    
}

console.log(`Usuario escogio: ${user_game}`)
console.log(`El pc escogio: ${pc_game}`)


// REGLAS

// Igualdad
// Jugador
// Else-PC

if (pc_game === user_game) {
    console.log("Hay un empate")
}else if (
    (user_game === "tijera" && pc_game === "papel") ||
    (user_game === "papel" && pc_game === "piedra") ||
    (user_game === "piedra" && pc_game === "lagarto") ||
    (user_game === "lagarto" && pc_game === "spock") ||
    (user_game === "spock" && pc_game === "tijera") ||
    (user_game === "tijera" && pc_game === "lagarto") ||
    (user_game === "lagarto" && pc_game === "papel") ||
    (user_game === "papel" && pc_game === "spock") ||
    (user_game === "spock" && pc_game === "piedra") ||
    (user_game === "piedra" && pc_game === "tijera")
){
    console.log("Has ganado! 🎉🎊")
}else{
    console.log("Sigue probando! 😿")
}