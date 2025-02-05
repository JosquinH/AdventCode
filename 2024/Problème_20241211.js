const fs = require('fs');

const filename = "input/input_20241211.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')[0].split(' ')

const CACHE = {}

const computeStoneNb = (stone,nbStep) => {
    const curId = `${stone};${nbStep}`
    if (CACHE[curId] !== undefined) {
        return CACHE[curId]
    }else if (nbStep === 0) {
        return 1
    } else {
        let nbStone = 0
        if (stone === '0') {
            nbStone = computeStoneNb('1',nbStep-1)
        } else if (stone.length % 2 === 0) {
            const stoneLeft = `${parseInt(stone.substring(0,stone.length/2))}`
            const stoneRight = `${parseInt(stone.substring(stone.length/2,stone.length))}`
            nbStone += computeStoneNb(stoneLeft,nbStep-1)
            nbStone += computeStoneNb(stoneRight,nbStep-1)
        } else {
            nbStone += computeStoneNb(`${parseInt(stone) * 2024}`,nbStep-1)
        }
        CACHE[curId] = nbStone
        return nbStone
    }
}

const computeStones = (stoneList,nbStep) => {
    let totalStone = 0
    for (const stone of stoneList) {
        totalStone += computeStoneNb(stone,nbStep)
    }
    return totalStone
}

// Problème 1

console.log(`Solution Problème 1 : ${computeStones(input,25)}`)

// Problème 2

console.log(`Solution Problème 2 : ${computeStones(input,75)}`)

