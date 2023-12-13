const fs = require('fs');
//input_20231213
const filename = "input/test.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')
input.push('')

const computeMirrorCoord = (horizontalLineTable,verticalLineTable) => {
    const horizontalLineObj = {}
    for (const line of horizontalLineTable) {
        //TODO
    }
    return [0,0]
}

// Problème 1

let total = 0

let horizontalLineTable = []
let verticalLineTable = []

for (const line of input) {
    if (line === '') {
        total += computeMirrorCoord(horizontalLineTable,verticalLineTable)
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


