const fs = require('fs');

const filename = "input/input_20241210.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

const startNodeList = []
const endNodeList = []

const G = {}

// Construction Graphe

for (let i = 0; i < input.length; ++i) {
    for (let j = 0; j < input[0].length; ++j) {
        if (input[i][j] !== '.') {
            const curNodeVal = parseInt(input[i][j])
            const nodeId = `N${i};${j}`
            if (curNodeVal === 0) {
                startNodeList.push(nodeId)
            } else if (curNodeVal === 9) {
                endNodeList.push(nodeId)
            }
            const neighborList = []
            for (const [ii,jj] of [[-1,0],[1,0],[0,-1],[0,1]]) {
                if (i + ii >= 0 && i + ii < input.length && j + jj >= 0 && j + jj < input[0].length) {
                    if (input[i+ii][j + jj] !== '.' && parseInt(input[i+ii][j + jj]) - curNodeVal === 1) {
                        neighborList.push(`N${i + ii};${j + jj}`)
                    }
                }
            }
            G[nodeId] = neighborList
        }
    }
}

// Problème 1

const  noeudDeFinAtteintNb = (nodeStart) => {

    const noeudDejaParcouru = {}
    const FIL = [nodeStart]

    while (FIL.length > 0) {
        const curNode = FIL.shift()
        if (noeudDejaParcouru[curNode] === undefined) {
            noeudDejaParcouru[curNode] = true
            for (const noeudVoisin of G[curNode]) {
                if (noeudDejaParcouru[noeudVoisin] === undefined) {
                    FIL.push(noeudVoisin)
                }
            }
        }
    }

    return endNodeList.reduce((acc,x) => noeudDejaParcouru[x] !== undefined ? acc + 1 : acc,0)
}

const res1 = startNodeList.reduce((acc,x) => acc + noeudDeFinAtteintNb(x),0)

console.log(`Solution Problème 1 : ${res1}`)

// Problème 2

const chercherNbChemin = (nodeStart,nodeEnd,noeudParcourus) => {
    if (nodeStart === nodeEnd) {
        return 1
    } else if (noeudParcourus[nodeStart] !== undefined){
        return noeudParcourus[nodeStart]
    } else {
        let nbChemin = 0
        for (const noeudVoisin of G[nodeStart]) {
            if (noeudParcourus[noeudVoisin] !== undefined) {
                nbChemin += noeudParcourus[noeudVoisin]
            } else {
                nbChemin += chercherNbChemin(noeudVoisin,nodeEnd,noeudParcourus)
            }
        }
        noeudParcourus[nodeStart] = nbChemin
        return nbChemin
    }
}

let nbTrails = 0

for (const noeudDepart of startNodeList) {
    for (const noeudArrive of endNodeList) {
        nbTrails += chercherNbChemin(noeudDepart,noeudArrive,{})
    }
} 

console.log(`Solution Problème 2 : ${nbTrails}`)