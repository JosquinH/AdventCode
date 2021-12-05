const input = require('./input/input_20211205')

// Reformattage

const windsTab = []

let maxX = 0
let maxY = 0

for (const wind of input) {
    const wind_split = wind.split('->')
    const windObj = {
        start: wind_split[0].trim().split(',').map(x => parseInt(x.trim())),
        end: wind_split[1].trim().split(',').map(x => parseInt(x.trim()))
    }

    let curMaxX = Math.max(windObj.start[0], windObj.end[0])
    let curMaxY = Math.max(windObj.start[1], windObj.end[1])

    if (curMaxX > maxX) maxX = curMaxX
    if (curMaxY > maxY) maxY = curMaxY

    windsTab.push(windObj)
}

// 1

const oceanMap = []

for (let i = 0; i <= maxY; ++i) {
    oceanMap.push(Array.from(Array(maxX + 1).keys()).map(x => 0))
}

for (const wind of windsTab) {
    // Cas Verticale
    if (wind.start[0] === wind.end[0]) {
        const curX = wind.start[0]
        const minY = Math.min(wind.start[1],wind.end[1])
        const maxY = Math.max(wind.start[1],wind.end[1])
        for(let i = minY; i <= maxY; ++i) {
            oceanMap[i][curX] =  oceanMap[i][curX] + 1
        }
    // Cas Horizontale
    } else if (wind.start[1] === wind.end[1]){
        const curY = wind.start[1]
        const minX = Math.min(wind.start[0],wind.end[0])
        const maxX = Math.max(wind.start[0],wind.end[0])
        for(let i = minX; i <= maxX; ++i) {
            oceanMap[curY][i] =  oceanMap[curY][i] + 1
        }
    }
}

const numberOfPoint = oceanMap.reduce((acc,x) => acc + x.filter(y => y > 1).length, 0)

console.log(`1st question's answer : ${numberOfPoint}`)

// 2

// Reinitialisation oceanMap

for (let i = 0; i < oceanMap.length; ++i) {
    for (let j = 0; j < oceanMap[i].length; ++j) {
        oceanMap[i][j] = 0
    }
}

for (const wind of windsTab) {
    // Cas Verticale
    if (wind.start[0] === wind.end[0]) {
        const curX = wind.start[0]
        const minY = Math.min(wind.start[1],wind.end[1])
        const maxY = Math.max(wind.start[1],wind.end[1])
        for(let i = minY; i <= maxY; ++i) {
            oceanMap[i][curX] =  oceanMap[i][curX] + 1
        }
    // Cas Horizontale
    } else if (wind.start[1] === wind.end[1]){
        const curY = wind.start[1]
        const minX = Math.min(wind.start[0],wind.end[0])
        const maxX = Math.max(wind.start[0],wind.end[0])
        for(let i = minX; i <= maxX; ++i) {
            oceanMap[curY][i] =  oceanMap[curY][i] + 1
        }
    // Cas Diagonale 45 degrés
    } else if (Math.abs(wind.start[0] - wind.end[0]) === Math.abs(wind.start[1] - wind.end[1])) {
        const range = Math.abs(wind.start[0] - wind.end[0])
        let signX = wind.start[0] <= wind.end[0] ? 1 : -1
        let signY = wind.start[1] <= wind.end[1] ? 1 : -1
        for (let i = 0; i<= range; ++ i) {
            const curX = wind.start[0] + (signX * i)
            const curY = wind.start[1] + (signY * i)
            oceanMap[curY][curX] =  oceanMap[curY][curX] + 1
        }
    }
}

const numberOfPoint2 = oceanMap.reduce((acc,x) => acc + x.filter(y => y > 1).length, 0)


console.log(`2nd question's answer : ${numberOfPoint2}`)