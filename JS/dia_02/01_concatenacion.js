const nombre = "Juan";
const apellido = "Perez";
const edad = 33;
const direccion = "calle del castillo, 1. Motilla del Palancar";

// Concatenacion
"Hola me llamo" + nombre + " " + apellido +
", tengo " + edad + " años y vivo en " + direccion;
    
// sintactyc sugar -> azucar sintactico
// Template string se pone con ``, se utiliza para formar frases con las variables
// Para pasar un numero a texto -> ${edad.toString()}
`Hola me llamo ${nombre} ${apellido}, tengo ${edad.toString()} años y vivo en ${direccion}`;