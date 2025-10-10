const cuentas = [
  { numero: "1001", nombre: "Juan", pin: "1111", saldo: 2500.00, historial: [] },
  { numero: "1002", nombre: "María", pin: "2222", saldo: 1500.50, historial: [] },
  { numero: "1003", nombre: "Pedro", pin: "3333", saldo: 320.75, historial: [] }
];

const formatoMoneda = new Intl.NumberFormat('es-HN', { style: 'currency', currency: 'HNL' });

let cuentaActiva = null;
let intentos = 0;

// --------------------------- LOGIN ---------------------------
document.getElementById('loginBtn').addEventListener('click', () => {
  const num = document.getElementById('accountNumber').value.trim();
  const pin = document.getElementById('accountPin').value.trim();
  const errorEl = document.getElementById('loginError');
  const cuenta = cuentas.find(c => c.numero === num);

  if (!cuenta) {
    errorEl.textContent = "Cuenta no encontrada.";
    return;
  }

  if (pin === cuenta.pin) {
    cuentaActiva = cuenta;
    mostrarMenu();
  } else {
    intentos++;
    errorEl.textContent = `PIN incorrecto. Intento ${intentos}/3`;
    if (intentos >= 3) {
      errorEl.textContent = "Cuenta bloqueada temporalmente.";
      document.getElementById('loginBtn').disabled = true;
    }
  }
});

function mostrarMenu() {
  document.getElementById('loginSection').classList.add('hidden');
  document.getElementById('menuSection').classList.remove('hidden');
  document.getElementById('userName').textContent = cuentaActiva.nombre;
  mostrarMensaje(`Sesión iniciada para ${cuentaActiva.nombre} (${cuentaActiva.numero}).`);
}

// --------------------------- MENU ACTIONS ---------------------------
document.querySelectorAll('.btnMenu').forEach(btn => {
  btn.addEventListener('click', () => {
    const accion = btn.getAttribute('data-action');
    switch (accion) {
      case "saldo": consultarSaldo(); break;
      case "depositar": depositar(); break;
      case "retirar": retirar(); break;
      case "transferir": transferir(); break;
      case "historial": mostrarHistorial(); break;
      case "salir": salir(); break;
    }
  });
});

function mostrarMensaje(msg) {
  const output = document.getElementById('output');
  output.innerHTML = `<div class="p-2 bg-green-50 border-l-4 border-green-400 text-gray-700">${msg}</div>`;
}

// --------------------------- FUNCIONES ---------------------------
function consultarSaldo() {
  mostrarMensaje(`Saldo actual: <b>${formatoMoneda.format(cuentaActiva.saldo)}</b>`);
  cuentaActiva.historial.push({ tipo: "Consulta de saldo", fecha: new Date().toLocaleString() });
}

function depositar() {
  const monto = parseFloat(prompt("Ingrese el monto a depositar:"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return;
  }
  cuentaActiva.saldo += monto;
  cuentaActiva.historial.push({ tipo: "Depósito", monto, fecha: new Date().toLocaleString() });
  mostrarMensaje(`Depósito exitoso de ${formatoMoneda.format(monto)}.<br>Nuevo saldo: ${formatoMoneda.format(cuentaActiva.saldo)}`);
}

function retirar() {
  const monto = parseFloat(prompt("Ingrese el monto a retirar:"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return;
  }
  if (monto > cuentaActiva.saldo) {
    alert("Saldo insuficiente.");
    return;
  }
  cuentaActiva.saldo -= monto;
  cuentaActiva.historial.push({ tipo: "Retiro", monto, fecha: new Date().toLocaleString() });
  mostrarMensaje(`Retiro de ${formatoMoneda.format(monto)} realizado.<br>Saldo actual: ${formatoMoneda.format(cuentaActiva.saldo)}`);
}

function transferir() {
  const destinoNum = prompt("Número de cuenta destino:");
  const cuentaDestino = cuentas.find(c => c.numero === destinoNum);
  if (!cuentaDestino) {
    alert("Cuenta destino no encontrada.");
    return;
  }
  if (cuentaDestino.numero === cuentaActiva.numero) {
    alert("No puede transferirse a sí mismo.");
    return;
  }
  const monto = parseFloat(prompt("Monto a transferir:"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido.");
    return;
  }
  if (monto > cuentaActiva.saldo) {
    alert("Saldo insuficiente.");
    return;
  }

  cuentaActiva.saldo -= monto;
  cuentaDestino.saldo += monto;
  const fecha = new Date().toLocaleString();

  cuentaActiva.historial.push({ tipo: "Transferencia enviada", monto, a: cuentaDestino.numero, fecha });
  cuentaDestino.historial.push({ tipo: "Transferencia recibida", monto, de: cuentaActiva.numero, fecha });

  mostrarMensaje(`Transferencia de ${formatoMoneda.format(monto)} a ${cuentaDestino.nombre} completada.<br>Saldo: ${formatoMoneda.format(cuentaActiva.saldo)}`);
}

function mostrarHistorial() {
  if (cuentaActiva.historial.length === 0) {
    mostrarMensaje("No hay movimientos registrados.");
    return;
  }
  let html = "<h3 class='font-semibold mb-2'>Historial de movimientos:</h3><ul class='list-disc ml-5'>";
  cuentaActiva.historial.forEach(h => {
    html += `<li>${h.tipo} ${h.monto ? formatoMoneda.format(h.monto) : ""} (${h.fecha})</li>`;
  });
  html += "</ul>";
  mostrarMensaje(html);
}

function salir() {
  const resumen = `Se cerró sesión de ${cuentaActiva.nombre}.<br>Saldo final: ${formatoMoneda.format(cuentaActiva.saldo)}<br>Total de movimientos: ${cuentaActiva.historial.length}`;
  alert(resumen);
  cuentaActiva = null;
  document.getElementById('menuSection').classList.add('hidden');
  document.getElementById('loginSection').classList.remove('hidden');
  document.getElementById('accountNumber').value = "";
  document.getElementById('accountPin').value = "";
  document.getElementById('output').innerHTML = "";
}
