class Billete 
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantida = c;
    }
}

var caja = [];
var entregado = [];
caja.push(new Billete(100, 3));
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
caja.push(new Billete(5, 3));
caja.push(new Billete(1, 3));
var dinero = 0;
var div = 0;
var papeles = 0;
var cantFinal;

var resultado = document.getElementById("resultado");


var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
    var t = document.getElementById("cajero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantida)
            {
                papeles = bi.cantida;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero -(bi.valor * papeles);
            cantFinal= bi.cantida-papeles;
            bi.cantida=cantFinal;
            
        }
    }
    if(dinero > 0 )
    {
        resultado.innerHTML=" no hay suficiente money!!!!!!";
    }
    else
    {
        for( var e of entregado)
        {
            if(e.cantida >0)
            {
            resultado.innerHTML= resultado.innerHTML + e.cantida + " billetes de $" + e.valor + "<br />";
            
            }
        }
        
    }
}

