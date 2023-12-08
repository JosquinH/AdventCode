const fs = require('fs');
const filename = "input/input_20231208.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const pathRL = input.shift().split('')

input.shift()

const graph = {}

const startNode = []

for (const line of input) {
    const [node,edge] = line.split('=')
    graph[node.trim('')] = edge.slice(2,edge.length  - 1).split(',').map(x => x.trim())
    if (node.charAt(node.length - 2) === 'A') {
        startNode.push(node.trim())
    }
}

const lrIdx = {'L': 0, 'R': 1}

// Problème 1

let step = 0
let currentNode = 'AAA'
let i = 0

while (currentNode !== 'ZZZ') {
    ++ step
    currentNode = graph[currentNode][lrIdx[pathRL[i]]]
    i = (i + 1) % (pathRL.length) 
}

console.log(`Solution Problème 1 : ${step}`)


// Problème 2

let currentNodes = startNode
const stepTable = []

step = 0
i = 0

while(currentNodes.length > 0) {
    step += 1
    let newNode = []
    const leftRightIdx = lrIdx[pathRL[i]]
    while (currentNodes.length > 0) {
        const curNode = graph[currentNodes.shift()][leftRightIdx]
        if (curNode.charAt(curNode.length - 1) === 'Z') {
            stepTable.push(step)
        } else {
            newNode.push(curNode)
        }    
    }
    i = (i + 1) % (pathRL.length)
    currentNodes = newNode
}

/**
 * La solution est le PPCM de toute les valeurs de stepTable
 * PPCM(a,b) = (a*b) / PGCD(a,b)
 * */ 

const PGCD = (a,b) => {
    let a1 = Math.max(a,b)
    let b1 = Math.min(a,b)
    
    while (b1 !== 0) {
        const r = a1 % b1
        a1 = b1
        b1 = r
    }

    return a1
}

while (stepTable.length !== 1) {
    const a = stepTable.pop()
    const b = stepTable.pop()
    stepTable.push((a*b)/PGCD(a,b))
}

console.log(`Solution Problème 2 : ${stepTable[0]}`)