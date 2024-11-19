// UNAI
// Array de las imagenes que saldrán al inicio
let ArrayImagenes = ['images'];
let imagenes = new Map();

// MICHAEL
// Variable en la que almacena los intentos que tiene el usuario para adivinar.
let contIntentos = 0;

// Variable en la que almacena lo máximos intentos que va a tener el usuario para adivinar.
const maxIntento = 5;

// ITALOP
/* 
* Función para elegir una imagen
* aleatoria al inciar la página
*/ 
function elegirImagen() {
    imagenes.set("Ajolote",'images/ajolote.png')
    imagenes.set("Cerdo",'images/cerdo.png')
    imagenes.set("Esqueleto",'images/esqueleto.png')
    imagenes.set("EsqueletoWither",'images/ajolote.png')
    imagenes.set("Gato",'images/ajolote.png')
    imagenes.set("Ghast",'images/ajolote.png')
    imagenes.set("Ocelote",'images/ajolote.png')
    imagenes.set("PiglinBruto",'images/ajolote.png')
    imagenes.set("Warden",'images/ajolote.png')
    imagenes.set("Whiter",'images/ajolote.png')
    imagenes.set("Zombie",'images/ajolote.png')
   
}


/*
 * Coge una imagen y la divide
 */
function trozoImagen() {
    
}

/**
 * Función en la que se agrega la respuesta
 * y las guarda en localStorage.
 */
function agregarRespuesta() {

    const resptUser = document.getElementById("resptUser").value.trim();

    if(resptUser != null){

        while(){
            
        }
        
    }


}

/**
 * 
 */
function verificar() {
    
}