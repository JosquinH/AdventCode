const fs = require('fs');
const filename = "input/input_20231215.txt"
const input = fs.readFileSync(filename, 'utf8').split(',')

const computeHash = (s) => s.split('').reduce((acc,c) => (acc + c.charCodeAt(0) ) * 17 % 256,0)

// Problème 1

console.log(`Solution Problème 1 : ${input.reduce((acc,sequence) => acc + computeHash(sequence),0)}`)

// Problème 2

const Box = []

for (let i = 0; i < 256; ++i) {
    Box.push([])
}

for (const sequence of input) {
    const symbol = sequence.split('').findIndex(x => x === '=') !== -1 ? '=' : '-'
    let [label,focal] = sequence.split(symbol)
    boxIdx = computeHash(label)
    focal = parseInt(focal)    
    if (symbol === '=') {
        const idx = Box[boxIdx].findIndex(x => x[0] === label)
        if (idx === -1) {
            Box[boxIdx].push([label,focal])
        } else {
            Box[boxIdx][idx][1] = focal
        }
    } else {
        Box[boxIdx] = Box[boxIdx].filter(x => x[0] !== label)
    }
}

const total = Box.reduce((acc,box,boxIdx) => acc += box.reduce((acc1,slot,slotIdx) => acc1 + ((boxIdx + 1) * (slotIdx+1) * slot[1]),0),0)

console.log(`Solution Problème 2 : ${total}`)