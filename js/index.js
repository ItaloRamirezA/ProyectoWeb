// ------------------ Inicio - Variables Globales ------------------ //
// Map de las imagenes que saldrán al inicio
let imagenes = new Array();

// Almacena los intentos que tiene el usuario para adivinar.
let contIntentos = 0;

// Almacena el numero máximo de intentos.
const MAXINTENTOS = 4;

// Almacena la posición en el array de la imagen random
let posImagenRandom;

//Array para los numeros de los trozos de imagenes que ya se han usado para no repetirlos
let trozoDeimagenes = new Array();

// Respuesta del usuario en el 
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

    // Boton de adivinar
    let botonAdivinar = document.getElementById('boton-adivinar');
    efectoAgrandarImagen(botonAdivinar, 1.05);

    // Boton de reiniciar
    let botonReiniciar = document.getElementById('boton-reiniciar');
    efectoAgrandarImagen(botonReiniciar, 1.05);
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
        ["Esqueleto Wither", 'images/EsqueletoWither/fila-1-columna-1.png', 'images/EsqueletoWither/fila-1-columna-2.png', 'images/EsqueletoWither/fila-2-columna-1.png', 'images/EsqueletoWither/fila-2-columna-2.png'],
        ["Gato", 'images/Gato/fila-1-columna-1.png', 'images/Gato/fila-1-columna-2.png', 'images/Gato/fila-2-columna-1.png', 'images/Gato/fila-2-columna-2.png'],
        ["Ghast", 'images/Ghast/fila-1-columna-1.png', 'images/Ghast/fila-1-columna-2.png', 'images/Ghast/fila-2-columna-1.png', 'images/Ghast/fila-2-columna-2.png'],
        ["Ocelote", 'images/Ocelote/fila-1-columna-1.png', 'images/Ocelote/fila-1-columna-2.png', 'images/Ocelote/fila-2-columna-1.png', 'images/Ocelote/fila-2-columna-2.png'],
        ["Piglin Bruto", 'images/PiglinBruto/fila-1-columna-1.png', 'images/PiglinBruto/fila-1-columna-2.png', 'images/PiglinBruto/fila-2-columna-1.png', 'images/PiglinBruto/fila-2-columna-2.png'],
        ["Warden", 'images/Warden/fila-1-columna-1.png', 'images/Warden/fila-1-columna-2.png', 'images/Warden/fila-2-columna-1.png', 'images/Warden/fila-2-columna-2.png'],
        ["Wither", 'images/Whiter/fila-1-columna-1.png', 'images/Whiter/fila-1-columna-2.png', 'images/Whiter/fila-2-columna-1.png', 'images/Whiter/fila-2-columna-2.png'],
        ["Zombie", 'images/Zombie/fila-1-columna-1.png', 'images/Zombie/fila-1-columna-2.png', 'images/Zombie/fila-2-columna-1.png', 'images/Zombie/fila-2-columna-2.png']
    ];
    //let arrayrelleno = localStorage.setItem("arraycomleto",JSON.stringify(imagenes));
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
    localStorage.setItem("mobSeleccionado", JSON.stringify(mobSeleccionado));
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

    localStorage.setItem("mobSeleccionado", JSON.stringify(mobSeleccionado));

    let trozo;

    // Seleccionar un trozo random que no se haya usado
    do {
        // Indices de 1 a 4
        trozo = Math.floor(Math.random() * 4) + 1;
    } while (trozoDeimagenes.includes(trozo));


    // Registrar el trozo seleccionado en el array para evitar repeticiones
    trozoDeimagenes.push(trozo);
    // Convertir el array a una cadena JSON antes de guardarlo
    localStorage.setItem("trozoDeimagenes", JSON.stringify(trozoDeimagenes));


    // Guardar la imagen en localStorage
    const rutaImagen = mobSeleccionado[trozo];
    guardarImagenEnLocalStorage(rutaImagen);

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
    fragmento.src = rutaImagen; // Usar la ruta de la imagen seleccionada
    fragmento.alt = `Trozo de imagen ${trozo}`;
    fragmento.style.width = "75px";
    fragmento.style.margin = "5px";
    fragmento.style.height = "auto";
    filaActual.appendChild(fragmento);
}


/*
* Función que reinicia el juego borrando todo
*/
function reiniciarJuego() {
    contIntentos = 0;
    trozoDeimagenes = [];
    elegirImagenRandom();
    document.getElementById('contenedor-imagen-adivinar').innerHTML = "";
    localStorage.removeItem("trozosImagen");
    eliminarRespuestas();
    mostrarImagen();
    guardarContadorLocalStorage();
}


/*
* Función que guarda las imágenes en el localStorage
*/
function guardarImagenEnLocalStorage(trozoImagen) {

    let imagenesGuardadas = localStorage.getItem("trozosImagen");

    if (imagenesGuardadas) {
        imagenesGuardadas = JSON.parse(imagenesGuardadas);
    } else {
        imagenesGuardadas = [];
    }

    // Agregar la nueva imagen si no está repetida
    if (!imagenesGuardadas.includes(trozoImagen)) {
        imagenesGuardadas.push(trozoImagen);
    }

    localStorage.setItem("trozosImagen", JSON.stringify(imagenesGuardadas));
}

/*
* Función que muestras las imágenes guardadas en el localStorage
*/
function mostrarImagenesGuardadas() {

    let imagenesGuardadas = localStorage.getItem("trozosImagen");

    if (imagenesGuardadas) {
        imagenesGuardadas = JSON.parse(imagenesGuardadas);

        const contenedor = document.getElementById('contenedor-imagen-adivinar');
        contenedor.innerHTML = "";

        // Crear y mostrar cada imagen almacenada
        imagenesGuardadas.forEach((rutaImagen) => {
            const fragmento = document.createElement('img');
            fragmento.src = rutaImagen;
            fragmento.alt = "Trozo de imagen guardada";
            fragmento.style.width = "75px";
            fragmento.style.margin = "5px";
            fragmento.style.height = "auto";
            contenedor.appendChild(fragmento);
        });
    }
}

/**
 * Función que guarda el contador en localStorage
 */
function guardarContadorLocalStorage() {
    localStorage.setItem("contadorIntentos", contIntentos);
}

/**
 * Función en la que se agrega la respuesta y
 * las guarda en localStorage.
 */
function agregarRespuesta() {
    if (respuestaUsario != "") {

        // Si el usuario ha ganado
        if (mobSeleccionado && mobSeleccionado.length > 0 && respuestaUsario.toLowerCase().trim() == mobSeleccionado[0].toLowerCase().trim()) {
            alert(`¡Has acertado! El mob es ${mobSeleccionado[0]}.`);
            reiniciarJuego();
            return;
        } else {
            contIntentos++;
            guardarContadorLocalStorage();
        }


        console.log(contIntentos);

        if (MAXINTENTOS <= contIntentos) {
           

            alert(`¡Has perdido! El mob es ${mobSeleccionado[0]}.`);
            localStorage.setItem("contadorIntentos", contIntentos);
            reiniciarJuego();
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

    const fondoDia = 'images/fondo.png';
    const fondoNoche = 'images/fondoNoche.png';

    const imgbotonSol = "images/iconoSol.png";
    const imgbotonNoche = "images/iconoLuna.png";

    const botonFondo = document.getElementById("btnCambioFondo");
    const fondoActual = localStorage.getItem("fondo") || fondoDia;

    if (fondoActual === fondoNoche) {
        document.body.style.backgroundImage = `url('${fondoDia}')`;
        botonFondo.src = imgbotonSol;

        localStorage.setItem("fondo", fondoDia);
        localStorage.setItem("icono", imgbotonSol);
    } else {
        document.body.style.backgroundImage = `url('${fondoNoche}')`;
        botonFondo.src = imgbotonNoche;

        localStorage.setItem("fondo", fondoNoche);
        localStorage.setItem("icono", imgbotonNoche);
    }
}

/**
 * Función en la que obtenmos el estado del fondo y la imagen/botón.
 */
function actualizarFondoConImagen() {

    const fondoGuardado = localStorage.getItem("fondo");
    const iconoGuardado = localStorage.getItem("icono");

    if (fondoGuardado) {
        document.body.style.backgroundImage = `url('${fondoGuardado}')`;
    } else {
        document.body.style.backgroundImage = `url('images/fondo.png')`
    }

    if (iconoGuardado) {
        document.getElementById("btnCambioFondo").src = iconoGuardado;
    } else {
        document.getElementById("btnCambioFondo").src = 'images/iconoSol.png';
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
    agregarRespuesta();
}

/**
 * Limpia todo el localStorage
 */
function limpiarLocalStorage() {
    localStorage.clear();
}
// ------------------ FIN - FUNCIONES UTILES ------------------ //


// ------------------ INICIO - LLAMADA FUNCIONES ------------------ //
/*
* Apenas cargue la página:
*    - Se rellena el array
*    - Se selecciona el mob aleatoriamente
*/
window.onload = function () {
    // Actualiza el fondo con la imagen guardada
    actualizarFondoConImagen();

    // Recuperar las imágenes guardadas desde localStorage
    let imagenesGuardadas = localStorage.getItem("imagenes");
    if (imagenesGuardadas) {
        imagenes = JSON.parse(imagenesGuardadas);
    } else {
        rellenarArray(); // Llenar el array si no hay imágenes guardadas
    }

    // Recuperar trozoDeimagenes desde localStorage
    let trozosGuardados = localStorage.getItem("trozoDeimagenes");
    if (trozosGuardados) {
        // Si trozoDeimagenes está guardado, lo parseamos y lo asignamos
        trozoDeimagenes = JSON.parse(trozosGuardados);
    } else {
        // Si no hay trozoDeimagenes guardado, elegimos una nueva imagen aleatoria
        elegirImagenRandom();
    }

    // Recuperar mobSeleccionado desde localStorage
    let mobGuardado = localStorage.getItem("mobSeleccionado");
    if (mobGuardado) {
        // Si hay un mob guardado, lo parseamos
        mobSeleccionado = JSON.parse(mobGuardado);
    } else {
        // Si no hay mob guardado, elegimos uno nuevo
        elegirImagenRandom();
    }

    // Recuperar trozos de imagen desde localStorage
    let imagenesGuardadasTrozos = localStorage.getItem("trozosImagen");
    if (imagenesGuardadasTrozos && JSON.parse(imagenesGuardadasTrozos).length > 0) {
        mostrarImagenesGuardadas(); // Mostrar imágenes guardadas si existen
    } else {
        mostrarImagen(); // Mostrar nuevas imágenes si no hay guardadas
    }

    // Recuperar el contador de intentos desde localStorage o establecer a 0 si no existe
    contIntentos = parseInt(localStorage.getItem("contadorIntentos"), 10) || 0;

    // Actualizar las respuestas almacenadas en localStorage
    actualizarRespuestas();

    // Aplicar efectos de agrandado a los botones y elementos interactivos
    agrandar();

    // Configurar el botón para cambiar entre modo claro y oscuro
    document.getElementById("btnCambioFondo").addEventListener("click", () => cambiarFondoConImagen());
};


//----------------- FIN - LLAMADA FUNCIONES ------------------ //