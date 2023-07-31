// Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
// * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
// * 0, 1, 1, 2, 3, 5, 8, 13...






function fibonacci(n) {
    let arrayFibonacci= [0,1]
    for (let i = 2; i <= n; i++){
        arrayFibonacci[i] = arrayFibonacci[i-1] + arrayFibonacci[i-2]
    }
    console.log(arrayFibonacci)
    return arrayFibonacci[n]
}
console.log(fibonacci(50))




