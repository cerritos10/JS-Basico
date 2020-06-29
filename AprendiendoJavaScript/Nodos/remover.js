var carga = document.getElementById("cuerpo");

var boton = document.getElementById("remove");
boton.addEventListener("click",test);

var list;
function load()
{
    carga.addEventListener("load", load);
}

function test()
{
    list = document.getElementsByTagName('p');
    carga.removeChild(list.item(0));
}