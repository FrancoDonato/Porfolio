const titulo = "Bienvenido a mi página";
const elementoTitulo = document.getElementById("titulo");
let i = 0;

let largo = 0;

function escribir() {
    if (i < texto.length) {
        document.getElementById("titulo").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 100); // Cambia 100 por la velocidad que desees
    } else {
        setTimeout(borrar, 1000); // Espera un segundo antes de borrar
    }
}

function borrar() {
    if (i > 0) {
        document.getElementById("titulo").innerHTML = texto.substring(0, i - 1);
        i--;
        setTimeout(borrar, 100); // Cambia 100 por la velocidad que desees
    } else {
        setTimeout(escribir, 1000); // Espera un segundo antes de volver a escribir
    }
}


    escribir();
    //borrar();
