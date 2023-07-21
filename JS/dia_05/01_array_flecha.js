// Funciones Flecha (arrow function)
// () => {}

function saludar(nombre){
  return `Hola ${nombre}, bienvenido`
}

saludar("Dani")

// Funcion flecha
const sayHi = (name) => {
  return `Hi ${name}, welcome!`
}

// Reduccion de funcion flecha, si es solo una linea no hace falta las llaves ni return y si es solo un parametro, no hace falta poner parentesis en la condicion

const sayHi2 = name =>  `Hi ${name}, welcome!`

sayHi2("Pepe