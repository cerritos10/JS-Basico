var coche = {
    marca:"Mitsubushi",
    modelo: "Lancer",
    año: 2014,
    mostrarDatos(){
        var datos = document.getElementById("datos");
        datos.innerHTML += `
        <h1>Automovil 🏎 </h1>
        <h3>marca: ${this.marca}</h3>
        <h3>marca: ${this.modelo}</h3>
        <h3>marca: ${this.año}</h3>
        `
    },
    propiedad1: "valor aleatorio" // aqui se pueden seguir agg propuedaddes 
};
coche.mostrarDatos();
console.log(coche);