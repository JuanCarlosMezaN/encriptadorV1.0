function encriptar(){
    var texto = document.getElementById("entradaTexto").value.toLowerCase();
    var txtEncriptado = texto.replace(/e/igm,"enter");
    var txtEncriptado = texto.replace(/o/igm,"ober");
    var txtEncriptado = txtEncriptado.replace(/i/igm,"imes");
    var txtEncriptado = txtEncriptado.replace(/a/igm,"ai");
    var txtEncriptado = txtEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imagenMuneco").style.display = "none";
    document.getElementById("textoParrafo").style.display = "none";
    document.getElementById("resultadotexto").innerHTML = txtEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("entradaTexto").value.toLowerCase();
    var txtEncriptado = texto.replace(/enter/igm,"e");
    var txtEncriptado = texto.replace(/ober/igm,"o");
    var txtEncriptado = txtEncriptado.replace(/imes/igm,"i");
    var txtEncriptado = txtEncriptado.replace(/ai/igm,"a");
    var txtEncriptado = txtEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imagenMuneco").style.display = "none";
    document.getElementById("textoParrafo").style.display = "none";
    document.getElementById("resultadotexto").innerHTML = txtEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#resultadotexto");
    contenido.select();
    document.execCommand("copy");

}