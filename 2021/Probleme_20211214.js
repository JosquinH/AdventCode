const {template, pairInsertions} = require('./input/input_test')

// Reformattage

const pairInsertionsObj = {}

for (const pair of pairInsertions) {
    const [key,value] = pair.split('->').map(x => x.trim())
    pairInsertionsObj[key] = value
}

// 1

let ancientTemplate = template.split('')
let step = 0
const numberOfStep = 10

while (step < numberOfStep) {
    const newTemplate = [ancientTemplate[0]]
    for (let i = 0; i < ancientTemplate.length - 1; ++i) {
        newTemplate.push(pairInsertionsObj[`${ancientTemplate[i]}${ancientTemplate[i+1]}`])
        newTemplate.push(ancientTemplate[i+1])
    }
    ancientTemplate = newTemplate
    ++step
}

let objOccur = {}

