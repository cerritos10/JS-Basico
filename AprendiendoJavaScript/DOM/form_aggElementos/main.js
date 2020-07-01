var todos = [];
var form = document.getElementById("todo-form");
form.onsubmit = (e) => { 
        e.preventDefault();/* detiene el evento del form por defecto de refrescar la pagina*/
        var todo = document.getElementById("todo");
        var todoText= todo.value;
        todo.value = "";
        todos.push(todoText);
        var todoList =document.getElementById("todo-list");
        todoList.innerHTML="";
        for(let i = 0; i < todos.length; i++){
            todoList.innerHTML += "<li>" + todos[i] + "</li>"
        }
}

/* 
simplificando con map => esat funcion transforma el elemento "t" en lo que coloca en el return
el return no se coloca ya que es una funcion de una sola linea

var todos = [];
var form = document.getElementById("todo-form");
form.onsubmit = (e) => { 
        e.preventDefault();
        var todo = document.getElementById("todo");
        var todoText= todo.value;
        todo.value = "";
        todos.push(todoText);
        var todoList =document.getElementById("todo-list");
        var todosT = todos.map(t => "<li>" + t "</li>");
        todoList.innerHTML = todosT.join(""); ------->el .join junto los elementos de un arreglo
}

*/

/* segunada forma de resolverlo */
/*

var form = document.getElementById("todo-form");
var boton = document.getElementById("btn");
boton.addEventListener("click",enviar);

function enviar (e){
        e.preventDefault();
        var todo = document.getElementById("todo");
        var todoText= todo.value;
        todo.value = "";
        todos.push(todoText);
        var todoList =document.getElementById("todo-list");
        todoList.innerHTML="";
        for(let i = 0; i < todos.length; i++){
            todoList.innerHTML += "<li>" + todos[i] + "</li>"
        }
}

*/

