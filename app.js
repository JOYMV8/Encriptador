function EncriptarTexto() {
    var texto = document.getElementById("TextoUsuario").value;
    var imgResultado = document.getElementById("imgResultado");
    var resultadoTexto = document.getElementById("ResultadoTexto");
    var instruccionTexto = document.getElementById("InstruccionTexto");
    var copiarBtn = document.getElementById("copiarBtn");
    var containerResultado = document.querySelector(".container__resultado");

    if (texto.trim() === "") {
        imgResultado.style.display = "block";
        resultadoTexto.style.display = "block";
        resultadoTexto.innerText = "Ningún mensaje fue encontrado, vuelve a intentar.";
        instruccionTexto.style.display = "none"; // Oculta el mensaje de instrucciones
        copiarBtn.style.display = "none"; // Oculta el botón de copiar
    } else {
        // Lógica de encriptación
        var textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        imgResultado.style.display = "none";
        resultadoTexto.style.display = "block";
        resultadoTexto.innerText = textoEncriptado;
        instruccionTexto.style.display = "none";
        copiarBtn.style.display = "block"; // Muestra el botón de copiar
        containerResultado.style.backgroundColor = "#F5F8FA"; // Asegura que el color vuelva a ser el original
    }
}

function DesencriptarTexto() {
    var texto = document.getElementById("TextoUsuario").value;
    var imgResultado = document.getElementById("imgResultado");
    var resultadoTexto = document.getElementById("ResultadoTexto");
    var instruccionTexto = document.getElementById("InstruccionTexto");
    var copiarBtn = document.getElementById("copiarBtn");
    var containerResultado = document.querySelector(".container__resultado");

    if (texto.trim() === "") {
        imgResultado.style.display = "block";
        resultadoTexto.style.display = "block";
        resultadoTexto.innerText = "Ningún mensaje fue encontrado, vuelve a intentar.";
        instruccionTexto.style.display = "none"; // Oculta el mensaje de instrucciones
        copiarBtn.style.display = "none"; // Oculta el botón de copiar
    } else {
        // Lógica de desencriptación
        var textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        imgResultado.style.display = "none";
        resultadoTexto.style.display = "block";
        resultadoTexto.innerText = textoDesencriptado;
        instruccionTexto.style.display = "none";
        copiarBtn.style.display = "block"; // Muestra el botón de copiar
        containerResultado.style.backgroundColor = "#F5F8FA"; // Asegura que el color vuelva a ser el original
    }
}

// Función para copiar el texto del resultado al portapapeles
function copiarTexto() {
    var resultadoTexto = document.getElementById("ResultadoTexto").innerText;
    var containerResultado = document.querySelector(".container__resultado");

    // Cambiar el color del cuadro de resultados a gris claro
    containerResultado.style.backgroundColor = "#D8DFE8";

    navigator.clipboard.writeText(resultadoTexto).then(function() {
        // Esperar un momento y luego volver al color original
        setTimeout(function() {
            containerResultado.style.backgroundColor = "#F5F8FA"; // Vuelve al color original
        }, 500); // Cambia el color de vuelta después de 500ms
    }, function(err) {
        alert("Error al copiar el texto: " + err);
    });
}

// Mostrar el mensaje de instrucción y la imagen al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    var imgResultado = document.getElementById("imgResultado");
    var instruccionTexto = document.getElementById("InstruccionTexto");
    var copiarBtn = document.getElementById("copiarBtn");

    imgResultado.style.display = "block"; // Muestra la imagen del muñeco al cargar la página
    instruccionTexto.style.display = "block"; // Muestra las instrucciones al cargar la página
    copiarBtn.style.display = "none"; // Asegura que el botón de copiar esté oculto al cargar la página
});
