// JSON

// JSON.stringify
// Transforma un objeto de js en un string para enviar coo JSON

const car = {
    brand: "Opel",
    model: "Astra"
}
const txt = JSON.stringify(car)
txt


// JSON.parse
//Recibe un JSON y lo convierte en un objeto de js

const  obj = JSON.parse(txt)
obj