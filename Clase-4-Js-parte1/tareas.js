// No cambies los nombres de las funciones.
const numeros = [1, 2, 3, 4];

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  
  return(array[0]);
}

console.log(devolverPrimerElemento(numeros))


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length -1]);
}

console.log(devolverUltimoElemento(numeros));

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}

console.log(obtenerLargoDelArray(numeros));

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
resultado = array.map (function suma(array) {
  return array + 1;
})
console.log(resultado);
}

incrementarPorUno(numeros);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);

 console.log(array);

}

agregarItemAlFinalDelArray(numeros, 7);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);

  console.log(array);
}

agregarItemAlComienzoDelArray(numeros, 88);

const palabras = ["Hola", "como", "estas"];

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  let nuevoString = palabras.join(" ");
  return(nuevoString);
}

console.log(dePalabrasAFrase(palabras));


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let certeza = array.includes(elemento);
  return(certeza);
}

console.log(arrayContiene(palabras, "como"));
console.log(arrayContiene(palabras, "bien"));

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  numeros.forEach (function(i){
      suma += i;
  });
  console.log(suma);
}
agregarNumeros(numeros);

const resultadosTest = [2, 5, 7, 3];

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i];
  }
  let promedio = suma / resultadosTest.length;
  return(promedio);
}

console.log(promedioResultadosTest(resultadosTest));



function numeroMasGrande(numeros) {
// "numeros" debe ser una matriz de enteros (int/integers)
// Devuelve el número más grande
// Tu código:
  let maximo = Math.max(...numeros);
 return(maximo);
  
}

console.log(numeroMasGrande(numeros));

const numeros2 = [10, 10, 18, 21];

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  mayorQue19 = 0;
  for (const i of arreglo) {
    if(i > 19){ 
      ++mayorQue19;
    }
  }
  return(mayorQue19);
}

console.log(cuentoElementos(numeros2));

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
if(numeroDeDia === 1 || numeroDeDia === 7){return("Es fin de semana");}
else if (numeroDeDia > 1 && numeroDeDia < 7){return("Es dia Laboral");}
} 

console.log(diaDeLaSemana(1))
console.log(diaDeLaSemana(3))


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  primerDigito = n.toString().split("");

  if(primerDigito[0] === "9"){return(true);}
  else{return(false);}

}
console.log(empiezaConNueve(93))
console.log(empiezaConNueve(73))

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  return arreglo.every(e => arreglo[0] == e);

} 

const aComparar1 = [1, 1, 1, 1];
const aComparar2 = [1, 3, 5, 7];

console.log(todosIguales(aComparar1));
console.log(todosIguales(aComparar2));

const mesesDesordenados= ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let meses = [];

  for (let i = 0; i < array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      meses.unshift(array[i]) ;
  }
}
if(meses.length === 3){
    return meses
  }else{
    return "No se encontraron los meses pedidos";
  }
} 

console.log(mesesDelAño(mesesDesordenados));

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
 
  mayores = [];
  for (const i of array) {
     if (i > 100) {
      mayores.unshift(i);
    }
   }
    return(mayores);
  }

numerosMayores = [0,45, 87,100, 160, 120, 200];
console.log(mayorACien(numerosMayores))

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
