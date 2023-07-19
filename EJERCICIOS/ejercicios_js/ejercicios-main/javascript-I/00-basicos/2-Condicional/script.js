// # Ejercicio 2

// Edita el archivo script.js para añadir las variables de nombre y edad del ejercicio anterior.

// A continuación, utiliza un condicional para sacar por consola la frase correspondiente de la siguientes:

// - A _nombre_ le corresponde el descuento infantil (menores de 12).
// - A _nombre_ le corresponde el descuento juvenil (menores de 30).
// - A _nombre_ le corresponde el descuento de jubilados (mayores de 60).
// - A _nombre_ no le corresponde ningún descuento.


const name = "Dani";
const edad = 14;

if (edad < 12) {
    console.log(`A ${name} le corresponde el descuento infantil`)
}else if (edad >= 12 && edad < 30) {
    console.log(`A ${name} le corresponde el descuento juvenil`)
}else if (edad > 60) {
    console.log(`A ${name} le corresponde el descuento jubilados`)
}else{
    console.log(`A ${name} no le corresponde ningun descuento`)
}