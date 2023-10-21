const titulo = document.querySelector("#title");
const pista = document.querySelector("#pista");
const input = document.querySelector("#numeroAdivinar");
const accion = document.querySelector("#accion");
const intentos = document.querySelector("#intentos");
const resultado = document.querySelector("#resultado");

accion.onclick = adivina;

const secret = Math.floor(Math.random() * 100 + 1);
let counter = 0;

function adivina() {
  const numeroIngresado = parseInt(input.value);

  if (input.value === "") {
    pista.textContent = "Ingrese un numero";
    return;
  }
  counter++;
  intentos.textContent = counter;

  // terminar juego
  if (counter >= 5) {
    accion.disabled = true;
    titulo.textContent = "Game Over";
    resultado.textContent = secret;
  }

  // activar pistas
  if (numeroIngresado === secret) {
    titulo.textContent = "Correcto!!!";
    pista.textContent = "Muy bien, sigue asi";
  } else if (numeroIngresado < secret) {
    pista.textContent = "Cerca, intenta un con un numero mayor";
  } else {
    pista.textContent = "Casi, prueba con un numero menor";
  }
}
