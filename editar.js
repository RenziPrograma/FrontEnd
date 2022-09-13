// Primera función: Activa la edición en el evento, hace que sea visible la caja de editar,  en el que se toque el botón de editar, se debe llamar por id*/

function cambiar_parrafo() {
    document.getElementById("editar-acercade").style.display = "Block";
    let texto = document.getElementById("info-acerdade").innerText;
    console.log(texto);
};

//Segunda función, el texto ingresado en la caja, edita el texto en la cajita //

function myFunction2(valor) {
    document.getElementById("info-acerdade").innerText = valor;
};

function logMessage(message) {
    console.log(message + "<br>");
}

// controla si se presiona enter

let textarea = document.getElementById("editar-acercade")
textarea.addEventListener(`keyup`, (e) => {
    logMessage(`key "${e.key}" released [event:keyup] `);
    if (e.key == "Enter") {
        document.getElementById("editar-acercade").style.display = "none"
    };
});



//carga el contenido de un archivo de texto y edita el contenido del parrafo

function showFile(input) {
    let file =input.files[0];
    alert(`File name: ${file.name}`);//e.g my.png
    alert(`Last modified: ${file.lastModified}`); //e.g 1552830408824

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        console.log(reader.result);
        document.getElementById("info-acerdade").innerText = reader.result;
    };
    reader.onerror = function () {
        console.log(reader.error);
    };
};