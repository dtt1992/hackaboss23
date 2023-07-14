// Condicion if/else

const mayorEdad = 18;
const pedroEdad = 19;
const juanEdad = 18;
const diegoEdad = 17;

// Condicion que tiene que ser verdadero o falso
if (diegoEdad >= mayorEdad){
  console.log("Diego es mayor de edad");
}else{
  console.log("Diego es menor de edad");
}

if(pedroEdad === 19){
  console.log("Pedro es mayor de edad hace rato");
}

if(juanEdad === 19){
  console.log("Juan es mayor de edad hace rato")
}else if(juanEdad === 17){
  console.log("A Juan le falta 1 año para ir a la disco")
}else{
  console.log("Juan puede ir a la disco")
}