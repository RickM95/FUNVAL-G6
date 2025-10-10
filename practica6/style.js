// =======================================================
// BUCLE FOR (EJERCICIOS 1 - 15)
// =======================================================

/*
1. Muestra los números del 1 al 10 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
2. Muestra los números del 10 al 1 en orden descendente usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/*
3. Muestra solo los números pares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}


/*
4. Muestra solo los números impares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}


/*
5. Muestra la tabla de multiplicar del 5 (del 1 al 10).
*/
// RESPUESTA AQUÍ 👇

for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

/*
6. Calcula la suma de los números del 1 al 100 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log(suma);


/*
7. Muestra los múltiplos de 3 entre 1 y 30 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇

for (let i = 3; i <= 30; i += 3) {
  console.log(i);
}


/*
8. Calcula el factorial de un número (por ejemplo 5) usando for.
*/
// RESPUESTA AQUÍ 👇

let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(factorial);

/*
9. Muestra los primeros 10 números cuadrados (1², 2², 3²…).
*/
// RESPUESTA AQUÍ 👇

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}


/*
10. Muestra los números del 1 al 50 y muestra "Múltiplo de 10" cuando corresponda.
*/
// RESPUESTA AQUÍ 👇

for (let i = 1; i <= 50; i++) {
  if (i % 10 === 0) {
    console.log(i + " multiplo de 10");
  } else {
    console.log(i);
  }
}


/*
11. Calcula la suma de los números pares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇

let pares = 0;
for (let i = 2; i <= 50; i += 2) {
  pares += i;
}
console.log(pares);


/*
12. Calcula la suma de los números impares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇

let impares = 0;
for (let i = 1; i <= 50; i += 2) {
  impares += i;
}
console.log(impares)


/*
13. Muestra los números del 1 al 20 e indica si cada uno es "par" o "impar".
*/
// RESPUESTA AQUÍ 👇

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " par");
  } else {
    console.log(i + " impar");
  }
}


/*
14. Muestra los números del 1 al 30 e indica si son múltiplos de 3.
*/
// RESPUESTA AQUÍ 👇

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i + " multiplo de 3");
  } else {
    console.log(i);
  }
}


/*
15. Muestra un conteo regresivo desde 20 hasta 0.
*/
// RESPUESTA AQUÍ 👇

for (let i = 20; i >= 0; i--) {
  console.log(i);
}


// =======================================================
// BUCLE WHILE (EJERCICIOS 16 - 25)
// =======================================================

/*
16. Muestra los números del 1 al 10 usando un bucle while.
*/
// RESPUESTA AQUÍ 👇

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

/*
17. Muestra los números pares del 2 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇

i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}


/*
18. Muestra los números del 10 al 1 usando while.
*/
// RESPUESTA AQUÍ 👇

i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}



/*
19. Muestra los números del 1 al 30, pero solo los múltiplos de 5.
*/
// RESPUESTA AQUÍ 👇

i = 5;
while (i <= 30) {
  console.log(i)
  i += 5;
}


/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇

i = 1;
suma = 0;
while (i <= 20) {
  suma += i;
  i++;
}
console.log(suma);


/*
21. Muestra los números del 1 al 15 e indica si son pares o impares usando while.
*/
// RESPUESTA AQUÍ 👇

i = 1
while (i <= 15) {
  if (i % 2 === 0) console.log(i + " par")
  else console.log(i + " impar")
  i++
}


/*
22. Muestra la tabla de multiplicar del número 7 usando while.
*/
// RESPUESTA AQUÍ 👇

i = 1;
while (i <= 10) {
  console.log(`7 x ${i} = ${7 * i}`)
  i++
}


/*
23. Muestra los múltiplos de 4 entre 1 y 40 usando while.
*/
// RESPUESTA AQUÍ 👇

i = 4;
while (i <= 40) {
  console.log(i);
  i += 4;
}


/*
24. Calcula el factorial de un número (por ejemplo 6) usando while.
*/
// RESPUESTA AQUÍ 👇

i = 1;
factorial = 1;
while (i <= 6) {
  factorial *= i;
  i++;
}
console.log(factorial);


/*
25. Muestra un conteo regresivo desde 15 hasta 0 usando while.
*/
// RESPUESTA AQUÍ 👇

i = 15;
while (i >= 0) {
  console.log(i);
  i--;
}

// =======================================================
// BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// =======================================================

/*
26. Muestra los números del 1 al 10 usando do...while.
*/
// RESPUESTA AQUÍ 👇

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);


/*
27. Pide un número y muestra su tabla de multiplicar usando do...while.
*/
// RESPUESTA AQUÍ 👇

let num = parseInt(prompt("Ingrese un numero para su tabla:"));
i = 1;
do {
  console.log(`${num} x ${i} = ${num * i}`)
  i++;
} while (i <= 10)


/*
28. Muestra los números del 10 al 1 usando do...while.
*/
// RESPUESTA AQUÍ 👇

i = 10;
do {
  console.log(i)
  i--;
} while (i >= 1)


/*
29. Muestra los números del 1 al 30 y muestra un mensaje cuando sea múltiplo de 6.
*/
// RESPUESTA AQUÍ 👇

i = 1;
do {
  if (i % 6 === 0) console.log(i + " multiplo de 6");
  else console.log(i);
  i++;
} while (i <= 30);


/*
30. Calcula la suma de los números del 1 al 50 usando do...while.
*/
// RESPUESTA AQUÍ 👇

i = 1;
suma = 0;
do {
  suma += i;
  i++;
} while (i <= 50)
console.log(suma);


// =======================================================
// COMBINACIÓN DE TEMAS (EJERCICIOS 31 - 40)
// =======================================================

/*
31. Pide un número y muestra todos los números desde 1 hasta ese número.
   Si es múltiplo de 3, muestra "Fizz", si es múltiplo de 5, muestra "Buzz".
*/
// RESPUESTA AQUÍ 👇

num = parseInt(prompt("Ingrese un numero:"));
for (i = 1; i <= num; i++) {
  if (i % 3 === 0) console.log(i + " Fizz");
  else if (i % 5 === 0) console.log(i + " Buzz");
  else console.log(i);
}


/*
32. Pide al usuario un número y calcula su factorial usando un bucle.
*/
// RESPUESTA AQUÍ 👇

num = parseInt(prompt("Ingrese un numero para factorial:"));
factorial = 1;
for (i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);


/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Kevin" o "Belen" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

let usuario = prompt("Usuario:")
let contraseña = prompt("Contraseña:")
if ((usuario === "Kevin" || usuario === "Belen") && contraseña === "1234") {
  console.log("Acceso autorizado");
} else {
  console.log("Denegado");
}


/*
34. Pide un número y muestra todos los pares hasta ese número.
   Luego muestra la cantidad total de pares encontrados.
*/
// RESPUESTA AQUÍ 👇

let contadorpares = 0;
for (i = 2; i <= num; i += 2) {
  console.log(i);
  contadorpares++
}
console.log("Total de pares: " + contadorpares);


/*
35. Calcula la suma de todos los múltiplos de 3 y 5 entre 1 y 100.
*/
// RESPUESTA AQUÍ 👇

suma = 0;
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) suma += i;
}
console.log(suma)


/*
36. Pide un número y muestra si es primo o no, usando un bucle para verificar divisores.
*/
// RESPUESTA AQUÍ 👇

num = parseInt(prompt("Ingrese un numero:"));
let esprimo = true;
if (num < 2) esprimo = false;
for (i = 2; i < num; i++) {
  if (num % i === 0) {
    esprimo = false;
    break;
  }
}
console.log(esprimo ? "Es primo" : "No es primo");


/*
37. Simula un inicio de sesión:
   Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla los 3 intentos, muestra "Acceso bloqueado".
*/
// RESPUESTA AQUÍ 👇

let intentos = 0
let acceso = false
do {
  usuario = prompt("Usuario:")
  contraseña = prompt("Contraseña:")
  intentos++;
  if (usuario === "admin" && contraseña === "1234") {
    console.log("Acceso autorizado");
    acceso = true;
    break;
  } else {
    console.log("Incorrecto. Intento " + intentos);
  }
} while (intentos < 3);
if (!acceso) console.log("Acceso bloqueado");


/*
38. Pide 5 números y calcula su suma total y promedio.
*/
// RESPUESTA AQUÍ 👇

suma = 0
for (i = 1; i <= 5; i++) {
  let n = parseInt(prompt("Ingrese un numero:"))
  suma += n;
}
console.log("Suma total: " + suma);
console.log("Promedio: " + suma / 5);

/*
39. Muestra los números del 1 al 50.
   Si el número es divisible por 3 muestra "Fizz",
   si es divisible por 5 muestra "Buzz",
   si es divisible por ambos muestra "FizzBuzz".
*/
// RESPUESTA AQUÍ 👇

for (i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}


/*
40. Juego de adivinar número:
   Genera un número aleatorio entre 1 y 10.
   Usa un bucle para pedir al usuario que adivine.
   Da pistas si el número es mayor o menor.
   El juego termina cuando adivina.
*/
// RESPUESTA AQUÍ 👇

let secreto = Math.floor(Math.random() * 10) + 1;
let adivinado = false;
do {
  let intento = parseInt(prompt("Adivina el número (1-10):"));
  if (intento === secreto) {
    console.log("¡Correcto!");
    adivinado = true;
  } else if (intento < secreto) console.log("Es mayor");
  else console.log("Es menor");
} while (!adivinado);