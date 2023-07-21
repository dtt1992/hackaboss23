// Crea un array del 1 al 100. Si el número es divisible por 3 en vez de el número retorna "fizz", si es divisible por 5 retorna "buzz" y si es divisible por 3 y por 5 retorna "fizzbuzz".


// Pista: Se usa un for y un ifelse

const numerosArray = [];

for (let i = 0; i < 101; i++) {
    numerosArray.push(i)
}
// console.log(numerosArray)

const fizzArray =[]
const buzzArray = []
const fizzbuzzArray = []
const noDivisble = []
const divisibles= []

for (let x = 1; x <= numerosArray.length; x++) {
   let numero = numerosArray[x]
   if (numero % 3 === 0 && numero % 5 === 0 ) {
    // console.log(`El numero ${numero} es divisible entre 3 y 5`)
    fizzArray.push("numero")
    divisibles.push("fizzbuzz")
   }else if (numero % 3 === 0 ){
//    console.log(`El numero ${numero} es divisible entre 5`)
   buzzArray.push(numero)
   divisibles.push("fizz")
   }else if (numero % 5 === 0) {
    // console.log(`El numero ${numero} es divisible entre 3`)
    fizzbuzzArray.push(numero)
    divisibles.push("buzz")
   }else{
    // console.log(`El numero ${numero} no es divisible`)
    noDivisble.push(numero)
    divisibles.push(numero)
   }
    
}

// console.log(fizzArray)
// console.log(buzzArray)
// console.log(fizzbuzzArray)
// console.log(noDivisble)
console.log(divisibles)