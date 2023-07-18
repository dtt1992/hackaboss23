// Loops

const listaSuper = ["Arroz","Aceite","Patatas","Azucar"]

// For

for (let i = 0; i < 10; i++){
  if(i % 2 === 0){
    console.log('even')
  }else{
    console.log(i)
  }
}

// for..of
// Hace referencia a los items de la array

for (const producto of listaSuper){
  console.log(producto.toUpperCase())
}

// for...in
// Hace referencia al index de la array

for( const index in listaSuper){
  console.log(index)
}

// While

let i = 0;
while( i < 10){
  console.log(i)
  i++
}
// let x = 0;
// while( x < listaSuper.length){
//   console.log(listaSuper[x])
//   i++
// }

const password_db = "hola";
let text = prompt("Ingresa tu clave");
while ( text !== password_db){
  text = prompt("Ingresa tu clave")
}

// do...while

const password_db2 = "Hola"
do{
  let text = prompt("Ingresa tu clave")
  }while ( text !== password_db2)
}


// Piedra, papel o tijeras
let user = prompt("Escribe tu eleccion: piedra, papel o tijera")

while ( user !== "piedra" && user !== "papel" && user !== "tijera"){
  user = prompt("Escribe tu eleccion: piedra, papel o tijera")
}
console.log(`la opcion del usuario es: ${user}`)

