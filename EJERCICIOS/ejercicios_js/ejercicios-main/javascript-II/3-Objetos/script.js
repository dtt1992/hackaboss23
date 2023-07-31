"use strict";

//Escribe una función que, al recibir un array con la forma del ejemplo a continuación, devuelva un objeto con el número de animales de cada especie. Piensa que el array puede ser modificado para añadir nuevas especies que no estuviesen en el original.

const animals = [
  {
    name: "Frank",
    species: "dog",
  },
  {
    name: "Romeo",
    species: "cat",
  },
  {
    name: "Olivia",
    species: "chicken",
  },
  {
    name: "Cooper",
    species: "cat",
  },
  {
    name: "Max",
    species: "dog",
  },
  {
    name: "Oscar",
    species: "dog",
  },
  {
    name: "Lola",
    species: "cat",
  },
  {
    name: "Jax",
    species: "snake",
  },
  {
    name: "Millie",
    species: "cat",
  },
];


function fnAnimals(array) {
  const especies = array.map(animal => animal.species)
  const obj =  {}
  console.log()
  for (const name of especies) {
    // console.log(obj[name])
    if (obj[name] === undefined) {
      obj[name] = 1
    }else{
      obj[name] += 1
    }
  }
// console.log(obj)
return obj;
}
 

console.log(fnAnimals(animals))

