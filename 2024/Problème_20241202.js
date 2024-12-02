const fs = require('fs');
const filename = "input/input_20241202.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(' ').map(y => parseInt(y)))

const lineSafe = (curLine) => {
    const tableauInc = []
    let safe = true;
    for (let i = 0; i < curLine.length - 1; ++ i) {
        const distance = curLine[i+1] - curLine[i]
        safe = Math.abs(distance) >= 1 && Math.abs(distance) <= 3 && safe
        tableauInc.push(Math.sign(distance))
    }
    return safe && tableauInc.filter(x => x === tableauInc[0]).length === curLine.length - 1
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
    while (!curSafe && i <= line.length) {
        curSafe = lineSafe([...line.slice(0,i),...line.slice(i+1)])
        ++i
    }
    if (curSafe) {
        ++numberOfSafe
    }
}

console.log(`Solution Problème 2 : ${numberOfSafe}`)

