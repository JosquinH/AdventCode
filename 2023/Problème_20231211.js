const fs = require('fs');
const filename = "input/input_20231211.txt"

let input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

let colonneToExpand = input[0].map(x => true)
const lineToExpand = []

const galaxyIdx = []

for (let i = 0; i < input.length; ++i) {
    let noGalaxyInLine = true
    for (let j = 0; j < input[i].length; ++j) {
        if (input[i][j] === '#') {
            galaxyIdx.push([i,j])
            noGalaxyInLine = false
            colonneToExpand[j] = false
        }
    }
    if (noGalaxyInLine) {
        lineToExpand.push(i)
    }
}

colonneToExpand = colonneToExpand.reduce((acc,x,idx) => {
    if (x) {
        acc.push(idx)
    }
    return acc
},[])

const computeNewCoord = ([i,j],coeff) => {
    const nbMultipleLine = lineToExpand.filter(x => x < i).length
    const nbMultipleColumn = colonneToExpand.filter(x => x < j).length
    return [i + nbMultipleLine * coeff - nbMultipleLine, j + nbMultipleColumn * coeff - nbMultipleColumn]
}

const computeTotalDistance = (galaxyIdx) => {
    let total = 0
    for (let i = 0; i < galaxyIdx.length; ++i ) {
        for (let j = i+1; j < galaxyIdx.length; ++j ) {
            total += Math.abs(galaxyIdx[i][0] - galaxyIdx[j][0]) + Math.abs(galaxyIdx[i][1] - galaxyIdx[j][1])
        }
    }
    return total
}

// Problème 1

console.log(`Solution Problème 1 : ${computeTotalDistance(galaxyIdx.map(x => computeNewCoord(x,2)))}`)

// Problème 2

console.log(`Solution Problème 2 : ${computeTotalDistance(galaxyIdx.map(x => computeNewCoord(x,1000000)))}`)