// ------------------ Inicio - Variables Globales ------------------ //
localStorage.clear();
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
* Función para elegir una imagen aleatoria al inciar la página.
*/
function elegirImagenRandom() {
    if (imagenes.length == 0) {
        rellenarArray();
    }
    posImagenRandom = Math.floor(Math.random() * imagenes.length);
    // Guarda el mob seleccionado globalmente
    mobSeleccionado = imagenes[posImagenRandom];
    trozoDeimagenes = mobSeleccionado;
}

/*
* Función que muestra el trozo de imagen aleatoria
*/
function mostrarImagen() {
    const contenedor = document.getElementById('contenedor-imagen-adivinar');
   
    // Validar que el mob seleccionado esté definido
    if (!mobSeleccionado || mobSeleccionado.length === 0) {
        elegirImagenRandom();

    }

    let trozo;

    // Seleccionar un trozo aleatorio que no haya sido utilizado
    do {
        trozo = Math.floor(Math.random() * 4) + 1; // Índices de 1 a 4
    } while (trozoDeimagenes.includes(trozo));

    // Registrar el trozo seleccionado en el array para evitar repeticiones
    trozoDeimagenes.push(trozo);

    // Crear un contenedor de filas si no existe aún
    let filaActual = document.getElementById(`fila-${Math.ceil(trozoDeimagenes.length / 2)}`);
    if (!filaActual) {
        filaActual = document.createElement('div');
        filaActual.id = `fila-${Math.ceil(trozoDeimagenes.length / 2)}`;
        filaActual.className = 'fila-imagenes';
        contenedor.appendChild(filaActual);
    }

    // Crear y mostrar la imagen
    const fragmento = document.createElement('img');
    fragmento.src = mobSeleccionado[trozo]; // Usar la ruta de la imagen seleccionada
    fragmento.alt = `Trozo de imagen ${trozo}`;
    fragmento.style.width = "75px";
    fragmento.style.margin = "5px";
    fragmento.style.height="auto"
    // Agregar la imagen a la fila
    filaActual.appendChild(fragmento);


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
        mostrarImagen();
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

/**Q
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
 * Función en la que elimina las respuestas
 * del localStorage y de la lista de respuestas.
 * Tambíen elimina el contador de intentos.
 */
function eliminarRespuestas() {
    localStorage.removeItem("respuestas");
    localStorage.removeItem("contadorIntentos");
    actualizarRespuestas();
}

/**
 * Función para cambiar el fondo y la imagen/boton y guardar
 * el estado del fondo e imagen en localStorage.
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

    console.log(document.body.style.backgroundImage);
    console.log(document.getElementById("btnCambioFondo").src);

}

function actualizarFondoConImagen() {

    const fondoGuardado = localStorage.getItem("fondo");
    const iconoGuardado = localStorage.getItem("icono");

    if (fondoGuardado) {
        document.body.style.backgroundImage = fondoGuardado;
    }

    if (iconoGuardado) {
        document.getElementById("btnCambioFondo").src = iconoGuardado;
    }

    console.log(localStorage.getItem("fondo"));
    console.log(localStorage.getItem("icono"));

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
/*
* Apenas cargue la página:
*    - Se rellena el array
*    - Se selecciona el mob aleatoriamente
*/
window.onload = function () {

    // Rellena el array con los trozos y nombre de los mobs
    rellenarArray();
    elegirImagenRandom();

    console.log(mobSeleccionado); // Muestra el mob aleatorio seleccionado
    mostrarImagen();

    actualizarRespuestas();
    agrandar();

    cambiarFondoConImagen();

    // Boton para modo oscuro/claro
    document.getElementById("btnCambioFondo").addEventListener("click", () => cambiarFondoConImagen());

};

// ------------------ FIN - LLAMADA FUNCIONES ------------------ //
