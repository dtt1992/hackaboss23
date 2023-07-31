// Tu pareja no recuerda bien los nombres y apellidos de cada integrante de tu familia.
// Ayúdale, puedes hacer un listado con el nombre y apellido?
// Algo así como: ['Juan Sánchez', 'Julia Pérez', 'Pedro Sánchez', 'Sofía Sánchez', 'Manuel Sánchez']

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




// con map
const listaFamiliaMap = []
listaFamiliaMap.push((family.map((member) => member.firstName + " " + member.lastName )))

console.log(`Lista con map: ` + listaFamiliaMap )

// map comprimido
const listaFamiliaMapComprimido = []
listaFamiliaMapComprimido.push((family.map(({firstName, lastName}) =>`${firstName} ${lastName}` )))

console.log(`Lista con map comprimido: ` + listaFamiliaMapComprimido )


// forEach
const listaFamiliaForEach = [] 
family.forEach(member =>{
    listaFamiliaForEach.push(`${member.firstName} ${member.lastName}`)
})
console.log(`Lista con forEach: ` + listaFamiliaForEach )

// for
const listaFamiliaFor = []  
for (let i = 0; i < family.length; i++) {
    listaFamiliaFor.push(`${family[i].firstName} ${family[i].lastName}`)
}
console.log(`Lista con for: ` + listaFamiliaFor )

// for...of
const listaFamiliaForOf = [] 
for (const member of family) {
    listaFamiliaForOf.push(`${member.firstName} ${member.lastName}`)
}
console.log(`Lista con for...Of: ` + listaFamiliaForOf )

// For...in
const listaFamiliaForIn = []
for (const i in family){
    listaFamiliaForIn.push(`${family[i].firstName} ${family[i].lastName}`)
}
console.log(`Lista con for...In: ` + listaFamiliaForIn )


// Recursion
let i = 0
function iteration(list) {

    
}