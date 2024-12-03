const fs = require('fs');
const filename = "input/input_20241203.txt"
const input = fs.readFileSync(filename, 'utf8')

const regex = /mul\(([0-9]){1,3},([0-9]){1,3}\)/g
const regexDo_Dont = /(do\(\))|(don't\(\))/g

const computeMul = (t) => {
    return t.value[0].slice('mul('.length,t.value[0].length - 1).split(',').map(y => parseInt(y)).reduce((acc,x) => acc * x,1)
}

// Problème 1

let matchSequence = input.matchAll(regex)

let t
let res = 0
while ((t = matchSequence.next()).value !== undefined) {
    res += computeMul(t)
}

console.log(`Solution Problème 1 : ${res}`)

// Problème 2

matchDo_DontSeq = input.matchAll(regexDo_Dont)

const intervals = []

let curInterval = []

while ((t = matchDo_DontSeq.next()).value !== undefined) {
    if (t.value[0] === "don't()" && curInterval.length === 0) {
        curInterval.push(t.value.index)
    } else if (curInterval.length === 1){
        curInterval.push(t.value.index)
        intervals.push([...curInterval])
        curInterval = []
    }
}

if (curInterval.length === 1) {
    intervals.push([curInterval[0], input.length - 1])
}

matchSequence = input.matchAll(regex)
console.log(intervals)
let res2 = 0
while ((t = matchSequence.next()).value !== undefined) {
    const curIndex = t.value.index
    if (!intervals.some(y => curIndex >= y[0] && curIndex <= y[1])) {
        res2 += computeMul(t)
    }
}

console.log(`Solution Problème 2 : ${res2}`)


