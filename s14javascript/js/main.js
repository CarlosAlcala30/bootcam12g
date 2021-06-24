/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-crear un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/
var mentorsArray = [
    {
        name: "Israel Salinas Martinez",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 8
            },
            {
                signature: "ReactJS",
                score: 8
            }
        ]
    },
    {
        name: "David Cermeño Moranchel",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 7
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    },
    {
        name: "Charles Silva",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 9
            }
        ]
    },
    {
        name: "Michael Villalba Sotelo",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    }
]

let promedio = (array, materia) => {
    let suma = 0;
    let iterador = 0;
    array.forEach(element => {
        element.scores.forEach(value => {
            if (materia == value.signature) {
                iterador++;
                suma += value.score;
            }
        })
    });

    return suma / iterador;
}

let promedioMentor = (array, mentor) => {
    let suma = 0;
    let iterador = 0;
    array.forEach(element => {
        if (mentor === element.name) {
            element.scores.forEach(value => {
                iterador++;
                suma += value.score;
            })
        }
    });

    return suma / iterador;
}

/*let isra = promedioMentor(mentorsArray,"Michael Villalba Sotelo");
console.log(isra);
let html = promedio(mentorsArray,"HTML");
let css = promedio(mentorsArray,"CSS");
let js = promedio(mentorsArray,"JS");
let react = promedio(mentorsArray,"ReactJS");
console.log(html);*/

let songsData = [
    {
        name: "Kashmir",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
            likes: 20000,
            reproductions: 8000,
        }
    },
    {
        name: "Smells Like Teen Spirit",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
            likes: 25000,
            reproductions: 100000,
        }
    }, {
        name: "So What",
        band: "Metallica",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 95000,
        }
    }, {
        name: "Nothing Else Matters",
        band: "Metallica",
        releaseYear: "1992",
        statistics: {
            likes: 128000,
            reproductions: 915000,
        }
    }, {
        name: "Daze",
        band: "Poets of the Fall",
        releaseYear: "2014",
        statistics: {
            likes: 3548413,
            reproductions: 87095138,
        }
    }, {
        name: "The Sweet Scape",
        band: "Poets of the Fall",
        releaseYear: "2018",
        statistics: {
            likes: 26268856,
            reproductions: 2424568,
        }
    }
]

/*agrupar únicamente los nombres de las bandas, sin repeticiones*/

let bands = arrayBands => {
    let bandsNames = [];
    arrayBands.forEach(item => {
        if (!bandsNames.includes(item.band)) {
            bandsNames.push(item.band);
        }
    });
    return bandsNames;
}

//bands(songsData)

/*
  Agrupar las canciones de cada banda
[
  {
    band: "Poets of the Fall"
    songs:[
       "The Sweet Scape",
        "Daze"
    ]
  },
   {
    band: "Poets of the Fall"
    songs:[
       "The Sweet Scape",
        "Daze"
    ]
  },

]
*/
let songsOfBands = arrayBands => {
    let songContainer = [];
    let bandsList = bands(arrayBands);

    bandsList.forEach(bandElement => {
        let songsArray = [];
        arrayBands.forEach(item => {
            if (bandElement === item.band) {
                songsArray.push(item.name);
            }
        });
        let object = { band: bandElement, songs: songsArray }
        songContainer.push(object);
    });

    console.log(songContainer);
}

//songsOfBands(songsData);


/*
  saber cuál es la canción con más likes
  ( nombre de la canción y nombre de la banda)
  */
 

/*saber cuál es la canción con más reproducciones
( nombre de la canción y nombre de la banda)
*/



