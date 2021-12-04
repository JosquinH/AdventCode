const { bingoGrids,numbersTab,ROW_LENGTH, COLUMN_LENGTH} = require('./input/input_20211204')

// Reformattage

/**
 * On stocke les grilles dans des tableaux à deux dimension de taille ROW_LENGTH * COLUMN_LENGTH
 * À chaque index du tableau on stock un objet avec deux propriété : 
 *  -> number : le numéro associé
 *  -> checked : indique si le numéro est déjà tombé
 */

const newBingoGrids = []

/**
 * Pour chaque numéro, indique sa position dans les grilles sous la forme d'un triplé [i,j,k]
 *  -> i : le numéro de la grille
 *  -> j : le numéro de la ligne
 *  -> k : le numéro de la colonne 
 */


const numberGridIdxObj = {}

// Remplissage de newBingoGrids et numberGridIdxObj

for (let gridIdx = 0;  gridIdx < bingoGrids.length; ++gridIdx ) {
    const currentGrid = bingoGrids[gridIdx]
    const currentNewGrid = []
    let currentNumberIdx = 0
    for (let i = 0; i < currentGrid.length; i+=3) {
        const curNumber = `${currentGrid.charAt(i)}${currentGrid.charAt(i+1)}`.trim()
        const currentRow = Math.floor(currentNumberIdx / ROW_LENGTH)
        if (Array.isArray(currentNewGrid[currentRow])) {
            currentNewGrid[currentRow].push({number: curNumber, checked: false})
        } else {
            currentNewGrid[currentRow] = [{number: curNumber, checked: false}]
        }

        if (Array.isArray(numberGridIdxObj[curNumber])) {
            numberGridIdxObj[curNumber].push([gridIdx,currentRow,currentNumberIdx % ROW_LENGTH])
        } else {
            numberGridIdxObj[curNumber] = [[gridIdx,currentRow,currentNumberIdx % ROW_LENGTH]]
        }
        
        currentNumberIdx += 1
    }
    newBingoGrids.push(currentNewGrid)
}

// 1

const minDrawNumberToCheck = Math.min(ROW_LENGTH,COLUMN_LENGTH)

let i = 0
let completeGridIdx = []
let lastCallNumber

while (completeGridIdx.length === 0 && i < numbersTab.length) {
    const curNumber = numbersTab[i].trim()
    lastCallNumber = curNumber 
    const allGridToCheckIdx = numberGridIdxObj[curNumber]
    if (Array.isArray(allGridToCheckIdx)) {
        for (const gridtoCheckIdx of allGridToCheckIdx) {
            const curGrid = newBingoGrids[gridtoCheckIdx[0]]
            curGrid[gridtoCheckIdx[1]][gridtoCheckIdx[2]].checked = true
            // test ligne
            const isCompleteLine = curGrid[gridtoCheckIdx[1]].every(x => x.checked)
            if (isCompleteLine) {
                completeGridIdx.push(gridtoCheckIdx[0])
            } else {
                // test colonne
                let isCompleteColumn = true
                for (let j = 0; j < COLUMN_LENGTH; ++j) {
                    isCompleteColumn = isCompleteColumn &&  curGrid[j][gridtoCheckIdx[2]].checked
                }
                if (isCompleteColumn) {
                    completeGridIdx.push(gridtoCheckIdx[0])  
                }
            }
        }
    }
    ++i
}

const sumUnchecked = newBingoGrids[completeGridIdx[0]].reduce((acc1, row) => acc1 + row.filter(x => !x.checked).map(x => parseInt(x.number)).reduce((acc2,x) => acc2 + x, 0), 0)

console.log(`1st question's answer : ${sumUnchecked * lastCallNumber}`)

// 2

// On remet tous à unchecked et on prépare une liste avec tous les indexes de grille

let allGridsIdx = []

for (let i = 0; i < newBingoGrids.length; ++i) {
    allGridsIdx.push(i)
    const curGrid = newBingoGrids[i]
    for (let j = 0; j < COLUMN_LENGTH; ++j) {
        for (let k = 0; k < ROW_LENGTH; ++k) {
            curGrid[j][k].checked = false 
        }
    }
}

i = 0
let lastIndex 

while (allGridsIdx.length > 0 && i < numbersTab.length) {
    const curNumber = numbersTab[i].trim()
    lastCallNumber = curNumber
    const allGridToCheckIdx = numberGridIdxObj[curNumber]
    if (Array.isArray(allGridToCheckIdx)) {
        // On Stock les grilles qui seront complétés ce tour
        let curCompleteGridIdx = []
        for (const gridtoCheckIdx of allGridToCheckIdx) {
            const gridIdx = gridtoCheckIdx[0]
            // On ne récupère que les grilles qui ne sont pas terminées
            if (allGridsIdx.findIndex(x => x === gridIdx) !== -1) {
                const curGrid = newBingoGrids[gridIdx]
                curGrid[gridtoCheckIdx[1]][gridtoCheckIdx[2]].checked = true
                // test ligne
                const isCompleteLine = curGrid[gridtoCheckIdx[1]].every(x => x.checked)
                if (isCompleteLine) {
                    curCompleteGridIdx.push(gridIdx)
                } else {
                    // test colonne
                    let isCompleteColumn = true
                    for (let j = 0; j < COLUMN_LENGTH; ++j) {
                        isCompleteColumn = isCompleteColumn &&  curGrid[j][gridtoCheckIdx[2]].checked
                    }
                    if (isCompleteColumn) {
                        curCompleteGridIdx.push(gridIdx)  
                    }
                }
            }
        }
        // On supprime de allGridsIdx les indexes des grilles complétés ce tour
        allGridsIdx = allGridsIdx.filter(x => curCompleteGridIdx.findIndex(y => x === y) === -1)
        // On récupère la dernière grille à gagner et on continue la boucle jusqu'à ce qu'elle gagne
        if (allGridsIdx.length === 1) {
            lastIndex = allGridsIdx[0]
        } 
    }
    ++i
}

const sumUnchecked2 = newBingoGrids[lastIndex].reduce((acc1, row) => acc1 + row.filter(x => !x.checked).map(x => parseInt(x.number)).reduce((acc2,x) => acc2 + x, 0), 0)

console.log(`2nd question's answer : ${sumUnchecked2 * lastCallNumber}`)

