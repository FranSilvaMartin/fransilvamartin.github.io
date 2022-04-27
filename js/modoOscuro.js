function modoOscuro() {
    var element = document.getElementById("botonModoOscuro");

    if (element.className == "fas fa-toggle-off") {
        element.className = "fas fa-toggle-on";
        element.style.color = "black";
        document.body.style.backgroundColor = "black";
    } else {
        element.className = "fas fa-toggle-off";
        element.style.color = "white";
        document.body.style.backgroundColor = "white";
    }
}