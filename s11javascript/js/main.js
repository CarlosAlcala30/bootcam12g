/*
    crear una función que me diga si un string 
comienza con vocal, consonante, número o un caracter especial
1.- pedir una cadena de caracteres
2.- obtener la primera caracter
3.- evaluar ese caracter
4.- regresar el resultado
*/

function typeFirstChar(){
    console.log("Funcion que me permite saber el typo de el primer caracter de una cadena");
    var text = prompt("ingresa lo que quiereas");
    var char = text.charAt(0);
    var vocales = /[aeiou]/i;
    var numbers = /[0-9]/
    var consonantes = /[bcdfghjklmnñpqrstvwxyz]/i;

    //valido las vocales primero
    var result = char.match(vocales);
    if(result!==null){
        return alert("el primer caracter es vocal");
    }

    //valido las consonantes
    result = char.match(consonantes);
    console.log(result)
    if(result!==null){
        return alert("el primer caracter es consonantes");
    }

    //valido los numeros
    result = char.match(numbers);
    if(result!==null){
        return alert("el primer caracter es un numero");
    }

    return alert("el primer caracter es especial");

}

/*
    input: anaconda
    output: true

    input: belzeebub
    output: true

    input: koder
    output: false

    input: cerveza
    output: false

    1.- pedir una cadena de caracteres
    2.- validar el total de vocales
    3.- si son 4 o mas regresa true
*/
function masIgualCuantroVocales(){
    console.log("Funcion que regresa verdadero si hay mas de 4 caracteres");
    var text = prompt("ingresa lo que quiereas");
    var contador=0;
    for(var i=0;i<text.length; i++){
        var char = text.charAt(i);
        if(isVocal(char)){
            contador++
        }
    }
    if( contador >= 4 ){
        return alert("true");
    }else{
        return alert("false");
    }
    

}

function isVocal(char){
    var vocales = /[aeiou]/i;    
    var result = char.match(vocales);
    if(result!=null){
        return true;
    }else{
        return false;
    }
}

/*1.
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5*/




/*2.
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9*/





/*3.
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false*/

function isPalindromo(){
    var text = prompt("ingresa el palindromo");
    var sinespacios = text.trim();
    console.log(sinespacios);
    var sizeText = sinespacios.length;
    var result = true;
    for(var i=0,sizeText;  sizeText>0;  i++,sizeText--){
        var right = sinespacios.charAt(i);
        var invert = sinespacios.charAt(sizeText-1);
        console.log(i);
        console.log(sizeText);
        console.log(right);
        console.log(invert);
        if(right!==invert && right!==" "&& invert!==" "){
            result = false;
            break;
        }
    }

    return alert(result);
}



/*4.
Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula
Devolver true si el string cumple con las reglas, o imprimir en consola la regla o reglas que no se están cumpliendo
*/


function validatePassword(){
    var text = prompt("ingresa una contraseña");
    var expresion = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    if(text.match(expresion)){
        return alert("contraseña valida")
    }else{
        return alert("contraseña no valida")
    }    
    
}



/*
y el pilón:
crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string
ejemplo correcto:
input: 10
output: asdfqwerzx*/