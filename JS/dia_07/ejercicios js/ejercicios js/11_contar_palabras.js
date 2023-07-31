// Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
// * - Los signos de puntuación no forman parte de la palabra.
// * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
// * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.

const text = 'Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas. Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias. Hablamos de un país paraisomático en el que a uno le caen pedazos de frases asadas en la boca. Ni siquiera los todopoderosos signos de puntuación dominan a los textos simulados; una vida, se puede decir, poco ortográfica. Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum, decidió aventurarse y salir al vasto mundo de la gramática. El gran Oxmox le desanconsejó hacerlo, ya que esas tierras estaban llenas de comas malvadas, signos de interrogación salvajes y puntos y coma traicioneros, pero el texto simulado no se dejó atemorizar. Empacó sus siete versales, enfundó su inicial en el cinturón y se puso en camino. Cuando ya había escalado las primeras colinas de las montañas cursivas, se dio media vuelta para dirigir su mirada por última vez, hacia su ciudad natal Letralandia, el encabezamiento del pueblo Alfabeto y el subtítulo de su propia calle, la calle del renglón. Una pregunta retórica se le pasó por la mente y le puso melancólico, pero enseguida reemprendió su marcha. De nuevo en camino, se encontró con una copia. La copia advirtió al pequeño texto simulado de que en el lugar del que ella venía, la habían reescrito miles de veces y que todo lo que había quedado de su original era la palabra "y", así que más le valía al pequeño texto simulado volver a su país, donde estaría mucho más seguro. Pero nada de lo dicho por la copia pudo convencerlo, de manera que al cabo de poco tiempo, unos pérfidos redactores publicitarios lo encontraron y emborracharon con Longe y Parole para llevárselo después a su agencia, donde abusaron de él para sus proyectos, una y otra vez. Y si aún no lo han reescrito, lo siguen utilizando hasta ahora.'


function countCharacter(txt) {
    const txtObj = {}
    const newTxt = txt.replaceAll(",","").replaceAll(".","").replaceAll('"',"").toLowerCase()
    const txtArray = newTxt.split(" ")
    for (const key in txtArray) {
        if (txtObj[txtArray[key]] === undefined ) {
            txtObj[txtArray[key]]  = 1       
            
        }else{
            txtObj[txtArray[key]]  += 1
        }            
        }
        return txtObj
    }


console.log(countCharacter(text))