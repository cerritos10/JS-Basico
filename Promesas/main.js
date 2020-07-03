var saludar = new Promise ((resolve, reject) =>{
    setTimeout(()=> {
        let saludo = "hola jijiji!!!!!";
        saludo=false;
        if(saludo){
            resolve(saludo);
        }
        else{
            reject("no hay saludo dosponible :( !!!!");
        }
    }, 3000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(e => {
    alert(e);    
});