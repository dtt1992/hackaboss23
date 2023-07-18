// Condicionales

const listaSuper = ["Arroz","Aceite","Patatas","Azucar"]

// if

const text = "hola-mundo"
if ( text === "hola mundo"){
  console.log("El texto es verdadero")
}else if (text === "hola-mundo"){
 console.log("El texto es verdadero pero con un guion") 
}else{
  console.log("El texto es falso")
}


// Switch

switch(text){
  case "hola mundo":
    console.log("El texto es verdadero");
    break;
  case "hola-mundo":
    console.log("El texto es verdadero pero con un guion");
    break;
  default:
    console.log("El texto es falso")
}

let option = "El texto es falso"


const switchObj ={
    "hola mundo": "El texto es verdadero",
    "hola-mundo": "El texto es verdadero pero con un guion"
}

option = switchObj["hola-mundo"]
console.log(option)



// Operador ternario
// condicion ? true : false
text === "hola mundo" ? console.log("Es verdadedor") : console.log("Es falso")

const contenido = text === "hola mundo" ? "Es verdadero" : "Es falso"
console.log(contenido)



const option2 = switchObj[text] ? switchObj[text] : "El texto es falso";
console.log(option2)


//  || (Operador or)

const option3 = switchObj[text] || "El texto es falso"
console.log(option3)
