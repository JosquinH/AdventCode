const {dots, instructions} = require('./input/input_test')

// Formattage

const minX = 0
let maxX = 0

const minY = 0
let maxY = 0

const dots2 = []

for (const dot of dots) {
    const [i,j] = dot.split(',').map(x => parseInt(x))
    if (i > maxX) maxX = i
    if (j > maxY) maxY = j

    dots2.push([j,i])
}

const newInput = []

for (let i = 0; i < maxY; ++ i) {
    let curInput = []
    for (let j = 0; j < maxX; ++j) {
        curInput.push('.')
    }
    newInput.push(curInput)
}

for (const dot of dots2) {
    newInput[dot[0]][dot[1]] = '#'
}

for (const t of newInput) {
    console.log(t.join(''))
}