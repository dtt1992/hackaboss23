// Lo creado en el ejercicio anterior esta ok, pero sería bueno crear una función que permita realizar este trabajo.
// Así podremos reutilizarla cuantas veces queramos!
// Lo que se necesita es: crear una función que reciba el listado de familiares.
// Esa función itera a cada integrante y llama a otra que creará el texto de cada uno de los integrantes, 
// devolviéndoselo a la función principal que será la que almacenará los datos antes de finalmente retornarlos todos juntos.

const family = [
    { firstName: 'Antonio', lastName: 'García', age: 73, sex: 'm', relationship: 'abuelo' },
    { firstName: 'María Carmen', lastName: 'Rodríguez', age: 70, sex: 'f', relationship: 'abuela' },
    { firstName: 'Manuel', lastName: 'González', age: 71, sex: 'm', relationship: 'abuelo' },
    { firstName: 'María', lastName: 'Fernández', age: 69, sex: 'f', relationship: 'abuela' },
    { firstName: 'José', lastName: 'García', age: 55, sex: 'm', relationship: 'papá' },
    { firstName: 'Carmen', lastName: 'González', age: 53, sex: 'f', relationship: 'mamá' },
    { firstName: 'Francisco', lastName: 'García', age: 40, sex: 'm', relationship: 'hermano' },
    { firstName: 'Ana María', lastName: 'García', age: 36, sex: 'f', relationship: 'hermana' },
    { firstName: 'Laura', lastName: 'García', age: 30, sex: 'f', relationship: 'hermana' },
    { firstName: 'David', lastName: 'García', age: 25, sex: 'm', relationship: 'hermano' },
    { firstName: 'Juan', lastName: 'García', age: 17, sex: 'm', relationship: 'sobrino' },
    { firstName: 'María Pilar', lastName: 'López', age: 15, sex: 'f', relationship: 'sobrina' },
    { firstName: 'Isabel', lastName: 'García', age: 14, sex: 'f', relationship: 'sobrina' },
    { firstName: 'Josefa', lastName: 'López', age: 13, sex: 'f', relationship: 'sobrina' },
    { firstName: 'Javier', lastName: 'López', age: 10, sex: '', relationship: 'sobrino' }
  ]


function members(array) {
    return((family.map(({firstName, lastName}) =>texto(firstName,lastName))))
}

function texto(firstName,lastName,){
    return`El nombre es: ${firstName} y el apellido es ${lastName}`
}


console.log(members(family))
// console.log(texto("pepe","ruiz",))