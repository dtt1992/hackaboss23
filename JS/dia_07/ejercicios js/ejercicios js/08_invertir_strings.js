// Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
// * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"


function revertString(txt) {
    const txtReverse = txt.split("")
    let textoReverse = null
    let arrayReverse = []
    for (let i = txtReverse.length -1; i > -1; i--) {
        arrayReverse.push(txtReverse[i])
    }  

    // console.log(arrayReverse)
    return arrayReverse.join("")
} 



// console.log(revertString("Hola Mundo"))
// console.log(revertString("Hello World"))

function sinFuncion(txt) {
    let textoAlReves =""
    console.log(txt)
    for (let i = txt.length -1; i > -1; i--) {
        textoAlReves += txt[i]
    }  
    return textoAlReves
}
console.log(sinFuncion("Hola Mundo"))