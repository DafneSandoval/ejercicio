const alertMensaje = document.getElementById("alertMensaje");
const alertMissName = document.getElementById("alertMissName"); 
const btnEliminar = document.getElementById("btnEliminar");


window.addEventListener("load", function(event) {
    const nombre = localStorage.getItem("Name");
    
    if (nombre !== null) {
        alertMensaje.innerHTML = `Hola, <em>${nombre}</em> bienvenido/a de nuevo!`;
        alertMensaje.style.display = "block";
        alertMissName.style.display = "none";
    } else {
        alertMissName.innerHTML = `Por favor ve al index y agrega tu nombre`
        alertMensaje.style.display = "none";
        alertMissName.style.display = "block";}
    
}); //mensajes

btnEliminar.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem("Name"); // Elimina nombre, no todo el localStorage
    alertMensaje.style.display = "none";
    alertMissName.style.display = "block";
}); // btnEliminarNombre
