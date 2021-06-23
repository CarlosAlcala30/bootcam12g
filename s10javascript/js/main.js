/*Recibir el nombre completo de un usuario 
( en un sólo string ) y convertir las palabras 
pares a mayusculas y las nones a minúsculas*/

function nameFormat(){
    console.log("Funcion que pide nombre y apellido. regresa nombre en minusculas y apellido en mayusculas");
    var name = prompt("ingresa tu nombre");
    var lasname = prompt("ingresa tu apellido");

    return console.log(name.toLowerCase() +" "+lasname.toUpperCase() );

}


/*ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"
1.- solicitar 2 cadenas de texto
2.- obtener total de caracter en cada string
3.- comparar y regresar resultado
---------*/

function biggerString(){
    alert("Funcion para saber que cadena de texto es mas grande entre las 2");
    var first = prompt("ingresa una cadena de texto");
    var second = prompt("ingresa otra cadena de texto");
    var sizeFirst = first.length;
    var sizeSecond = second.length;
    if(sizeFirst>sizeSecond){
        return alert("la primera cadena es mayor que la seguna cadena");
    }else if(sizeFirst<sizeSecond){
        return alert("la segunda cadena es mayor que la primera cadena");
    }else{
        return alert("ambas cadenas tiene la misma cantidad de caracteres")
    }

}


/*ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"
1.- solicitar 1 cadena de texto
2.- contar total de caracteres
3.- impares toUpperCase
4.- parar toLowerCase
5.- regresar salida

---------*/

function evenToUpperCase(){
    alert("Funcion que convierte a mayusculas las letras en posision Impar");
    var input = prompt("ingresa una cadena de texto");
    var sizeInput = input.length;
    var output="";
    for(var i = 0; i<sizeInput; i++){
        if( i%2 == 0){
            output+=input.charAt(i).toLowerCase();
        }else{
            output+=input.charAt(i).toUpperCase();
        }
    }
    return alert(output);
}


/*ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"
1.- solicitar 1 cadena de texto
2.- contar total de caracteres
3.- recorrer la lista de attras hacia adelante
4.- regresar salida

--------*/

function invertWord(){
    alert("Funcion que invierte la cadena de texto ingresada");
    var input = prompt("ingresa una cadena de texto");
    var sizeInput = input.length;
    var output="";

    for(sizeInput; sizeInput>0; sizeInput--){
        output+=input.charAt(sizeInput-1);
    }

    return alert(output);

}
