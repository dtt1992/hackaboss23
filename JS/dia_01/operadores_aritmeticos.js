// Operadores aritmeticos

// Suma o Concatenacion
// a + b
let numeroDiez = 10;
let numeroCinco = 5;
let suma = numeroDiez + numeroCinco;

let hola = "Hola";
let mundo = "Mundo";

// Para imprimir la suma
console.log( suma)
console.log( hola + mundo);
// Para agregar un espacio
console.log(hola + " " + mundo);
// Aqui hara la suma primero y luego añade el string
console.log(numeroCinco + numeroDiez + hola);
// Pero si suma con la primera variable siendo un string, no hara sumas internas
console.log(hola+ numeroCinco + numeroDiez + mundo );

// Resta
// a - b
console.log(numeroDiez - numeroCinco);

// Multiplicacion
// a * b
console.log(numeroDiez * numeroCinco),

// Division
//  a / b
console.log(numeroDiez / numeroCinco);

// Modulo, se utiliza mucho para saber si un numero par o impar
// a % b
console.log(numeroDiez % numeroCinco);
console.log(7 % 2 );
console.log(10 % 2 );


// Potencias
// a ** b
console.log( numeroDiez ** numeroCinco);

// Asignacion e incremento
//  a++ o a+=1
var puntajeJugador = 0;
puntajeJugador = puntajeJugador + 1;
console.log(puntajeJugador);
puntajeJugador += 3;
console.log(puntajeJugador);
puntajeJugador++;
// aqui no sumaria
console.log(puntajeJugador++);
// pero si le ponemos el ++ antes de la variable, si
console.log(++puntajeJugador);
console.log(puntajeJugador);

// Asignacion y decremento
// a-- o a-=1
puntajeJugador--;
console.log(puntajeJugador);
puntajeJugador -=3;

// Asignacion y multiplicacion
// a *= b
puntajeJugador *= 10;

// Asignacion y division
// a /= b
puntajeJugador /= 5;

// Asignacion y modulo
//  a %= b
puntajeJugador %= 2;
