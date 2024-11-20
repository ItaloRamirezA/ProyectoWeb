// ------------------ Variables Globales ------------------ //
// Map de las imagenes que saldrán al inicio
let imagenes = new Map();

// Almacena los intentos que tiene el usuario para adivinar.
let contIntentos = 0;

// Almacena el numero máximo de intentos.
const MAXINTENTOS = 5;

// Respuesta del usuario
let respuestaUsario = document.getElementById("entrada-respuesta").value;


// ------------------ INICIO - FUNCIONES DE DETALLES ------------------ //
/* 
* Función que agranda objetos
*/
function agrandar() {
    // Logo del footer
    let logo = document.getElementById('logo-footer');
    efectoAgrandarImagen(logo, 1.15);

    // Logo del boton de adivinar
    let botonAdivinar = document.getElementById('boton-adivinar');
    efectoAgrandarImagen(botonAdivinar, 1.05);
}
agrandar();

/*
* Cuando el mouse pasa por encima,la imagen
* se agranda y cuando sale vuelve a su tamano
*/
function efectoAgrandarImagen(objetoImagen, escala) {
    objetoImagen.addEventListener('mouseover', function () {
        objetoImagen.style.transform = `scale(${escala})`;
    });
    objetoImagen.addEventListener('mouseout', function () {
        objetoImagen.style.transform = 'scale(1)';
    });
}

// ------------------ FIN - FUNCIONES DE DETALLES ------------------ //

// ------------------ INICIO - FUNCIONES UTILES ------------------ //
/*
Funcion para rellenar el hashmap con arrays de imagenes
*/
function rellenarMapa() {
    
}
/*
* Función para elegir una imagen
* aleatoria al inciar la página
*/

function elegirImagen() {
    imagenes.set("Ajolote", 'images/ajolote.png');
    imagenes.set("Cerdo", 'images/cerdo.png');
    imagenes.set("Esqueleto", 'images/esqueleto.png');
    imagenes.set("EsqueletoWither", 'images/esqueletoWither.png');
    imagenes.set("Gato", 'images/gato.png');
    imagenes.set("Ghast", 'images/ghast.png');
    imagenes.set("Ocelote", 'images/ocelote.png');
    imagenes.set("PiglinBruto", 'images/piglinBruto.png');
    imagenes.set("Warden", 'images/warden.png');
    imagenes.set("Whiter", 'images/wither.png');
    imagenes.set("Zombie", 'images/zombie.png');
    
    let numeroRandom = Math.floor(Math.random() * imagenes.size);
    return numeroRandom;
}

/*
 * Coge una imagen y la divide
 */
function trozoImagen() {
let im=elegirImagen();
let ima=imagenes[im];

}

/**
 * Función en la que se agrega la respuesta y
 * las guarda en localStorage.
 */
function agregarRespuesta() {

    const resptUser = respuestaUsario.value.trim();

    if (resptUser != "") {

        // while (contIntentos < MAXINTENTOS) {

            let respuestas = localStorage.getItem("respuestas");

            if(respuestas) {
                respuestas = JSON.parse(respuestas);

            }else {
                respuestas = [];
            }


            respuestas.push(resptUser);
        // }
    }
}

/**
 * Función que actualiza la lista
 * de respuestas y crea debajo las respuestas introducidas.
 */
function actualizarRespuestas() {

    let respuestas = localStorage.getItem("respuestas");

    if(tareas){
        tareas = JSON.parse(tareas);

    }else {
        tareas = [];
    }

    const listaRespuestas = document.getElementById("entrada-respuesta");

    listaRespuestas.innerHTML = "";
    
    for(let i = 0; i < respuestas.length; i++){

        let respuestaUser = respuestas[i];

        const input = document.createElement("input");
        input.textContent = "";
        
        listaRespuestas.appendChild(input);
        
    }
}


/**
 * Función que verifica si la respuesta es correcta
 */
function botonAdivinar() {
    agregarRespuesta();
    console.log("Respuesta del usuario:" + respuestaUsario);
}

window.onload = actualizarRespuestas();


// ------------------ FIN - FUNCIONES UTILES ------------------ //