const fs = require('fs');

const filename = "input/input_20241213.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')
input.push('')

// Construction Input

const gameList = []
let curGame = {}
for (const line of input) {
    if (line === '') {
        gameList.push(curGame)
        curGame = {}
    } else {
        const [partieGauche,partieDroite] = line.split(':').map(x => x.trim())
        const [X,Y] = partieDroite.split(',').map(x => parseInt(x.trim().substring(2)))
        curGame[partieGauche.charAt(0)  === 'P' ? 'P' : partieGauche.charAt(partieGauche.length - 1)] = [X,Y]
    }
}

const divEntierRelatif = (a,b) => {
    const quotient = a/b
    return a/b >= 0 ? Math.floor(quotient) : Math.ceil(quotient)
}

const algoEuclideEtendue = (a,b) => {
    
    const suite = [[a,1,0],[b,0,1]]

    let curI = 1

    while (suite[curI][0] > 0) {
        ++curI
        const quotient = divEntierRelatif(suite[curI - 2][0],suite[curI - 1][0])

        suite.push(
            [
                suite[curI - 2][0] - quotient * suite[curI - 1][0],
                suite[curI - 2][1] - quotient * suite[curI - 1][1],
                suite[curI - 2][2] - quotient * suite[curI - 1][2]
            ]
        )
    }

    return suite[curI - 1]

}

const resolveDiophanteEquation = (a,b,c) => {
    const d = algoEuclideEtendue(a,b)[0] 
    if (c % d !== 0) {
        return null
    } else {
        const a1 = a/d
        const b1 = b/d
        const c1 = c/d

        const [pgcd,x1,y1] = algoEuclideEtendue(a1,b1)

        return ([x1*c1,b1,y1*c1,a1])
    }
}

const findAllPositiveSolution = (a,b,c) => {
    const res = []
    const resEq = resolveDiophanteEquation(a,b,c)

    if (resEq != null) {
        const [u,b1,v,a1] = resEq
        const k1 = divEntierRelatif(u,-b1)
        const k2 = divEntierRelatif(v,a1)

        const minK = Math.min(k1,k2)
        const maxK = Math.max(k1,k2)

        for (let k = minK; k <= maxK; ++k ) {
            res.push([u + b1 * k, v - a1 * k]) 
        }
    }
    
    return res
}

// Problème 1

let nbMinToken = 0

for (const game of gameList) {
    const solution1 = findAllPositiveSolution(game.A[0], game.B[0], game.P[0])
    const solution2 = findAllPositiveSolution(game.A[1], game.B[1], game.P[1])
    
    const solutionCommune = solution1.filter(x => solution2.findIndex(y => x[0] === y[0] && x[1] === y[1]) !== -1)

    let curMinNbToken = 0

    while(solutionCommune.length > 0) {
        const curSol = solutionCommune.shift()
        const tokenNb = curSol[0] * 3 + curSol[1]

        if (curMinNbToken === 0 || tokenNb < curMinNbToken) {
            curMinNbToken = tokenNb
        }
    }

    nbMinToken += curMinNbToken
        
} 

console.log(`Solution Problème 1 : ${nbMinToken}`)


