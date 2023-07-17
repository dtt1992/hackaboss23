// Array + Obejects

// Array -> lista de elementos
const hola ="Hola mundo"

// Para declarar una array se pone [], es permitido mexclar tipos (textos, numeros booleanos,,etc) en la misma lista y tambien podemos meter una lista dentro de otra lista
const listaSuper = ["Patatas", "Sal" ,"Azucar","Leche", ["Agua",true], ["Huevos",24]]

// Como es la estructura de una arrya
// Indice y su valor (El indice empieza en el numero 0)
const a =["Patatas", "Sal" ,"Azucar","Leche", "Chocolate"]

// Usar las listas, usando los indices de la lista
// Azucar
a[2]
// Patatas
a[0]

// Agua
listaSuper[4][0]

// Iterar lista

for(let i = 0; i < 4; i++){
  console.log(a[i])
}

// Para saber el tamaño de la array se utiliza nombreArray.length
console.log(a.length)
// Para recorrer una lista dinamica
for(let i = 0; i < a.length; i++){
  console.log(a[i])
}

