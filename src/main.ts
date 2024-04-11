// Constantes y atraer elementos del HTML //

const turnoActual = document.getElementById("numero-turno");
let turno = 1
const botonSumar = document.getElementById("masuno")
const botonRestar = document.getElementById("menosuno")
const botonReset = document.getElementById("reset")
const botonIngreso = document.getElementById("boton-ingreso")
const numeroInsertado = document.getElementById("numero-insertado")

// Funciones //

function sumar() {
    turno++
    if (turnoActual !== null && turnoActual !== undefined && turnoActual instanceof HTMLHeadingElement) {
        turnoActual.innerText = `${turno}`.padStart(2,"0");
    }
}

function restar() {
    if (turno > 0) {
        turno--
    }
    if (turnoActual !== null && turnoActual !== undefined && turnoActual instanceof HTMLHeadingElement) {
        turnoActual.innerText =`${turno}`.padStart(2,"0");
    }
}

function resetear() {
    turno = 0
    if (turnoActual !== null && turnoActual !== undefined && turnoActual instanceof HTMLHeadingElement)
        turnoActual.innerText = `${turno}`.padStart(2,"0");
}

function ingreso () {
    if (numeroInsertado !== null && numeroInsertado !== undefined && numeroInsertado instanceof HTMLInputElement) {
        turno = Number(numeroInsertado.value)
    }
    if (turnoActual !== null && turnoActual !== undefined && turnoActual instanceof HTMLHeadingElement) {
        turnoActual.innerText = `${turno}`.padStart(2,"0")
    }
}

// Ejecucion //

if (botonSumar !== null && botonSumar !== undefined && botonSumar instanceof HTMLButtonElement) {
    botonSumar.addEventListener ("click", sumar)
}

if (botonRestar !== null && botonRestar !== undefined && botonRestar instanceof HTMLButtonElement) {
    botonRestar.addEventListener("click", restar)
}

if (botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", resetear)
}

if (botonIngreso !== null && botonIngreso !== undefined && numeroInsertado instanceof HTMLInputElement) {
    botonIngreso.addEventListener("click", ingreso)
}