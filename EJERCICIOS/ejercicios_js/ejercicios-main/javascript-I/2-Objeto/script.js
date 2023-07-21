// # Ejercicio 2

// Partiendo de un objeto que incluye una serie de personaas con sus respectivas edades, saca por consola un mensaje por cada persona que diga "_Nombre_ es mayor de edad" o "_Nombre_ es menor de edad", según corresponda.
// Haz que sea una función que reciba el objeto como parámetro.

"use strict";

const mayoriaEdad = 18;

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

function comprobarEdades(obj) {
  for (const propiedad in obj) {
       if (obj[propiedad] > mayoriaEdad) {
      console.log(`${propiedad} con ${obj[propiedad]} es mayor de edad`)
      }else{
      console.log(`${propiedad} con ${obj[propiedad]} es menor de edad`)
    }
  }
}

comprobarEdades(people)