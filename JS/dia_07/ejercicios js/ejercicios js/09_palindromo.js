// Escribe una función que reciba una palabra y retorne verdadero o falso según sea palíndromo o no.
// Un palíndromo es una palabra que escrita al revés retorna el mismo resultado.
// Por ejemplo los nombres Hannah, Ana, Bob ó la frase 'Dabale arroz a la zorra el abad'



function isPalindrome(txt) {
    const palindrome = txt.toLowerCase().replaceAll(" ","").split("").reverse().join("")
    // console.log(txt.split("").reverse().join("").toLowerCase().replaceAll(" ",""))
    // console.log(txt.replaceAll(" ","").toLowerCase())
    return palindrome === txt.toLowerCase().replaceAll(" ","")

}

console.log(isPalindrome("Dabale arroz a la zorra el abad"))