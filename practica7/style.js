// EJERCICIO1

for (let i = 1; i <= 3; i++) {
  let base = parseFloat(prompt("Ingresa la base del triangulo " + i))
  let altura = parseFloat(prompt("Ingresa la altura del triangulo " + i))

  if (base > 0 && altura > 0) {
    let area = (base * altura) / 2;
    console.log("Area del triangulo " + i + ": " + area);
  } else {
    console.log("Base y altura deben ser mayores que 0");
  }
}



// EJERCICIO 2

for (let i = 1; i <= 5; i++) {
  let c = prompt("Ingresa temperatura " + i + " en Celsius")
  c = parseFloat(c);

  if (!isNaN(c)) {
    let f = (c * 9 / 5) + 32;
    console.log(c + "°C = " + f + "°F")
  } else {
    console.log("Valor no valido");
  }
}


// EJERCICIO 3

for (let i = 1; i <= 3; i++) {
  let texto = prompt("Ingresa texto " + i)
  let contador = 0

  for (let j = 0; j < texto.length; j++) {
    let letra = texto[j].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      contador++
    }
  }

  console.log("Texto " + i + " tiene " + contador + " vocales");
}


// EJERCICIO 4

let inicio = parseInt(prompt("Ingresa el numero de inicio"))
let fin = parseInt(prompt("Ingresa el numero final"))
for (let i = inicio; i <= fin; i++) {
  if (i % 2 === 0) {
    console.log(i + " es par");
  } else {
    console.log(i + " es impar");
  }
}


// EJERCICIO 5
let numeros = [];
for (let i = 1; i <= 5; i++) {
  let n = parseFloat(prompt("Ingresa  un numero " + i))
  numeros.push(n)
}
let mayor = numeros[0]
let suma = 0

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i]
  }
  suma += numeros[i]
}

console.log("Numero mayor: " + mayor)
console.log("Suma total: " + suma)
