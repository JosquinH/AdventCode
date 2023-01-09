const input = require('./input/input_20221206')
const newInput = input.split("")

// 1

let bufferString = [newInput[0],newInput[1],newInput[2],newInput[3]]
let i = 3
let isStart = false
while (!isStart && i < newInput.length) {
    ++i
    let s = new Set(bufferString)
    if (s.size === 4) {
        isStart = true
    } else {
        bufferString.shift()
        bufferString.push(newInput[i])
    }
}

console.log(`1st question's answer : ${i}`)

// 2
bufferString = []
for (let j = 0; j < 14; ++j) {
    bufferString.push(newInput[j])
}

i = 13
isStart = false
while (!isStart && i < newInput.length) {
    ++i
    let s = new Set(bufferString)
    if (s.size === 14) {
        isStart = true
    } else {
        bufferString.shift()
        bufferString.push(newInput[i])
    }
}

console.log(`2nde question's answer : ${i}`)