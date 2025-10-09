// // Ejercicio 1

// let usuario
// let contraseña

// do {
//     usuario =prompt("Introduzca su nombre de Usuario");
//     contraseña= prompt("Introduzca su contraseña");

// } while (usuario!== "ADMIN" || contraseña!=="123456n" );

// console.log("Bienvenido a tui cuenta");

// Ejercicio 2
/* 
    crear una aplicacion q muestre los n terminos de la serie de los numeros
    pares ejemplo
    si el cliente coloca n = 6
    deberan mostrar en consola  2,4,6,8,10,12
    n=3
    2,4,6
    n=7
    2,4,6,8,10,12,14
*/
// numero= parseInt(prompt("ingrese los numeros que desee"))
// for (let i=1)

// Ejercicio 3
//     crear el factorial de un numero y dar el resultado utilizando el bucle for
//     ejemplo 5!= 1*2*3*4*5 = 120
//     3!=1*2*3 = 6
//     0!=1

// let n= parseInt(prompt("Ingrese un numero para calcular"))
// let f=1;

// for (let index = 1; index <= n; index++) {
//     f= f*index;
// }
// console.log(n+"!=" +f);


function sinespacio(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      resultado = resultado + texto[i];
    }
  }
  return resultado;
}
console.log(sinespacio("Hola mundo es un placer"));
