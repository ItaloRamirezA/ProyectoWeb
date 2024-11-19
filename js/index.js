// Map de las imagenes que saldrán al inicio
let imagenes = new Map();



// Variable en la que almacena los intentos que tiene el usuario para adivinar.
let contIntentos = 0;

// Variable en la que almacena lo máximos intentos que va a tener el usuario para adivinar.
const MAXINTENTOS = 5;



// ------------------ INICIO - FUNCIONES DE DETALLES ------------------ //
/* 
* Función que agranda el objeto
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
    objetoImagen.addEventListener('mouseover', function() {
        objetoImagen.style.transform = `scale(${escala})`;
    });
    objetoImagen.addEventListener('mouseout', function() {
        objetoImagen.style.transform = 'scale(1)';
    });
}

// ------------------ FIN - FUNCIONES DE DETALLES ------------------ //

// ------------------ INICIO - FUNCIONES UTILES ------------------ //
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

// ------------------ FIN - FUNCIONES UTILES ------------------ //