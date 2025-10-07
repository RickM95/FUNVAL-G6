// // OPERADORES ARITMÉTICOS (EJERCICIOS 1 - 8)
// // =======================================================

// /*
// 1. Declara dos variables a y b con valores numéricos.
//    Muestra en consola su suma, resta, multiplicación y división.
// */
// // RESPUESTA AQUÍ 👇
// let a = 10;
// let b = 5;
// console.log("Suma:", a + b);
// console.log("Resta:", a - b);
// console.log("Multiplicación:", a * b);
// console.log("División:", a / b);

// /*
// 2. Calcula el área de un rectángulo (base * altura).
//    Muestra el resultado en consola.
// */
// // RESPUESTA AQUÍ 👇
// let base = 8;
// let altura = 4;
// let area = base * altura;
// console.log("Área del rectángulo:", area);

// /*
// 3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.
// */
// // RESPUESTA AQUÍ 👇
// let triangulobase = 6;
// let trianguloaltura = 3;
// let trianguloarea = (triangulobase * trianguloaltura) / 2;
// console.log("Área del triángulo:", trianguloarea);

// /*
// 4. Calcula el módulo (resto) de dividir 25 entre 4.
//    Usa el operador %.
// */
// // RESPUESTA AQUÍ 👇
// let modulo = 25 % 4;
// console.log("Módulo:", modulo);
// /*
// 5. Declara una variable "numero" y muestra su cuadrado y su cubo.
//    Usa los operadores **2 y **3.
// */
// // RESPUESTA AQUÍ 👇
// let numero = 3;
// console.log("Cuadrado:", numero ** 2);
// console.log("Cubo:", numero ** 3);
// /*
// 6. Calcula el perímetro de un cuadrado con lado = 5.
//    Fórmula: lado * 4
// */
// // RESPUESTA AQUÍ 👇
// let lado = 5;
// let perimetro = lado * 4;
// console.log("Perímetro del cuadrado:", perimetro);
// /*
// 7. Declara dos números y muestra si su suma es par o impar.
//    Usa el operador % para comprobar si el resto es 0.
// */
// // RESPUESTA AQUÍ 👇
// let n1 = 10;
// let n2 = 5;
// let suma = n1 + n2;
// if (suma % 2 === 0) {
//   console.log("La suma es par");
// } else {
//   console.log("La suma es impar");
// }
// /*
// 8. Calcula el promedio de tres notas y muestra el resultado en consola.
// */
// // RESPUESTA AQUÍ 👇
// let nota1 = 70;
// let nota2 = 80;
// let nota3 = 90;
// let promedio = (nota1 + nota2 + nota3) / 3;
// console.log("Promedio:", promedio);
// // =======================================================
// // OPERADORES DE ASIGNACIÓN (EJERCICIOS 9 - 12)
// // =======================================================

// /*
// 9. Declara una variable x = 10.
//    Usa x += 5 y muestra el nuevo valor.
// */
// // RESPUESTA AQUÍ 👇
// let x = 10;
// x += 5;
// console.log("Nuevo valor de x:", x);
// /*
// 10. Declara una variable puntos = 100.
//     Resta 20 puntos usando puntos -= 20 y muestra el resultado.
// */
// // RESPUESTA AQUÍ 👇
// let puntos = 100;
// puntos -= 20;
// console.log("Puntos:", puntos);
// /*
// 11. Declara precio = 50.
//     Duplica su valor usando precio *= 2 y muestra el resultado.
// */
// // RESPUESTA AQUÍ 👇
// let precio = 50;
// precio *= 2;
// console.log("Precio duplicado:", precio);
// /*
// 12. Declara saldo = 200.
//     Divide su valor entre 4 usando saldo /= 4 y muestra el nuevo saldo.
// */
// // RESPUESTA AQUÍ 👇
// let saldo = 200;
// saldo /= 4;
// console.log("Saldo dividido:", saldo);
// // =======================================================
// // OPERADORES DE COMPARACIÓN (EJERCICIOS 13 - 16)
// // =======================================================

// /*
// 13. Declara dos variables numéricas.
//     Muestra si son iguales (==) o diferentes (!=).
// */
// // RESPUESTA AQUÍ 👇
// let num1=5;
// let num2=4
// console.log("Son iguales?", num1==num2);
// console.log("Son diferentes?", num1!=num2);


// /*
// 14. Declara edad = 17.
//     Muestra si es mayor o igual a 18 (edad >= 18).
// */
// // RESPUESTA AQUÍ 👇
// let edad = 17;
// console.log("¿Mayor o igual a 18?", edad >= 18);
// /*
// 15. Declara dos variables a = 10, b = "10".
//     Muestra el resultado de a == b y a === b para ver la diferencia.
// */
// // RESPUESTA AQUÍ 👇
// let a1 = 10;
// let b1 = "10";
// console.log("a == b:", a1 == b1);
// console.log("a === b:", a1 === b1)
// /*
// 16. Declara dos variables c = 15, d = 20.
//     Muestra si c es menor que d y si c es mayor o igual que d.
// */
// // RESPUESTA AQUÍ 👇
// let c = 15;
// let d = 20;
// console.log("¿c < d?", c < d);
// console.log("¿c >= d?", c >= d);
// // =======================================================
// // OPERADORES LÓGICOS (EJERCICIOS 17 - 20)
// // =======================================================

// /*
// 17. Declara tieneLicencia = true y tieneAuto = false.
//     Usa && (AND) para verificar si puede conducir.
// */
// // RESPUESTA AQUÍ 👇
// let tieneLicencia = true;
// let tieneAuto = false;
// console.log("¿Puede conducir?", tieneLicencia && tieneAuto)
// /*
// 18. Declara esMayor = true y tieneEntrada = false.
//     Usa || (OR) para verificar si puede entrar al cine.
// */
// // RESPUESTA AQUÍ 👇
// let esMayor = true;
// let tieneEntrada = false;
// console.log("¿Puede entrar al cine?", esMayor || tieneEntrada);
// /*
// 19. Declara variable conectado = false.
//     Usa ! (NOT) para mostrar el valor contrario.
// */
// // RESPUESTA AQUÍ 👇
// let conectado = false;
// console.log("Valor contrario:", !conectado);
// /*
// 20. Declara edad = 25 y nacionalidad = "boliviana".
//     Usa operadores lógicos para verificar si puede votar
//     (edad >= 18 && nacionalidad == "boliviana").
// */
// // RESPUESTA AQUÍ 👇
// let edad2 = 25;
// let nacionalidad = "boliviana";
// console.log("¿Puede votar?", edad2 >= 18 && nacionalidad == "boliviana");
// // =======================================================
// // COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// // =======================================================

// /*
// 21. Declara dos números y muestra su suma.
//     Luego, verifica si el resultado es mayor que 50.
// */
// // RESPUESTA AQUÍ 👇
// let numA = 40;
// let numB = 20;
// let total = numA + numB;
// console.log("Suma:", total);
// console.log("¿Mayor que 50?", total > 50);
// /*
// 22. Declara tres notas (nota1, nota2, nota3).
//     Calcula el promedio y muestra si aprobó (promedio >= 60).
// */
// // RESPUESTA AQUÍ 👇
// let nA = 50;
// let nB = 70;
// let nC = 80;
// let prom = (nA + nB + nC) / 3;
// console.log("Promedio:", prom);
// console.log("¿Aprobó?", prom >= 60);
// /*
// 23. Declara nombre y edad.
//     Muestra un mensaje como:
//     "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
// */
// // RESPUESTA AQUÍ 👇
// let nombre = "Kevin";
// let edad3 = 20;
// console.log("Hola " + nombre + ", tienes " + edad3 + " años. ¿Eres mayor de edad? " + (edad3 >= 18));

// /*
// 24. Declara precioProducto y dineroDisponible.
//     Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
// */
// // RESPUESTA AQUÍ 👇
// let precioProducto = 120;
// let dineroDisponible = 150;
// console.log("¿Puedes comprarlo?", dineroDisponible >= precioProducto);
// /*
// 25. Declara base y altura.
//     Calcula el área de un triángulo (base * altura) / 2.
// */
// // RESPUESTA AQUÍ 👇
// let basetria = 10;
// let alturatria = 6;
// let areatria = (basetria * alturatria) / 2;
// console.log("Área del triángulo:", areatria);
// /*
// 26. Declara edad, tieneCedula y tienePasaje.
//     Usa operadores lógicos para saber si puede viajar.
//     (edad >= 18 && tieneCedula && tienePasaje)
// */
// // RESPUESTA AQUÍ 👇
// let edad4 = 19;
// let tieneCedula = true;
// let tienePasaje = false;
// console.log("¿Puede viajar?", edad4 >= 18 && tieneCedula && tienePasaje);
// /*
// 27. Declara saldo = 100 y gasto = 30.
//     Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
// */
// // RESPUESTA AQUÍ 👇
// let bal= 100;
// let gas= 30;
// bal-=gas
// console.log("Tu nuevo Saldo es",bal);

// /*
// 28. Declara a = 10, b = 5.
//     Muestra si la suma es par o impar (usa %).
// */
// // RESPUESTA AQUÍ 👇
// let a2 = 10;
// let b2 = 5;
// let suma2 = a2 + b2;
// if (suma2 % 2 === 0) {
//   console.log("La suma es par");
// } else {
//   console.log("La suma es impar");
// }
// /*
// 29. Declara usuario = "Kevin" y password = "1234".
//     Usa && para verificar si ambos son correctos.
// */
// // RESPUESTA AQUÍ 👇
// let usuario = "Kevin";
// let password = "1234";
// console.log("¿Acceso permitido?", usuario == "Kevin" && password == "1234");

// /*
// 30. Ejercicio Final:
//     Declara tus datos y calcula tu promedio.
//     Luego, muestra un mensaje completo.

//     let nombre = "Kevin";
//     let edad = 28;
//     let nota1 = 70;
//     let nota2 = 80;

//     let promedio = (nota1 + nota2) / 2;
//     let aprobado = promedio >= 60;

//     console.log(`Hola ${nombre}, tienes ${edad} años, tu promedio es ${promedio}, aprobado: ${aprobado}`);
// */
// // RESPUESTA AQUÍ 👇
// let nombre2 = "Kevin";
// let edad5 = 28;
// let notaA = 70;
// let notaB = 80;
// let promedio2 = (notaA + notaB) / 2;
// let aprobado = promedio2 >= 60;
// console.log(`Hola ${nombre2}, tienes ${edad5} años, tu promedio es ${promedio2}, aprobado: ${aprobado}`);

// ejercicio 31
let nombre = prompt("Como te Llamas?")
let edad = prompt("Introduzca su edad");
let genero = prompt("Introduce tu género (masculino o femenino)");
let saldo = 50;

edad = Number(edad);
if (edad < 18 || edad > 35) {
  console.log("Hola", nombre,  "Lastimosamente No puedes jugar. Solo se permite entre 18 y 35 años.");
}
else if (genero.toLowerCase() === "femenino") {
  console.log("Lo siento", nombre, "no puedes jugar. Nuestro establecimiento no tiene las modalidades para ofrecerte una experiencia excepcional.");
}
else if (saldo < 10) {
  console.log(nombre,"No tienes el saldo suficiente. Se requieren al menos $10.");
}
else if (genero.toLowerCase() === "masculino") {
  let horas = (saldo / 15) * 3;
  console.log("Hola",nombre);
  console.log("Edad:", edad, "años");
  console.log("Saldo:", "$" + saldo);
  console.log("Tiempo disponible:", horas.toFixed(2), "horas de juego.");
}
else {
  console.log("Entrada no válida. Asegúrate de escribir 'masculino' o 'femenino'.");
}
