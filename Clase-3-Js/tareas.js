
// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x > y) {{return(x) }}
  else if(y > x) {return(y)}
  else{return(x || y);}
}
console.log(obtenerMayor(3,5))
console.log(obtenerMayor(7,3))
console.log(obtenerMayor(9,9))

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
if(edad >= 18){return("Allowed")}
else {return("Not allowed")}
}
console.log(mayoriaDeEdad(17))
console.log(mayoriaDeEdad(19))

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  if (status == 1) { return("Online")}
  else if (status == 2) { return("Away")}
  else { return("Offline")}

}
console.log(conection(1))
console.log(conection(2))
console.log(conection(3))

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma == "aleman") {return("Guten Tag!")} 
  else if (idioma == "mandarin") {return("Ni Hao!")} 
  if (idioma == "ingles") {return("Hello!")} 
  else {return("Hola!")}
}
console.log(saludo("aleman"))
console.log(saludo("mandarin"))
console.log(saludo("ingles"))
console.log(saludo("chino"))

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.
switch (color) {
  case "blue":
    return("This is blue")
    break;
  case "red":
    return("This is red")
    break;
  case "green":
    return("This is green")
    break;
  case "orange":
    return("This is orange")
    break;
  default:
    return("Color not found")
    break;
}
}
console.log(colors("blue"))
console.log(colors("red"))
console.log(colors("orange"))
console.log(colors("green"))
console.log(colors("pink"))

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero === 10 || numero === 5){return(true)}
  else {return(false)}
}
console.log(esDiezOCinco(5))
console.log(esDiezOCinco(10))
console.log(esDiezOCinco(3))

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
if(numero < 50 && numero > 20) {return(true)}
else {return(false)}
}
console.log(estaEnRango(30))
console.log(estaEnRango(14))

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
if(Math.floor(numero) - numero === 0) {return(true)}
else {return(false)}
}
console.log(esEntero(0.8))
console.log(esEntero(10))

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
if (numero % 3 === 0 && numero % 5 === 0) {return("Fizzbuzz")}
else if (numero % 3 === 0) {return("Fizz")}
else if (numero % 5 === 0) {return("Buzz")}
else {return(numero)}
}
console.log(fizzBuzz(15))
console.log(fizzBuzz(9))
console.log(fizzBuzz(25))
console.log(fizzBuzz(17))


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  //Tu código:
if (num1 > num2 && num1 > num3 && num1 > 0) {return(num1 + " es mayor y positivo")}
else if (num1 < 0 || num2 < 0 || num3 < 0) {return("Hay negativos")}
else if (num3 > num1 && num2) {return(++num3)}
else if (num1 === 0 || num2 === 0 || num3 === 0) {return("Error")}
else {return(false)}
}
console.log(operadoresLogicos(10, 9, 8))
console.log(operadoresLogicos(7, -9, 8))
console.log(operadoresLogicos(10, 9, 12))
console.log(operadoresLogicos(0, 3, 0))
console.log(operadoresLogicos(10, 15, 8))

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí:
if(valor === true) {return("Soy verdadero")}
else {return("Soy falso")}
}
console.log(esVerdadero(3 > 1))
console.log(esVerdadero(3 < 1))

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:
let contador = numero.toString().length;
if (contador === 3){return(true)}
else{return(false)}


}
console.log(tieneTresDigitos(158))
console.log(tieneTresDigitos(12))

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
  
  for (let i = 2; i < numero; i++) {
    if( numero % i == 0){return((false))}
    else {return(true)}
  }
  }
  console.log(esPrimo(10))
  console.log(esPrimo(5))
  console.log(esPrimo(24))
  console.log(esPrimo(23))

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //Tu código:
  contador = 0; 
  do {numero += 5;
    contador++;
    
  } while (contador < 8);
  return(numero)
}
console.log(doWhile(2))
console.log(doWhile(10))

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};