const {dots, instructions} = require('./input/input_test')

// Formattage

let maxX = 0
let maxY = 0

const dots2 = []

for (const dot of dots) {
    const [i,j] = dot.split(',').map(x => parseInt(x))
    if (i > maxX) maxX = i
    if (j > maxY) maxY = j

    dots2.push([j,i])
}

const newInput = []

for (let i = 0; i <= maxY; ++ i) {
    let curInput = []
    for (let j = 0; j <= maxX; ++j) {
        curInput.push('.')
    }
    newInput.push(curInput)
}

for (const dot of dots2) {
    newInput[dot[0]][dot[1]] = '#'
}

// 1

let ancientInput = newInput

for (const instruction of instructions) {
    for (const t of ancientInput) {
        console.log(t.join(''))
    }

    console.log('\n')
    
    const axe = instruction.split('=')[0]
    const axeVal = parseInt(instruction.split('=')[1])
    
    const curNewInput = []

    if (axe === 'y') {
        const y1 = axeVal - 1
        const y2 = axeVal + 1
        for (let i = y1; i >= 0; --i) {
            const curLine = []
            const line1 = ancientInput[y1 - i]
            const line2 = ancientInput[y2 + i]
            for (let j = 0; j < line1.length; ++j) {
                if (line1[j] === '#' || line2[j] === '#') {
                    curLine.push('#')
                } else {
                    curLine.push('.')
                }
            }
            curNewInput.push(curLine)
        }
    } else if (axe === 'x') {
        const x1 = axeVal - 1
        const x2 = axeVal + 1
        for (const line of ancientInput) {
            const curLine = []
            for (let i = x1; i >= 0; --i) {
                if (line[x1 - i] === '#' || line[x2 + i] === '#') {
                    curLine.push('#')
                } else {
                    curLine.push('.')
                }
            }
            curNewInput.push(curLine)
        }
    }
    ancientInput = curNewInput
}

for (const t of ancientInput) {
    console.log(t.join(''))
}
