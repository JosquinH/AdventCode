const fs = require('fs');
const filename = "input/input_20241208.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

const HEIGHT = input.length;
const WIDTH = input[0].length
const frequencyObj = {}

for (let i = 0; i < HEIGHT; ++i) {
    for (let j = 0; j < WIDTH; ++j) {
        const c = input[i][j]
        if (c !== '.') {
            if (frequencyObj[c] === undefined) {
                frequencyObj[c] = [[i,j]] 
            } else {
                frequencyObj[c] = [...frequencyObj[c], [i,j]] 
            }
        }
    }
}

const antiNodesCoords = new Set()
const antiNodesCoords2 = new Set()

for (const freqCoords of Object.values(frequencyObj)) {
    for (let i = 0; i < freqCoords.length ; ++i) {
        const [x1,y1] = freqCoords[i]
        for (let j = i + 1; j < freqCoords.length ; ++ j) {
            const [x2,y2] = freqCoords[j]
            let cx1 = x1 + (x1 - x2)
            let cx2 = x2 + (x2 - x1)
            let cy1 = y1 + (y1 - y2)
            let cy2 = y2 + (y2 - y1)

            if (cx1 >= 0 && cx1 < HEIGHT && cy1 < WIDTH && cy1 >= 0) {
                antiNodesCoords.add(`${cx1};${cy1}`)
            }

            if (cx2 >= 0 && cx2 < HEIGHT && cy2 < WIDTH && cy2 >= 0) {
                antiNodesCoords.add(`${cx2};${cy2}`)
            }

            antiNodesCoords2.add(`${x1};${y1}`)
            antiNodesCoords2.add(`${x2};${y2}`)

            while (cx1 >= 0 && cx1 < HEIGHT && cy1 < WIDTH && cy1 >= 0) {
                antiNodesCoords2.add(`${cx1};${cy1}`)
                cx1 = cx1 + (x1 - x2)
                cy1 = cy1 + (y1 - y2)
            }

            while (cx2 >= 0 && cx2 < HEIGHT && cy2 < WIDTH && cy2 >= 0) {
                antiNodesCoords2.add(`${cx2};${cy2}`)
                cx2 = cx2 + (x2 - x1)
                cy2 = cy2 + (y2 - y1)
            }

        }
    }
}

// Problème 1

console.log(`Solution Problème 1 : ${antiNodesCoords.size}`)

// Problème 2

console.log(`Solution Problème 2 : ${antiNodesCoords2.size}`)