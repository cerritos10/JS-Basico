var parrafo = document.getElementById("text");
console.log(parrafo.innerHTML);

var manipulacion = document.getElementById("manipular");
manipulacion.innerHTML="Se ha manipulado ya el texto";

/*
se utiliza el onload para sobreasegurarse que el codigp JS se ejeute al cargar la pag completa
esto solo sucede cuando la referencia al js se coloca en el head y no bajo el body
window.onload = () => {
    var parrafo2=document.getElementById("text2");
    console.log(parrafo2.innerText);
}

*/