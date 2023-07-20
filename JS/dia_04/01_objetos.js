// Objetos
const option = "hola"
const coche = {
  color: "rojo",
  puertas: 5,
  deportivo: false,
  conductoresDesignados: ["Juan", "Julia"],
  capacidadEstanque: 50,
  kmsPorLitro: 10,
  tipo:{
    marca:"Fiat",
    modelo: "600",
    año:200,
  },
  avanzar:function(kms){
    const consumo = kms / this.kmsPorLitro
    this.capacidadEstanque -= consumo
    console.log(`El coche de color ${this.color} ha avanzado ${kms} kms
    el coche ha consumido ${consumo} ${this.pluralize(consumo, "litros","litro")}`);
    console.log(this.capacidadEstanque)
  },
  pluralize: function(num, plural,singular){
    return num > 1 ? plural : singular
  }
}

// coche.avanzar(100)

// // Object.keys(coche)

// for (const key of Object.keys(coche)){
//   console.log(coche[key])
// }
 
// Imprimir la llave 
// console.log(Object.keys(coche))
// Imprimir la definicion
// console.log(Object.values(coche))
// Imprime una array con las [llaves][definicion]
// console.log(Object.entries(coche))



const obj1={
  propiedad1: "azul",
  propiedad2: true
}

const obj2={
  propiedad1: "azul",
  propiedad2: true
}

// Hace referencia a distintos elementos en la memoria
obj1===obj2
// Hace referencia al mismo elemento en la memoria
const obj3 = obj1;
obj1 === obj3


// Duplicar un objeto
const obj4 = structuredClone(obj1)
console.log(obj4)

// Spread operator
const obj5 = {...obj1}
console.log(obj5)


const auto = {...coche}
console.log(auto)

// Desestructuracion
// const color = coche.color
// const puertas = coche.puertas

// color
// puertas

const {color,puertas} = coche

puertas;
color;


const listaUsuarios = [
  {name:"Pedro", age: 23},
  {name:"Juan", age: 26},
  {name:"Diego", age: 34},
  {name:"Joaquina", age: 30},
  {name:"Silvia", age: 28}
]


for (const user of listaUsuarios){
  const name = user.name
  console.log(`Hola, ${name}, bienvenido al manicomio`)
}

for (const user of listaUsuarios){
  const  {name} = user
  console.log(`Hola, ${name}, bienvenido al manicomio`)
}

for (const {name} of listaUsuarios){
  console.log(`Hola, ${name}, bienvenido al manicomio`)
}






// const tipoCoche = "deportivo"

// coche[tipoCoche]

// coche["color"]

// let option = "deportivo"
// if (coche.color ==="rojo"){
//   option = "puertas"
// }
option