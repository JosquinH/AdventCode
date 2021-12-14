const {template, pairInsertions} = require('./input/input_20211214')

// Reformattage

const pairInsertionsObj = {}

for (const pair of pairInsertions) {
    const [key,value] = pair.split('->').map(x => x.trim())
    pairInsertionsObj[key] = value
}

// 1

let ancientTemplate = template.split('')
let step = 0

let template1 = []
const numberOfStep = 40

while (step < numberOfStep) {
    console.log(`step:${step}`)
    console.log(ancientTemplate.length)
    const newTemplate = [ancientTemplate[0]]
    for (let i = 0; i < ancientTemplate.length - 1; ++i) {
        newTemplate.push(pairInsertionsObj[`${ancientTemplate[i]}${ancientTemplate[i+1]}`])
        newTemplate.push(ancientTemplate[i+1])
    }
    ancientTemplate = newTemplate
    if (step === 10) {
        template1 = ancientTemplate
    }
    ++step
}

const objOccur1 = {}

for (let i = 0; i < template1.length; ++ i) {
    const c = template1[i]
    if (objOccur1[c]) {
        objOccur1[c] += 1
    } else {
        objOccur1[c] = 1
    }
}

const occurences = Object.values(objOccur)

occurences.sort((a,b) => a - b)

console.log(`1st question's answer : ${occurences[occurences.length - 1] - occurences[0]}`)

// 2

