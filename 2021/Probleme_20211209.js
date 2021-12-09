const input = require('./input/input_20211209')

// Reformattage

const tenList = []

for (let i = 0; i < input[0].length + 2; ++i) {
    tenList.push(10)
}
const newInput = [tenList]

for (const curInput of input) {
    let curNewInput = []
    curNewInput.push(10)
    curNewInput.push(...curInput.split('').map(x => parseInt(x)))
    curNewInput.push(10)
    newInput.push(curNewInput)
}

newInput.push(tenList)

const MAX_HEIGHT = newInput.length
const MAX_WIDTH = newInput[0].length
const lowerPointCoordList = []

// 1

let lowerPointForceSum = 0

for (let i = 1; i < newInput.length - 1; ++i) {
    const curInput = newInput[i]
    for (let j = 1; j < curInput.length - 1; ++j) {
        const curHeight = newInput[i][j]
        const isLower = curHeight < newInput[i - 1][j] && curHeight < newInput[i][j - 1] && curHeight < newInput[i + 1][j] && curHeight < newInput[i][j + 1]
        if (isLower) {
            lowerPointForceSum += (curHeight + 1)
            lowerPointCoordList.push([i, j])
        }
    }
}

console.log(`1st question's answer : ${lowerPointForceSum}`)

// 2



// On fait un tableau pour marquer au fur et à mesure les points que l'ont a passé.

const markPoints = []

for (let i = 0; i < MAX_HEIGHT; ++i) {
    curmarkPoint = []
    for (let j = 0; j < MAX_WIDTH; ++j) {
        curmarkPoint.push(0)
    }
    markPoints.push(curmarkPoint)
}



const bassins = []

for (let i = 0; i < lowerPointCoordList.length; ++i ) {
    const lowerPoint = lowerPointCoordList[i]
    const listOfPointsInBassins = []
    // La liste des points à explorer
    const listOfPointToLook = [lowerPoint]
    while (listOfPointToLook.length !== 0) {
        const curPoint = listOfPointToLook.shift()
        if (markPoints[curPoint[0]][curPoint[1]] === 0) {
            markPoints[curPoint[0]][curPoint[1]] = i + 1
            listOfPointsInBassins.push(curPoint)
            // On regarde le point en haut
            if (curPoint[0] > 0) {
                const point = newInput[curPoint[0] - 1][curPoint[1]]
                if (point < 9 && !markPoints[curPoint[0] - 1][curPoint[1]]) {
                    listOfPointToLook.push([curPoint[0] - 1, curPoint[1]])
                }
            }
            // On regarde le point en bas
            if (curPoint[0] < MAX_HEIGHT) {
                const point = newInput[curPoint[0] + 1][curPoint[1]]
                if (point < 9 && !markPoints[curPoint[0] + 1][curPoint[1]]) {
                    listOfPointToLook.push([curPoint[0] + 1, curPoint[1]])
                }
            }
            // On regarde le point à gauche
            if (curPoint[1] > 0) {
                const point = newInput[curPoint[0]][curPoint[1] - 1]
                if (point < 9 && !markPoints[curPoint[0]][curPoint[1] - 1]) {
                    listOfPointToLook.push([curPoint[0], curPoint[1] - 1])
                }
            }
            // On regarde le point à droite
            if (curPoint[1] < MAX_WIDTH) {
                const point = newInput[curPoint[0]][curPoint[1] + 1]
                if (point < 9 && !markPoints[curPoint[0]][curPoint[1] + 1]) {
                    listOfPointToLook.push([curPoint[0], curPoint[1] + 1])
                }
            }
        }

    }
    bassins.push(listOfPointsInBassins)
}

bassins.sort((a, b) => b.length - a.length)

const res = bassins[0].length * bassins[1].length * bassins[2].length

console.log(`2nd question's answer : ${res}`)