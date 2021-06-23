
/*ejercicio 1:
pedir 2 números al usuario y mostrar en consola el resultado de aplicar 
todas las operaciones aritméticas entre esos dos números*/

function operations(){
    console.log("Funcion operaciones aritmeticas")
    var numberOne;
    var numberTwo;
    do{
        numberOne = prompt("ingresa un numero");
    }while( isNaN(numberOne)==true );
    
    do{
        numberTwo = prompt("ingresa otro numero");
    }while( isNaN(numberTwo)==true );   
    var suma = parseInt(numberOne) + parseInt(numberTwo);
    var resta = numberOne - numberTwo;
    var multiplicacion = numberOne * numberTwo;
    var division = numberOne / numberTwo;
    var modulo = numberOne % numberTwo;
    console.log( "la suma de "+numberOne+" mas " + numberTwo+" es = "+ suma );
    console.log( "la resta de "+numberOne+" menos " + numberTwo+" es = "+resta);
    console.log( "la multiplicacion de "+numberOne+" por " + numberTwo+" es = "+multiplicacion);
    console.log( "la division de "+numberOne+" entre " + numberTwo+" es = "+division);
    console.log( "el residuo de "+numberOne+" entre " + numberTwo+" es = "+modulo );
   
}

/*
    ejercicio 2:
    pedir al usuario dos números y escribir en consola si el primer 
    número es mayor que el segundo
*/


function greater(){
    console.log("Funcion diferencia entre 2 numeros")
    var numberOne;
    var numberTwo;
    do{
        numberOne = prompt("ingresa un numero");
    }while( isNaN(numberOne)==true );
    
    do{
        numberTwo = prompt("ingresa otro numero");
    }while( isNaN(numberTwo)==true );   
    if(numberOne > numberTwo){
        console.log("el numero "+numberOne+" es mayor que "+numberTwo)
    }else if(numberOne < numberTwo){
        console.log("el numero "+numberTwo+" es mayor que "+numberOne)
    }else{
        console.log("los numeros son iguales" )
    }
   
}

/*
    ejercicio 3:
    pedir al usuario dos letras, y determinar si la primera apare antes o después en el alfabeto
    */

    function isLetter(string) {
        if(string.lenght !== 1){
            return false;
        }
        var letters = /[a-z]/i;
        var result = string.match(letters);
        if(result===null){
            return false;
        }else{
            return true;
        }
        
    }

    function firstLetter(){
        console.log("Funcion que dice cual letra esta primero en el alfabeto")
        var letterOne;
        var letterTwo;
        
        do{
            letterOne = prompt("ingresa una letra");
            console.log(isLetter(letterOne))
        }while( isLetter(letterOne)==true );
        
        do{
            letterTwo = prompt("ingresa otro numero");
        }while(  isLetter(letterTwo)==true ); 

        if(letterOne > letterTwo){
            console.log("la letra "+letterTwo+" esta primero que la letra "+letterOne+" en el alfabeto")
        }else if(letterOne < letterTwo){
            console.log("la letra "+letterOne+" esta primero que la letra "+letterTwo+" en el alfabeto")
        }else{
            console.log("son la misma letra" )
        }
       
    }