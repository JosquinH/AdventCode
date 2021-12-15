const input = require('./input/input_test')

// Reformattage

const newInput = []

for (const curInput of input) {
    newInput.push(curInput.split('').map(x => parseInt(x)))
}

// construction du graphe

const INPUT_HEIGHT = newInput.length
const INPUT_WIDTH = newInput[0].length
const graphe = {}
for (let i = 0; i < INPUT_HEIGHT; ++i) {
    for (let j = 0; j < INPUT_WIDTH; ++j) {
        const adjacenceList = []
        if (i > 0) {
            adjacenceList.push([`${i-1};${j}`, newInput[i-1][j]])
        }
        if (i< INPUT_HEIGHT - 1) {
            adjacenceList.push([`${i+1};${j}`, newInput[i+1][j]])
        }
        if (j > 0) {
            adjacenceList.push([`${i};${j-1}`, newInput[i][j-1]])
        }
        if (j< INPUT_WIDTH - 1) {
            adjacenceList.push([`${i};${j+1}`, newInput[i][j+1]])
        }
        graphe[`${i};${j}`] = adjacenceList
    }
}

console.log(graphe)
