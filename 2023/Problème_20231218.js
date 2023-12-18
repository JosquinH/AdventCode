const fs = require('fs')
const filename = "input/input_20231218.txt"

const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => {
    const newX = x.split(' ')
    return [newX[0],parseInt(newX[1]),newX[2].slice(2,newX[2].length - 1)]
})

const directionObj = {'U': [-1,0], 'L': [0,-1], 'D': [1,0], 'R': [0,1]}

/**
 * La surface correspond au nombre de point à l'intérieur du polygone + le nombre de point sur son bord
 * 
 * D'après le théorème de Pick on a i = A - b/2 + 1 
 * Où : 
 *   . A est la surface du polygone
 *   . b le nombre de point sur son bord
 *   . i le nombre de point à l'intérieur du polygone
 * 
 * Comme la surface cherchée est i + b, on renverra A + b/2 + 1
 * 
 * A peut être calculé avec la formule du laçage
 */

const getArea = (input) => {
    let curI = 0
    let curJ = 0
    let boundaryPoints = 0
    const points = [[curI,curJ]]
    for (const [curDirection,curStep] of input) {
        boundaryPoints += curStep
        const [coeffI, coeffJ] = directionObj[curDirection]
        const newI = curI + coeffI * curStep
        const newJ = curJ + coeffJ * curStep
        points.push([newI,newJ])
        curI = newI
        curJ = newJ
    }
    const polygoneArea = Math.abs(points.map((x,idx,tab) => x[0] * (tab[(idx - 1 + tab.length) % tab.length][1] - tab[(idx + 1) % tab.length][1])).reduce((acc,x) => acc + x,0)) / 2
    return polygoneArea + boundaryPoints/2 + 1
}

// Problème 1

console.log(`Solution Problème 1 : ${getArea(input.map(x => [x[0],x[1]]))}`)

// Problème 2

const tableDirection = ['R','D','L','U']

const newInput = input.map((x) => {
    const number = parseInt(x[2].slice(0,x[2].length - 1),16)
    const direction =  tableDirection[parseInt(x[2].slice(x[2].length - 1))]
    return [direction,number]
})

console.log(`Solution Problème 2 : ${getArea(newInput)}`)

