const fs = require('fs')
const filename = "input/input_20231221.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const HEIGHT = input.length
const WIDTH = input[0].length

let startCoordI,startCoordJ

for (let i = 0; i < HEIGHT; ++i) {
    const matchStart = input[i].match('S')
    if (matchStart !== null) {
        startCoordI = i
        startCoordJ = matchStart.index
    }
    input[i] = input[i].split('')
}
const computeDepthSearchObj = (numberOfStep,startCoordI,startCoordJ) => {
    const depthSearchObj = {}
    let step = 0
    const OPEN = [[startCoordI,startCoordJ]]
    while (step <= 64) {
        const newOPEN = []
        while (OPEN.length > 0) {
            const [curI,curJ] = OPEN.shift()
            const key = `${curI},${curJ}`
            if (depthSearchObj[key] === undefined) {
                depthSearchObj[key] = step
                if (curI > 0 && input[curI - 1][curJ] !== '#') {
                    if (depthSearchObj[`${curI - 1},${curJ}`] === undefined) {
                        newOPEN.push([curI - 1,curJ])
                    }
                }
                if (curI < HEIGHT - 1 && input[curI + 1][curJ] !== '#') {
                    if (depthSearchObj[`${curI + 1},${curJ}`] === undefined) {
                        newOPEN.push([curI + 1,curJ])
                    }
                }
                if (curJ > 0 && input[curI][curJ - 1] !== '#') {
                    if (depthSearchObj[`${curI},${curJ - 1}`] === undefined) {
                        newOPEN.push([curI,curJ - 1])
                    }
                }
                if (curJ < WIDTH - 1 && input[curI][curJ + 1] !== '#') {
                    if (depthSearchObj[`${curI},${curJ + 1}`] === undefined) {
                        newOPEN.push([curI,curJ + 1])
                    }
                }
            } 
        }
        OPEN.push(...newOPEN)
        ++step
    }
    return depthSearchObj
}

// Problème 1 

const depthSearchObj = computeDepthSearchObj(64,startCoordI,startCoordJ)

const numberOfOdd = Object.values(depthSearchObj).filter(x => x%2 === 1).length
const numberOfEven = Object.values(depthSearchObj).filter(x => x%2 === 0).length

console.log(`Solution Problème 1 : ${numberOfEven}`)

// Problème 2 

const depthSearchObj1 = computeDepthSearchObj(1000,startCoordI,startCoordJ)

console.log(`Solution Problème 1 : ${numberOfOdd}`)