const preguntas = [
    {
        titulo: "Desafío 1",
        pregunta: "¿Cuánto es 18 + 27?",
        respuesta: "45"
    },
    {
        titulo: "Desafío 2",
        pregunta: "¿Cuánto es 9 × 8?",
        respuesta: "72"
    },
    {
        titulo: "Desafío 3",
        pregunta: "¿Cuánto es 144 ÷ 12?",
        respuesta: "12"
    },
    {
        titulo: "Desafío 4",
        pregunta: "¿Cuál es la raíz cuadrada de 81?",
        respuesta: "9"
    },
    {
        titulo: "Desafío 5",
        pregunta: "¿Cuánto es 15²?",
        respuesta: "225"
    }
];

let actual = 0;
let tiempo = 1200;

function comenzar(){

    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("juego").classList.remove("oculto");

    cargarPregunta();

    iniciarTemporizador();

}

function cargarPregunta(){

    document.getElementById("tituloPregunta").innerHTML =
    preguntas[actual].titulo;

    document.getElementById("textoPregunta").innerHTML =
    preguntas[actual].pregunta;

    document.getElementById("respuesta").value="";

}

function verificarRespuesta(){

    let respuesta =
    document.getElementById("respuesta").value.trim();

    if(respuesta===preguntas[actual].respuesta){

        actual++;

        if(actual>=preguntas.length){

            document.getElementById("juego").classList.add("oculto");
            document.getElementById("victoria").classList.remove("oculto");

            return;

        }

        cargarPregunta();

    }else{

        alert("Respuesta incorrecta.");

    }

}

function iniciarTemporizador(){

    setInterval(function(){

        tiempo--;

        let minutos=Math.floor(tiempo/60);
        let segundos=tiempo%60;

        if(segundos<10){
            segundos="0"+segundos;
        }

        document.getElementById("temporizador").innerHTML=
        "⏳ "+minutos+":"+segundos;

        if(tiempo<=0){

            document.getElementById("juego").classList.add("oculto");
            document.getElementById("derrota").classList.remove("oculto");

        }

    },1000);

}
