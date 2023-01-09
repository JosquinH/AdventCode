const input = require('./input/input_20221203')

const aCode = "a".charCodeAt(0)
const zCode = "z".charCodeAt(0)
const ACode = "A".charCodeAt(0)

// 1


let priorityTotal = 0

for (let obj of input) {

    let s1 = obj.substring(0,obj.length/2)
    let s2 = obj.substring(obj.length/2)
    
    let objCode = s1.split("").filter(x => s2.includes(x))[0].charCodeAt(0)

    if (objCode >= aCode && objCode <= zCode) {
        priorityTotal += 1 + objCode - aCode
    } else {
        priorityTotal += 27 + objCode - ACode
    }
}

console.log(`1st question's answer : ${priorityTotal}`)


// 2

priorityTotal = 0

let i = 0

while (i < input.length) {
    let s1 = input[i]
    let s2 = input[i + 1]
    let s3 = input[i + 2]

    let objCode = s1.split("").filter(x => s2.includes(x)).filter(x => s3.includes(x))[0].charCodeAt(0)
    
    if (objCode >= aCode && objCode <= zCode) {
        priorityTotal += 1 + objCode - aCode
    } else {
        priorityTotal += 27 + objCode - ACode
    }

    i += 3
}

console.log(`2nde question's answer : ${priorityTotal}`)