var boton = document.getElementById("btn");
boton.addEventListener("click", obtenerLink);

var btnRemove = document.getElementById("btnRemove");
btnRemove.addEventListener("click", removerLink);

function obtenerLink()
{
    var l = document.getElementById("miLink");
    document.getElementById("result").innerHTML = l.href;
}

function removerLink()
{
    var l = document.getElementById("miLink");
    document.getElementById("result").innerHTML = "";
}