const fs = require('fs');
const filename = "input/test.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

const computeNewCoordNorth = (i,j) => {
    if (i=== 0) {
        return i
    } else {
        let k = i
        while (k > 0 && input[k - 1][j] === '.') {
            --k
        }
        return k
    }
}


for (let i = 0; i < input.length; ++i) {
    for (let j = 0; j < input[i].length; ++j) {
        if (input[i][j] === 'O') {
            const newIndex = computeNewCoordNorth(i,j)
            if (newIndex !== i) {
                input[i][j] = '.'
                input[newIndex][j] = 'O'
            }
        }
    }
}

const total = input.reduce((acc,line,index,tab) => {
    const numberOfRock = line.filter(x => x === 'O').length
    return acc  + numberOfRock * (tab.length - index)
},0)

console.log(`Solution Problème 1 : ${total}`)

// Probleme2

const cycle = ['n','w','s','e']

const numberOfCycle = 0
let start = 1