const fs = require('fs')
//const filename = "input/test.txt"
const filename = "input/input_20231218.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => {
    const newX = x.split(' ')
    return [newX[0],parseInt(newX[1]),newX[2].slice(1,newX[2].length - 1)]
})

const maxObj = {'U': 0, 'L': 0, 'D': 0, 'R': 0 }
const directionObj = {'U': [-1,0], 'L': [0,-1], 'D': [1,0], 'R': [0,1]}

const directionsPipe = {'UL' : '7','UR' : 'F','LU' : 'L','LD' : 'F','DL' : 'J','DR' : 'L','RU' : 'J','RD' : '7'}
const symbolDirection = {'U' : '|', 'L': '-', 'D': '|', 'R': '-'}

for (line of input) {
    maxObj[line[0]] += line[1] 
}

const groundLine = '.'.repeat(maxObj['L'] + maxObj['R'] + 1) + ','
const groundTable = groundLine.repeat(maxObj['U'] + maxObj['D'] + 1).split(',').map(x => x.split(''))
groundTable.pop()


// Problème 1

let currentI = maxObj['U']
let currentJ = maxObj['L']

let minI = currentI
let maxI = currentI
let minJ = currentJ
let maxJ = currentJ

let precDirection = ''

for (const [direction,step,color] of input) {
    if (precDirection !== '') {
        groundTable[currentI][currentJ] = directionsPipe[precDirection + direction]
    }
    precDirection = direction
    const curSymbol = symbolDirection[direction]

    const coeffI = directionObj[direction][0]
    const coeffJ = directionObj[direction][1]
    
    if (coeffJ === 0) {
        for (let i = 1; i <= step; ++i) {
            groundTable[currentI + i * coeffI][currentJ] = curSymbol
        }
        currentI += step*coeffI
        if (currentI < minI) {
            minI = currentI
        } else if (currentI > maxI) {
            maxI = currentI
        }
    } else if (coeffI === 0) {
        for (let j = 1; j <= step; ++j) {
            groundTable[currentI][currentJ + j * coeffJ] = curSymbol
        }
        currentJ += step*coeffJ
        if (currentJ < minJ) {
            minJ = currentJ
        } else if (currentJ > maxJ) {
            maxJ = currentJ
        }
    }

}

groundTable[maxObj['U']][maxObj['L']] = directionsPipe[input[input.length -1][0] + input[0][0]]

let total = 0

for (let i = minI; i <= maxI; ++i) {
    for (let j = minJ; j <= maxJ; ++j) {
        if (groundTable[i][j] !== '.') {
            total += 1
        } else {
            let numberOfWall = 0
            let precSymbol = undefined
            for (let jj = j+1; jj <= maxJ; ++jj) {
                if (groundTable[i][jj] === '|') {
                    ++ numberOfWall
                } else if (groundTable[i][jj] !== '.' && groundTable[i][jj] !== '-') {
                    const symbol = groundTable[i][jj]
                    if (precSymbol === undefined) {
                        precSymbol = symbol
                    } else {
                        const key = precSymbol + symbol
                        if (key === 'FJ' || key === 'L7') {
                            numberOfWall += 1
                        } else {
                            numberOfWall += 2
                        }
                        precSymbol = undefined
                    }
                }
            }
            if (numberOfWall % 2 === 1) {
                ++total
            }
        }
    }
}

/**
 * for (const line of groundTable) {
    console.log(line.join(''))
}
 */


console.log(`Solution Problème 1 : ${total}`)