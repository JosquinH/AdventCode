const fs = require('fs');
const filename = "input/input_20241202.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(' ').map(y => parseInt(y)))

const lineSafe = (curLine) => {
    let safe = true;
    let signe = 0;
    let i = 0
    while (i < curLine.length - 1 && safe ) {
        const distance = curLine[i+1] - curLine[i]
        const currentSigne = Math.sign(distance)
        if (signe === 0) {
            signe = currentSigne
        }
        safe = Math.abs(distance) >= 1 && Math.abs(distance) <= 3 && signe === currentSigne && safe
        ++i
    }
    return safe
}

// Problème 1

let numberOfSafe = 0;

for (const line of input) {
    if (lineSafe(line)) {
        ++numberOfSafe
    }
}

console.log(`Solution Problème 1 : ${numberOfSafe}`)

// Problème 2

numberOfSafe = 0

for (const line of input) {
    curSafe = lineSafe(line)
    let i = 0
    while (!lineSafe([...line.slice(0,i),...line.slice(i+1)]) && i <= line.length) {
        ++i
    }
    if (i <= line.length) {
        ++numberOfSafe
    }
}

console.log(`Solution Problème 2 : ${numberOfSafe}`)

