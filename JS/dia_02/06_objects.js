// Objectos

// Creamos un objecto, lo creamos con una funcion sin nombre, para hacer referencia interna de la array se pone this.variable
const personas = {
    name:"Juan Perez",
    edad: 33,
    active: true,
    saludar: function(){
       console.log(`Soy ${this.name} y tengo ${this.edad} años.`)
    }
  }
  personas["saludar"]()
  personas.saludar()
  
  