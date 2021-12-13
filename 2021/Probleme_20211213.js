const {dots, instructions} = require('./input/input_20211213')

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

let numberOfPointAfterFirstFold = 0
let havePassFirstFold = false

for (const instruction of instructions) {
    const axe = instruction.split('=')[0]
    const axeVal = parseInt(instruction.split('=')[1])
    
    const curNewInput = []

    if (axe === 'y') {
        const y1 = axeVal - 1
        const y2 = axeVal + 1

        const max = Math.min(y1, ancientInput.length - y2 - 1)

        for (let i = 0; i <= max; ++i) {
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
            curNewInput.unshift(curLine)
        }

        for (let i = y1 - max - 1; i >= 0; --i) {
            curNewInput.unshift(ancientInput[i])
        }

    } else if (axe === 'x') {
        const x1 = axeVal - 1
        const x2 = axeVal + 1
        const max = Math.min(x1, ancientInput[0].length - x2 - 1)
        for (const line of ancientInput) {
            const curLine = []
            for (let i = 0; i <= max; ++i) {
                if (line[x1 - i] === '#' || line[x2 + i] === '#') {
                    curLine.unshift('#')
                } else {
                    curLine.unshift('.')
                }
            }
            if (max < x1) {
                for (let i = x1 - max - 1; i >= 0; --i) {
                    curLine.unshift(line[i])
                }
            }
            curNewInput.push(curLine)
        }
    }
    ancientInput = curNewInput
    if (!havePassFirstFold) {
        numberOfPointAfterFirstFold = ancientInput.reduce((acc,x) => acc + x.filter(y => y === '#').length, 0)
        havePassFirstFold = true
    }
}

console.log(`1st question's answer : ${numberOfPointAfterFirstFold}`)

// 2

console.log("2nd question's answer:")
for (const t of ancientInput) {
    const letterLength = t.length / 8
    let str = ''
    for (let i = 0; i < 8; ++ i) {
        str += t.slice(i*letterLength,(i+1)*letterLength).join('')
        str += '  '
    }
    console.log(str.trim())
}

