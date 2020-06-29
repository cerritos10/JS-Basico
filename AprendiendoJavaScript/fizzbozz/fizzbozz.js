var numeros = 100;

var divisible= false;
for(var i = 1; i<=100; i++)
{   divisible=false;
    //escribe Fizz si es verdadero o si es divisible entre 3
    if(esDivisible(i,3))
    {
        document.write("Fizz ❗ ");
        divisible=true;
    }
    //escribe Buzz si es verdadero o si es divisible entre 5
    if(esDivisible(i,5))
    {
        document.write("Buzz ❗ ");
        divisible=true;
    }
    // escribe o imprime el numero si es falso  o si no es divisible entre 3 y 5
    if(!esDivisible(i,3) && !esDivisible(i,5))
    {
        document.write(i+"🔢");
        
    }
    document.write("<br/>");
}
function esDivisible(num,divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}