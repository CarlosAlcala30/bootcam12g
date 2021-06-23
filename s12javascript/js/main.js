function userList(){
    let number
    let array=[];
    do{
        number = prompt("ingresa un numero");
    }while(isNaN(number));    

    for(let i = 0; i<number; i++){
        let name = prompt("ingresa un nombre");
        console.log("koder :"+(i+1)+" Nombre "+name);
        array.push(name);
    }

    do{
        number = prompt("ingresa un numero");
    }while(isNaN(number));

    let sizeArray = array.length();

    if(sizeArray<=){
        
    }

}

userList();