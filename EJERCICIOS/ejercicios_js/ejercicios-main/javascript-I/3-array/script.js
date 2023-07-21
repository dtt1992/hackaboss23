"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];


function limpiarArray(lista) {
  const finalArray = []
  
  lista.forEach((name) =>{
    if (!finalArray.includes(name)) {
      finalArray.push(name)
    }
})
  return finalArray
}

console.log(limpiarArray(names))
