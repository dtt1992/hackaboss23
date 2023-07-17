// Metodos de Arrays

const listaSuper = ["Arroz", "Azucar", "Leche", "Cafe"]

// Push para agregar un elemento a una array
listaSuper.push("Macarrones")

listaSuper
listaSuper.length

// String, numbers, booleans, null, undefined
// Asignacion por valor
// const a = "Hola Mundo"
// let b = a
// b
// b = "Hola Mundo Cruel"
// b
// a

// Asignacion por referencia
let lista = [1,2,3,4,5,6]
let nuevaLista = lista
nuevaLista
nuevaLista.push(100)
lista
nuevaLista

const z = nuevaLista.concat(100)
nuevaLista
z
z.push(200)
z
nuevaLista

// for...of
for (const producto of listaSuper){
  console.log(producto)
}

let nuevosProductos = []
for ( const producto of listaSuper){
  nuevosProductos.push(producto.toUpperCase())
}
nuevosProductos
listaSuper

