// Manejo de Asincronia


// callbacks
function animacion(param, callback) {
    console.log(param)

    callback()
}

console.log(animacion("Hola mundo desde una animacion", () => console.log("Hemos ejecutado el callback") ))

// Funcion dentro de otra funcion
// function getUser(email, function()) {
//     getUserId(user, function(){
//         getUserFriends(userId,function(){
//             getFriendsId(friends,function(){
//                 getFriendsEvents(friendsIds,function(){

//                 })
//             })
//         })
//     })    
// }

// Promesas
// Valores:
// - Pendientes: estado inicial, aun no completada
//  . Fulfilled: operacion exitosa, o promesa resulta de forma exitosa
//  - Rejected: promesa rechazada

const promesa = new Promise((resolve, reject)=> {
    // setTimeout(() => resolve("La promesa fue resuelta positivamente"), 3000);
    setTimeout(() => reject("La promesa fue rechaza"), 3000);
});

// .then para cuando la promesa es positiva
// console.log(promesa.then(info => console.log(info)))
// .catch para cuando la promesa es negativa
// console.log(promesa.catch(info => console.log(info)))


function validPassword(password) {
    const promesa = new Promise((resolve, reject) =>{
        if (password === "12345") {
            resolve("Contraseña correcta")
        }else{
            reject("Contraseña incorrecta")
        }
    })
    return promesa  
}

validPassword(12345)
.then(info=> console.log(info))
.catch(err=> console.log(`Ups!! ${err}`))

validPassword(12345)
.then(info=> console.log(info))
.catch(err=> console.log(`Ups!! ${err}`))