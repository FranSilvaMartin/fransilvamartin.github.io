function modoOscuro() {
    var element = document.getElementById("botonModoOscuro");
    var titulo = document.getElementById("tituloInicio");
    var texto = document.getElementsByClassName("textos");
    var textoTitulo = document.getElementsByClassName("textoTitulo");

    if (element.className == "fas fa-toggle-off") {
        element.className = "fas fa-toggle-on";
        element.style.color = "#191919";
        document.body.style.backgroundColor = "#191919";
        titulo.style.color = "white";

        var len = textoTitulo.length;
        for(var i = 0; i < len; ++i) {
            textoTitulo[i].style.color = '#3C91E6';
        }  
    
        var len2 = texto.length;
        for(var i = 0; i < len2; ++i) {
            texto[i].style.color = 'white';
        }   

        var len3 = imagenes.length;
        for(var i = 0; i < len3; ++i) {
            imagenes[i].style.boxShadow = '';
        }   

    } else {
        element.className = "fas fa-toggle-off";
        element.style.color = "white";
        document.body.style.backgroundColor = "white";
        titulo.style.color = "black";

        var len = textoTitulo.length;
        for(var i = 0; i < len; ++i) {
            textoTitulo[i].style.color = 'black';
        }  
    
        var len2 = texto.length;
        for(var i = 0; i < len2; ++i) {
            texto[i].style.color = 'black';
        }  
    }
}