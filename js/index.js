// ------------------ Variables Globales ------------------ //
// Map de las imagenes que saldrán al inicio
let imagenes = new Array();

// Almacena los intentos que tiene el usuario para adivinar.
let contIntentos = 0;

// Almacena el numero máximo de intentos.
const MAXINTENTOS = 5;

// Almacena la posición de la imagen random
let posImagenRandom;

//Array que contendra los numeros de los trozos de imagenes que ya se han usado para no repetirlos
let trozoDeimagenes = new Array();

// Respuesta del usuario
let respuestaUsario = document.getElementById("entrada-respuesta").value.trim();

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
window.onload = agrandar();

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
* Funcion para rellenar el array con arrays de imagenes 
* solo cuando el usuario entre por primera vez o despues de cerrar el navegador.
*/
function rellenarArray() {
    imagenes.push(["Ajolote", 'images/Ajolote/fila-1-columna-1.png', 'images/Ajolote/fila-1-columna-2.png', 'images/Ajolote/fila-2-columna-1.png', 'images/Ajolote/fila-2-columna-2.png']);
    imagenes.push(["Cerdo", 'images/Cerdo/fila-1-columna-1.png', 'images/Cerdo/fila-1-columna-2.png', 'images/Cerdo/fila-2-columna-1.png', 'images/Cerdo/fila-2-columna-2.png']);
    imagenes.push(["Esqueleto", 'images/Esqueleto/fila-1-columna-1.png', 'images/Esqueleto/fila-1-columna-2.png', 'images/Esqueleto/fila-2-columna-1.png', 'images/Esqueleto/fila-2-columna-2.png']);
    imagenes.push(["EsqueletoWither", 'images/EsqueletoWither/fila-1-columna-1.png', 'images/EsqueletoWither/fila-1-columna-2.png', 'images/EsqueletoWither/fila-2-columna-1.png', 'images/EsqueletoWither/fila-2-columna-2.png']);
    imagenes.push(["Gato", 'images/Gato/fila-1-columna-1.png', 'images/Gato/fila-1-columna-2.png', 'images/Gato/fila-2-columna-1.png', 'images/Gato/fila-2-columna-2.png']);
    imagenes.push(["Ghast", 'images/Ghast/fila-1-columna-1.png', 'images/Ghast/fila-1-columna-2.png', 'images/Ghast/fila-2-columna-1.png', 'images/Ghast/fila-2-columna-2.png']);
    imagenes.push(["Ocelote", 'images/Ocelote/fila-1-columna-1.png', 'images/Ocelote/fila-1-columna-2.png', 'images/Ocelote/fila-2-columna-1.png', 'images/Ocelote/fila-2-columna-2.png']);
    imagenes.push(["PiglinBruto", 'images/PiglinBruto/fila-1-columna-1.png', 'images/PiglinBruto/fila-1-columna-2.png', 'images/PiglinBruto/fila-2-columna-1.png', 'images/PiglinBruto/fila-2-columna-2.png']);
    imagenes.push(["Warden", 'images/Warden/fila-1-columna-1.png', 'images/Warden/fila-1-columna-2.png', 'images/Warden/fila-2-columna-1.png', 'images/Warden/fila-2-columna-2.png']);
    imagenes.push(["Whiter", 'images/Whiter/fila-1-columna-1.png', 'images/Whiter/fila-1-columna-2.png', 'images/Whiter/fila-2-columna-1.png', 'images/Whiter/fila-2-columna-2.png']);
    imagenes.push(["Zombie", 'images/Zombie/fila-1-columna-1.png', 'images/Zombie/fila-1-columna-2.png', 'images/Zombie/fila-2-columna-1.png', 'images/Zombie/fila-2-columna-2.png']);
}

/*
* Función para elegir una imagen aleatoria al inciar la página.
*/
function elegirImagenRandom() {
    posImagenRandom = Math.floor(Math.random() * imagenes.length);
    return imagenes[posImagenRandom]
}

// Este metodo sera el encarfgado de msotrar el trozo de iamgen aleatorio
function mostrarImagen() {
    //va mal
    let contenedor = document.getElementById('contenedor-imagen-adivinar');
    contenedor.innerHTML = ''; // Limpiar el contenedor

    let selectedIMG = elegirImagenRandom(); // Seleccionar imagen aleatoria
    let trozo;

    // Continuar seleccionando un trozo hasta que sea uno no utilizado
    do {
        trozo = Math.floor(Math.random() * (selectedIMG.length - 1)) + 1; // Índices de trozos van del 1 al tamaño del arreglo
    } while (trozoDeimagenes.includes(trozo));

    // Registrar el número del trozo seleccionado en el arreglo
    trozoDeimagenes.push(trozo);

    // Verificar si ya se han usado todos los trozos
    if (trozoDeimagenes.length >= 4) {
        console.log("out"); // Mostrar mensaje en la consola
    }

    // Crear y mostrar el trozo de imagen
    let fragmento = document.createElement('img');
    fragmento.src = selectedIMG[trozo];
    contenedor.appendChild(fragmento);


}


/**
 * Función en la que se agrega la respuesta y
 * las guarda en localStorage.
 */
function agregarRespuesta() {

    if (respuestaUsario != "") {

        // while (contIntentos < MAXINTENTOS) {

        let respuestas = localStorage.getItem("respuestas");

        if (respuestas) {
            respuestas = JSON.parse(respuestas);

        } else {
            respuestas = [];
        }

        respuestas.push(respuestaUsario);
        localStorage.setItem("respuestas", JSON.stringify(respuestas));

        respuestaUsario.value = "";

        actualizarRespuestas();
        // }
    }
}

/**
 * Función que actualiza la lista
 * de respuestas y crea debajo las respuestas introducidas.
 */
function actualizarRespuestas() {

    let respuestas = localStorage.getItem("respuestas");

    if (respuestas) {
        respuestas = JSON.parse(respuestas);

    } else {
        respuestas = [];
    }

    const listaRespuestas = document.getElementById("respuestasUser");

    listaRespuestas.innerHTML = "";

    for (let i = 0; i < respuestas.length; i++) {

        let respuestaUser = respuestas[i];

        const li = document.createElement("li");
        let respuestaUserSinEspacios = respuestaUser
        li.textContent = respuestaUser;

        listaRespuestas.appendChild(li);
    }
}

/**
 * Función que devuelve la respuesta
 */
function respuesta() {
    let respuesta = imagenes[elegirImagenRandom()]
    // TODO
}

/**
 * Función que verifica si la respuesta es correcta
 */
function botonAdivinar() {
    agregarRespuesta();
    // Respuesta del usuario
    respuestaUsario = document.getElementById("entrada-respuesta").value.trim();
    console.log("Respuesta del usuario:" + respuestaUsario);
}

window.onload = actualizarRespuestas();
// ------------------ FIN - FUNCIONES UTILES ------------------ //