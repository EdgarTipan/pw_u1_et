let num1 = "";
let num2 = "";
let esSegundoDigito = "0";

function mostrarEnDisplay(valor){
    let elementoDisplay = document.getElementById('id_display');
    elementoDisplay.innerText = elementoDisplay.innerText + valor;
    if(valor !== "+"){
        concatenarNumero(valor);
    }else{
        operacionSumar();
    }
}

function borrar(){
    document.getElementById('id_display').innerText = '';
}

function operacionSumar(){
    esSegundoDigito = "1";
}

function concatenarNumero(numero){
    if(esSegundoDigito === "0"){
        num1 = num1 + numero;
    }else{
        num2 = num2 + numero;
    }
}

function sumar(){
    
}