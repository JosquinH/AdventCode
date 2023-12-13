const fs = require('fs');
const filename = "input/input_20231213.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')
input.push('')

const findIndexMirror = (table,coeff,precScore) => {
    for (let i = 1; i < table.length;++i) {
        let mirror = true
        for (let j = 1; j <= i ;++j) {
            if (i+j-1 < table.length) {
                mirror = mirror && (table[i-j] === table[i+j-1])
            } else {
                break
            }         
        }
        if (mirror) {
            if ((precScore !== null && i*coeff !== precScore) || precScore === null) {
                return i*coeff
            }
        }
    }
    return 0
}

const computeMirrorCoord = (horizontalLineTable,verticalLineTable,precScore) => {
    const score = findIndexMirror(horizontalLineTable,100,precScore)
    if (score > 0) {
        return score
    } else {
        return findIndexMirror(verticalLineTable,1,precScore)
    }   
}


// Problème 1

let total = 0

let horizontalLineTable = []
let verticalLineTable = []

const scoreTable = []

for (const line of input) {
    if (line === '') {
        const score = computeMirrorCoord(horizontalLineTable,verticalLineTable.map(x => x.join('')),null)
        total += score
        scoreTable.push(score)
        horizontalLineTable = []
        verticalLineTable = []
    } else {
        horizontalLineTable.push(line)
        if (verticalLineTable.length === 0) {
            verticalLineTable = line.split('').map(x => [x])
        } else {
            for (let i = 0; i < line.length; ++i) {
                verticalLineTable[i].push(line.charAt(i))
            }
        }
    }
}

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

total = 0

horizontalLineTable = []
verticalLineTable = []

for (const line of input) {
    if (line === '') {
        const currentScore = scoreTable.shift()
        let score = 0
        for (let i = 0; i < horizontalLineTable.length; ++i) {
            for(let j = 0; j < verticalLineTable.length; ++j) {
                const precChar = horizontalLineTable[i].charAt(j)
                const char =  precChar === '.' ? '#' : '.'
                const stringBeforeChar = horizontalLineTable[i].slice(0,j)
                const stringAfterChar = horizontalLineTable[i].slice(j+1)
                horizontalLineTable[i] = stringBeforeChar + char +  stringAfterChar
                verticalLineTable[j][i] = char
                score = computeMirrorCoord(horizontalLineTable,verticalLineTable.map(x => x.join('')),currentScore)
                if (score > 0) {
                    total += score
                    break   
                }                
                horizontalLineTable[i] = stringBeforeChar + precChar +  stringAfterChar
                verticalLineTable[j][i] = precChar
            }
            if (score > 0) {
                break
            }
        }
        horizontalLineTable = []
        verticalLineTable = []
    } else {
        horizontalLineTable.push(line)
        if (verticalLineTable.length === 0) {
            verticalLineTable = line.split('').map(x => [x])
        } else {
            for (let i = 0; i < line.length; ++i) {
                verticalLineTable[i].push(line.charAt(i))
            }
        }
    }
}
console.log(`Solution Problème 2 : ${total}`)


