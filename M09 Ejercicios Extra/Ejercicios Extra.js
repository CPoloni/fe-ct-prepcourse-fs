/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre =[];
   for(clave in objeto) { //va a hacer el recorrido con el for in por tantas claves tenga el objeto
      var array= [clave, objeto[clave]];
      arrayPadre.push(array);
   }
   return arrayPadre;
}
//LO PODRIA HACER MAS CORTO DIRECTAMENTE PUCHEANDO EN arrayPadre:
//var arrayPadre =[];
   //for(clave in objeto) { //va a hacer el recorrido con el for in por tantas claves tenga el objeto
      //arrayPadre.push(clave, objeto[clave]);
   //}
   //return arrayPadre;

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var contadorLetras = {}; // estoy creando el objeto vacio
   for (var i=0; i< string.length;i++) {
      var letra= string [i];
      if (contadorLetras.hasOwnProperty(letra)) { // sila letra ya esta en el objeto le sumo un valor
         contadorLetras[letra]++;
      } else {
         contadorLetras[letra]= 1; //pero si no esta le agrego la letra y la igualo a 1
      }
   }
   return ordenador(contadorLetras);// callback
}

   function ordenador(objeto) {
      var ordenado= {}; //creo un objeto vacio donde voy a ordenarlos alfabeticamente
      var claves = Object.keys(objeto).sort(); //creo una varia dond voy a crear el nue arreglo con las letras ord alfab.
      claves.forEach(function(clave) { //con un for each recorro cada elemento del arreglo
         ordenado[clave]= objeto[clave];// y le digo q para cada clave (letra) la vincule con el valor que tenia en el obj original
      })
      return ordenado; //el nuevo objeto con letras ordenadas
   }
   //return contadorLetras;
   //PARA ORDENARLOS ALFABETICAMENTE TENGO Q CONVERTIR LAS CLAVES EN UN ARREGLO CON Object.Keys()
    //y con el metodo sort() los ordeno alfabeticamente.



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letrasMay= "";
   var letrasMin= "";
   for (var i=0; i < string.length; i++){
      if(string[i]=== string[i].toUpperCase()){
         letrasMay= letrasMay + string[i];
      } else {
         letrasMin= letrasMin + string[i];
      }
   }

   return letrasMay + letrasMin;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   function reversar(string){//creo una funcion q me separa el string en arreglo, lo reverso y lo junto
      return string.split("").reverse().join(""); //esta funcion va a ser llamada luego
}
var arregloPalbras= frase.split(" "); //creo una variable q me separa la frase(string) en arreglo de palabras
var arregloInvertidas= arregloPalbras.map(function(palabra){ //creo una nueva variable a partir de .map donde llamo a la funcion reversar
   return reversar(palabra)
})
return arregloInvertidas.join(" "); //me vuelve a juntar el arreglo de las palabras en un string y las
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var stringNum= numero.toString();//convertmos el numero en un string
   var reverString= stringNum.split("").reverse().join("");
   if (stringNum === reverString){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var sinABC = "";
   for(var i=0; i< string.length; i++){
   if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c" ) {
      sinABC = sinABC + string[i];
   }
}
   return sinABC;
 
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length -b.length);


}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arr = [];
   for(var i=0; i < array2.length; i++){
      if(array1.includes(array2[i])){
         arr.push(array2[i]);
      }
   }
   return arr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};