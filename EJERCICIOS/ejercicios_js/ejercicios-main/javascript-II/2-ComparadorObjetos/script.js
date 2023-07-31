"use strict";

//EJERCICIO
//Crea una función que reciba dos objetos y devuelva true si son iguales y false si no.
//En los ejemplos, son iguales los dos primeros

const obj1 = {
  key1: "a",
  key2: "b",
};

const obj2 = {
  key2: "b",
  key1: "a",
};

const obj3 = {
  key1: "a",
  key2: "c",
};

const obj4 = {
  key1: "a",
  key2: "b",
  key3: "c",
};

const obj5 = {
  key1: "a",
  key3: "b",
};

function sonIguales(objA, objB) {

  const objAKeysOrdered = Object.keys(objA).sort()
  const objBKeysOrdered = Object.keys(objB).sort()
  const objAValuesOrdered = Object.values(objA).sort()
  const objBValuesOrdered = Object.values(objB).sort()

  if (Object.keys(objA).length !== Object.keys(objB).length) return false

  for (let i = 0; i < Object.keys(objB).length; i++) {
    if (objAKeysOrdered[i] !== objBKeysOrdered[i]) return false;
  }
  for (let i = 0; i < Object.keys(objB).length; i++) {
    // console.log(objAValuesOrdered)
    // console.log(objBValuesOrdered)
    if (objAValuesOrdered[i] !== objBValuesOrdered[i]) return false
  }
return true
}


console.log(sonIguales(obj1, obj2)); //true
console.log(sonIguales(obj1, obj3)); //false
console.log(sonIguales(obj1, obj4)); //false
console.log(sonIguales(obj1, obj5)); //false
