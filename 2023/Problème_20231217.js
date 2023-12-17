const fs = require('fs');
// const filename = "input/input_20231217.txt"
const filename = "input/test.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split('').map(y => parseInt(y)))

const HEIGHT = input.length
const WIDTH = input[0].length

const INFINI = 100000000000

const objDirectionIdx = {'up': [-1,0], 'left': [0,-1], 'down': [1,0], 'right': [0,1]}
const objOppositeDirection = {'up': 'down', 'left':'right', 'down': 'up' , 'right' : 'left'}

const minSommet = (Q,dijkstraObj) => {
    let min = INFINI
    let s = ''
    for (const sommet of Q) {
        if (dijkstraObj[sommet] < min) {
            min = dijkstraObj[sommet]
            s = sommet
        }
    }
    return s
}

const getPossibleDirection = (i,j,direction,it) => {
    let directionTable = []
    if (i > 0) {
        directionTable.push(['up',1])
    }
    if (i < HEIGHT - 1) {
        directionTable.push(['down',1])
    }
    if (j > 0) {
        directionTable.push(['left',1])
    }
    if (j < WIDTH - 1) {
        directionTable.push(['right',1])
    }
    const idx = directionTable.findIndex(x => x[0] === direction )
    if (idx !== -1) {
        if (it + 1 > 3) {
            directionTable = directionTable.filter(x => x[0] !== direction && x[0] !== objOppositeDirection[direction])
        } else {
            directionTable[idx][1] = it + 1
        }
    }
    
    return  directionTable
}

const createGraph = (getPossibleDirection) => {
    const dijkstraObj = {}
    const GRAPH = {}
    const nodeToExplore = [[0,0,'',0]]
    while (nodeToExplore.length > 0) {
        const curNode = nodeToExplore.shift()
        const curKey = curNode.join(',')
        if (GRAPH[curKey] === undefined) {
            const directions = getPossibleDirection(...curNode)
            const currentEdges = []
            for (const [newDirection,newIt] of directions) {
                const newI = curNode[0] + objDirectionIdx[newDirection][0]
                const newJ = curNode[1] + objDirectionIdx[newDirection][1]
                const key = `${newI},${newJ},${newDirection},${newIt}`
                if (GRAPH[key] === undefined && (newI !== 0 || newJ !== 0)) {
                    nodeToExplore.push([newI,newJ,newDirection,newIt])
                }
                currentEdges.push({node: key, weight: input[newI][newJ]})
                GRAPH[curKey] = currentEdges
                dijkstraObj[curKey] = INFINI
            }
        }
    }
    dijkstraObj['0,0,,0'] = 0
    return [GRAPH,dijkstraObj]
}

const computeDistance = (GRAPH,dijkstraObj) => {
    let Q = Object.keys(GRAPH)
    while (Q.length > 0) {
        const s1 = minSommet(Q,dijkstraObj)
        Q = Q.filter(x => x !== s1)
        for (const s2 of GRAPH[s1]) {
            if (dijkstraObj[s2.node] > dijkstraObj[s1] + s2.weight) {
                dijkstraObj[s2.node] = dijkstraObj[s1] + s2.weight
            }
        }
    }
    return Math.min(... Object.entries(dijkstraObj).filter(([key,value]) => key.startsWith(`${HEIGHT -1},${WIDTH -1}`)).map(x => x[1]))
}

// Problème 1

const [GRAPH, dijkstraObj] = createGraph(getPossibleDirection)
const res = computeDistance(GRAPH,dijkstraObj)

console.log(`Solution Problème 1 : ${res}`)