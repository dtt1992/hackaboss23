// Array
const comidas = ["pizza", "hamburguesa", "ensalada", "pasta", "hamburguesa"]

// Coger datos del array mediante indice
comidas[3]

//  Coger datos del array con el metodo longitud
console.log(comidas[comidas.length-1])

// indexOf
// idexOf(item)
const index = comidas.indexOf("ensalada")
index

// lasIndexOf
// lastIndexOf(item)
const i = comidas.lastIndexOf("Hamburguesa")
i

// Reverse
const reverse = comidas.reverse()
reverse
comidas.reverse()


// join
// join(separador)
const text = comidas.join(" | ")
text

// Recorrer arrays
for(let i = 0; i < comidas.length; i++){
  console.log(comidas[i])
}

// for of
for (const comida of comidas){
  console.log(comida)
}

// for in
for (const comida in comidas){
  console.log(comida)
}


// recorrer la arrays con MAP, con el map genera una array nueva y modifica todos los elementos del array original
// 
// map(callback) -> funcion como parametro
comidas.map((comida)=>`${comida}🎉`)


const users =[
  {id: 1 , firstName: "Juan", lastName: "Perez", age: 23, location:"London"},
  {id: 2 , firstName: "Pedro", lastName: "Perez", age: 30, location:"Barcelona"},
  {id: 3 , firstName: "Diego", lastName: "Perez", age: 27, location:"Canarias"},
]

const users_string = users.map(
  user =>
  `El usuario ${user.firstName} ${user.lastName} tiene ${user.age} años y vive en ${user.location}`
)
users_string


comidas.map(comidas2 => {
  console.log(`${comidas2}🎉`)
  return comidas2 + "🎊"
})

const users_strings2 = users.map(
  ({firstName, lastName, age, location}, index) =>
  `El usuario #${index + 1} ${firstName} ${lastName} tiene ${age} años y vive en ${location}`
)
users_strings2



// Filter
// filter(callback)

const filteredFood = comidas.filter((comida) => comida !== "hamburguesa")
filteredFood
comidas

// Para filtar una array de objectos, utilizando un parametro
const filteredUser = users.filter((user)=> user.age <30)
filteredUser


// Sort -> ordenar 
// dortsort(callback)

const  orderedFood = comidas.sort()
orderedFood

// order con numeros
const a =[2,3,76,12,5,99,4,0]
const orderedA = a.sort((a,orderedA)=> a - orderedA)
orderedA



// Some 
// Para verificar mediante una condicion en algun elemento si es true o false
const options = comidas.some(comida=> comida.includes("p"))
options

// Every
// Para verificar mediante una condicion en todos los elemento si es true o false
const options2 = comidas.every(comida=> comida.includes("p"))
options2

// finde -> para encontrar un contenido dentro de un array

const hamb = comidas.find((comida => comida === "hamburguesa"))
hamb


const user = users.find((user => user.id === 2))
user


// Reduce
// reduce(callback)
// reduce((accumulator,currentValue,index, array)=>{}, initialValue)


const numeros =[2,3,76,12,5,99,4,0]
const suma = numeros.reduce( (acc, curr) => acc + curr,0)

suma





