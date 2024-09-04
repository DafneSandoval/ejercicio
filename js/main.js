const txtNombre = document.getElementById("Name");
const btnGuardar = document.getElementById("btnGuardar");
const alertValidaciones = document.getElementById("alertValidaciones"); // Asegúrate de que este ID sea correcto

// Evento click en el botón
btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";

    let isValid = true

// Validar nombre
    if (txtNombre.value.length <3){
        alertValidaciones.innerHTML = "El <strong>Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    // Si el nombre es válido
    if (isValid) {
        localStorage.setItem("Name",txtNombre.value);
    }
});

// Evento load para cargar datos del localStorage
window.addEventListener("load", function () {
    const storedName = localStorage.getItem("Name");
    if (storedName !== null) {
        txtNombre.value = storedName; 
    }
}); 
