const fs = require('fs');
const filename = "input/input_20241203.txt"
const input = fs.readFileSync(filename, 'utf8')

const regexMul = /mul\(([0-9]){1,3},([0-9]){1,3}\)/g

const regexMul_Do_Dont = /(mul\(([0-9]){1,3},([0-9]){1,3}\))|((do|don't)\(\))/g

const computeMul = (mul) => {
    return mul
    .slice('mul('.length,mul.length -1)
    .split(',')
    .map(x => parseInt(x))
    .reduce((acc,x) => acc * x,1)
}

// Problème 1

let allMatch = input.matchAll(regexMul)

let t
let res1 = 0
while ((t = allMatch.next()).value !== undefined) {
    res1 += computeMul(t.value[0])
}

console.log(`Solution Problème 1 : ${res1}`)

// Problème 2

allMatch = input.matchAll(regexMul_Do_Dont)

let canMul = true
let res2 = 0
t = undefined

while ((t = allMatch.next()).value !== undefined) {
    const currentValue = t.value[0]
    if (currentValue === "do()") {
        canMul = true
    } else if (currentValue === "don't()") {
        canMul = false
    } else if (canMul) {
        res2 += computeMul(currentValue)
    }
}

console.log(`Solution Problème 2 : ${res2}`)




