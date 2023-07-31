// Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
// * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
// * NO hace falta comprobar que ambas palabras existan.
// * Dos palabras exactamente iguales no son anagrama.

const palabra1 = "onidi"
const palabra2 = "indio"
 

function esAnagrama(palabra1, palabra2) {
    const palabra1Ordenada = palabra1.split("").sort().join("")
    const palabra2Ordenada = palabra2.split("").sort().join("")
    return palabra1Ordenada === palabra2Ordenada
}



console.log(esAnagrama(palabra1,palabra2))