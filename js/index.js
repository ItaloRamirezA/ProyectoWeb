// ------------------ Inicio - Variables Globales ------------------ //

// Map de las imagenes que saldrán al inicio
let imagenes = new Array();

// Almacena los intentos que tiene el usuario para adivinar.
let contIntentos = Number(localStorage.getItem("contadorIntentos")) || 0;

// Almacena el numero máximo de intentos.
const MAXINTENTOS = 5;

// Almacena la posición de la imagen random
let posImagenRandom;

//Array que contendra los numeros de los trozos de imagenes que ya se han usado para no repetirlos
let trozoDeimagenes = new Array();

// Respuesta del usuario
let respuestaUsario = document.getElementById("entrada-respuesta").value.trim();

// Mob aleatorio seleccionado
let mobSeleccionado;
// ------------------ FIN - VARIABLES Globales ------------------ //

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
    imagenes = [
        ["Ajolote", 'images/Ajolote/fila-1-columna-1.png', 'images/Ajolote/fila-1-columna-2.png', 'images/Ajolote/fila-2-columna-1.png', 'images/Ajolote/fila-2-columna-2.png'],
        ["Cerdo", 'images/Cerdo/fila-1-columna-1.png', 'images/Cerdo/fila-1-columna-2.png', 'images/Cerdo/fila-2-columna-1.png', 'images/Cerdo/fila-2-columna-2.png'],
        ["Esqueleto", 'images/Esqueleto/fila-1-columna-1.png', 'images/Esqueleto/fila-1-columna-2.png', 'images/Esqueleto/fila-2-columna-1.png', 'images/Esqueleto/fila-2-columna-2.png'],
        ["EsqueletoWither", 'images/EsqueletoWither/fila-1-columna-1.png', 'images/EsqueletoWither/fila-1-columna-2.png', 'images/EsqueletoWither/fila-2-columna-1.png', 'images/EsqueletoWither/fila-2-columna-2.png'],
        ["Gato", 'images/Gato/fila-1-columna-1.png', 'images/Gato/fila-1-columna-2.png', 'images/Gato/fila-2-columna-1.png', 'images/Gato/fila-2-columna-2.png'],
        ["Ghast", 'images/Ghast/fila-1-columna-1.png', 'images/Ghast/fila-1-columna-2.png', 'images/Ghast/fila-2-columna-1.png', 'images/Ghast/fila-2-columna-2.png'],
        ["Ocelote", 'images/Ocelote/fila-1-columna-1.png', 'images/Ocelote/fila-1-columna-2.png', 'images/Ocelote/fila-2-columna-1.png', 'images/Ocelote/fila-2-columna-2.png'],
        ["PiglinBruto", 'images/PiglinBruto/fila-1-columna-1.png', 'images/PiglinBruto/fila-1-columna-2.png', 'images/PiglinBruto/fila-2-columna-1.png', 'images/PiglinBruto/fila-2-columna-2.png'],
        ["Warden", 'images/Warden/fila-1-columna-1.png', 'images/Warden/fila-1-columna-2.png', 'images/Warden/fila-2-columna-1.png', 'images/Warden/fila-2-columna-2.png'],
        ["Whiter", 'images/Whiter/fila-1-columna-1.png', 'images/Whiter/fila-1-columna-2.png', 'images/Whiter/fila-2-columna-1.png', 'images/Whiter/fila-2-columna-2.png'],
        ["Zombie", 'images/Zombie/fila-1-columna-1.png', 'images/Zombie/fila-1-columna-2.png', 'images/Zombie/fila-2-columna-1.png', 'images/Zombie/fila-2-columna-2.png']
    ];
}

/*
* Apenas cargue la página:
*    - Se rellena el array
*    - Se selecciona el mob aleatoriamente
*/
window.onload = function () {
    rellenarArray();
    let mobSeleccionado = elegirImagenRandom();
    console.log(mobSeleccionado); // Muestra el mob aleatorio seleccionado
};


/*
* Función para elegir una imagen aleatoria al inciar la página.
*/
function elegirImagenRandom() {
    posImagenRandom = Math.floor(Math.random() * imagenes.length);
    return imagenes[posImagenRandom];
}

/*
* Función que muestra el trozo de imagen aleatoria
*/
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

        if (respuestaUsario.toLowerCase() == "elefante") { // Aqui es donde se va a comparar con la respuesta correcta, por momento esta elefante como prueba
            alert("Has acertado! El animal es un elefante.");
            eliminarRespuestas();
            contIntentos = 0;
            localStorage.setItem("contadorIntentos", contIntentos);
            return;
        }

        contIntentos++;
        localStorage.setItem("contadorIntentos", contIntentos);

        if (MAXINTENTOS <= contIntentos) {
            alert("¡¡¡Has perdido!!!");
            eliminarRespuestas();
            contIntentos = 0;
            localStorage.setItem("contadorIntentos", contIntentos);
            return;
        }

        alert(`Has fallado. Intentelo de nuevo. Te quedan ${MAXINTENTOS - contIntentos} intentos.`);
        let respuestas = localStorage.getItem("respuestas");

        if (respuestas) {
            respuestas = JSON.parse(respuestas);

        } else {
            respuestas = [];
        }

        respuestas.push(respuestaUsario);
        localStorage.setItem("respuestas", JSON.stringify(respuestas));
        localStorage.setItem("contadorIntentos", contIntentos);
        actualizarRespuestas();
        respuestaUsario.value = "";

    } else {
        alert("No se puede enviar una respuesta vacía.");

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
        li.textContent = respuestaUser;

        listaRespuestas.appendChild(li);
    }
}

/**
 * Función en la que elimina las respuestas del localStorage y de la lista de respuestas.
 * Tambíen elimina el contador de intentos.
 */
function eliminarRespuestas() {
    localStorage.removeItem("respuestas");
    localStorage.removeItem("contadorIntentos");
    actualizarRespuestas();
}

/**
 * Función para cambiar el fondo y la imagen/boton y guardar el estado del fondo e imagen en localStorage.
 */
function cambiarFondoConImagen() {

    const fondoActual = document.body.style.backgroundImage;
    const botonFondo = document.getElementById("btnCambioFondo");

    const fondoDia = "url('images/fondo.png')";
    const fondoNoche = "url('images/fondoNoche.png')";

    const imgbotonSol = "images/iconoSol.png";
    const imgbotonNoche = "images/iconoLuna.png";


    if (fondoActual.includes("fondoNoche.png")) {
        document.body.style.backgroundImage = fondoDia;
        botonFondo.src = imgbotonSol;

        localStorage.setItem("fondo", fondoDia);
        localStorage.setItem("icono", imgbotonSol);

    } else { // Sale esta opción si el fondo actual es de dia, por lo cual se cambia el fondo a noche.
        document.body.style.backgroundImage = fondoNoche;
        botonFondo.src = imgbotonNoche;

        localStorage.setItem("fondo", fondoNoche);
        localStorage.setItem("icono", imgbotonNoche);
    }
}

/**
 * Función que devuelve la respuesta
 */
function respuesta() {
    let mobRespuesta = elegirImagenRandom()
}

/**
 * Función que verifica si la respuesta es correcta
 */
function botonAdivinar() {

    // Respuesta del usuario
    respuestaUsario = document.getElementById("entrada-respuesta").value.trim();
    console.log("Respuesta Usario: " + respuestaUsario);
    console.log("Contador: " + contIntentos);
    agregarRespuesta();
}

// ------------------ FIN - FUNCIONES UTILES ------------------ //


// ------------------ INICIO - LLAMADA FUNCIONES ------------------ //

window.onload = actualizarRespuestas();
window.onload = agrandar();
window.onload = cambiarFondoConImagen();
document.getElementById("btnCambioFondo").addEventListener("click", () => cambiarFondoConImagen());

// ------------------ FIN - LLAMADA FUNCIONES ------------------ //
