

// LOGIN
const btnIngresar = document.getElementById("btn-ingresar");
if (btnIngresar) {
  btnIngresar.addEventListener("click", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje") || document.getElementById("mensaje-global");

    if (usuario === "Liliana" && password === "1234") {
      localStorage.setItem("usuario_logueado", "true");

      // Si no hay saldo, lo inicio en 0
      if (localStorage.getItem("saldo") === null) {
        localStorage.setItem("saldo", "0");
      }

      if (mensaje) mensaje.innerHTML = '<div class="alert alert-success">✅ Acceso permitido</div>';

      setTimeout(() => {
        window.location.href = "menu.html";
      }, 700);
    } else {
      if (mensaje) mensaje.innerHTML = '<div class="alert alert-danger">❌ Datos incorrectos</div>';
    }
  });
}

// FUNCIÓN PARA MOSTRAR SALDO 
function mostrarSaldo() {
  const saldoValor = document.getElementById("saldo-valor");
  if (saldoValor) {
    const saldo = Number(localStorage.getItem("saldo") || "0");
    saldoValor.textContent = "$" + saldo;
  }
}
mostrarSaldo();

// DEPOSITAR
const btnDepositar = document.getElementById("btn-depositar");
if (btnDepositar) {
  btnDepositar.addEventListener("click", function () {
    const input = document.getElementById("monto-depositar");
    const mensaje = document.getElementById("mensaje") || document.getElementById("mensaje-global");

    const monto = Number(input.value);

    if (monto > 0) {
      const saldo = Number(localStorage.getItem("saldo") || "0");
      localStorage.setItem("saldo", String(saldo + monto));
      mostrarSaldo();

      if (mensaje) mensaje.innerHTML = '<div class="alert alert-success">✅ Depósito listo</div>';
      input.value = "";
    } else {
      if (mensaje) mensaje.innerHTML = '<div class="alert alert-danger">❌ Monto inválido</div>';
    }
  });
}

// ENVIAR DINERO
const btnEnviar = document.getElementById("btn-enviar");
if (btnEnviar) {
  btnEnviar.addEventListener("click", function () {
    const inputMonto = document.getElementById("monto-enviar");
    const inputContacto = document.getElementById("contacto");
    const mensaje = document.getElementById("mensaje") || document.getElementById("mensaje-global");

    const monto = Number(inputMonto.value);
    const contacto = inputContacto.value;

    const saldo = Number(localStorage.getItem("saldo") || "0");

    if (monto > 0 && contacto !== "") {
      if (monto <= saldo) {
        localStorage.setItem("saldo", String(saldo - monto));
        mostrarSaldo();

        if (mensaje) mensaje.innerHTML = `<div class="alert alert-success">✅ Enviado a ${contacto}</div>`;
        inputMonto.value = "";
        inputContacto.value = "";
      } else {
        if (mensaje) mensaje.innerHTML = '<div class="alert alert-danger">❌ Saldo insuficiente</div>';
      }
    } else {
      if (mensaje) mensaje.innerHTML = '<div class="alert alert-danger">❌ Completa los datos</div>';
    }
  });
}



