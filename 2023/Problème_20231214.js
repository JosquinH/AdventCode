const fs = require('fs');
const filename = "input/input_20231214.txt"
let input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

const inputSave = input.map(x => [...x])

const WIDTH = input[0].length
const HEIGHT = input.length

// Bouge le rocher aux coordonnées [i,j] dans la direction "direction" (n,w,s,e)

const moveRock = (i,j,direction) => {
    const [ancient_i,ancient_j] = [i,j]
    if (i > 0 && direction === 'n') {
        while (i > 0 && input[i - 1][j] === '.') {
            --i
        }
    } else if (j > 0 && direction === 'w') {
        while (j > 0 && input[i][j-1] === '.') {
            --j
        }
    } else if (i < HEIGHT - 1 && direction === 's') {
        while (i < HEIGHT - 1 && input[i+ 1][j] === '.') {
            ++i
        }
    } else if (j < WIDTH - 1 && direction === 'e') {
        while (j < WIDTH - 1 && input[i][j+1] === '.') {
            ++j
        }
    }
    input[ancient_i][ancient_j] = '.'
    input[i][j] = 'O'
}

// Bouge l'ensemble des rochers dans la direction "direction"

const moveRocks = (direction) => {
    if (direction === 'n' || direction === 'w') {
        for (let i = 0; i < HEIGHT; ++i) {
            for (let j = 0; j < WIDTH; ++j) {
                if (input[i][j] === 'O') {
                    moveRock(i,j,direction)
                }
            }
        }
    } else {
        for (let i = HEIGHT - 1; i >= 0; --i) {
            for (let j = WIDTH - 1; j >= 0; --j) {
                if (input[i][j] === 'O') {
                    moveRock(i,j,direction)
                }
            }
        }
    }
}

// Problème 1

moveRocks('n')

const total = input.reduce((acc,line,index) => acc  + line.filter(x => x === 'O').length * (HEIGHT - index),0)

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

input = inputSave
const nbCycle = 1000000000
const cycleObj = {}

let inputKey = input.map(x => x.join('')).join('')
cycleObj[inputKey] = 0
let finalPosition = -1
let k = 0

while (finalPosition === -1 && k < nbCycle){
    moveRocks('n')
    moveRocks('w')
    moveRocks('s')
    moveRocks('e')
    k += 1
    inputKey = input.map(x => x.join('')).join('')
    if (cycleObj[inputKey] === undefined) {
        cycleObj[inputKey] = k
    } else {
        finalPosition = cycleObj[inputKey] + ((nbCycle - k) % (k - cycleObj[inputKey]))
    }
}

const finalInput = Object.keys(cycleObj).find(key => cycleObj[key] === finalPosition)

let total1 = 0

for (let i = 0; i < finalInput.length; i+=WIDTH) {
    total1 += finalInput.slice(i,i+WIDTH).split('').filter(x => x === 'O').length * (HEIGHT - (i/WIDTH))
}

console.log(`Solution Problème 2 : ${total1}`)