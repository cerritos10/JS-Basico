var todos = [];

var render = () => {//esto se hace para actualizar los datos es decir al eliminar 3 nodos (1,2 y 3) añl agregar otro inicie con 4
        var todoList =document.getElementById("todo-list");
        var todosTemplate = todos.map(t => "<li>"+ t +"</li>");/*cumple la misma funcion que el for pero es mas corto*/
        todoList.innerHTML = todosTemplate.join("");/*join junta todos los elementos como en un array*/
        var elementos = document.querySelectorAll("#todo-list li");
        elementos.forEach((elemento,i) =>{
                elemento.addEventListener("click", () =>{
                        elemento.parentNode.removeChild(elemento);
                todos.splice(i,1);
                render();//recursividad--> cuando una funcion se llama a ella misma dentro de ella
                console.log(todos,i);
                })
        })
}
var form = document.getElementById("todo-form");
form.onsubmit = (e) => { 
        e.preventDefault();/* detiene el evento del form por defecto de refrescar la pagina*/
        var todo = document.getElementById("todo");
        var todoText= todo.value;
        todo.value = "";
        todos.push(todoText);  
        render();
}

var suma = document.getElementById("sum");
suma.addEventListener("click", ()=>{
        var a =1;
        var b =2;
        var r = a+b;
        alert("el resultado es :" + r);
})


