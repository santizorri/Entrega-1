//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) { });
function verificar() {
    let dato = document.getElementById("user");
    let contrasena = document.getElementById("key");
    let msj = document.getElementById("msj");
    let usuario = {}; //Objeto que va a guardar el usuario

    if (dato.value.trim() === "" || contrasena.value.trim() === "") {
        // isValid   isInvalid
        dato.classList.add("isInvalid"); //Agregamos la clase que inventamos
        contrasena.classList.add("isInvalid"); //Agregamos la clase que inventamos ACOMODAR ESTO
        msj.innerHTML = "Dato requerido"; //le ponemos el texto al cartelito
        msj.style.color = "red"; //le damos color rojo al cartelito
        msj.style.display = "block"; //chan! mostramos el cartelito
    } else {
        //Chequear si se marcó la casilla de "recordarme"

        location.href = "home.html";

        usuario.nombre = dato.value;
        usuario.estado = "conectado";
        //---------->
        localStorage.setItem("usuario", JSON.stringify(usuario)); //Guardo mi variable de objeto en Local Storage

        sessionStorage.setItem("usuario", JSON.stringify(usuario));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario.estado == "conectado") {
        location.href = "home.html";
    }
});

