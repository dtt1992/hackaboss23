// Objects

// Para crear un objecto se utilizan las llaves {}
// Index es explicito
const usuario = {
    first_name:"Juan", 
    last_name:"Perez", 
    age:23, 
    address:"Calle del castillo, 1. Motilla del Palancar"
  }
  
  // Para acceder al objecto
  usuario["address"]
  usuario["first_name"]
  
  
  // Una lista de objectos
  const users = [
    {
      first_name:"Juan", 
      last_name:"Perez", 
      age:23, 
      address:"Calle del castillo, 1. Motilla del Palancar"
    },
    {
      first_name:"Diego", 
      last_name:"Perez", 
      age:25, 
      address:""
    },
    {
      first_name:"Pedro", 
     last_name:"Perez", 
      age:22, 
      address:"Calle del castillo, 1. Motilla del Palancar"
    },
  ]
  // Todo lo relacionado con Diego
  users[1]
  
  // Caracteristica especifica con Diego
  users[1]["first_name"]
  // Longitud del nombre diego
  users[1]["first_name"].length
  
  // Acceder dinamicamente al ultimo usuario
  users[users.length -1]
  
  // Acceder dinamicamente al penultimo usuario
  users[users.length -2]
  
  for (let i = 0; i < users.length; i++){
    const name = users[i]["first_name"]
      console.log(name)
  }
  // Para mostrar las direcciones que esten creadas
  for (let z = 0; z < users.length; z++){
    const address = users[z]["address"]
    // Como esta condicion comprueban que address esta vacia se podria hacer mas facil, asi:
    // if(address !== undefined && address !== null)
    // if (address){
    //   console.log(address)
    // }
    address && console.log(address)
    
  }
  