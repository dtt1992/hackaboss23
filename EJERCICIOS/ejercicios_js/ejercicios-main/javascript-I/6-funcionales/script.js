"use strict";
// # Ejercicio 6

// Edita el archivo script.js para crear una función que reciba una array de objetos (equipos y puntos conseguidos) y muestre por consola el ** nombre ** del que más y del que menos puntos hayan conseguido, con sus respectivos ** totales **.

// Encontrarás un array de ejemplo en el propio documento. -->

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

// Iterar el array
// generar un nuevo objecto con nombre y totalPuntos
// Ordenar los objetos en base a puntos
function ordenEquipos(lista) {
    const equiposOptim = lista.map(e =>{
        return {
            nombre: e.equipo,
            puntosTotal: e.puntos.reduce((acc,curr)=>acc+curr,0)
        }
    })
    // console.log(equiposOptim)
    const equiposOrdenados = equiposOptim.sort((a,b)=>a.puntosTotal - b.puntosTotal)

    return{
        mas: equiposOrdenados[equiposOrdenados.length -1],
        menos:equiposOrdenados[0]
    }
}


// Entregar el equipo con mas o menos

const equipos = ordenEquipos(puntuaciones)
console.log(`El equipo que mas puntos ha sacado es ${equipos.mas.nombre} (${equipos.mas.puntosTotal}) y el que menos es ${equipos.menos.nombre}(${equipos.menos.puntosTotal})`)