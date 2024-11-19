// UNAI
// Array de las imagenes que saldrán al inicio
let imagenes = new Map();

// MICHAEL
// Variable en la que almacena los intentos que tiene el usuario para adivinar.
let contIntentos = 0;

// Variable en la que almacena lo máximos intentos que va a tener el usuario para adivinar.
const MAXINTENTOS = 5;

// ITALO


/* 
* Función para elegir una imagen
* aleatoria al inciar la página
*/ 
function elegirImagen() {
    imagenes.set("Ajolote",'images/ajolote.png');
    imagenes.set("Cerdo",'images/cerdo.png');
    imagenes.set("Esqueleto",'images/esqueleto.png');
    imagenes.set("EsqueletoWither",'images/esqueletoWither.png');
    imagenes.set("Gato",'images/gato.png');
    imagenes.set("Ghast",'images/ghast.png');
    imagenes.set("Ocelote",'images/ocelote.png');
    imagenes.set("PiglinBruto",'images/piglinBruto.png');
    imagenes.set("Warden",'images/warden.png');
    imagenes.set("Whiter",'images/wither.png');
    imagenes.set("Zombie",'images/zombie.png');
}


/*
 * Coge una imagen y la divide
 */
function trozoImagen() {
    
}

/**
 * Función en la que se agrega la respuesta y
 * las guarda en localStorage.
 */
function agregarRespuesta() {

    const resptUser = document.getElementById("entrada-respuesta").value.trim();

    if(resptUser != ""){

        while(contIntentos < MAXINTENTOS){
            
        }
    }
}

/**
 * Función que actualiza la lista
 * de respuestas y creamos.
 */
function actualizarRespuestas(){

    let respuestas = localStorage.getItem("respuestas");

}


/**
 * 
 */
function verificar() {
    
}