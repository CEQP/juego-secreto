let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximo = 10;




function asignarTextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoelemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numeroDeUsuario < numeroSecreto){;
        asignarTextoelemento("p","El numero secreto es mayor");
        }else{
        asignarTextoelemento("p","El numero secreto es menor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumerosecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log(listanumerosSorteados);
    //si ya pasamos por todos lo numeros.
    if (listanumerosSorteados.length == numeroMaximo){
        asignarTextoelemento("p","Ya se sortearon todos los numeros posibles");
    }else{
        // si el n° generado esta incluido en la lista
        if (listanumerosSorteados.includes(numeroGenerado)){
            return generarNumerosecreto();
        }else{
            listanumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
        
}

function condicionesIniciales(){
    asignarTextoelemento("h1", "Juego del numero secreto");
    asignarTextoelemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumerosecreto();
    intentos = 1;
}
//console.log(numeroSecreto);
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar intervalos de numeros
    //generar nuevo numero aleatorio  
    //inicializar el numero de intentos
    condicionesIniciales();
    //Desahbilitar el boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

    
}

condicionesIniciales();
