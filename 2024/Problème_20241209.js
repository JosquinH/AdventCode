const fs = require('fs');

const filename = "input/input_20241209.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')[0].split('').map(x => parseInt(x))

let traitementPlein = true

let pointeurMemoire = 0

let currentID = 0

// Variable Problème 1

const memoire = []

const espaceRemplie = []

const espaceVide = []

// Variabble Problème2

const fichierList = []

let espaceLibreIntervalList = []

for (const size of input) {

    if(traitementPlein) {
        fichierList.push({id: currentID,start: pointeurMemoire,size: size})
    } else {
        if (size > 0) {
            espaceLibreIntervalList.push({start:pointeurMemoire, size: size})
        }       
    }

    for (let i = 0; i < size; ++i) {

        memoire.push(traitementPlein ? currentID : '.')

        if (traitementPlein) {
            espaceRemplie.push(pointeurMemoire)
        } else {
            espaceVide.push(pointeurMemoire)
        }

        ++pointeurMemoire
    }

    traitementPlein = !traitementPlein

    if (traitementPlein) {
        ++currentID 
    }
}

// Problème 1

let pointeurEspaceVide = espaceVide.shift()
let pointeurEspacePlein = espaceRemplie.pop()

while (pointeurEspaceVide < pointeurEspacePlein) {
    memoire[pointeurEspaceVide] = memoire[pointeurEspacePlein]
    memoire[pointeurEspacePlein] = '.'
    pointeurEspaceVide = espaceVide.shift()
    pointeurEspacePlein = espaceRemplie.pop()
}

const res1 = memoire.reduce((acc,x,idx) => x === '.' ? acc : acc + x * idx,0)

console.log(`Solution Problème 1 : ${res1}`)


// Problème 2 

const fichierListFinal = []

fichierListFinal.push(fichierList.shift())

while (fichierList.length > 0) {

    const curFichier = fichierList.pop()
    let i = 0
    let espaceNonTrouve = true

    while(i < espaceLibreIntervalList.length && espaceNonTrouve) {
        if (curFichier.size <= espaceLibreIntervalList[i].size) {
            espaceNonTrouve = false
            curFichier.start = espaceLibreIntervalList[i].start
            const newSize = espaceLibreIntervalList[i].size - curFichier.size
            if (newSize > 0) {
                espaceLibreIntervalList[i].start = espaceLibreIntervalList[i].start + curFichier.size
                espaceLibreIntervalList[i].size = newSize
            } else {
                espaceLibreIntervalList = [...espaceLibreIntervalList.slice(0,i),...espaceLibreIntervalList.slice(i+1)]
            }

        }
        ++i
    }

    fichierListFinal.push(curFichier)
}

const res2 = fichierListFinal.reduce((acc,fichier) => {
    for (let i = 0; i < fichier.size; ++i) {
        acc += fichier.id * (fichier.start + i)
    }
    return acc
},0)

console.log(`Solution Problème 2 : ${res2}`)