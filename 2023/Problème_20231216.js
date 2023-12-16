const fs = require('fs');
const filename = "input/input_20231216.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

const HEIGHT = input.length
const WIDTH = input[0].length

const mirrosPipeDirection = {'up': ['up'], 'left': ['up','down'], 'down': ['down'], 'right': ['up','down']}
const mirrosMinusDirection = {'up': ['left','right'], 'left': ['left'], 'down': ['left','right'], 'right': ['right']}
const mirrorSlashDirection = {'up': 'right', 'left': 'down', 'down': 'left', 'right': 'up'}
const mirrosAntiSlashDirection = {'up': 'left', 'left': 'up', 'down': 'right', 'right': 'down'}
const indexChangeObj = {'up': [-1,0], 'left': [0,-1], 'down': [1,0], 'right': [0,1]}

const computeRay = (i,j,direction,alreadyPassObj,energizeObj) => {
    const energizeKey = `${i},${j}`
    const key = `${energizeKey},${direction}`
    if (alreadyPassObj[key] === undefined) {
        alreadyPassObj[key] = 1
        if (energizeObj[energizeKey] === undefined) {
            energizeObj[energizeKey] = 1
        }
        const newDirections = []
        if (input[i][j] === '.') {
            newDirections.push(direction)
        } else if (input[i][j] === '|') {
            newDirections.push(...mirrosPipeDirection[direction])
        } else if (input[i][j] === '-') {
            newDirections.push(...mirrosMinusDirection[direction])
        } else if (input[i][j] === '/') {
            newDirections.push(mirrorSlashDirection[direction])
        } else if (input[i][j] === '\\') {
            newDirections.push(mirrosAntiSlashDirection[direction])
        }
        for (const currentDirection of newDirections) {
            const newI = i + indexChangeObj[currentDirection][0]
            const newJ = j + indexChangeObj[currentDirection][1]
            if (newI >= 0 && newI < HEIGHT && newJ >= 0 && newJ < WIDTH) {
                computeRay(newI,newJ,currentDirection,alreadyPassObj,energizeObj)
            }
        }
    }
}

// Problème 1

const energizeObj = {}

computeRay(0,0,'right',{},energizeObj)

console.log(`Solution Problème 1 : ${Object.keys(energizeObj).length}`)

// Problème 2 

let max = 0

for (let i = 0; i < HEIGHT; ++i) {
    for (let j = 0; j < WIDTH; ++j) {
        const newDirections = []
        if (i === 0) {
            newDirections.push('down')
        }
        if (i === HEIGHT - 1) {
            newDirections.push('up')
        }
        if (j === 0) {
            newDirections.push('right')
        }
        if (j === WIDTH - 1) {
            newDirections.push('left')
        }
        for (const currentDirection of newDirections) {
            const currentEnergizeObj = {}
            computeRay(i,j,currentDirection,{},currentEnergizeObj)
            const energize = Object.keys(currentEnergizeObj).length
            if (energize > max) {
                max = energize
            }
        }
    }
}

console.log(`Solution Problème 2 : ${max}`)
