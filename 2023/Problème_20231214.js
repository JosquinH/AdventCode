const fs = require('fs');
const filename = "input/input_20231214.txt"
let input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

let inputSave = input.map(x => [...x])

const computeNewCoordNorth = (i,j) => {
    if (i=== 0) {
        return [i,j]
    } else {
        let k = i
        while (k > 0 && input[k - 1][j] === '.') {
            --k
        }
        return [k,j]
    }
}

const computeNewCoordWest = (i,j) => {
    if (j=== 0) {
        return [i,j]
    } else {
        let k = j
        while (k > 0 && input[i][k-1] === '.') {
            --k
        }
        return [i,k]
    }
}

const computeNewCoordEast = (i,j) => {
    if (j=== input[i].length - 1) {
        return [i,j]
    } else {
        let k = j
        while (k < input[i].length - 1 && input[i][k+1] === '.') {
            ++k
        }
        return [i,k]
    }
}

const computeNewCoordSouth = (i,j) => {
    if (i=== input.length - 1) {
        return [i,j]
    } else {
        let k = i
        while (k  < input.length - 1 && input[k + 1][j] === '.') {
            ++k
        }
        return [k,j]
    }
}

const moveRockNorthOrWest = (computeNewCoord) => {
    for (let i = 0; i < input.length; ++i) {
        for (let j = 0; j < input[i].length; ++j) {
            if (input[i][j] === 'O') {
                const newCoord = computeNewCoord(i,j)
                input[i][j] = '.'
                input[newCoord[0]][newCoord[1]] = 'O'
            }
        }
    }
}

const moveRockSouthOrEast = (computeNewCoord) => {
    for (let i = input.length - 1; i >= 0; --i) {
        for (let j = input[i].length - 1; j >= 0; --j) {
            if (input[i][j] === 'O') {
                const newCoord = computeNewCoord(i,j)
                input[i][j] = '.'
                input[newCoord[0]][newCoord[1]] = 'O'
            }
        }
    }
}

// Problème 1

moveRockNorthOrWest(computeNewCoordNorth)

const total = input.reduce((acc,line,index,tab) => {
    const numberOfRock = line.filter(x => x === 'O').length
    return acc  + numberOfRock * (tab.length - index)
},0)

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

input = inputSave
const nbCycle = 1000000000

let inputKey = input.map(x => x.join('')).join('')
const cycleObj = {inputKey: 0}
let finalPosition = -1
let k = 0

while (finalPosition === -1 && k < nbCycle){
    moveRockNorthOrWest(computeNewCoordNorth)
    moveRockNorthOrWest(computeNewCoordWest)
    moveRockSouthOrEast(computeNewCoordSouth)
    moveRockSouthOrEast(computeNewCoordEast)
    inputKey = input.map(x => x.join('')).join('')
    ++k
    if (cycleObj[inputKey] === undefined) {
        cycleObj[inputKey] = k
    } else {
        const startIndex = cycleObj[inputKey]
        repeatCycle = true
        finalPosition = startIndex + ((nbCycle - k) % (k - startIndex))
    }
}

const finalInput = Object.keys(cycleObj).find(key => cycleObj[key] === finalPosition)
const finalInputLines = []
const width = input[0].length
for (let i = 0; i < (finalInput.length/width); ++i) {
    finalInputLines.push(finalInput.slice(i*width,i*width + width))
}

const total1 = finalInputLines.reduce((acc,line,index,tab) => {
    const numberOfRock = line.split('').filter(x => x === 'O').length
    return acc  + numberOfRock * (tab.length - index)
},0)

console.log(`Solution Problème 2 : ${total1}`)