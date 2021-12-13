const input = require('./input/input_20211212')

// Reformatage


const graphe = {}

for (const curInput of input) {
    const [node1, node2] = curInput.split('-')

    if (graphe[node1] === undefined) {
        let typeOfNode = 'small'
        if (node1 === 'start') {
            typeOfNode = 'start'
        } else if (node1 === 'end') {
            typeOfNode = 'end'
        } else if (/[A-Z]+/.test(node1)) {
            typeOfNode = 'big'
        }
        graphe[node1] = { type: typeOfNode, adjacentNode: [node2] }
    } else {
        graphe[node1].adjacentNode.push(node2)
    }

    if (graphe[node2] === undefined) {
        let typeOfNode = 'small'
        if (node2 === 'start') {
            typeOfNode = 'start'
        } else if (node2 === 'end') {
            typeOfNode = 'end'
        } else if (/[A-Z]+/.test(node2)) {
            typeOfNode = 'big'
        }
        graphe[node2] = { type: typeOfNode, adjacentNode: [node1] }
    } else {
        graphe[node2].adjacentNode.push(node1)
    }
}

// 1

const listOfAllPath = []
const listOfPathToExplore = [['start']]

while (listOfPathToExplore.length !== 0) {
    const curPath = listOfPathToExplore.shift()
    const curNode = curPath[curPath.length - 1]
    for(const node2 of graphe[curNode].adjacentNode) {
        const type = graphe[node2].type
        if (type === 'end') {
            listOfAllPath.push([...curPath, 'end'])
        } else if (type === 'big') {
            listOfPathToExplore.push([...curPath, node2])
        } else if (type === 'small' && curPath.findIndex(x => x === node2) === -1) {
            listOfPathToExplore.push([...curPath, node2])
        }
    }
}

console.log(`1st question's answer : ${listOfAllPath.length}`)

// 2

// Le temps d'éxécution peut être de plusieurs dizaines de secondes

const listOfAllPath2 = []
const listOfPathToExplore2 = [{list: ['start'], haveVisitSmallCave: false}]

while (listOfPathToExplore2.length !== 0) {
    const curPath = listOfPathToExplore2.shift()
    const curNode = curPath.list[curPath.list.length - 1]
    for(const node2 of graphe[curNode].adjacentNode) {
        const type = graphe[node2].type
        if (type === 'end') {
            listOfAllPath2.push([...curPath.list, 'end'])
        } else if (type === 'big') {
            listOfPathToExplore2.push({list: [...curPath.list, node2], haveVisitSmallCave: curPath.haveVisitSmallCave})
        } else  if (type === 'small'){
            let numberOfIt = curPath.list.filter(x => x === node2).length
            if (numberOfIt === 0) {
                listOfPathToExplore2.push({list: [...curPath.list, node2], haveVisitSmallCave: curPath.haveVisitSmallCave})
            } else if (numberOfIt === 1 && !curPath.haveVisitSmallCave) {
                listOfPathToExplore2.push({list: [...curPath.list, node2], haveVisitSmallCave: true})
            }
        }
    }
}

console.log(`2nd question's answer : ${listOfAllPath2.length}`)
