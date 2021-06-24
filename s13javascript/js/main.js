let dataArray = [
    [
        "Israel",
        "Salinas Martínez"
    ],
    [
        "David",
        "Cermeño Moranchel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]

/* mentorsArray = [
    {
        name:"Israel",
        lastName:"salinas"
    }...{...}
]*/
let elements = (array) => ({name:array[0],lastname:array[1]});
let object = dataArray => {
    let arrayPerson = [];
    dataArray.forEach(value => 
        arrayPerson.push(elements(value))
    );   
    return arrayPerson;
}



console.log(object(dataArray));


