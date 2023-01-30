// En los próximos ejercicios, deberás completar las funciones con tu resolución.
// Todo tu código irá dentro de las llaves de la función.
// Recuerda que una función siempre devuelve un valor. (return)

// Nota: No modificar los nombres de las funciones y no utilizar console.log
// Caso contrario, no correrán los test!

// En estas primeras consignas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
// Tip: borrar el dato 'null' antes de poner el dato tipo string.
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 4;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// ----------------------------------

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return (str)
}
devolverString("Hola")

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
    return  (x + y)
  }
  suma(4, 5)


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return  (x - y)
}
resta(4, 5)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return  (x * y)
}
multiplica(3, 4)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return  (x / y)
}
divide (20, 4)

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
    if (x == y){
      return true;
    } 
    else{
      return false;
    }
}
sonIguales(4, 6)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código: 
  if(str1.length == str2.length){
    return true;
  }
  else{
    return false;
  }
}
  tienenMismaLongitud("hola", "chauchau")
  tienenMismaLongitud("hola", "chau")
    
function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){
    return true;
  }
  else{
    return false;
  }
}
menosQueNoventa(78)
menosQueNoventa(92)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50){
    return true;
  }
  else{
    return false;
  }
}
mayorQueCincuenta(38)
mayorQueCincuenta(92)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
return (x % y)
}
obtenerResto (21, 5)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}
esPar(4)
esPar(5)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 != 0){
    return true;
  }
  else{
    return false;
  }
}
esImpar(4)
esImpar(5)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
return (num ** 2)

}
elevarAlCuadrado(2)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return (num ** 3)
}
elevarAlCubo(3)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return(num ** exponent)
}
elevar(2, 3)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
return(Math.round(num))

}
redondearNumero(4.5)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return(Math.ceil(num))
}
redondearNumero(4.5)

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
return(Math.random())

}
numeroRandom()

function esPositivo(numero) {
  // La función va a recibir un entero. 
  // Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  // Si el número es positivo, devolver ---> "Es positivo"
  // Si el número es negativo, devolver ---> "Es negativo"
  // Si el número es 0, devuelve false
  // Tu código:
  if(numero > 0){
    return ("Es positivo");
  }
  else if(numero < 0){
    return ("Es negativo");
  }
  else{
    return false;
  }
}
esPositivo(4)
esPositivo(0)
esPositivo(-5)


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
return (str.concat("!"))

}
agregarSimboloExclamacion("Hola")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Cristian" -> "Soy Cristian"
  // Tu código:

  return(nombre.concat(" ", apellido))
}
combinarNombres("Hola", "Edu")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Nahuel" -> "Hola Nahuel!"
  // Tu código:

  return("Hola " + nombre + "!")
}
obtenerSaludo("EDU")

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí:
  let dolar = 1.20;
  
  total = Math.round(euro * dolar);

return("Tenes " + total + " Dolares");
}
deEuroAdolar(100)

// ---------- Puntos extra ----------

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:

  area = (alto * ancho);
  return (" El Area del Rectangulo es: " + area);
}
obtenerAreaRectangulo(2, 3)

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  perimetro = (lado * 4);
  return("El perimetro del cuadrado es de: "+ perimetro);
}
retornarPerimetro(2)

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  areaTr = (base * altura / 2);
  return("El area del triangulo es de: " + areaTr);
}
areaDelTriangulo(10, 5)

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return("Es vocal");
  }
  else{
    return ("Dato incorrecto");
  }
}
esVocal("a")
esVocal("hola")

// --------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
