var tags;
var boton = document.getElementById("crear");
boton.addEventListener("click",test1);
function test1()
{
    tags=document.getElementsByTagName('h5');
    var elemento = document.createElement("h5");
    var text = document.createTextNode("Elemento "+(tags.length+1));
    elemento.appendChild(text);
    document.getElementById("caja").appendChild(elemento);
}