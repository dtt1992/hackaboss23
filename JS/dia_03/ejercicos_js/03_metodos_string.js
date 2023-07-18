// Metodos String

const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse, feugiat per vel condimentum posuere vitae nisl ultricies, interdum malesuada fringilla integer mauris lacus laoreet. Nec sed suscipit ultrices urna quis fusce morbi torquent justo nascetur sociis ante rutrum sem id aenean, dui velit arcu phasellus lobortis semper varius aliquet mi feugiat fringilla nostra at blandit. Accumsan nibh magna dictum egestas himenaeos in auctor fermentum, parturient justo sed molestie erat lacus magnis dictumst, posuere convallis lectus arcu sagittis est nostra."

// Cuantos caracteres hay
console.log(text.length);

// Transformar todo el texto en minusculas
console.log(text.toLowerCase())

// Transformar todo el texto en mayusculas
console.log(text.toUpperCase())


// indexOf -> en que posicion esta el primer elemento que encuentra en el string
// indexOf(string)
 
const index = text.indexOf(".")
console.log(index)
const p = text.indexOf("dolor")
console.log(p)


// lastIndexOf -> en que posicion esta el ultimo elemento que se encuentra en el string
const lastIndex = text.lastIndexOf(",")
console.log(lastIndex)


// slice -> Sirve para extraer parte del string, dandole un principio y un final (estos caracteres no estaran incluidos)
// slice(start,end) 
const firstParragraph = text.slice(0, index + 1)
console.log(firstParragraph)


// repeat
// repeat(number)
// const repeatedText = text.repeat(5)
// console.log(repeatedText)


// replace -> Remplaza el primera caracter que encuentra en el texto por el que nosostros le indiquemos
// replace(string, newString)

const replaceText = text.replace("a",1)
console.log(replaceText)


// replaceAll
// replaceAll(string, newstring)

const replaceAllText = text.replaceAll("a",1)
console.log(replaceAllText)

// split -> Para separar el string
// split(separator,limit)
const textoSeparado = text.split(",")
console.log(textoSeparado)



