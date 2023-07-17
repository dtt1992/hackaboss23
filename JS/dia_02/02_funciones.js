// Funciones
// efecto secundario -> side effect
// Defines la funcion, funcion nombrefuncion(los parametros){Lo que queremos que haga la funcion}
// Para retornar el valor de la funcion se usa return
function sumar(a,b) {
    const resultado = a + b
    return resultado
  }
  
  function concatenar(texto1, texto2){
    const txt=`${texto1} ${texto2}`
    return txt
  }
  // Ejecutar la funcion
  sumar(5,7);
  sumar(2,8);
  sumar(4,2);
  
  const suma = sumar(5,7);
  const nuevaSuma = sumar(suma,8);
  console.log(nuevaSuma);
  
  concatenar("Hola","Mundo");
  
  let acumulador = 0;
  
  // for (let i =0; i < 10; i++){
  //   const s = sumar(acumulador,i)
  //   acumulador = s
  // }
  // console.log(acumulador)
  
  // Para acortar el for anterior
  for (let i =0; i < 10; i++){
    acumulador += sumar(acumulador,i) 
  }
  
  function mostrar(txt){
    console.log(txt)
  }
  
  function sumar2(q,e){
    return q + e
  }
  
  for(let x = 10; x > 0; x--){
    mostrar(x)
  }
  
  let acumulador2 = 0
  
  for (let z = 10; z > 0; z--){
    const suma2 = sumar2(acumulador2, z)
    acumulador2 = suma2
    console.log(acumulador2)
  }
  
  mostrar(acumulador2)
  