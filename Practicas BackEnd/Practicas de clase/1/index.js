const parrafoinicial = document.getElementById("parrafoInicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function() {
    changerandomcolor()
}

function changerandomcolor(){

    const colors = [
        "red",
        "blue",
        "black",
        "cyan"
    ];
    parrafoInicial.style.color = colors[Math.floor(Math.random() * colors.length)];

}

/* TIPOS DE DATOS 
var -> Modificable, scope global - NO SE RECOMIENDA
let -> Modificable, scope local o limitado - RECOMENDADOUSAR
const -> CONSTANTE , no modificable - Scope global

/*
CASES

Pascalcase - Clases primer letra mayuscula es una clase - JAVA

Camelcase - variables, funciones y atributos - JavaScript
    variable -> parrafoinicial =
    funcion -> parrafoinicial()
    atributo -> parrafoinicial

snake_case - Python

CASE (CAPITAL CASE) - Constantes

basicamente es como acomodo mi combinación de mayusculas y minusculas para que se entienda mejor
*/

