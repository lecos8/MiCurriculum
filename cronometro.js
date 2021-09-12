let milesima = 0;
let minutos = 0;
let segundos = 0;
let identificador = 0;
let bandera = true;
let historial = [];

function inicioConteo() {
    //identificador = setInterval(proceso, 16.6666666666);
    if (bandera) {
        identificador = setInterval(proceso, 16.6666666666);
        bandera = false;
        function proceso() {
            milesima++;
            if (milesima == 60) {
            segundos++;
            milesima = 0;
            }
            if (segundos == 60) {
            minutos++;
            segundos = 0;
            }
            if (minutos == 60) {
            minutos = 0;
            }
            //milesima++;
            document.getElementById("parrafo").innerHTML = minutos + " : " + segundos + " : " + milesima;
        }
    }
}



function pararConteo() {
    clearInterval(identificador);
    bandera = true;
}



function borrarRegistro() {
    pararConteo();
    let registroEvento = minutos + " : " + segundos + " : " + milesima;
    // historial.push(registroEvento);
    document.querySelector("#historial").innerHTML += registroEvento +"<br><br>";
    minutos = 0;
    segundos = 0;
    milesima = 0;
    document.getElementById("parrafo").innerHTML = minutos + " : " + segundos + " : " + milesima;
}
