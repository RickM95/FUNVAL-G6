// EJERCICIO 1

// const { Alert } = require("bootstrap");

// let nota1 = parseInt(prompt("Ingrese la primera nota (0 a 100):"));
// let nota2 = parseInt(prompt("Ingrese la segunda nota (0 a 100):"));
// let nota3 = parseInt(prompt("Ingrese la tercera nota (0 a 100):"));
// let nota4 = parseInt(prompt("Ingrese la cuarta nota (0 a 100):"));

// let promedio=(nota1+nota2+nota3+nota4/4)
// if (promedio>=90) {
//     alert("Excelente("+promedio+")")
// } else if (promedio>=75){
//     alert("Bueno("+promedio+")")
    
// }else if (promedio>=60){
//     alert("Regular("+promedio+")")
    
// }else{
//     alert("Insuficiente("+promedio+")")
// }

// EJERCICIO 2
// let preciobase= 100;
// let edad= parseInt(prompt("ingresa tu edad"));
// let estudiante=prompt(`Es estudiante?
//     Si 
//     No`)
// let diastancia= parseInt(prompt("Distancian en Km?"));

// let preciofinal=preciobase
// if (edad<18) {
//     preciofinal= preciobase*0.5;
    
// } else if(edad>=60){
//     preciofinal=preciobase*0.4;
    
// } else if(estudiante=== "si"){
//     preciofinal=preciobase*0.75;
    
// }if (diastancia>30) {
//     preciofinal=preciobase*1.1;
// }
// alert("El costo de su pasaje es: "+preciofinal+"Lempiras");

// EJERCICIO 3

// let opcion = parseInt(prompt(`Seleccione una opción:
//     1. Celsius a Fahrenheit
//     2. Fahrenheit a Celsius
//     3. Metros a Kilómetros
//     4. Kilómetros a Metros`));
// let valor
// let resultado
// switch (opcion) {
//   case 1:
//     valor=parseFloat(prompt("ingrese los grados Celsius:"));
//     resultado=(valor * 9/5)+32;
//     alert(valor+"°C son "+resultado+ "°F");
//     break;

//   case 2:
//     valor=parseFloat(prompt("ingrese los grados Fahrenheit:"));
//     resultado=(valor - 32) * 5/9;
//     alert(valor+"°F son "+resultado+ "°C");
//     break;

//   case 3:
//     valor=parseFloat(prompt("ingrese los metros:"));
//     resultado=valor / 1000;
//     alert(valor+" metros son "+resultado+ " km");
//     break;

//   case 4:
//     valor=parseFloat(prompt("ingrese los kilómetros:"));
//     resultado=valor*1000;
//     alert(valor+" km son "+resultado+" metros");
//     break;

//   default:
//     alert("no es valido. intente de nuevo");
// }

// EJERCICIO 4
// let total=parseFloat(prompt("ingrese el total de la compra"))
// let tarjeta=prompt(`Tienes tarjeta de cliente frecuente?
//     si
//     no`)
// let descuento=0
// let mensaje=""
// if (total > 500) {
//   descuento=total * 0.10;
//   mensaje="descuento de 10% aplicado.";
//   if (tarjeta=== "sí") {
//     descuento+= total * 0.05;
//     mensaje= "descuento del 15% total";
//   }
// } else if (total <= 100) {
//   let recargo= total * 0.05;
//   total= total + recargo;
//   mensaje= "Se aplico un recargo del 5%.";
// }
// if (descuento > 0) {
//   total = total - descuento;
// }
// alert(mensaje + "Total final a pagar: " + total.toFixed(2) + " Lempiras");

// EJERCICIO 5

let nacimiento=parseInt(prompt("Ingrese su año de nacimiento:"))
let ahora= parseInt(prompt("Ingrese el año actual:"))
let edad = ahora - nacimiento
let cumplio = prompt(`Ya cumplio años este año? 
    si
    no`)
if (cumplio === "no") {
  edad = edad - 1;
}
if (edad < 18) {
  alert("Tienes " + edad + " años. Eres menor de edad.");
} else if (edad <= 30) {
  alert("Tienes " + edad + " años. Eres adulto joven.");
} else if (edad <= 59) {
  alert("Tienes " + edad + " años. Eres adulto.");
} else {
  alert("Tienes " + edad + " años. Eres adulto mayor.");
}