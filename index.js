let nombreJugadorUno = prompt("Ingrese su nombre");
let nombreJugadorDos = prompt("ingrese su nombre");
let rondaUnoJugadorUno = prompt(`${nombreJugadorUno} Ingrese piedra, papel o tijera`);
let rondaUnoJugadorDos = prompt(`${nombreJugadorDos} Ingrese piedra, papel o tijera`);


const jugarPiedraPapelTijera = (a, b) => {
    if (a === b) {
        return "¡ Empate!";
    } else if (a === 'piedra' && b === 'tijera') {
        return `${nombreJugadorUno} Ganaste`;
    } else if (a === 'piedra' && b === 'papel') {
        return `${nombreJugadorDos} Ganaste`;
    } else if (a === 'tijera' && b === 'papel') {
        return `${nombreJugadorUno} Ganaste`;
    } else if (a === 'tijera' && b === 'piedra') {
        return `${nombreJugadorDos} Ganaste`;
    } else if (a === 'papel' && b === 'tijera') {
        return `${nombreJugadorDos} Ganaste`;
    } else if (a === 'papel' && b === 'piedra') {
        return `${nombreJugadorUno} Ganaste`;
    }
}
console.log(jugarPiedraPapelTijera(rondaUnoJugadorUno, rondaUnoJugadorDos));
alert(jugarPiedraPapelTijera(rondaUnoJugadorUno, rondaUnoJugadorDos));
let rondaDosJugadorUno = prompt(`${nombreJugadorUno} Ingrese piedra, papel o tijera`);
let rondaDosJugadorDos = prompt(`${nombreJugadorDos} Ingrese piedra, papel o tijera`);
console.log(jugarPiedraPapelTijera(rondaDosJugadorUno, rondaDosJugadorDos));
alert(jugarPiedraPapelTijera(rondaDosJugadorUno, rondaDosJugadorDos));
let rondaTresJugadorUno = prompt(`${nombreJugadorUno} Ingrese piedra, papel o tijera`);
let rondaTresJugadorDos = prompt(`${nombreJugadorDos} Ingrese piedra, papel o tijera`);
console.log(jugarPiedraPapelTijera(rondaTresJugadorUno, rondaTresJugadorDos));
alert(jugarPiedraPapelTijera(rondaTresJugadorUno, rondaTresJugadorDos));