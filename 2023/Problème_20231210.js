const fs = require('fs');
const filename = "input/input_20231210.txt"
//input_20231210
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const HEIGHT = input.length
const WIDTH = input[0].length
// Initialisation de l'input avec un cadre de .
const pipeGrid = input.map(x => {
    const line = x.split('')
    line.unshift('.')
    line.push('.')
    return line
})

const dotLine = []

for (let i = 0; i < WIDTH + 2; ++i) {
    dotLine.push('.')
}

pipeGrid.unshift(dotLine)
pipeGrid.push(dotLine)

// Objet indiquant les directions possibles pour chaque tuyau

const pipeDirection = {'|' : ['n','s'],'-' : ['w','e'],'7' : ['s','w'],'F' : ['s','e'],'J' : ['n', 'w'],'L' : ['n','e'],'.' : [],'S' : []}

// les changements d'index en fonction de la direction

const directionIndex = {'n' : [1,0],'s' : [-1,0],'w' : [0,1],'e' : [0,-1]}

// les directions inverses

const directionInverse = {
    'n' : 's',
    's' : 'n',
    'e' : 'w',
    'w' : 'e'
}

// récupération index de départ

const [startIndexV,startIndexH] = pipeGrid.reduce((acc,x,idx) => {
    const sIndex = x.findIndex(y => y === 'S')
    if (sIndex !== -1) {
        acc.push(idx,sIndex)
    }
    return acc
},[])


// Problème 1

const distanceObj = {}

for (const direction of ['n', 's', 'e', 'w']) {
    
    let curDirection = direction
    let curIdx = [startIndexV + directionIndex[curDirection][0],startIndexH + directionIndex[curDirection][1]]
    let curPipe = pipeGrid[curIdx[0]][curIdx[1]]
    let fromIndex = pipeDirection[curPipe].findIndex(x => x === curDirection)
    let distance = 0
    const distanceObjList = []
    while (fromIndex !== -1) {
        distance += 1
        distanceObjList.push([curIdx.join('-'),distance])
        curDirection = directionInverse[pipeDirection[curPipe][(fromIndex + 1) % 2]]
        curIdx = [curIdx[0] + directionIndex[curDirection][0],curIdx[1] + directionIndex[curDirection][1]]
        curPipe = pipeGrid[curIdx[0]][curIdx[1]] 
        fromIndex = pipeDirection[curPipe].findIndex(x => x === curDirection)
    }
    
    if (curPipe === 'S') {
        for (const [key,distance] of distanceObjList) {
            if (distanceObj[key] === undefined) {
                distanceObj[key] = distance
            } else if (distance < distanceObj[key]) {
                distanceObj[key] = distance
            }
        }
    }
}

console.log(`Solution Problème 1 : ${Math.max(...Object.values(distanceObj))}`)

// Problème 2

const pipeCoordsString = Object.keys(distanceObj)

// On remplace les pipe qui ne sont pas dans la loop par des . et ont met l'ensemble des . dans une liste

const dotList = []

for (let i = 1; i <= HEIGHT; ++i) {
    for (let j = 1; j <= WIDTH; ++j) {
        const symbol = pipeGrid[i][j]
        const strIdx = `${i}-${j}`
        if (symbol !== 'S' && symbol !== '.' && pipeCoordsString.findIndex(x => x === strIdx) === -1) {
            pipeGrid[i][j] = '.'
            dotList.push([i,j])
        } else if (symbol === '.') {
            dotList.push([i,j])
        }
    }
} 

let numberOfTiles = 0

for (const [i,j] of dotList) {
    let numberOfWall = 0
    let precSymbol = undefined
    for (let jj = j - 1; jj >= 0; --jj) {
        if (pipeGrid[i][jj] === 'O') {
           break
        }
        if (pipeGrid[i][jj] === '|') {
            numberOfWall += 1
        } else if (pipeGrid[i][jj] !== 'I' && pipeGrid[i][jj] !== '-') {
            const symbol = pipeGrid[i][jj]
            if (precSymbol === undefined) {
                precSymbol = symbol
            } else {
                const str = `${symbol}${precSymbol}`
                if (str === 'FJ' || str === 'L7') {
                    numberOfWall += 1
                } else {
                    numberOfWall += 2
                }
                precSymbol = undefined
            }
        }
    }
    if (numberOfWall % 2 === 0) {
        pipeGrid[i][j] = 'O'
    } else {
        pipeGrid[i][j] = 'I'
        numberOfTiles += 1
    }
}

console.log(`Solution Problème 2 : ${numberOfTiles}`)