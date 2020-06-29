var texto= document.getElementById("años");
var boton= document.getElementById("botonedad");
boton.addEventListener("click",saberEdad_Click);

function saberEdad_Click()
{
    var e =parseInt(texto.value);
    var actual=2020;
    var edad=actual-e;
    alert("tu edad segun tu año es: "+ edad+"\n");
    document.write("tu edad en relacion con el año es: "+ edad);
}