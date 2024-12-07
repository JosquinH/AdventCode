const fs = require('fs');
const filename = "input/input_20241207.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const SOLUTIONS = []
const OPERATIONS = []

for (const line of input) {
    const [res,ops] = line.split(':')
    SOLUTIONS.push(parseInt(res))
    OPERATIONS.push(ops.split(' ').filter(x => x !== '').map(x => parseInt(x)))
}

const computeEquation = (solution, operations, useConcat) => {

    const OP_TO_SEARCH = [
        [operations[0] + operations[1], ...operations.slice(2)],
        [operations[0] * operations[1], ...operations.slice(2)],
    ]

    if (useConcat) {
        OP_TO_SEARCH.push([parseInt(`${operations[0]}${operations[1]}`), ...operations.slice(2)])
    }

    let trouve = false

    while (!trouve && OP_TO_SEARCH.length !== 0) {
 
        const curOp = OP_TO_SEARCH.shift()

        trouve = curOp.length === 1 && curOp[0] === solution

        if (curOp.length > 1) {

            const x1 = curOp.shift()
            const x2 = curOp.shift()

            if (x1 + x2 <= solution) {
                OP_TO_SEARCH.unshift([x1 + x2,...curOp])
            }

            if (x1 * x2 <= solution) {
                OP_TO_SEARCH.unshift([x1 * x2,...curOp])
            }

            if (useConcat) {
                const x3 = parseInt(`${x1}${x2}`)
                if (x3 <= solution) {
                    OP_TO_SEARCH.unshift([x3,...curOp])
                }
            }

        }
    }

    return trouve
}

// Problème 1

let res1 = 0

for (let i = 0; i < SOLUTIONS.length; ++i) {
    res1 += computeEquation(SOLUTIONS[i],OPERATIONS[i],false) ? SOLUTIONS[i] : 0
}

console.log(`Solution Problème 1 : ${res1}`)

// Problème 2

let res2 = 0

for (let i = 0; i < SOLUTIONS.length; ++i) {
    res2 += computeEquation(SOLUTIONS[i],OPERATIONS[i],true) ? SOLUTIONS[i] : 0
}

console.log(`Solution Problème 2 : ${res2}`)