const fs = require('fs');
const filename = "input/test.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')
input.push('')

const findIndexMirror = (table,coeff) => {
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
            //console.log(i)
            //console.log(table.join('\n'))
            //console.log('\n')
            return i*coeff
        }
    }
    return 0
}
const computeMirrorCoord = (horizontalLineTable,verticalLineTable) => {
    const score = findIndexMirror(horizontalLineTable,100)
    if (score > 0) {
        return score
    } else {
        return findIndexMirror(verticalLineTable,1)
    }   
}


// Problème 1

let total = 0

let horizontalLineTable = []
let verticalLineTable = []

for (const line of input) {
    if (line === '') {
        total += computeMirrorCoord(horizontalLineTable,verticalLineTable.map(x => x.join('')))
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
        let score = 0
        for (let i = 0; i < horizontalLineTable.length; ++i) {
            for(let j = 0; j < verticalLineTable.length; ++j) {
                const precChar = horizontalLineTable[i].charAt(j)
                const char =  precChar === '.' ? '#' : '.'
                const stringBeforeChar = horizontalLineTable[i].slice(0,j)
                const stringAfterChar = horizontalLineTable[i].slice(j+1)
                horizontalLineTable[i] = stringBeforeChar + char +  stringAfterChar
                verticalLineTable[j][i] = char
                score = computeMirrorCoord(horizontalLineTable,verticalLineTable.map(x => x.join('')))
                if (score > 0) { 
                    if (score < 100 && ((2 * score <= verticalLineTable.length && j <= 2*score) || (2 * score > verticalLineTable.length && j > 2 * score - verticalLineTable.length))) {
                        console.log('v',i,j)
                        total += score
                        break
                    } else if(score > 100){
                        let newScore = score / 100
                        if (((2 * newScore <= horizontalLineTable.length && i <= 2*newScore) || (2 * newScore > horizontalLineTable.length && i >= 2 * newScore - horizontalLineTable.length))) {
                            console.log('h',i,j)
                            total += score
                            break
                        }
                    } else {
                        score = 0
                    }
                } else {
                    horizontalLineTable[i] = stringBeforeChar + precChar +  stringAfterChar
                    verticalLineTable[j][i] = char
                }
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


