// ===== CONFIGURACIÓN =====
const CODIGO = "84175";

// ===== CRONÓMETRO =====
let minutos = 20;
let segundos = 0;

const tiempo = document.getElementById("tiempo");

const contador = setInterval(function(){

    if(segundos===0){

        if(minutos===0){

            clearInterval(contador);

            document.getElementById("mensaje").innerHTML =
            "⏰ Se acabó el tiempo.";

            return;

        }

        minutos--;

        segundos=59;

    }else{

        segundos--;

    }

    let m=minutos.toString().padStart(2,"0");
    let s=segundos.toString().padStart(2,"0");

    tiempo.innerHTML=m+":"+s;

},1000);

// ===== VALIDAR CÓDIGO =====

function verificarCodigo(){

    let codigo=document.getElementById("codigo").value;

    let mensaje=document.getElementById("mensaje");

    if(codigo===CODIGO){

        clearInterval(contador);

        document.body.innerHTML=`

        <div style="display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background:#062b16;
        color:white;
        font-family:Arial;
        text-align:center;
        padding:30px;">

        <div>

        <h1 style="font-size:55px;">🔓</h1>

        <h1>¡ACCESO CONCEDIDO!</h1>

        <h2>🎉 FELICIDADES 🎉</h2>

        <p>

        Han escapado del

        <br><br>

        <b>ESCAPE MATEMÁTICO</b>

        </p>

        </div>

        </div>

        `;

    }

    else{

        mensaje.innerHTML="❌ Código incorrecto.";

        mensaje.style.color="red";

    }

}
