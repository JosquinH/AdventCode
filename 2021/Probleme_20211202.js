const input = require('./input/input_20211202')

const newInput = input.map(x => {
    const curVal = x.split(' ')
    let pos = 0
    if (curVal[0] === 'down') {
        pos = 1
    } else if (curVal[0] === 'up') {
        pos = -1
    }

    return { direction: pos, step: parseInt(curVal[1]) }
})

// 1

let h = 0
let d = 0

for (let i = 0; i < newInput.length; ++i) {
    if (newInput[i].direction === 0) {
        h += newInput[i].step
    } else {
        d += (newInput[i].step * newInput[i].direction)
    }
}
console.log(`1st question's answer : ${h * d}`)

// 1

let h1 = 0
let d1 = 0
let a = 0
for (let i = 0; i < newInput.length; ++i) {
    if (newInput[i].direction === 0) {
        h1 += newInput[i].step
        d1 += a * newInput[i].step
    } else {
        a += (newInput[i].step * newInput[i].direction)
    }
}
console.log(`2nd question's answer : ${h1 * d1}`)