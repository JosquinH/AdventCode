const input = require('./input/input_20211217')

// 1

const possibleX = []

let i = 1
let curResult = 1

while (curResult < input.xmax) {
    ++i
    curResult = (i * (i + 1)) / 2
    if (curResult >= input.xmin && curResult <= input.xmax) {
        possibleX.push(i)
    }
}

let maxY = 0

for (let possibleY = Math.abs(input.ymax) + 1; possibleY < Math.abs(input.ymin); ++possibleY) {
    for (const curX of possibleX) {
        if (possibleY >= curX && possibleY > maxY) {
            maxY = possibleY
        }
    }
}

const maxHeight = (maxY * (maxY + 1)) / 2

console.log(`1st question's answer : ${maxHeight}`)

// 2
